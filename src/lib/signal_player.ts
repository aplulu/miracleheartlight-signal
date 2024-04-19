import { convertSignalToFrequency } from './signal.ts';

const SIGNAL_DURATION = 0.125;

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
