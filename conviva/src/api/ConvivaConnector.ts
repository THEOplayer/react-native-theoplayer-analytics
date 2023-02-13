import type { THEOplayer } from 'react-native-theoplayer';
import { ConvivaHandler } from "../internal/ConvivaHandler";
import type { ConvivaMetadata } from "./ConvivaMetadata";
import type { ConvivaConfiguration } from "./ConvivaConfiguration";

export class ConvivaConnector {

  private connectorHandler: ConvivaHandler

  constructor(player: THEOplayer, convivaMetadata: ConvivaMetadata, convivaConfig: ConvivaConfiguration) {
    this.connectorHandler = new ConvivaHandler(player, convivaMetadata, convivaConfig);
  }

  /**
   * Sets Conviva metadata on the Conviva video analytics.
   * @param metadata object of key value pairs
   */
  setContentInfo(metadata: ConvivaMetadata): void {
    this.connectorHandler.setContentInfo(metadata);
  }

  /**
   * Sets Conviva metadata on the Conviva ad analytics.
   * @param metadata object of key value pairs
   */
  setAdInfo(metadata: ConvivaMetadata): void {
    this.connectorHandler.setAdInfo(metadata);
  }

  /**
   * Stops video and ad analytics and closes all sessions.
   */
  destroy(): void {
    this.connectorHandler.destroy();
  }
}