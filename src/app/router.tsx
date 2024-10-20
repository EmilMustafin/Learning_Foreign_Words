import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import { SignInPage } from '@/pages/sign-in-page';
import { ROUTER_PATHS } from '@/shared/constants';
import { Error } from '@/widgets/error';
import { AppLayout } from './layouts/app-layout';
import { privateLoader } from './loaders/ui/private-loader';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        children: [
          {
            path: ROUTER_PATHS.CARDS,
            loader: privateLoader,
            lazy: () =>
              import('../pages/cards-page').then((m) => ({
                Component: m.CardsPage,
              })),
          },
          {
            path: ROUTER_PATHS.PROFILE,
            loader: privateLoader,
            lazy: () =>
              import('../pages/profile-page').then((m) => ({
                Component: m.ProfilePage,
              })),
          },
          {
            path: ROUTER_PATHS.LOGIN,
            element: <SignInPage />,
          },
          {
            path: ROUTER_PATHS.HOME,
            lazy: () =>
              import('../pages/home-page').then((m) => ({
                Component: m.HomePage,
              })),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    loader: () => redirect(ROUTER_PATHS.HOME),
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
