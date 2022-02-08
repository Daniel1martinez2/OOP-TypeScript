export abstract class File{
  //Define the types
  private readonly size: number;
  private name:string;
  private length:number;
  private isPlaying: boolean; 
  //Constructor
  constructor(size:number, name:string, length: number){
    this.isPlaying = false;
    this.size = size;
    this.name = name;
    this.length = length;
  }

  //Methods
  public play( playNext: () => void ){
    this.isPlaying = true; 
    console.log(`<<<<<<<<<<<The file ${this.name} is playing 😃 ${this.isPlaying}`);
    setTimeout(() => {
      this.isPlaying = false;
      console.log(`>>>>>>>>>The file ${this.name} has end 😫 ${this.isPlaying}`);
      playNext();
    }, this.length)
  }
  //Getters
  get getterSize():number {
    return this.size
  }
  get getterName():string {
    return this.name
  }
  get getterIsPlaying():boolean {
    return this.isPlaying;
  }
  //Setters
  set setterName(value:string){ //No need a return statement
    this.name = value
  }
}