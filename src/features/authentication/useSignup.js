import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      // Redirect to the login page
      queryClient.removeQueries();
      toast.success(
        "Account created successfully. Please verify the new account from the user's email address."
      );
      navigate('/', { replace: true });
    },
  });

  return {
    signup,
    isLoading,
  };
}
