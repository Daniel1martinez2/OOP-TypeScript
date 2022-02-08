import { File } from './File';
import {Song} from './Song'; 
import {Image} from './Image';


const my_song = new Song(23, "californication", 2000, "Red hot chilli pepper");
const my_image = new Image(10, "001", 1000, 20, 10, 300);

// Not call it, my_song.getterName() 🚩
// console.log(my_song.getterName);
// my_song.setterName = "another name"
// console.log(my_song.getterName);

//Define the main array which will contain the whole data
const files: File[] = [my_song, my_image];
let currentIndex = 0;

const playNext = () => {
    currentIndex ++;
    if (!files[currentIndex]) {
        console.log("End of playList");
        return;
    };
    files[currentIndex].play(playNext);
}

//Start the list
files[currentIndex].play(playNext);
