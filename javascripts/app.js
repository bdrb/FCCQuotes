$(document).ready(function () {

    function quoteReady(newQuote, quoteDiv) {
     if(newQuote.quote.length > 0) {
       quoteDiv.text(newQuote.quote);
     }
    }

    var $quoteDiv = $("#res");  
    
    $("#getQuote").on('click', function () {
        WikiquoteApi.openSearch($("#query-title").val(), //"George Washington",
            function (results) {
                $("#author").text(results[0]);
                WikiquoteApi.getRandomQuote(results[0],
                    function (newQuote) {
                        quoteReady(newQuote, $quoteDiv);
                    },
                    function (msg) {
                        alert(msg);
                    }
                );
            },
            function (msg) {
                $("#author").text("error:" + results[0]);
                alert(msg);
            }
        );
    })
});
