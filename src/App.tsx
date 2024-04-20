import { Text, Grid, VStack } from '@kuma-ui/core';

import { signalGroups, signalTypes } from './lib/signal_types';
import { SignalButton } from './components/signal_button';
import { Header } from './components/header';

function App() {
  return (
    <VStack>
      <Header />
      <VStack as="main" gap={24} px={24} py={12}>
        <Text fontSize="0.875rem">
          サンリオピューロランドのパレードで使用されているペンライト「ミラクル♡ライト」の可聴範囲外制御信号を生成するためのポン出し機です。
          <br />
          ミラクルハートライトは、
          <a
            href="https://www.puroland.jp/goods/miracle-heart-light/"
            target="_blank"
            rel="noopener noreferrer">
            サンリオピューロランド現地ショップ
          </a>
          または、
          <a
            href="https://shop.sanrio.co.jp/item/detail/1_1_2207807427_1/-_-/-"
            target="_blank"
            rel="noopener noreferrer">
            サンリオオンラインショップ
          </a>
          で購入できます。
          <br />
          制御信号部分は{' '}
          <a
            href="https://titn-nanana.hatenablog.com/entry/2017/12/15/200000"
            target="_blank">
            サンリオピューロランドのミラクル♡ライトの仕組み。制御と解析。
          </a>{' '}
          を参考に実装させていただきました。
        </Text>

        {signalGroups.map((group) => (
          <VStack key={group.name}>
            <Text fontSize="1rem" fontWeight="bold">
              {group.label}
            </Text>
            <Grid
              gridTemplateColumns="repeat(auto-fit, minmax(260px, 1fr))"
              gap={6}>
              {signalTypes
                .filter((v) => v.group === group.name)
                .map((signal) => (
                  <SignalButton key={signal.id} signal={signal} />
                ))}
            </Grid>
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
}

export default App;
