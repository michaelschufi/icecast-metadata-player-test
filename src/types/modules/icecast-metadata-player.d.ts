// NOTE: This is incomplete! I just typed the part of the api that's most useful.
declare module 'icecast-metadata-player' {
  interface MetadataIcy {
    StreamTitle: string;
  }

  interface IcecastMetadataPlayerOptions {
    audioElement?: HTMLAudioElement;
    enableLogging?: boolean;
    retryTimeout?: number;
    metadataTypes?: ('icy' | 'ogg')[];

    // Callbacks

    // Called when metadata is synchronized with the audio.
    onMetadata?: (
      metadata: MetadataIcy,
      timestampOffset: number,
      timestamp: number,
    ) => void;

    //  Called when the fetch request is started.
    onLoad?: () => void;

    //  Called when fetch request begins to return data.
    onStreamStart?: () => void;

    //  Called when the audio element begins playing.
    onPlay?: () => void;

    //  Called when stream data is sent to the audio element.
    onStream?: (streamData: never) => void;

    //  Called when the fetch request completes.
    onStreamEnd?: () => void;

    //  Called when the stream is completely stopped and all cleanup operations are complete.
    onStop?: () => void;
  }

  class IcecastMetadataPlayer {
    static canPlayType(mimeType: string): '' | 'maybe' | 'probably';

    constructor(endpoint: string, options?: IcecastMetadataPlayerOptions);

    play(): Promise<void>;

    stop(): Promise<void>;

    detachAudioElement(): void;

    audioElement: HTMLAudioElement;

    icyMetaInt: number;

    state: 'loading' | 'playing' | 'stopping' | 'stopped' | 'retrying';
  }

  export default IcecastMetadataPlayer;
}
