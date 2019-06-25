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
            },
            {
                "Name" : "Pearson's correlation"
                "description" : "In statistics, the Pearson correlation coefficient (PCC, pronounced /ˈpɪərsən/), also referred to as Pearson's r, the Pearson product-moment correlation coefficient (PPMCC) or the bivariate correlation,[1] is a measure of the linear correlation between two variables X and Y." +
                    " According to the Cauchy–Schwarz inequality it has a value between +1 and −1, where 1 is total positive linear correlation, 0 is no linear correlation, and −1 is total negative linear correlation." +
                    " It is widely used in the sciences. It was developed by Karl Pearson from a related idea introduced by Francis Galton in the 1880s and for which the mathematical formula was derived and published by Auguste Bravais in 1844.[2][3][4][5][6] " +
                    "The naming of the coefficient is thus an example of Stigler's Law."
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

















