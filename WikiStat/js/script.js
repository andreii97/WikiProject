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
    var categorical1;   //  categories
    var categorical2;   //  same/different


    $("#one").change(function () {
        firstChoice = $(this).children("option:selected").text();
        //alert("Great! Two more to go!");
        console.log("firstChoice: " + firstChoice);
    });
    $("#two").change(function () {
        secondChoice = $(this).children("option:selected").text();
        //alert("Great! One more to go!");
        console.log("secondChoice: " + secondChoice);
    });
    $("#three").change(function () {
        thirdChoice = $(this).children("option:selected").text();
        //alert("Awesome!");
        console.log("thirdChoice: " + thirdChoice);
    });
    $("#four").change(function () {
        fourthChoice = $(this).children("option:selected").text();
        //alert("Awesome!");
        console.log("fourthChoice: " + fourthChoice);
    });
    $("#five").change(function () {
        fifthChoice = $(this).children("option:selected").text();
        //alert("Awesome!");
        console.log("fifthChoice: " + fifthChoice);
    });
    $("#catg").on('click', function () {
        alert("Get ready for more questions!");
        $(".fourthQuestion").append("<h3>How many categories</h3>" + "<select id='hidden'><option value=\"\" disabled selected>Select your option</option><option>Two</option><option>More Than Two</option></select>");
        $("#hidden").change(function () {
            categorical1 = $(this).children("option:selected").text();
            console.log(categorical1);
        });
        $(".fourthQuestion").append("<h3>Same Participants or Different Used in Each Category?</h3>" + "<select id='hidden1'><option value=\"\" disabled selected>Select your option</option><option>Different</option><option>Same</option><option>Both</option></select>");
        $("#hidden1").change(function () {
            categorical2 = $(this).children("option:selected").text();
            console.log(categorical2);
        });
    });

    $('.SubmitButton').on('click', function () {
        alert("So you chose " + firstChoice + " as number of variables, " + secondChoice + " as outcome type, and " + thirdChoice + " as number of predictor variables. The predictor is " + fourthChoice);
        if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "Two Or More" && fourthChoice === "Both Categorical and Continuous" && fifthChoice === "Yes") {
            //alert("Great! Take a look at Multiple Regression!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/ancova.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Categorical" && fifthChoice === "Yes" && categorical1 === "Two" && categorical2 === "Same") {
            //alert("Great! Take a look at Dependent t-test!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/dtt.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "Two Or More" && secondChoice === "Continuous" && thirdChoice === "Two Or More" && fourthChoice === "Categorical" && fifthChoice === "Yes") {
            //alert("Great! Take a look at Factorial MANOVA!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/facmanova.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "Two Or More" && fourthChoice === "Categorical" && fifthChoice === "Yes" &&  categorical2 === "Both") {
            //alert("Great! Take a look at Factorial Mixed ANOVA!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/facmix.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "Two Or More" && fourthChoice === "Categorical" && fifthChoice === "Yes" && categorical2 === "Same") {
            //alert("Great! Take a look at Factorial Repeated Measures ANOVA");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/facrep.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Categorical" && fifthChoice === "No" && categorical1 === "More Than Two" && categorical2 === "Same") {
            //alert("Great! Take a look at Friedman's ANOVA!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/fried.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "Two Or More" && fourthChoice === "Categorical" && fifthChoice === "Yes" && categorical2 === "Different") {
            //alert("Great! Take a look at Independent Factorial ANOVA!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/indepfac.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Categorical" && fifthChoice === "Yes" && categorical1 === "Two" && categorical2 === "Different") {
            //alert("Great! Take a look at Independent t-test!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/itt.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Categorical" && fifthChoice === "No" && categorical1 === "More Than Two" && categorical2 === "Different") {
            //alert("Great! Take a look at Kruskall-Wallis Test!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/kwt.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Categorical" && thirdChoice === "One" && fourthChoice === "Categorical" && categorical2 === "Different") {
            //alert("Great! Take a look at Pearson Chi-Square!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/likeratio.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "" && secondChoice === "" && thirdChoice === "" && fourthChoice === "" && fifthChoice === "" && categorical1 === "" && categorical2 === "") {
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href=''\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Categorical" && thirdChoice === "Two Or More" && (fourthChoice === "Continuous" || fourthChoice === "Both Categorical and Continuous")) {
            //alert("Great! Take a look at Logistic Regression!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/logireg.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Categorical" && thirdChoice === "Two Or More" && fourthChoice === "Categorical" && categorical2 === "Different") {
            //alert("Great! Take a look at Loglinear Analysis!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/loglin.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Categorical" && thirdChoice === "One" && fourthChoice === "Continuous") {
            //alert("Great! Take a look at Point-Biserial Correlation!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/logreg.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "Two Or More" && secondChoice === "Continuous" && thirdChoice === "Two Or More" && fourthChoice === "Both Categorical and Continuous" && fifthChoice === "Yes") {
            //alert("Great! Take a look at MANCOVA!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/mancova.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "Two Or More" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Categorical" && fifthChoice === "Yes") {
            //alert("Great! Take a look at MANOVA!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/manova.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "Two Or More" && fourthChoice === "Continuous" && fifthChoice === "Yes") {
            //alert("Great! Take a look at Multiple Regression");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href=''\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Categorical" && fifthChoice === "No" && categorical1 === "Two" && categorical2 === "Different") {
            //alert("Great! Take a look at Mann-Whitney Test");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/mwt.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Categorical" && fifthChoice === "Yes" && categorical1 === "More Than Two" && categorical2 === "Same") {
            //alert("Great! Take a look at One Way Repeated Measures ANOVA!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/orm.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Categorical" && fifthChoice === "Yes" && categorical1 === "More Than Two" && categorical2 === "Different") {
            //alert("Great! Take a look at One Way Independent ANOVA!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/owiANO.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Continuous" && fifthChoice === "Yes") {
            //alert("Great! Take a look at Pearson Correlation or Regression!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/pearson.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Continuous" && fifthChoice === "No") {
            //alert("Great! Take a look at Spearman's Correlation or Kendall's Tau!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/spear.html'\">Go to the Method</button>");
        }
        else if(firstChoice === "One" && secondChoice === "Continuous" && thirdChoice === "One" && fourthChoice === "Categorical" && fifthChoice === "No" && categorical1 === "Two" && categorical2 === "Same") {
            //alert("Great! Take a look at Wilcoxon Matched-Pairs Test!");
            $('.SubmitButton').after("<button class='SubmitButton' onclick=\"window.location.href='Methods/wmpt.html'\">Go to the Method</button>");
        }
        else {
            alert("Well that's embarrassing, sorry we couldn't help you:(");
        }
    });
    $('.submitting').on("click", function () {
        // Get the input and its value
        var firstValue = $("#MethodName").val();
        var secondValue = $("#description").val();
        // Output the value
        //alert("So your method is called " + firstValue + " , and this is how you describe it: " + secondValue);
    });
});
























