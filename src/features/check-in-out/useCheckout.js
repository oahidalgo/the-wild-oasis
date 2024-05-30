import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateBooking } from '../../services/apiBookings';
import { useMoveBack } from '../../hooks/useMoveBack';

export function useCheckout() {
  const queryClient = useQueryClient();
  const moveBack = useMoveBack();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'check-out',
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been checkout in.`);
      queryClient.invalidateQueries({ active: true });
      moveBack();
    },
    onError: (error) => {
      toast.error('There was an error while checking out');
    },
  });

  return { checkout, isCheckingOut };
}
