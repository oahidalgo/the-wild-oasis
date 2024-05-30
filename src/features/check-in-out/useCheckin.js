import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateBooking } from '../../services/apiBookings';
import { useMoveBack } from '../../hooks/useMoveBack';

export function useCheckin() {
  const queryClient = useQueryClient();
  const moveBack = useMoveBack();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: 'check-in',
        isPaid: true,
        ...breakfast,
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
