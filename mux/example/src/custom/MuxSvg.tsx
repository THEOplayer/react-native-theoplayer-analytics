import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { SvgContext } from '@theoplayer/react-native-ui';

export const MuxSvg = (props: SvgProps) => {
  return (
    <SvgContext.Consumer>
      {(context) => (
        <Svg viewBox={'0 0 57 20'} {...context} {...props}>
          <Path d="M35.442 4.337a1.112 1.112 0 01-1.105-1.105 1.11 1.11 0 011.106-1.105h.001a1.11 1.11 0 011.104 1.105 1.11 1.11 0 01-1.105 1.105h-.001m0-3.333a2.24 2.24 0 00-2.228 2.228v6.683c-.002 2.444-2.012 4.454-4.456 4.456-2.444-.002-4.453-2.012-4.456-4.456V3.232a2.238 2.238 0 00-2.228-2.181 2.237 2.237 0 00-2.227 2.181v6.683c0 4.914 3.997 8.912 8.911 8.912s8.912-3.998 8.912-8.912V3.232a2.24 2.24 0 00-2.228-2.228m19.362 16.7h-.032a1.11 1.11 0 01-1.105-1.105 1.11 1.11 0 011.105-1.105h.033a1.11 1.11 0 011.072 1.105 1.11 1.11 0 01-1.073 1.105m-9.832-7.789l-5.11 5.109c-.398.414-.62.967-.62 1.542a2.239 2.239 0 002.228 2.228c.575 0 1.128-.222 1.542-.62l5.109-5.109 5.109 5.109c.414.398.967.62 1.542.62A2.239 2.239 0 0057 16.566c0-.575-.222-1.128-.62-1.542l-5.109-5.109 5.109-5.109c.398-.414.62-.967.62-1.542a2.239 2.239 0 00-2.228-2.228c-.575 0-1.128.222-1.542.62l-5.109 5.11-5.109-5.11a2.225 2.225 0 00-1.542-.62 2.239 2.239 0 00-2.228 2.228c0 .575.222 1.128.62 1.542l5.11 5.109zm-29.376 7.79c-.606 0-1.106-.5-1.106-1.106 0-.607.5-1.106 1.106-1.106a1.11 1.11 0 011.106 1.106c0 .606-.499 1.106-1.106 1.106m.852-16.532a2.234 2.234 0 00-2.427.483l-5.108 5.11-5.11-5.11a2.229 2.229 0 00-1.574-.651A2.239 2.239 0 00.001 3.232v13.366L0 16.665a2.238 2.238 0 002.228 2.228 2.238 2.238 0 002.228-2.228l-.001-.067v-7.99l2.882 2.882a2.228 2.228 0 003.15 0l2.882-2.882v7.99l-.001.067a2.238 2.238 0 002.228 2.228 2.238 2.238 0 002.228-2.228l-.001-.067V3.232c0-.9-.544-1.714-1.375-2.059"></Path>
        </Svg>
      )}
    </SvgContext.Consumer>
  );
};
