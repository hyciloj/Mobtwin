import React, { Suspense, lazy, ElementType } from 'react';
import {LoadingPrimary} from "../modules/components/loading/LoadingPrimary";
// components

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingPrimary />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

/**
 * Before login
 */

export const Before = Loadable(lazy(() => import('../pages/before/Before')));

/**
 * Auth Page
 */
export const Login = Loadable(lazy(() => import('../modules/auth/components/Login')));
export const Register = Loadable(lazy(() => import('../modules/auth/components/Register')));
export const ResetPassword = Loadable(lazy(() => import('../modules/auth/components/ResetPassword')));
// export const Logout = Loadable(lazy(() => import('../modules/auth/components/Logout')));


/**
 * Dashboard Page
 */

export const Home = Loadable(lazy(() => import("../pages/home/Home")))
export const Search = Loadable(lazy(() => import("../pages/search/Search")))
export const Charts = Loadable(lazy(() => import("../pages/charts/Charts")))
export const Plans = Loadable(lazy(() => import("../pages/dashboard/Plans")))

export const Beta = Loadable(lazy(() => import('../pages/Beta')));