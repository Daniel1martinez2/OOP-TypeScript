import {File} from './File'; 
export class Song extends File {
  artist: string;
  constructor(size: number, name: string, length:number, artist: string) {
    super(size, name, length);
    this.artist = artist;
  }
}