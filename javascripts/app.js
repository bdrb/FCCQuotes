$(document).ready(function () {
    $("#getQuote").on('click', function () {
        $("#res1").text("newQuote.quote");
        WikiquoteApi.openSearch("George Washington",
            function (results) {
                $("msg").text(results[0]);
                // Get quote
                WikiquoteApi.getRandomQuote($("msg").text(),
                    function (newQuote) {
                        $("#res").text(newQuote.quote);
                    },
                    function (msg) {
                        alert(msg);
                    }
                );
            },
            function (msg) {
                alert(msg);
            }
        );
    })
});