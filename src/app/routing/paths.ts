// ----------------------------------------------------------------------

function path(root: string, subLink: string) {
  return `${root}${subLink}`;
}

export const ROOT_DEMO = '/demo';
export const ROOTS_AUTHENTICATION = '/auth';
export const ROOTS_DASHBOARD = '/dashboard';
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
  topTrending: path(ROOTS_DASHBOARD, 'top-trending'),
  builder: path(ROOTS_DASHBOARD, 'builder'),
  trendingKeywords: path(ROOTS_DASHBOARD, 'trending-keywords'),
  iconGenerator: path(ROOTS_DASHBOARD, 'icon-Generator'),
  smartDescription: path(ROOTS_DASHBOARD, 'smart-description'),
  developerProfile: path(ROOTS_DASHBOARD, 'developer-profile'),
  privacyPolicy: path(ROOTS_DASHBOARD, 'privacy-policy'),
  TermsAndConditions: path(ROOTS_DASHBOARD, 'terms-Conditions'),
  logout: path(ROOTS_DASHBOARD, 'logout'),
  two: path(ROOTS_DASHBOARD, 'two'),
  three: path(ROOTS_DASHBOARD, 'three'),
  user: {
    root: path(ROOTS_DASHBOARD, 'user'),
    profile: path(ROOTS_DASHBOARD, 'user/profile'),
  },
};
