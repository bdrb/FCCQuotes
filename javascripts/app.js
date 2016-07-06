var names = ["john lennon","bob marley","bob dylan"];

$(document).ready(function () {

    function quoteReady(newQuote, quoteDiv) {
     if(newQuote.quote.length > 0) {
       quoteDiv.text(newQuote.quote);
     }
    }
    var name = names[Math.floor(Math.random()*names.length)];
    $("#query-title").val(name);
    var $quoteDiv = $("#quote");  

    var getQuote = function () {

        var $queryTitle = $("#query-title").val();
        var $author = $("#author");
        var $quote = $("#quote");
        var $tweet = $("#tweet");
        
        WikiquoteApi.openSearch($queryTitle, //"George Washington",
            function (results) {
                WikiquoteApi.getRandomQuote(results[0],
                    function (newQuote) {
                        quoteReady(newQuote, $quoteDiv);
                        $tweet.attr('href','https://twitter.com/intent/tweet?text='+newQuote.quote + ' (' + results[0] + ')');
                    },
                    function (msg) {
                        alert(msg);
                    }
                );
                $author.text(results[0]);
                
            },
            function (msg) {
                $quote.text("error:" + msg + " with result: " + results[0]);
                alert(msg);
            }
        );
    }    
    $("#get-quote").on('click', getQuote);

    getQuote();
    
});
