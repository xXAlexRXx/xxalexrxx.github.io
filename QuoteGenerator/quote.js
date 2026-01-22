const quotes = [
    "Dreams grow louder when you finally start listening to yourself.",
    "Momentum is built from moments no one else sees.",
    "Courage is choosing to move before certainty arrives.",
    "Patience is the secret ingredient behind every overnight success.",
    "Your mindset is the compass; your habits are the path.",
    "The world changes a little every time you choose optimism.",
    "Growth rarely feels comfortable, but it always feels worth it afterward.",
    "What you repeat becomes what you believe.",
    "A clear purpose can outshine a thousand doubts.",
    "Progress is a partnership between effort and time."
];

let randomIndex;
let lastIndex = -1;

$(document).ready(function () {
    $("#generateBtn").click(function() {
        randomIndex = Math.floor(Math.random() * quotes.length);
        while (randomIndex === lastIndex) {
            randomIndex = Math.floor(Math.random() * quotes.length);
        }
        lastIndex = randomIndex;
        $("#quote").text(`"${quotes[randomIndex]}"`);
    });
});