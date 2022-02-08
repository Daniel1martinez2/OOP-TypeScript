export abstract class File{
  private readonly size: number;
  private name:string;
  constructor(size:number, name:string){
    this.size = size;
    this.name = name;
  }
  //Getters
  get getterSize():number {
    return this.size
  }
  get getterName():string {
    return this.name
  }
  //Setters
  set setterName(value:string){ //No need a return statement
    this.name = value
  }
}