$(document).ready(function() {
    $("input[type='button']").click(function() {
        var educationValue = $("input[name='education']:checked").val();
        if (educationValue) {
            alert("Your educational level is - " + educationValue);
        }
    });
});