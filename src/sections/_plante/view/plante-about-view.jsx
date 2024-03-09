import Divider from '@mui/material/Divider';

import { _members, _plantePosts, _brandsColor, _testimonials } from 'src/_mock';

import CareerTeam from '../team/plante-team';
import CareerAbout from '../about/plante-about';
import CareerNewsletter from '../plante-newsletter';
import CareerOurClients from '../plante-our-clients';
import CareerTestimonial from '../testimonial/plante-testimonial';
import CareerAboutOurVision from '../about/plante-about-our-vision';
import PlanteLatestPosts from '../../blog/plante/plante-latest-posts';

// ----------------------------------------------------------------------

export default function CareerAboutView() {
  return (
    <>
      <CareerAbout />

      <CareerAboutOurVision />

      <Divider orientation="vertical" sx={{ height: 80, width: 2, mx: 'auto' }} />

      <CareerTeam members={_members} />

      <CareerTestimonial testimonials={_testimonials} />

      <CareerOurClients brands={_brandsColor} />

      <PlanteLatestPosts posts={_plantePosts.slice(0, 5)} />

      <CareerNewsletter />
    </>
  );
}
