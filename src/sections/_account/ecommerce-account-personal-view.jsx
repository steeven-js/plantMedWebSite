import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useBoolean } from 'src/hooks/use-boolean';

import { countries } from 'src/assets/data';

import Iconify from 'src/components/iconify';
import FormProvider, { RHFSelect, RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

import { db } from '../../../firebase';

// ----------------------------------------------------------------------

const GENDER_OPTIONS = ['Male', 'Female', 'Other'];

// ----------------------------------------------------------------------

export default function EcommerceAccountPersonalView() {
  const passwordShow = useBoolean();
  const [userId, setUserId] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userBirthday, setUserBirthday] = useState('');
  const [userGender, setUserGender] = useState('');
  const [userStreetAddress, setUserStreetAddress] = useState('');
  const [userZipCode, setUserZipCode] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userCountry, setUserCountry] = useState('');

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const { uid, email } = user;
        setUserId(uid);
        setUserEmail(email);
        console.log('User signed in with email:', email);

        try {
          const userProfileRef = doc(db, "userProfile", uid); // Reference to the document in "userProfile" collection with UID as document ID
          const userProfileSnapshot = await getDoc(userProfileRef); // Fetch the document snapshot
          if (userProfileSnapshot.exists()) {
            const userProfileData = userProfileSnapshot.data(); // Extract the data from the snapshot
            console.log('User profile:', userProfileData);
            setUserFirstName(userProfileData.firstName)
            setUserLastName(userProfileData.lastName)
            setUserPhoneNumber(userProfileData.phoneNumber)
            setUserBirthday(userProfileData.birthday)
            setUserGender(userProfileData.gender)
            setUserStreetAddress(userProfileData.streetAddress)
            setUserZipCode(userProfileData.zipCode)
            setUserCity(userProfileData.city)
            setUserCountry(userProfileData.country)
          } else {
            console.log('User profile does not exist');
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      } else {
        setUserEmail('');
        console.log('User signed out');
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, [auth]);

  console.log('userBirthday:', userBirthday);

  const EcommerceAccountPersonalSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    emailAddress: Yup.string().notRequired('Email address is required').email('Email must be a valid email address'),
    birthday: Yup.mixed().nullable().required('Birthday is required'),
    gender: Yup.string().required('Gender is required'),
    streetAddress: Yup.string().required('Street address is required'),
    city: Yup.string().required('City is required'),
    zipCode: Yup.string().required('Zip code is required'),
  });

  const values = {
    firstName: userFirstName,
    lastName: userLastName,
    phoneNumber: userPhoneNumber,
    emailAddress: userEmail,
    birthday: null,
    gender: userGender,
    streetAddress: userStreetAddress,
    zipCode: userZipCode,
    city: userCity,
    country: userCountry,
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
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
      // const userProfileRef = doc(db, "userProfile", userId);
      // await setDoc(userProfileRef, {
      //   firstName: data.firstName,
      //   lastName: data.lastName,
      //   emailAddress: data.emailAddress,
      //   phoneNumber: data.phoneNumber,
      //   birthday: data.birthday,
      //   gender: data.gender,
      //   streetAddress: data.streetAddress,
      //   city: data.city,
      //   zipCode: data.zipCode,
      //   country: data.country,
      // });
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
      <Stack spacing={3} sx={{ my: 5 }}>
        <Typography variant="h5"> Change Password </Typography>

        <Stack spacing={2.5}>
          <RHFTextField
            name="oldPassword"
            label="Old Password"
            type={passwordShow.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={passwordShow.onToggle} edge="end">
                    <Iconify icon={passwordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <RHFTextField
            name="newPassword"
            label="New Password"
            type={passwordShow.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={passwordShow.onToggle} edge="end">
                    <Iconify icon={passwordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <RHFTextField
            name="confirmNewPassword"
            label="Confirm New Password"
            type={passwordShow.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={passwordShow.onToggle} edge="end">
                    <Iconify icon={passwordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
      <LoadingButton
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Save Changes
      </LoadingButton>
    </FormProvider>
  );
}
