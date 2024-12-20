export const DASHBOARD_ROUTES = {
  SIGN_IN_SCREEN: 'Sign_In_Screen',
  SIGN_UP_SCREEN: 'Sign_Up_Screen',
  MOVIES_SCREEN: 'Movies_Screen',
  CREATE_MOVIES_SCREEN: 'Create_Movies_Screen',
  MOVIE_DETAIL_SCREEN: 'Movie_Detail_Screen'
} as const;

export type valueof<T> = T[keyof T];

export type RootDashboard = valueof<typeof DASHBOARD_ROUTES>;

export type RootRoutes = RootDashboard;

export type AllRoutes = RootRoutes;
