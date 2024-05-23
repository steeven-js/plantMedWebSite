import * as Yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

import { auth } from "../../../firebase";

// ----------------------------------------------------------------------

export default function RegisterBackgroundView() {
  const passwordShow = useBoolean();
  const navigate = useNavigate();

  const confirmPasswordShow = useBoolean();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Le nom complet est requis')
      .min(6, 'Minimum 6 caractères')
      .max(15, 'Maximum 15 caractères'),
    email: Yup.string().required('L\'email est requis').email('Ce n\'est pas un email valide'),
    password: Yup.string()
      .required('Le mot de passe est requis')
      .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
    confirmPassword: Yup.string()
      .required('La confirmation du mot de passe est requise')
      .oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas'),
  });

  const defaultValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {

      // Clear previous error messages
      setEmailError('');
      setPasswordError('');

      await createUserWithEmailAndPassword(auth, data.email, data.password);

      console.log('User created successfully!');

      reset();

      navigate("/");

    } catch (error) {
      console.error('Erreur de connexion :', error.message);

      // Display error messages based on the type of error
      if (error.code === 'auth/invalid-email') {
        setEmailError('Adresse e-mail invalide');
      } else if (error.code === 'auth/invalid-credential') {
        setPasswordError('Mot de passe incorrect');
      } else {
        // Example: alert('Une erreur s\'est produite lors de la connexion');
        // auth/too-many-requests]
      }
    }
  });

  const renderHead = (
    <div>
      <Typography variant="h3" paragraph>
        Commencez
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {`Vous avez déjà un compte ? `}
        <Link
          component={RouterLink}
          href={paths.loginBackground}
          variant="subtitle2"
          color="primary"
        >
          Connexion
        </Link>
      </Typography>
    </div>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2.5}>
        <RHFTextField name="fullName" label="Nom complet" />

        <RHFTextField
          name="email"
          label="Adresse e-mail"
          value={methods.watch('email')}
        />
        {emailError && (<Typography variant="body2" sx={{ color: 'error.main' }}>{emailError}</Typography>)}

        <RHFTextField
          name="password"
          label="Mot de passe"
          type={passwordShow.value ? 'text' : 'password'}
          value={methods.watch('password')}
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
        {passwordError && (<Typography variant="body2" sx={{ color: 'error.main' }}>{passwordError}</Typography>)}

        <RHFTextField
          name="confirmPassword"
          label="Confirmer le mot de passe"
          type={confirmPasswordShow.value ? 'text' : 'password'}
          value={methods.watch('confirmPassword')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={confirmPasswordShow.onToggle} edge="end">
                  <Iconify icon={confirmPasswordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {passwordError && (<Typography variant="body2" sx={{ color: 'error.main' }}>{passwordError}</Typography>)}

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          S&apos;inscrire
        </LoadingButton>

        <Typography variant="caption" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
          {`J'accepte les `}
          <Link color="text.primary" href="/plantmed/legal/cgu" underline="always">
            Conditions générales d&apos;utilisation
          </Link>
          {` et la `}
          <Link color="text.primary" href="/legal/confidentialite" underline="always">
            Politique de confidentialité.
          </Link>
        </Typography>
      </Stack>
    </FormProvider>
  );

  return (
    <>
      {renderHead}

      {renderForm}
    </>
  );
}
