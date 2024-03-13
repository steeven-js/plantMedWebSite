import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { doc, setDoc } from "firebase/firestore";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { countries } from 'src/assets/data';

import FormProvider, { RHFSelect, RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

import { db } from '../../../firebase';

// ----------------------------------------------------------------------

const GENDER_OPTIONS = ['Homme', 'Femme', 'Ne pas mentionner'];

// ----------------------------------------------------------------------

export default function EcommerceAccountPersonalView({ userId, userEmail, userData }) {

  // Convertir le _Timestamp Firebase en objet Date
  let userBirthdayDate = null; // Déclarer la variable en dehors du bloc if

  if (userData.birthday) {
    userBirthdayDate = new Date(userData.birthday.seconds * 1000 + userData.birthday.nanoseconds / 1000000);
  }

  const EcommerceAccountPersonalSchema = Yup.object().shape({
    firstName: Yup.string().required('Prénom requis'),
    lastName: Yup.string().required('Nom requis'),
    phoneNumber: Yup.string().required('Numéro de téléphone requis'),
    emailAddress: Yup.string().notRequired('Adresse Email requis').email('L\'Adresse Email dois être valide'),
    birthday: Yup.mixed().nullable().notRequired('Date de naissance requise'),
    gender: Yup.string().required('Choisissez votre genre'),
    streetAddress: Yup.string().required('Adresse requise'),
    zipCode: Yup.string().required('Code Postal requis'),
    city: Yup.string().required('Ville requise'),
  });

  const values = {
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    phoneNumber: userData.phoneNumber || '',
    emailAddress: userEmail || '',
    birthday: userBirthdayDate || null,
    gender: userData.gender || 'Homme',
    streetAddress: userData.streetAddress || '',
    zipCode: userData.zipCode || '',
    city: userData.city || '',
    country: userData.country || '',
  };

  const methods = useForm({
    resolver: yupResolver(EcommerceAccountPersonalSchema),
    values,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const userProfileRef = doc(db, "userProfile", userId);
      await setDoc(userProfileRef, {
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddress: data.emailAddress,
        phoneNumber: data.phoneNumber,
        birthday: data.birthday,
        gender: data.gender,
        streetAddress: data.streetAddress,
        city: data.city,
        zipCode: data.zipCode,
        country: data.country,
      });
      reset();
      // console.log('Form submitted successfully:', data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Mon profil
      </Typography>

      <Box
        rowGap={2.5}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      >
        <RHFTextField name="firstName" label="Prénom" />

        <RHFTextField name="lastName" label="Nom" />

        <RHFTextField name="emailAddress" label="Adresse Email" value={userEmail} disabled />

        <RHFTextField name="phoneNumber" label="Numéro de téléphone" />

        <Controller
          name="birthday"
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label="Date de naissance"
              slotProps={{
                textField: {
                  helperText: error?.message,
                  error: !!error?.message,
                },
              }}
              {...field}
              value={field.value}
              format="dd/MM/yyyy"
            />
          )}
        />

        <RHFSelect native name="gender" label="Genre">
          {GENDER_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </RHFSelect>

        <RHFTextField name="streetAddress" label="Adresse" />

        <RHFTextField name="zipCode" label="Code Postal" />

        <RHFTextField name="city" label="Ville" />

        <RHFAutocomplete
          name="country"
          type="country"
          label="Pays"
          placeholder="Choisissez votre pays"
          fullWidth
          options={countries.map((option) => option.label)}
          getOptionLabel={(option) => option}
        />
      </Box>

      <LoadingButton
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        sx={{ mt: 2 }}
      >
        Sauvegarder
      </LoadingButton>
    </FormProvider>
  );
}

EcommerceAccountPersonalView.propTypes = {
  userId: PropTypes.string,
  userEmail: PropTypes.string,
  userData: PropTypes.object,
};
