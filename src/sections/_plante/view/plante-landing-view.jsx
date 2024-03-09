// import {
//   _jobs,
//   _plantePosts,
//   _brandsColor,
//   _testimonials,
//   _jobsByCompanies,
//   _jobsByCountries,
//   _jobsByCategories,
// } from 'src/_mock';

// import CareerNewsletter from '../plante-newsletter';
// import CareerOurClients from '../plante-our-clients';
import CareerDownloadApp from '../plante-download-app';
import CareerLandingHero from '../landing/plante-landing-hero';
// import CareerLandingStep from '../landing/plante-landing-step';
// import CareerTestimonial from '../testimonial/plante-testimonial';
// import PlanteLatestPosts from '../../blog/plante/plante-latest-posts';
// import CareerLandingConnections from '../landing/plante-landing-connections';
// import CareerLandingFeaturedJobs from '../landing/plante-landing-featured-jobs';
// import CareerLandingTopCompanies from '../landing/plante-landing-top-companies';
// import CareerLandingHotCategories from '../landing/plante-landing-hot-categories';
// import CareerLandingForRecruiters from '../landing/plante-landing-for-recruiters';

// ----------------------------------------------------------------------

export default function PlanteLandingView() {
  return (
    <>
      <CareerLandingHero />

      {/* <CareerLandingStep /> */}

      {/* <CareerLandingFeaturedJobs jobs={_jobs.slice(-6)} /> */}

      {/* <CareerLandingTopCompanies companies={_jobsByCompanies} /> */}

      {/* <CareerLandingHotCategories categories={_jobsByCategories} /> */}

      {/* <CareerLandingConnections countries={_jobsByCountries} /> */}

      {/* <CareerLandingForRecruiters /> */}

      {/* <CareerTestimonial testimonials={_testimonials} /> */}

      {/* <CareerOurClients brands={_brandsColor} /> */}

      {/* <PlanteLatestPosts posts={_plantePosts.slice(0, 5)} /> */}

      <CareerDownloadApp />

      {/* <CareerNewsletter /> */}
    </>
  );
}
