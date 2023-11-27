// ----------------------------------------------------------------------

function path(root: string, subLink: string) {
  return `${root}${subLink}`;
}

export const ROOT_DEMO = '/demo';
export const ROOTS_AUTHENTICATION = '/auth';
export const ROOTS_DASHBOARD = '/';
export const ROOTS_BETA = '/beta';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTHENTICATION,
  login: path(ROOTS_AUTHENTICATION, '/login'),
  register: path(ROOTS_AUTHENTICATION, '/register'),
  forgotPassword: path(ROOTS_AUTHENTICATION, '/forgot-password'),
};
export const PATH_BETA = {
  root: ROOTS_BETA,
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  home: path(ROOTS_DASHBOARD, 'home'),
  search: path(ROOTS_DASHBOARD, 'search'),
  charts: path(ROOTS_DASHBOARD, 'charts'),
  logout: path(ROOTS_DASHBOARD, 'logout'),
  two: path(ROOTS_DASHBOARD, 'two'),
  three: path(ROOTS_DASHBOARD, 'three'),
  user: {
    root: path(ROOTS_DASHBOARD, 'user'),
    four: path(ROOTS_DASHBOARD, 'user/four'),
    five: path(ROOTS_DASHBOARD, 'user/five'),
    six: path(ROOTS_DASHBOARD, 'user/six'),
  },
};
