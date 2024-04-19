import { convertSignalToFrequency } from './signal';
import { it, describe, expect } from 'vitest';

describe('convertSignalToFrequency', () => {
  it('水色の周波数が正常に出力されること', () => {
    const id = 52; // 水色
    const expectedFrequencyArray = [
      18500, 18750, 19500, 19250, 19000, 19250, 19000, 18750,
    ];
    const result = convertSignalToFrequency(id);
    expect(result).toEqual(expectedFrequencyArray);
  });

  it('消灯の周波数が正常に出力されること', () => {
    const id = 62; // 消灯
    const expectedFrequencyArray = [
      18500, 18750, 19500, 19250, 19500, 19250, 19500, 18750,
    ];
    const result = convertSignalToFrequency(id);
    expect(result).toEqual(expectedFrequencyArray);
  });

  it('ピンクの周波数が正常に出力されること', () => {
    const id = 124; // ピンク
    const expectedFrequencyArray = [
      18500, 19250, 19500, 19250, 19500, 19250, 19000, 18750,
    ];
    const result = convertSignalToFrequency(id);
    expect(result).toEqual(expectedFrequencyArray);
  });

  it('IDが負の値の場合、エラーが発生すること', () => {
    const id = -1;
    expect(() => convertSignalToFrequency(id)).toThrow('Invalid signal id');
  });

  it('IDが2の7乗以上の場合、エラーが発生すること', () => {
    const id = Math.pow(2, 7);
    expect(() => convertSignalToFrequency(id)).toThrow('Invalid signal id');
  });
});
