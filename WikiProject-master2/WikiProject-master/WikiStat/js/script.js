$(document).ready(function () {


    var doc;
    $.getJSON("methods.json", function(json) {
        doc = json;
        console.log(doc); // this will show the info it in firebug console
    });
    var firstChoice;  //variables
    var secondChoice;  // outcome type
    var thirdChoice;  // predictor variables
    var fourthChoice;  // predictor type
    var fifthChoice;   // meet assumptions
    var categorical1;   //
    var categorical2;   //


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
        //alert("Awesome!");
    });
    $("#four").change(function () {
        fourthChoice = $(this).children("option:selected").text();
        //alert("Awesome!");
    });
    $("#five").change(function () {
        fifthChoice = $(this).children("option:selected").text();
        //alert("Awesome!");
    });
    $("#catg").on('click', function () {
        alert("Get ready for more questions!");
        $(".fourthQuestion").append("<h3>How many categories</h3>" + "<select id='hidden'><option>Two</option><option>More Than Two</option></select>");
        categorical1 = $(this).children("option:selected").text();
        $(".fourthQuestion").append("<h3>Same Participants or Different Used in Each Category?</h3>" + "<select id='hidden1'><option>Different</option><option>Same</option></select>");
        categorical2 = $(this).children("option:selected").text();
    });

    $('.btn').on('click', function () {
        alert("So you chose " + firstChoice + " as number of variables, " + secondChoice + " as outcome type, and " + thirdChoice + " as number of predictor variables. The predictor is " + fourthChoice);
        if(categorical1 != null && categorical2 != null) {
            alert("Since you have chosen a categorical predictor, there will be " + categorical1 + "categories, and the participants will be " + categorical2 + " in each category." );
        }
        else {
            alert("That's it! We are now analyzing your inputs and trying to find the best methods for you!");
            if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Continuous" && fifthChoice === "Yes") {
                alert("Great! The method you should use is " + doc.content[1].Method + ". Do you want to read more about it? ");
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
























