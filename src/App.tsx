import { Box, Grid } from '@kuma-ui/core';
import { signalTypes } from './lib/signal_types.ts';
import { SignalButton } from './components/signal_button.tsx';

function App() {
  return (
    <Box as="main">
      <Grid gridTemplateColumns="repeat(auto-fit, minmax(260px, 1fr))" gap={6}>
        {signalTypes.map((signal) => (
          <SignalButton key={signal.id} signal={signal} />
        ))}
      </Grid>
    </Box>
  );
}

export default App;
