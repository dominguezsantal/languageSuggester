$(document).ready(function() {
    $("input[type='button']").click(function() {
        var educationValue = $("input[name='education']:checked").val();
        var problemValue = $("input[name='problem']:checked").val();
        var learnValue = $("input[name='learn']:checked").val();
        var personalityValue = $("input[name= 'personality']:checked").val();
        var projectValue = $("input[name='projectChoice']:checked").val();

        if (educationValue) {
            alert("Your educational level is - " + educationValue);
        }
        if (problemValue) {
            alert("Your approach to solving problems is " + " " + problemValue);
        }
        if (learnValue) {
            alert(" You learn the best by" + " " + learnValue + " " + "process");
        }
        if (personalityValue) {
            alert("Your personality type is:" + personalityValue);
        }
        if (projectValue) {
            alert("Your choice for your project is:" + "  " + projectValue);
        }


        //$("label").toggle();
        //$("label").show();


    });
});