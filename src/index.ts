import {Song} from './Song'; 
import {Image} from './Image';

const my_song = new Song(23, "californication", "Red hot chillo pepper");
// Not call it, my_song.getterName() 🚩
console.log(my_song.getterName);
my_song.setterName = "another name"
console.log(my_song.getterName);

const my_image = new Image(10, "001", 20, 10, 300);
console.log(my_image.getAreaSize());