$(document).ready(function () {


    myObj = {

        "Method":[

            {
                 "Name": "Linear Regression",
                  "description" : "In statistics, linear regression is a linear approach to modeling the relationship between a scalar response (or dependent variable) and one or more explanatory variables (or independent variables). " +
                      "The case of one explanatory variable is called simple linear regression. For more than one explanatory variable, the process is called multiple linear regression.[1] " +
                      "This term is distinct from multivariate linear regression, where multiple correlated dependent variables are predicted, rather than a single scalar variable.[2]"
            } ,
            {
                "Name": "Chi-squared Test",
                "description" : "A chi-squared test, also written as χ2 test, is any statistical hypothesis test where the sampling distribution of the test statistic is a chi-squared distribution when the null hypothesis is true. " +
                    "Without other qualification, 'chi-squared test' often is used as short for Pearson's chi-squared test. " +
                    "The chi-squared test is used to determine whether there is a significant difference between the expected frequencies and the observed frequencies in one or more categories."
            }
            ]
    };


    x = myObj.Method[0].Name;
    y = myObj.Method[1].Name;
    LinearRegression = myObj.Method[0].description;
    ChiSquaredTest= myObj.Method[1].description;



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

    $('.btn').on('click',function () {
        alert("So you chose " + firstChoice + " as type of data, " + secondChoice + " as number of variables, and " + thirdChoice + " as blablabla. ");
        if(firstChoice === "Second Data" && secondChoice === "Second Number") {
            alert("We have got just the method for you! It's " + x);
            var answer = confirm('Do you want to read more about it ?');
            if (answer)
            {
                alert(LinearRegression);
                if (window.confirm('Click ok for more infos on this method'))
                {
                    window.location.href='https://en.wikipedia.org/wiki/Linear_regression';
                };
            }
            else
            {
                alert("As you wish.");
            }

        }
    });
});

















