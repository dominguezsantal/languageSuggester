$(document).ready(function() {
    $("form#survey").submit(function(event) {
        event.preventDefault();
        //radio buttons value
        const question1 = $("input:radio[name='education']:checked").val();
        const question2 = $("input:radio[name='problem']:checked").val();
        const question3 = $("input:radio[name='learn']:checked").val();
        const question4 = $("input:checkbox[name= 'personality']:checked").val();
        const question5 = $("input:radio[name= 'projectChoice']:checked").val();

        //functionality of making language array from string to int
        let javaScript = parseInt(0);
        let css = parseInt(0);
        let python = parseInt(0);
        let php = parseInt(0);

        //Created a questionArray for all questions
        //One for loop/if else for sorting each question and uphold to val type.  
        questionArray = [question1, question2, question3, question4, question5]

        questionArray.forEach(function(question) {
            let questionValue = ["val1", "val2", "val3", "val4"]
            let value = parseInt(questionValue);

            for (value = 0; value <= 5; value += 1) {
                if (question === "val1") {
                    javaScript += 5;
                } else if (question === "val2") {
                    css += 5;
                } else if (question === "val3") {
                    python += 5;
                } else if (question === "val4") {
                    php += 5;
                } else {
                    alert("Answer the question please!");
                    return;
                }
            }

        })

        //language array and for loop
        let language = [css, javaScript, php, python]
        language.sort((a, b) => b - a);
        let chosenLanguage = '';

        for (let i = 0; i < 5; i += 1) {
            if (language[i] === javaScript) {
                $("ul#lanChoice").append(`<li>Recommendation #${i + 1} is javaScript </li>`);
                chosenLanguage = 'javaScript';
            } else if (language[i] === css) {
                $("ul#lanChoice").append(`<li>Recommendation #${i + 1} is css </li>`);
                chosenLanguage = 'css';
            } else if (language[i] === php) {
                $("ul#lanChoice").append(`<li>Recommendation #${i + 1} is php </li>`);
                chosenLanguage = 'php';
            } else if (language[i] === python) {
                $("ul#lanChoice").append(`<li>Recommendation #${i + 1} is python </li>`);
                chosenLanguage = 'python';
            }
        }

        $("form#survey").hide();
        $("results").show();
        $("img").fadeOut(1000);
        $("img#" + chosenLanguage).fadeIn(1000);
        $("img#" + chosenLanguage).show();
    });
});