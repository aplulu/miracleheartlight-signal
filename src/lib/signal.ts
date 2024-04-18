const SIGNAL_BIT = 7;
const SIGNAL_DURATION = 0.125;
const FREQUENCY_MAP: number[] = [18500, 18750, 19000, 19250, 19500];

const audioContext = new AudioContext();

/**
 * ミラクルハートライトの制御シグナルを再生する
 */
export const playSignal = (id: number) => {
  const signalFrequency = convertSignalToFrequency(id);

  const gainNode = audioContext.createGain();
  gainNode.gain.value = 0.1;
  gainNode.connect(audioContext.destination);

  const startTime = audioContext.currentTime;
  signalFrequency.forEach((frequency, i) => {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';

    oscillator.frequency.value = frequency;

    oscillator.connect(gainNode);
    oscillator.onended = () => {
      oscillator.disconnect();
    };

    oscillator.start(startTime + i * SIGNAL_DURATION);
    oscillator.stop(startTime + (i + 1) * SIGNAL_DURATION);
  });
};

export const convertSignalToFrequency = (id: number): number[] => {
  if (id < 0 || id >= Math.pow(2, SIGNAL_BIT)) {
    throw new Error('Invalid signal id');
  }

  const result: number[] = [];

  for (let i = SIGNAL_BIT; i >= 0; i--) {
    const bit = (id >> i) & 1;
    const i2 = SIGNAL_BIT - i - 1;
    const b =
      i === SIGNAL_BIT
        ? FREQUENCY_MAP[0]
        : FREQUENCY_MAP[i2 % 2 === 0 ? (bit ? 3 : 1) : bit ? 4 : 2];
    result.push(b);
  }

  return result;
};
