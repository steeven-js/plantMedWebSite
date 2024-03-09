import { _offices } from 'src/_mock';

import ContactMap from 'src/components/map';

import CareerNewsletter from '../plante-newsletter';
import CareerContactForm from '../contact/plante-contact-form';
import CareerContactInfo from '../contact/plante-contact-info';

// ----------------------------------------------------------------------

export default function CareerContactView() {
  return (
    <>
      <CareerContactInfo />

      <ContactMap offices={_offices} />

      <CareerContactForm />

      <CareerNewsletter />
    </>
  );
}
