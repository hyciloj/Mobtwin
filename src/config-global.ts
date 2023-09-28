// ROOT PATH AFTER LOGIN SUCCESSFUL
import {PATH_DASHBOARD} from "./app/routing/paths";
import React from "react";

export const PATH_AFTER_LOGIN = PATH_DASHBOARD.search;
export const PATH_BEFORE_LOGIN = '/';

export type ChildrenProps = {
    children: React.ReactNode
}
