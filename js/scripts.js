$(document).ready(function() {
    $("form#survey").submit(function(event) {
        $("form#survey").hide();
        $("results").show();
        $("img").fadeOut(1000);
        $("img").fadeIn(1000);
        $("img").show();

        event.preventDefault();
        //radio buttons value
        const question1 = $("input:radio[name='education']:checked").val();
        const question3 = $("input:radio[name='problem']:checked").val();
        const question4 = $("input:radio[name='learn']:checked").val();
        const question5 = $("input:radio[name= 'personality']:checked").val();

        //functionality of making language array from string to int
        let javaScript = parseInt(0);
        let css = parseInt(0);
        let python = parseInt(0);
        let php = parseInt(0);

        //language array and for loop
        let language = [css, javaScript, php, python]
        language.sort((a, b) => b - a);

        for (let i = 0; i < 5; i += 1) {
            if (language[i] === javaScript) {
                $("ul#lanChoice").append(`<li>First recommendation #${i + 1} is javaScript </li>`);
            } else if (language[i] === css) {
                $("ul#lanChoice").append(`<li>Second recommendation #${i + 1} is css </li>`);
            } else if (language[i] === php) {
                $("ul#lanChoice").append(`<li>Third recommendation #${i + 1} is php </li>`);
            } else if (language[i] === python) {
                $("ul#lanChoice").append(`<li>Fourth recommendation #${i + 1} is python </li>`);
            }
        }

        //functionality of each question matching each it's individual value with language
        if (question1 === "ms") {
            css += 5;
        } else if (question1 === "hs") {
            javaScript += 5;
        } else if (question1 === "college") {
            php += 5;
        } else {
            alert("Answer the question please!");
        }


        if (question2 === "research") {
            javaScript += 4;
        } else if (question2 === "identifyProblem") {
            php += 4;
        } else if (question2 === "visualize") {
            css += 4;
        } else if (question2 === "test") {
            python += 4;
        } else {
            alert("Answer the question please!");
        }

        if (question3 === "visual") {
            css += 3;
        } else if (question3 === "kinestetic") {
            javaScript += 3;
        } else if (question3 === "read") {
            php += 3;
        } else if (question3 === "aural") {
            python += 3;
        } else {
            alert("Answer the question please!");
        }

        if (question4 === "creative") {
            css += 2;
        } else if (question4 === "logic") {
            php += 2;
        } else if (question4 === "leader") {
            python += 2;
        } else if (question4 === "handsOn") {
            javaScript += 2;
        } else {
            alert("Answer the question please!");
        }

        if (question5 === "gameSite") {
            css += 1;
        } else if (question5 === "movieSite") {
            javaScript += 1;
        } else if (question5 === "ispSite") {
            php += 1;
        } else if (question5 === "textSite") {
            python += 1;
        } else {
            alert("Answer the question please!");
        }
    });
});