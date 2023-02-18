import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { PATH_DASHBOARD } from '../../routes/paths';

const validationSchema = z.object({
  username: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { login } = useAuth();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onLogin = useCallback(
    // eslint-disable-next-line no-unused-vars
    async (data: Record<string, string>) => {
      setIsAuthenticating(true);
      try {
        await login({
          email: data.username,
          password: data.password,
        });

        navigate(PATH_DASHBOARD.root);
      } catch (err: any) {
        // TODO handle error here
      }
      setIsAuthenticating(false);
    },
    [navigate],
  );

  return {
    errors,
    register,
    control,
    handleSubmit,
    onLogin,
    showPassword,
    handleShowPassword,
    isAuthenticating,
  };
};

export default useLogin;
