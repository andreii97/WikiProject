$(document).ready(function () {


    var doc;
    $.getJSON("methods.json", function(json) {
        doc = json;
        console.log(doc); // this will show the info it in firebug console
    });



    var firstChoice;
    var secondChoice;
    var thirdChoice;
    $("#one").change(function () {
        firstChoice = $(this).children("option:selected").text();
        //alert("Great! Two more to go!");
    });
    $("#two").change(function () {
        secondChoice = $(this).children("option:selected").text();
        //alert("Great! One more to go!");
    });
    $("#three").change(function () {
        thirdChoice = $(this).children("option:selected").text();
        alert("Awesome!");
    });

    $('.btn').on('click', function () {
        alert("So you chose " + firstChoice + " as type of data, " + secondChoice + " as number of variables, and " + thirdChoice + " as blablabla. ");
        if (firstChoice === "Second Data" && secondChoice === "Second Number") {
            alert("We have got just the method for you! It's " + doc.content[0]);
            var answer = confirm('Do you want to read more about it ?');
            if (answer) {
                var info = doc.content[0];
                alert(info);
                if (window.confirm('Click ok for more infos on this method')) {
                    window.location.href = 'https://en.wikipedia.org/wiki/Linear_regression';
                }
                ;
            } else {
                alert("As you wish.");
            }

        }
    });
    $("#bla").on("click", function () {
        // Get the input and its value
        var firstValue = $("#texting").val();
        var secondValue = $("#description").val();

        // Output the value
        alert("So your method is called " + firstValue + " , and this is how you describe it: " + secondValue);
    });
});
























