import IcecastMetadataPlayer from "icecast-metadata-player";
import { NextPage } from "next";

const MyComponent = () => {
  if (typeof window !== "undefined") {
    const player = new IcecastMetadataPlayer(
      "https://dsmrad.io/stream/isics-all",
    );
    console.log(player.audioElement);
  }
  return <div>I compile eventually, but I throw an error</div>;
};

const Home: NextPage<Record<string, never>> = () => <MyComponent />;

export default Home;
