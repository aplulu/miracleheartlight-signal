import { SignalType } from '../lib/signal_types';
import { Button, Text } from '@kuma-ui/core';
import { playSignal } from '../lib/signal_player';
import { LightColorPreview } from './light_color_preview';

export type SignalButtonProps = {
  signal: SignalType;
};

export const SignalButton = ({ signal }: SignalButtonProps) => {
  const handleClick = () => {
    playSignal(signal.id);
  };

  return (
    <Button
      minHeight="60px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="4px"
      onClick={handleClick}>
      <Text>
        {signal.id}. {signal.name}
      </Text>
      <LightColorPreview color={signal.name} />
    </Button>
  );
};
