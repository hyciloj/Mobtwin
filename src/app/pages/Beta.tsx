import React, { useEffect } from "react";
import Logout from "../modules/auth/components/Logout";

const Beta: React.FC = () => {


    useEffect(() => {
        const windowUrl = window.location.href;

        if (windowUrl.includes("mobtwin")) {

            window.location.href = "https://app.mobtwin.com/";
        }
    }, []);

    return (
        <div/>
    );
}

export default Beta;
