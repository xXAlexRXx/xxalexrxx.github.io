questions = [{
    question: "What year did World War 2 start?",
    options: [1943, 1939, 1915, 1963],
    correct: 1
},

{
    question: "Which planet is known for its prominent ring system?",
    options: ["Earth", "Mars", "Mercury", "Saturn"],
    correct: 3
},

{
    question: "Which animal is the largest land mammal?",
    options: ["Giraffe", "Hippopotamus", "Elephant", "Rhino"],
    correct: 2
},

{
    question: "Which gas do plants primarily absorb for photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    correct: 0
},

{
    question: "Which continent is the Sahara Desert located on?",
    options: ["Asia", "Australia", "Africa", "South America"],
    correct: 2
}];

questionIndex = 0;
correctAnswers = 0;

$(document).ready(function () {
    $("#startBtn").click(function () {
        $("#welcome").empty();
        questions = shuffle(questions);
        questionIndex = 0;
        displayQuestion();
        $("#questionArea").show();

        function shuffle(array) { //Fisher-Yates shuffle algorithm
            for (let i = array.length - 1; i > 0; i--) {
                const random = Math.floor(Math.random() * (i + 1));
                [array[i], array[random]] = [array[random], array[i]];
            }
            return array;
        }
    });

    $("#submitBtn").click(function () {
        if (!$("input[name='answer']:checked").val()) {
            alert("Please select an answer before submitting.");
            return;
        }
        $("#submitBtn").hide();
        selectedAnswer = $("input[name='answer']:checked").val();
        correctAnswer = questions[questionIndex - 1].correct;
        $("label[for=" + $("input[value='" + correctAnswer + "']").attr("id") + "]").css("background-color", "hsla(120, 58%, 30%, 1.00)");
        if (selectedAnswer == correctAnswer) {
            correctAnswers++;
            $("#answerBox").text("Correct!").show();
            $("#answerBox").css("color", "hsla(125, 100%, 50%, 1.00)");
        } else {
            $("#answerBox").text("Incorrect!").show();
            $("#answerBox").css("color", "hsla(0, 100%, 50%, 1.00)");   
            $("label[for=" + $("input[value='" + selectedAnswer + "']").attr("id") + "]").css("background-color", "hsla(0, 58%, 32%, 1.00)");
        }
        $("input[name='answer']").prop("disabled", true);
        $("#nextQuestionBtn").show();
    });

    $("#nextQuestionBtn").click(function () {
        $("#nextQuestionBtn").hide();
        $("#submitBtn").show();
        $("input[name='answer']").prop("checked", false);
        $("input[name='answer']").prop("disabled", false);
        $("label").css("background-color", "");

        $("#answerBox").hide();
        if (questionIndex < questions.length) {
            displayQuestion();
        } else {
            $("#submitBtn").hide();
            $("#answerBox").hide();
            $(".answer-row").hide();
            $("#quizQuestion").text(`Quiz Over! You scored ${correctAnswers} out of ${questions.length}.`);
            $("#restartQuizBtn").show().click(function () {
                location.reload();
            });
        }
    });

    function displayQuestion() {
        $("#quizQuestion").text(questions[questionIndex].question);
        $("label[for='answerOne'").text(questions[questionIndex].options[0]);
        $("label[for='answerTwo'").text(questions[questionIndex].options[1]);
        $("label[for='answerThree'").text(questions[questionIndex].options[2]);
        $("label[for='answerFour'").text(questions[questionIndex].options[3]);
        questionIndex++;
    };
});