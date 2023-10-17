import React from 'react'
import {Navigate, useRoutes, Outlet} from "react-router-dom";
import {AuthGuard, GuestGuard} from "../modules/auth";
import {Before, Login, Register, ResetPassword, Search} from "./elements";
import {PATH_AFTER_LOGIN, PATH_BEFORE_LOGIN} from "../../config-global";
import {DashboardWrapper, AuthPage, Demo} from "../pages";
import {ROOTS_AUTHENTICATION, ROOTS_DASHBOARD, ROOT_DEMO, PATH_AUTH} from "./paths";
import {MasterLayout} from "../../_theme/layout/MasterLayout";

export default function Router() {

    const isAuthorized = false

    return useRoutes([
        // {
        //     path: '/auth',
        //     children: [
        //         {
        //             path: ROOTS_Authentication,
        //             element: (
        //                 <GuestGuard>
        //                     <AuthPage/>
        //                 </GuestGuard>
        //             ),
        //             children: [
        //                 {path: 'login', element: <Login/>},
        //                 {path: 'register', element: <h1>register</h1>},
        //                 {path: 'forgot-password', element: <h1>forgot-password</h1>},
        //             ]
        //         },
        //
        //     ],
        // },

        {
            path: '/',
            children: [
                {path: '', element: <Before/>},
                {path: '404', element: <h1>Page404</h1>},
                {path: 'demo', element: <Demo/>},
            ],
        },

        {
            path: ROOTS_AUTHENTICATION,
            element: (
                <GuestGuard>
                    <AuthPage/>
                </GuestGuard>
            ),
            children: [
                {element: <Navigate to={PATH_AUTH.login} replace/>, index: true},
                {path: 'login', element: <Login/>},
                {path: 'register', element: <Register/>},
                {path: 'reset-password', element: <ResetPassword/>},
            ]
        },

        {
            path: ROOTS_DASHBOARD,
            element: (
                <MasterLayout>
                    <AuthGuard>
                        <DashboardWrapper/>
                    </AuthGuard>
                </MasterLayout>
            ),
            children: [
                {element: <Navigate to={PATH_AFTER_LOGIN} replace/>, index: true},
                {path: 'search', element: <Search/>},
                {path: 'two', element: <h1>PageTwo</h1>},
                {path: 'three', element: <h1>PageThree</h1>},
            ],
        },


        {path: '*', element: <Navigate to="/404" replace/>},

    ]);
}
