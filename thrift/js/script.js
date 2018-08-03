// jsSocials
$("#shareIcons").jsSocials({
    showLabel: false,
    shares: [
        {
            share: 'email',
            logo: "far fa-envelope"
        },
        {
            share: 'twitter',
            logo: "fab fa-twitter"
        },
        {
            share: 'facebook',
            logo: "fab fa-facebook-f"
        },
        {
            share: 'googleplus',
            logo: "fab fa-google-plus-g"
        },
        {
            share: 'linkedin',
            logo: "fab fa-linkedin-in"
        },
        {
            share: 'pinterest',
            logo: "fab fa-pinterest-p"
        },
        {
            share: 'whatsapp',
            logo: "fab fa-whatsapp"
        }
    ]
});

// My JQuery
$(document).ready(function () {
    // Animation for Stores page
    // Goodwill section will be visibilityed. Hide other sections.
    $('#goodwill').siblings('section').hide();

    // Goodwill button
    $('#goodwill-button').click(function () {
        // $('#housing-works').hide();
        // $('#salvation-army').hide();
        $('#goodwill').animate({
            height: 'toggle'
        }, 'slow');
        $('#goodwill').siblings('section').animate({
            height: 'hide'
        }, 'slow')
    });

    // Housing Works button
    $('#housing-works-button').click(function () {
        $('#housing-works').animate({
            height: 'toggle'
        }, 'slow');
        $('#housing-works').siblings('section').animate({
            height: 'hide'
        }, 'slow');
    });

    // Salvation Army button
    $('#salvation-army-button').click(function () {
        $('#salvation-army').animate({
            height: 'toggle'
        }, 'slow');
        $('#salvation-army').siblings('section').animate({
            height: 'hide'
        }, 'slow');
    });

    // Resources page
    $(".resources-info-button").click(event => {
        $(event.currentTarget).next().toggle('slow');
    })
});

// For Quiz page
let quiz = document.getElementsByClassName('quiz');
let q1 = document.getElementsByName('qq-one');
let q2 = document.getElementsByName('qq-two');
let q3 = document.getElementsByName('qq-three');
let alertSuccess = document.getElementsByClassName('alert-success');
let alertWarning = document.getElementsByClassName('alert-warning');
let sources = document.getElementsByClassName('source');
let quizBtn = document.getElementById('quiz-submit');
let quizAnswers = [q1[0], q2[1], q3[2]];

function isChecked() {
    for (var i = 0; i < quizAnswers.length; i++) {
        // If correct answer chosen
        if (quizAnswers[i].checked) {
            // Dispaly success alert
            alertSuccess[i].style.display = 'inline-block';
            // Hide warning alert
            alertWarning[i].style.display = 'none';
            // Display link to source
            sources[i].style.display = 'initial';
        } else {
            // If wrong answer chosen
            // Hide success alert
            alertSuccess[i].style.display = 'none';
            // Display warning alert
            alertWarning[i].style.display = 'inline-block';
            // Hide link to source
            sources[i].style.display = 'none';
        }
    }
}

quizBtn.addEventListener('click', () => {
    isChecked();
})