import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateBooking } from '../../api/bookings';
import { moveBack } from '../../hooks/useMoveBack';

export function useCheking() {
  const queryClient = useQueryClient();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'check-in',
        isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been checked in.`);
      queryClient.invalidateQueries({ active: true });
      moveBack();
    },
    onError: (error) => {
      toast.error('There was an error while checking in');
    },
  });

  return { checkin, isCheckingIn };
}
