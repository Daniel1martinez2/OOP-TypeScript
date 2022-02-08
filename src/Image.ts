import { File } from './File';
import { VisualFile } from './interfaces/VisualFile';
export class Image extends File implements VisualFile {
  public width: number;
  public height: number;
  public resolution: number;
  constructor(
    size:number,
    name:string, 
    width:number,
    height:number,
    resolution:number
  ){
    super(size,name);
    this.width = width;
    this.height = height;
    this.resolution = resolution;
  }
  public getAreaSize(): number {
    return this.width * this.height;
  }
}