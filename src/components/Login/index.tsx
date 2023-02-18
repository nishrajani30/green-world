import {Button, CircularProgress, IconButton, InputAdornment, Stack, TextField} from "@mui/material";
import {StyledContainer} from "./Login.styles";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import {Icon} from '@iconify/react';
import useLogin from "./useLogin";
import AnimatedGradientText from "../AnimatedGradientText";

export interface LoginProps {
  onSubmit: () => Promise<void>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  showPassword: boolean;
  handleShowPassword: () => void;
}

const Login = () => {
  const {
    onLogin,
    register,
    errors,
    showPassword,
    handleShowPassword,
    handleSubmit,
    isAuthenticating
  } = useLogin();

  return (
    <StyledContainer>
      <AnimatedGradientText variant="h3" sx={{mb: 4, display: {lg: "none", xs: "block"}}}>
        Green World
      </AnimatedGradientText>
      <form autoComplete="off" onSubmit={handleSubmit(onLogin)} noValidate>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...register('username')}
            error={Boolean(errors?.username?.message)}
            helperText={errors?.username?.message as string}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...register('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill}/>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message as string}
          />
        </Stack>

        <Button
          sx={{mt: 3, mb: 2}}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          {
            isAuthenticating ? <CircularProgress size={20}/> : 'Login'
          }
        </Button>
      </form>
    </StyledContainer>
  )
};

export default Login;