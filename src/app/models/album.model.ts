import { Song } from "./song.model";

export interface Album {
  title: String;
  description: String;
  duration: number;
  tracklist: Song[];
}
