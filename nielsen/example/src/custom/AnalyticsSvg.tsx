import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { SvgContext } from '@theoplayer/react-native-ui';

export const AnalyticsSvg = (props: SvgProps) => {
  return (
    <SvgContext.Consumer>
      {(context) => (
        <Svg viewBox={'0 -960 960 960'} {...context} {...props}>
          <Path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"></Path>
        </Svg>
      )}
    </SvgContext.Consumer>
  );
};
