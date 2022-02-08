import {File} from './File'; 
export class Song extends File {
  artist: string;
  constructor(size: number, name: string, artist: string) {
    super(size, name);
    this.artist = artist;
  }
}