import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

// const AboutPage = lazy(() => import('src/pages/plante/about'));
// const BlogPage = lazy(() => import('src/pages/plante/posts'));
// const ContactPage = lazy(() => import('src/pages/plante/contact'));
const JobPage = lazy(() => import('src/pages/plantmed/job/[id]')); // Utilisation de [id] pour le paramètre dynamique
const JobsPage = lazy(() => import('src/pages/plantmed/plantes'));
const LandingPage = lazy(() => import('src/pages/plantmed/landing'));
const CguPage = lazy(() => import('src/pages/plantmed/legal/cgu'));
const ConfidentialitePage = lazy(() => import('src/pages/plantmed/legal/confidentialite'));
const SourcePage = lazy(() => import('src/pages/plantmed/legal/source'));

// ----------------------------------------------------------------------

export const planteRoutes = [
  {
    path: 'plantmed',
    children: [
      {
        element: (
          <MainLayout headerOnDark>
            <LandingPage />
          </MainLayout>
        ),
        index: true,
      },
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          { path: 'plantes', element: <JobsPage /> },
          { path: 'plante/:id', element: <JobPage /> }, // Utilisez :id pour spécifier le paramètre d'URL
          { path: 'legal/cgu', element: <CguPage /> },
          { path: 'legal/confidentialite', element: <ConfidentialitePage /> },
          { path: 'legal/source', element: <SourcePage /> },
          // { path: 'posts', element: <BlogPage /> },
          // { path: 'post', element: <PostPage /> },
          // { path: 'about', element: <AboutPage /> },
          // { path: 'contact', element: <ContactPage /> },
        ],
      },
    ],
  },
];

