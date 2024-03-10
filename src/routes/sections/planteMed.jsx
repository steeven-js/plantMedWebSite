import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

// const AboutPage = lazy(() => import('src/pages/plante/about'));
// const BlogPage = lazy(() => import('src/pages/plante/posts'));
// const ContactPage = lazy(() => import('src/pages/plante/contact'));
const PlantesPage = lazy(() => import('src/pages/plantmed/plantes'));
const PlantePage = lazy(() => import('src/pages/plantmed/plante/[id]')); // Utilisation de [id] pour le paramètre dynamique
const SymptomesPage = lazy(() => import('src/pages/plantmed/symptomes'));
const LandingPage = lazy(() => import('src/pages/plantmed/landing'));
const CguPage = lazy(() => import('src/pages/plantmed/legal/cgu'));
const ConfidentialitePage = lazy(() => import('src/pages/plantmed/legal/confidentialite'));
const SourcePage = lazy(() => import('src/pages/plantmed/legal/source'));

// ----------------------------------------------------------------------

export const planteMedRoutes = [
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
          { path: 'plantes', element: <PlantesPage /> },
          { path: 'plante/:id', element: <PlantePage /> }, // Utilisez :id pour spécifier le paramètre d'URL
          { path: 'symptomes', element: <SymptomesPage /> },
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

