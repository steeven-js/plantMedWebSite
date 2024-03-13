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

const GENDER_OPTIONS = ['Male', 'Female', 'Other'];

// ----------------------------------------------------------------------

export default function EcommerceAccountPersonalView({ userId, userEmail, userData }) {

  // Convertir le _Timestamp Firebase en objet Date
  let userBirthdayDate = null; // Déclarer la variable en dehors du bloc if

  if (userData.birthday) {
    userBirthdayDate = new Date(userData.birthday.seconds * 1000 + userData.birthday.nanoseconds / 1000000);
  }

  const EcommerceAccountPersonalSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    emailAddress: Yup.string().notRequired('Email address is required').email('Email must be a valid email address'),
    birthday: Yup.mixed().nullable().notRequired('Birthday is required'),
    gender: Yup.string().required('Gender is required'),
    streetAddress: Yup.string().required('Street address is required'),
    zipCode: Yup.string().required('Zip code is required'),
    city: Yup.string().required('City is required'),
  });

  const values = {
    firstName: userData.firstName || '',
    lastName: userData.lastName || '',
    phoneNumber: userData.phoneNumber || '',
    emailAddress: userEmail || '',
    birthday: userBirthdayDate || null,
    gender: userData.gender || 'Male',
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
      console.log('Form submitted successfully:', data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Personal
      </Typography>

      <Box
        rowGap={2.5}
        columnGap={2}
        display="grid"
        gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      >
        <RHFTextField name="firstName" label="First Name" />

        <RHFTextField name="lastName" label="Last Name" />

        <RHFTextField name="emailAddress" label="Email Address" value={userEmail} disabled />

        <RHFTextField name="phoneNumber" label="Phone Number" />

        <Controller
          name="birthday"
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label="Birthday"
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

        <RHFSelect native name="gender" label="Gender">
          {GENDER_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </RHFSelect>

        <RHFTextField name="streetAddress" label="Street Address" />

        <RHFTextField name="zipCode" label="Zip Code" />

        <RHFTextField name="city" label="City" />

        <RHFAutocomplete
          name="country"
          type="country"
          label="Country"
          placeholder="Choose a country"
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
        Save Changes
      </LoadingButton>
    </FormProvider>
  );
}

EcommerceAccountPersonalView.propTypes = {
  userId: PropTypes.string,
  userEmail: PropTypes.string,
  userData: PropTypes.object,
};
