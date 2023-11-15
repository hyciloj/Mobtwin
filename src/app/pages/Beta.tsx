import React, { useEffect } from "react";
import Logout from "../modules/auth/components/Logout";

const Beta: React.FC = () => {
    useEffect(() => {
        const windowUrl = window.location.href;

        console.log({windowUrl})
        // Check if the URL contains 'www'
        if (windowUrl.includes("mobtwin")) {
            console.log("if => ", {windowUrl}, windowUrl.includes("mobtwin"))

            window.location.href = "https://mobtwin.com/beta/";
        }
    }, []);

    return (
        <div/>
    );
};

export default Beta;
