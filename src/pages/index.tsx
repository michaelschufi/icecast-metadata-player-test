import IcecastMetadataPlayer, { IcyMetadata } from "icecast-metadata-player";
import { NextPage } from "next";
import { useState, useEffect } from "react";

const MyComponent = () => {
  const [player, setPlayer] = useState<IcecastMetadataPlayer>() as [
    IcecastMetadataPlayer,
    any,
  ];
  const [metadata, setMetadata] = useState<string>();

  useEffect(() => {
    setPlayer(
      new IcecastMetadataPlayer("https://dsmrad.io/stream/isics-all", {
        onMetadata: (metadata: IcyMetadata) => {
          setMetadata(metadata.StreamTitle);
        },
      }),
    );
  }, []);

  return (
    <>
      <button onClick={() => player.play()}>Play</button>
      <button onClick={() => player.stop()}>Stop</button>
      <div>{metadata}</div>
    </>
  );
};

const Home: NextPage<Record<string, never>> = () => <MyComponent />;

export default Home;
