$(document).ready(function () {
    var doc;
    $.getJSON("methods.json", function(json) {
        doc = json;
        /*$.each(json.content, function(i, f) {
            $('body').append('<p><span><h4>Method:</h4></span> ' + f.Method + '<br><span><h4>Description:</h4></span> ' + f.Description + '</p>');
        });*/
    });
    $("#linearReg").one('click', function () {
        console.log(doc.content[0]);
        $('body').append('<p><span><h4>Method:</h4></span> ' + doc.content[0].Method + '<br><span><h4>Description:</h4></span> ' + doc.content[0].Description + '</p>');
    });
    $("#pearson").one('click', function () {
        console.log(doc.content[1]);
        $('body').append('<p><span><h4>Method:</h4></span> ' + doc.content[1].Method + '<br><span><h4>Description:</h4></span> ' + doc.content[1].Description + '</p>');
    });
    $("#chi").one('click', function () {
        console.log(doc.content[2]);
        $('body').append('<p><span><h4>Method:</h4></span> ' + doc.content[2].Method + '<br><span><h4>Description:</h4></span> ' + doc.content[2].Description + '</p>');
    });
});