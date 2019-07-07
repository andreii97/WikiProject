$(document).ready(function () {
    var doc;
    $.getJSON("methods.json", function(json) {
        doc = json;
        /*$.each(json.content, function(i, f) {
            $('body').append('<p><span><h4>Method:</h4></span> ' + f.Method + '<br><span><h4>Description:</h4></span> ' + f.Description + '</p>');
        });*/
    });
});