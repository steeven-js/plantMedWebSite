import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

// const AboutPage = lazy(() => import('src/pages/career/about'));
// const BlogPage = lazy(() => import('src/pages/career/posts'));
// const ContactPage = lazy(() => import('src/pages/career/contact'));
const JobPage = lazy(() => import('src/pages/plantmed/job/[id]')); // Utilisation de [id] pour le paramètre dynamique
const JobsPage = lazy(() => import('src/pages/plantmed/plantes'));
const LandingPage = lazy(() => import('src/pages/plantmed/landing'));
// const PostPage = lazy(() => import('src/pages/career/post'));

// ----------------------------------------------------------------------

export const careerRoutes = [
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
          // Utilisez :id pour spécifier le paramètre d'URL
          { path: 'plante/:id', element: <JobPage /> },
          // { path: 'posts', element: <BlogPage /> },
          // { path: 'post', element: <PostPage /> },
          // { path: 'about', element: <AboutPage /> },
          // { path: 'contact', element: <ContactPage /> },
        ],
      },
    ],
  },
];

