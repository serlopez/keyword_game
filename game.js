let keywordNum = 0;
let trashwordNum = 0;
let score = 0;
let questionIndex = 0;

let phrases = ['<p><span class="trashword">The</span> <span class="trashword">quick</span> <span class="trashword">brown</span> <span class="keyword">fox</span> <span class="keyword">jumps</span> <span class="keyword">over</span> <span class="trashword">the</span> <span class="trashword">lazy</span> <span class="keyword">dog</span></p>',
'<p><span class="keyword">Pack</span> <span class="trashword">my</span> <span class="keyword">box</span> <span class="keyword">with</span> <span class="trashword">five</span> <span class="trashword">dozen</span> <span class="keyword">liquor</span> <span class="keyword">jugs</span>.</p>',
'<p><span class="keyword">Go</span>, <span class="trashword">lazy</span> <span class="trashword">fat</span> <span class="keyword">vixen</span>; <span class="keyword">be</span> <span class="keyword">shrewd</span>, <span class="keyword">jump</span> <span class="trashword">quick</span>.</p>',
'<p><span class="keyword">When</span> <span class="keyword">zombies</span> <span class="keyword">arrive</span>, <span class="trashword">quickly</span> <span class="keyword">fax</span> <span class="keyword">Judge</span> <span class="keyword">Pat</span>.</p>',
'<p><span class="trashword">Amazingly</span> <span class="keyword">few</span> <span class="keyword">discotheques</span> <span class="keyword">provide</span> <span class="keyword">jukeboxes</span>.</p>',
'<p><span class="trashword">Puzzled</span> <span class="keyword">women</span> <span class="keyword">bequeath</span> <span class="keyword">jerks</span> <span class="trashword">very</span> <span class="trashword">exotic</span> <span class="keyword">gifts</span>.</p>',
'<p><span class="trashword">Six</span> <span class="trashword">big</span> <span class="keyword">devils</span> <span class="keyword">from</span> <span class="keyword">Japan</span> <span class="trashword">quickly</span> <span class="keyword">forgot</span> <span class="trashword">how</span> <span class="keyword">to</span> <span class="keyword">waltz</span>.</p>',
'<p><span class="keyword">Jack</span> <span class="keyword">amazed</span> <span class="trashword">a</span> <span class="trashword">few</span> <span class="keyword">girls</span> <span class="keyword">by</span> <span class="keyword">dropping</span> <span class="trashword">the</span> <span class="trashword">antique</span> <span class="trashword">onyx</span> <span class="keyword">vase</span>.</p>',
'<p><span class="trashword">A</span> <span class="trashword">quick</span> <span class="keyword">movement</span> <span class="keyword">of</span> <span class="trashword">the</span> <span class="keyword">enemy</span> <span class="keyword">will</span> <span class="keyword">jeopardize</span> <span class="trashword">six</span> <span class="keyword">gunboats</span>.</p>',
'<p><span class="trashword">Jaded</span> <span class="keyword">zombies</span> <span class="keyword">acted</span> <span class="keyword">quaintly</span> <span class="keyword">but</span> <span class="trashword">kept</span> <span class="keyword">driving</span> <span class="trashword">their</span> <span class="keyword">oxen</span> <span class="trashword">forward</span>.</p>',
'<p>Game Over!</p>'
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
                trashwords[i].style.color = 'red';
            }, {once: true});
        }
        for (let i = 0; i < keywords.length; i++){
            keywords[i].addEventListener('click', function(){
                keywords[i].style.color = 'green';
                keywordNum += 1;
                calculateScore(keywords, trashwords, scoreDisplay);
            }, {once: true});
        }
        questionIndex += 1;
    }    
}

function calculateScore(keywords, trashwords, scoreDisplay){
    score = keywordNum / keywords.length * 100;
    scoreDisplay.innerText = "There are " + keywords.length + " keywords in this sentence. You have found " + score +" percent of them.";
    if (keywordNum == keywords.length){
        for (let i = 0; i < trashwords.length; i++){
            trashwords[i].style.visibility = 'hidden';
        }
        scoreDisplay.innerText = "Woohoo!";
        button.disabled = false;
        keywordNum = 0;
    }
}



game();

