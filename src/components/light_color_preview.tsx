import { Box } from '@kuma-ui/core';

export type LightColorPreviewProps = {
  color: string;
};

export const LightColorPreview = ({ color }: LightColorPreviewProps) => {
  const colorSegments = color.split(' ');

  return (
    <Box display="flex" justifyContent="center" minHeight="21px" gap="4px">
      {colorSegments?.map((segment, index) => {
        let backgroundColor = '';
        let width = '12px';
        let borderRadius = '50%';
        let margin = '0 2px';

        if (segment.startsWith('長')) {
          width = '24px';
          borderRadius = '10px';
          margin = '0 1px';
          segment = segment.slice(1);
        } else if (segment.startsWith('短')) {
          width = '8px';
          borderRadius = '10px';
          margin = '0 1px';
          segment = segment.slice(1);
        }

        switch (segment) {
          case '赤':
            backgroundColor = 'red';
            break;
          case '緑':
            backgroundColor = 'green';
            break;
          case '青':
            backgroundColor = 'blue';
            break;
          case '黄':
            backgroundColor = 'yellow';
            break;
          case 'ピンク':
            backgroundColor = '#ff69b4';
            break;
          case '水':
            backgroundColor = 'aqua';
            break;
          case '紫':
            backgroundColor = 'purple';
            break;
          case 'オレンジ':
            backgroundColor = 'orange';
            break;
          case '白':
            backgroundColor = 'white';
            break;
          case 'ライトピンク':
            backgroundColor = '#ffc0cb';
            break;
          default:
            return null;
        }

        // 点滅の場合は2つ表示
        if (colorSegments[colorSegments.length - 1] === '点滅') {
          return (
            <Box key={index} display="flex">
              <Box
                width={width}
                height="12px"
                backgroundColor={backgroundColor}
                borderRadius={borderRadius}
                margin={margin}
              />
              <Box
                width={width}
                height="12px"
                backgroundColor={backgroundColor}
                borderRadius={borderRadius}
                margin={margin}
              />
            </Box>
          );
        }

        return (
          <Box
            key={index}
            width={width}
            height="12px"
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            margin={margin}
          />
        );
      })}
    </Box>
  );
};
