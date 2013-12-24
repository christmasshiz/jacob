
var allQuestions = [
	{
	    question: 'Who said, "My real father lost his head at Kings Landing. I made a choice, and I chose wrong."',
	    choices: ["Robb Stark", "Jon Snow", "Theon Greyjoy", "Arya Stark"],
	    answer: 2}
    ,{
        question: "What does Valar Morghulis mean?",
        choices: ["All men must die", "What is dead may never die", "Never say never", "All men must first live"],
        answer: 0}
    ,{
        question: "Which GOT character played Hermoine Granger's mom in Harry Potter?",
        choices: ["Melisandre", "Catelyn Stark", "Cersei Lannister", "Alerie Tyrell"],
        answer: 1}
    ,{
        question: 'Who said, "You knelt as boys, now rise as men of the Nights Watch."?',
        choices: ["Maester Aemon", "Eddard Stark", "Jeor Mormont", "Alliser Thorne"],
        answer: 2}
    ,{
        question: "What is Daenerys Targaryens brothers name?",
        choices: ["Varys", "Viserys", "Aerys", "Aegon"],
        answer: 1}
    ,{
        question: "What is a big fear of the Dothraki?",
        choices: ["Fire", "Salt water", "Heavy stone", "Crows"],
        answer: 1}
    ,{
        question: "How many swords make up the Iron Throne?",
        choices: ["500", "1000", "2000", "5000"],
        answer: 1}
    ,{
        question: "What were Jon Arryn's final words?",
        choices: ["Winter is coming", "Beware of the white walkers", "The seed is strong", "Beware the dwarf"],
        answer: 2}
    ,{
        question: "Who built the Iron Throne?",
        choices: ["Aerys the Mad King", "Aegon The Unlikely", "Aegon the Conqueror", "Aegon the Destroyer"],
        answer: 2}
    ,{
        question: "Which knight takes a lance through the neck while jousting?",
        choices: ["Ser Hugh of the Vale", "Ser Barristan Selmy", "Ser Ilyn Payne", "Ser Gregor Clegane"],
        answer: 0}
	];

var result = [
    {
	image: "http://i.imgur.com/7qJA9vR.gif",
      comment: " Wowzers!"}
    ,{
      image: "http://i.imgur.com/Cq3jZ.gif",
      comment:  " Not bad."}
    ,{
      image: "http://i.imgur.com/lqc3wQk.gif",
      comment: " You disappoint me child."}
    ,{
      image: "http://i.imgur.com/2QJZumC.png",
      comment: " Valar Morghulis."}
    ];


$(document).ready(function() {

var questionNumber = 0,
	totalCorrect = 0,
      optionFinal = 0;

var EndOfQuiz = function() {

      if(totalCorrect === allQuestions.length){
            optionFinal = 0;
      }else if(totalCorrect < allQuestions.length && totalCorrect >= (allQuestions.length*.7)){
            optionFinal = 1;
      }else if(totalCorrect <= (allQuestions.length*.6) && totalCorrect >= (allQuestions.length*.2)){
            optionFinal = 2;
      }else{
            optionFinal = 3;
      }

      $("#0, #1, #2, #3").remove();
      $("h2").text("You scored " + totalCorrect + " out of " + allQuestions.length + ". " + result[optionFinal].comment);
      $("#image").html('<img src=' + result[optionFinal].image + ' alt="">').hide().fadeIn(1000);
      $("#again").html("<button>Try Again</button>");

      $("#again").on("click", function() {
        window.location.href=window.location.href;
      });
};

var NextQuestion = function() {
      $("h2").text(allQuestions[questionNumber].question);

      $.each(allQuestions[questionNumber].choices, function(i, answers){
         $("#" + i).html(answers);
      });
};

var GOTQuiz = function() {
      $('h2').hide().fadeIn(400);

      if(questionNumber !== allQuestions.length){
          NextQuestion();
      }else{
          EndOfQuiz();
      }
};

var AnswerSelect = function(answerID) {
     var correctAnswer = allQuestions[questionNumber].answer;

     if (answerID === correctAnswer) {
         $("#" + answerID).addClass("correctStyle");
         totalCorrect++;
     }else{
        $("#" + answerID).addClass("incorrectStyle");
     }
    questionNumber++;
};

      NextQuestion();

	$("button").on("click", function(event) {
            var userAnswer = parseInt($(this).attr("id"));
            AnswerSelect(userAnswer);

		setTimeout(function() {
                $("button").removeClass("correctStyle");
                $("button").removeClass("incorrectStyle");
                 GOTQuiz();
             }, 1500)
	});

});

