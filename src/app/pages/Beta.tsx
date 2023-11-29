import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../setup";
import { UserModel } from "../modules/auth/models/UserModel";

const Beta: React.FC = () => {
    const token = useSelector<RootState>((state) => state.auth.accessToken);

    const persist = localStorage.getItem("persist:v.1-mobtwin-auth")
    useEffect(() => {
        const windowUrl = window.location.href;

        if (windowUrl.includes("mobtwin") && token) {
            // Send a postMessage to the target domain

            // window.postMessage({ type: "SET_TOKEN", token }, "https://app.mobtwin.com");

            // Redirect to the new URL
            window.location.href = `https://app.mobtwin.com?persist=${persist}`;
        }
    }, [token]);

    return <div />;
};

export default Beta;
