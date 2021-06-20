$(document).ready(function() {
    $("form#survey").submit(function(event) {
        const question1 = $("input[name='education']:checked").val();
        const question2 = $("input[name='problem']:checked").val();
        const question3 = $("input[name='learn']:checked").val();
        const question4 = $("input[name= 'personality']:checked").val();
        const question5 = $("input[name='projectChoice']:checked").val();

        if (question1) {
            alert("Your educational level is - " + question1);
        }
        //if (question2) {
        // alert("Your approach to solving problems is " + " " + question2);
        //}
        //if (question3) {
        //alert(" You learn the best by" + " " + question3 + " " + "process");
        //}
        //if (question4) {
        // alert("Your personality type is:" + question4);
        //}
        //if (question5) {
        // alert("Your choice for your project is:" + "  " + question5);
        //}
        $("form#survey").hide();
        $("#results").show();
        event.preventDefault();


    });

});