$(document).ready(function() {
    $("form#survey").submit(function(event) {

        const question1 = $("input:radio[name='education']:checked").val();
        const question2 = $("input:radio[name='problem']:checked").val();
        const question3 = $("input:radio[name='learn']:checked").val();
        const question4 = $("input:radio[name= 'personality']:checked").val();
        const question5 = $("input:radio[name='projectChoice']:checked").val();

        let javaScript = parseInt(0);
        let css = parseInt(0);
        let python = parseInt(0);
        let php = (parseInt(0))


        if (question1 === "ms") {
            alert("css");
        } else if (question1 === "hs") {
            alert("javaScript");
        } else if (question1 === "college") {
            alert("php");
        } else {
            alert("Answer the question please!");
        }


        if (question2 === "research") {
            alert("javaScript");
        } else if (question2 === "identifyProblem") {
            alert("php");
        } else if (question2 === "visualize") {
            alert("css");
        } else if (question2 === "test") {
            alert("python");
        } else {
            alert("Answer the question please!");
        }

        if (question3 === "visual") {
            alert("css");
        } else if (question3 === "kinestetic") {
            alert("javaScript");
        } else if (question2 === "read") {
            alert("php");
        } else if (question2 === "aural") {
            alert("python");
        } else {
            alert("Answer the question please!");
        }

        if (question4 === "creative") {
            alert("css");
        } else if (question3 === "logic") {
            alert("php");
        } else if (question2 === "leader") {
            alert("python");
        } else if (question2 === "handsOn") {
            alert("javaScript");
        } else {
            alert("Answer the question please!");
        }

        if (question5 === "gameSite") {
            alert("css");
        } else if (question3 === "movieSite") {
            alert("javaScript");
        } else if (question2 === "ispSite") {
            alert("php");
        } else if (question2 === "textSite") {
            alert("python");
        } else {
            alert("Answer the question please!");
        }























        $("form#survey").hide();
        $("#answer").show();

        event.preventDefault();

    });
});