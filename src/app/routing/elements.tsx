import React, { Suspense, lazy, ElementType } from 'react';
// components

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<h1>Loading...</h1>}>
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


/**
 * Dashboard Page
 */

export const Search = Loadable(lazy(() => import("../pages/search/Search")))