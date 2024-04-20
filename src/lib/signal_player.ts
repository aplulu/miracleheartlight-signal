import { convertSignalToFrequency } from './signal';

const SIGNAL_DURATION = 0.125;
const FADE_DURATION = 0.01;

const audioContext = new AudioContext();

/**
 * ミラクルハートライトの制御シグナルを再生する
 */
export const playSignal = (id: number) => {
  const signalFrequency = convertSignalToFrequency(id);

  const gainNode = audioContext.createGain();
  gainNode.gain.value = 0.5;
  gainNode.connect(audioContext.destination);

  const startTime = audioContext.currentTime;
  signalFrequency.forEach((frequency, i) => {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';

    oscillator.frequency.value = frequency;

    const envelopeGain = audioContext.createGain();
    envelopeGain.gain.setValueAtTime(0, startTime + i * SIGNAL_DURATION);
    envelopeGain.gain.linearRampToValueAtTime(
      1,
      startTime + i * SIGNAL_DURATION + FADE_DURATION
    );
    envelopeGain.gain.setValueAtTime(
      1,
      startTime + (i + 1) * SIGNAL_DURATION - FADE_DURATION
    );
    envelopeGain.gain.linearRampToValueAtTime(
      0,
      startTime + (i + 1) * SIGNAL_DURATION
    );

    oscillator.connect(envelopeGain);
    envelopeGain.connect(gainNode);

    oscillator.onended = () => {
      oscillator.disconnect();
      envelopeGain.disconnect();
    };

    oscillator.start(startTime + i * SIGNAL_DURATION);
    oscillator.stop(startTime + (i + 1) * SIGNAL_DURATION);
  });
};
