import { userSlice } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/button/ui/button';

export function SignOutButton({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  return (
    <Button
      className={className}
      variant='outlined'
      onClick={() => dispatch(userSlice.actions.signOut())}
    >
      Выйти
    </Button>
  );
}
