let keywordNum = 0;
let trashwordNum = 0;
let score = 0;
let questionIndex = 0;

let phrases = ['<span class="trashword">this </span><span class="trashword">is </span><span class="trashword">a </span><span class="keyword">test.</span>',
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
    game();
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
        let trashwords = document.getElementsByClassName("trashword");
        let keywords = document.getElementsByClassName("keyword");
        button.disabled = true;
        score = 0;

        phrase.innerHTML = phrases[questionIndex];
        let scoreDisplay = document.getElementById("score");
        scoreDisplay.innerText = "There are " + keywords.length + " keywords in this sentence. You have found " + score +" percent of them.";

        for (let i = 0; i < trashwords.length; i++){
            trashwords[i].addEventListener('click', function(){
                trashwords[i].classList.add("trashwordFound");
            }, {once: true});
        }
        for (let i = 0; i < keywords.length; i++){
            keywords[i].addEventListener('click', function(){
                keywords[i].classList.add("keywordFound");
                keywordNum += 1;
                calculateScore(keywords, scoreDisplay);
            }, {once: true});
        }
        questionIndex += 1;
    }    
}

function calculateScore(keywords, scoreDisplay){
    score = keywordNum / keywords.length * 100;
    scoreDisplay.innerText = "There are " + keywords.length + " keywords in this sentence. You have found " + score +" percent of them.";
    if (keywordNum == keywords.length){
        scoreDisplay.innerText = "Woohoo!";
        button.disabled = false;
        keywordNum = 0;
    }
}



game();

