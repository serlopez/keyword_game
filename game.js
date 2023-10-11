let keywordNum = 0;
let trashwordNum = 0;
let score = 0;
let questionIndex = 0;

let phrases = ["The five boxing wizards jump quickly.",
"Pack my box with five dozen liquor jugs.",
"Go, lazy fat vixen; be shrewd, jump quick.",
"When zombies arrive, quickly fax Judge Pat.",
"Amazingly few discotheques provide jukeboxes.",
"Puzzled women bequeath jerks very exotic gifts.",
"Six big devils from Japan quickly forgot how to waltz.",
"Jack amazed a few girls by dropping the antique onyx vase.",
"A quick movement of the enemy will jeopardize six gunboats.",
"Jaded zombies acted quaintly but kept driving their oxen forward.",
"Game Over!"
];

let button = document.getElementById("next_phrase");
button.addEventListener('click', function(){
    game(questionIndex);
});

function game()
{
    let phrase = document.getElementById("phrase_display");
    if (questionIndex >= phrases.length - 1){
        console.log("game over");
        phrase.innerHTML = phrases[phrases.length - 1];
        button.disabled = true;
    }
    else{
        let phrase = document.getElementById("phrase_display");
        let trashwords = document.getElementsByClassName("trashword");
        let keywords = document.getElementsByClassName("keyword");

        phrase.innerHTML = phrases[questionIndex];
        document.getElementById("score").innerText = "score: " + score;

        for (let i = 0; i < trashwords.length; i++){
            trashwords[i].addEventListener('click', function(){
                trashwords[i].classList.add("trashwordFound");
                trashwordNum += 1;
                calculateScore();
            }, {once: true});
        }
        for (let i = 0; i < keywords.length; i++){
            keywords[i].addEventListener('click', function(){
                keywords[i].classList.add("keywordFound");
                keywordNum += 1;
                calculateScore();
            }, {once: true});
        }
        questionIndex += 1;
    }    
}

function calculateScore(){
    score = keywordNum == 0 ? 0 : (keywordNum / (keywordNum + trashwordNum))*100;
    document.getElementById("score").innerText = "score: " + score + " percent";

}



game(questionIndex);

