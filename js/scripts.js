$(document).ready(function() {
    $("input[type='button']").click(function() {
        const question1Input = $("input[name='education']:checked").val();
        const question2 = $("input[name='problem']:checked").val();
        const question3 = $("input[name='learn']:checked").val();
        const question4 = $("input[name= 'personality']:checked").val();
        const question5 = $("input[name='projectChoice']:checked").val();

        function questionOne(question1) {
            let question1Input = [{ opt1: "ms", opt2: "hs", opt3: "college" }];
            if (question1Input === opt1) {
                return uxDesign;
            } else if (question1Input === opt2) {
                return ruby;
            } else if (question1Input === opt3) {
                return php;
            } else {
                alert("You forgot to answer the question!");
            }
        }



        //Languages based on choices logic
        //This is to convert the string values from each question from a string to an integer
        // let uxDesign = parseInt(0)
        // let ruby = parseInt(0)
        //let php = parseInt(0)
        //let js = parseInt(0)
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


        //$("label").toggle();
        //$("label").show();

    });
});