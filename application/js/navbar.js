/* Dropdown navbar */
$(document).ready(function() {
    $(".navbar .dropdown-toggle").click(function() {
        $(".navbar .dropdown-menu").slideToggle();
    });
});

/* Product Page */

// heart icon
$(document).ready(function() {
    $(".like i")
        .click(function() {
            $(".like i").css({ "color": "red", "transition": "0.25s" });
        })
        .dblclick(function() {
            $(".like i").css("color", "black");
        });
});

/* Email validate (footer + subscribe section) */
function validEmail() {
    var email = document.getElementById('email');

    var email_pattern = /^[a-zA-Z]\w*(\.\w+)*\@\w+(\.\w{2,3})+$/;
    if (email_pattern.test(email.value) == false) {
        alert('Invalid Email Address. Please try again');
        email.focus();
        return false;
    }

    alert('Subscribed Successfully');
    return true;
}