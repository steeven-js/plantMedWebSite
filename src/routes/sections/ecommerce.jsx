import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'src/layouts/main';
import AccountLayout from 'src/layouts/account';

// ----------------------------------------------------------------------

const AccountPersonalPage = lazy(() => import('src/pages/plantmed/account/personal'));

// ----------------------------------------------------------------------

export const eCommerceRoutes = [
  {
    path: 'plantmed',
    element: (
      <MainLayout>
        <AccountLayout>
          <Outlet />
        </AccountLayout>
      </MainLayout>
    ),
    children: [
      { path: 'account/personal', element: <AccountPersonalPage /> },
    ],
  },
];
