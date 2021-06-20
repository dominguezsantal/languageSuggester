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

        //coding language logic
        //used the sort method to re-arrange the languages stated in my language array.
        //also used the parseInt function to convert my variables into int as functionality of simplyfing the users's language choice from string to int in my for loop function.  
        let css = parseInt(0)
        let python = parseInt(0)
        let ruby = parseInt(0)
        let php = parseInt(0)
        let js = parseInt(0)

        let languages = [css, python, ruby, php, js]
        languages.sort((a, b) => b - a);

        for (let i = 0; i < 5; i += 1) {
            if (languages[i] === css) {
                $("#lanChoice").append(`<li>Based on your answer, your coding language is#${i + 1} is css</li>`);
            } else if (languages[i] === python) {
                $("#lanChoice").append(`<li>Based on your answer, your coding language is #${i + 1} is python</li>`)
            } else if (languages[i] === ruby) {
                $("#lanChoice").append(`<li>Based on your answer, your coding language is #${i + 1} is ruby</li>`);
            } else if (languages[i] === php) {
                $("#lanChoice").append(`<li>Based on your answer, your coding language is #${i + 1} is php</li>`);
            } else if (languages[i] === js) {
                $("#lanChoice").append(`<li>Based on your answer, your coding language is #${i + 1} is js</li>`);
            }
        }

        $("form#survey").hide();
        $("#results").show();
        event.preventDefault();


    });

});