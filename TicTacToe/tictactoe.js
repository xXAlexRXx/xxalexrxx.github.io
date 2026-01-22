winConditions = [
    [0, 1, 2], /* horizontal */
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6], /* vertical */
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8], /* diagonal */
    [2, 4, 6]
];

turn = 1;

$(document).ready(function () {
        $(".cell").click(function () {
            if ($(this).text() === '') {
                if (turn % 2 === 1) {
                    $(this).text('X');
                } else {
                    $(this).text('O');
                }
                turn++;
            } else {
                alert("Cell already taken! Choose another.");
            }
            if (turn > 5) {
                for (var i = 0; i < winConditions.length; i++) {
                    var condition = winConditions[i];
                    if ($(".cell").eq(condition[0]).text() == $(".cell").eq(condition[1]).text() &&
                    $(".cell").eq(condition[1]).text() == $(".cell").eq(condition[2]).text() &&
                    $(".cell").eq(condition[0]).text() != '') {
                        $("#result").text($(".cell").eq(condition[0]).text() + " wins!").show();
                        $(".cell").off("click");
                        $(".cell").eq(condition[0]).addClass("winner");
                        $(".cell").eq(condition[1]).addClass("winner");
                        $(".cell").eq(condition[2]).addClass("winner");
                        return;
                    }

                }
            }
            if (turn === 10) {
                $("#result").text("It's a draw!").show();
            }
        });
        $("#reset").click(function () {
            location.reload();
        });
});