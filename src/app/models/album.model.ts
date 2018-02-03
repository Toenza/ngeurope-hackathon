import { Song } from "./song.model";

export interface Album {
  title: string;
  description: string;
  duration: number;
  tracklist: Song[];
  id: string;
}
