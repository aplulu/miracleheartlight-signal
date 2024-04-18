import { SignalType } from '../lib/signal_types.ts';
import { Button } from '@kuma-ui/core';
import { playSignal } from '../lib/signal.ts';

export type SignalButtonProps = {
  signal: SignalType;
};

export const SignalButton = ({ signal }: SignalButtonProps) => {
  const handleClick = () => {
    playSignal(signal.id);
  };

  return (
    <Button minHeight="60px" onClick={handleClick}>
      {signal.name}
    </Button>
  );
};
