const fruits = ["apple", "banana", "orange", "grape", "kiwi", "strawberry", "mango", "pineapple"];
const cities = ["New York", "Tokyo", "Paris", "London", "Sydney", "Rome", "Dubai", "Berlin"];
const emotions = ["joy", "anger", "surprise", "fear", "disgust", "sadness", "excitement", "contentment"];
const professions = ["doctor", "teacher", "engineer", "artist", "chef", "scientist", "writer", "musician"];
const button = document.getElementById('generatorButton');

function getRandomWord(array) {
    const length = array.length;
    const index = Math.floor(Math.random() * length);
    return array[index];
}


function generateMessage (element) {
    button.onclick = () => {
        document.getElementById(element).innerHTML = `Today is day of <span class="randomMessage">${getRandomWord(emotions)}</span> and on this day you
                                                    will have some <span class="randomMessage">${getRandomWord(fruits)}</span>. You probably will visit
                                                     <span class="randomMessage">${getRandomWord(cities)}</span> 
                                                    where you will meet a <span class="randomMessage">${getRandomWord(professions)}</span>`
    button.innerHTML = 'Generate next message!';
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    generateMessage('result');
});
