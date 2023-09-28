import React, {FC} from "react";
import {Outlet} from "react-router-dom";

const DashboardWrapper: FC = () => {
    return (
        <>
            <Outlet/>
        </>
    )
}

export {DashboardWrapper}