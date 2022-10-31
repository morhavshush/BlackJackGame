import { Howl } from "howler";

export const PlayAudio = (src: string) => {
  const sound = new Howl({
    src: src,
  });
  return sound;
  ;
};
