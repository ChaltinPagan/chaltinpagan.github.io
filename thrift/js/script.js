$(document).ready(function() {
    // Animation for Stores page
    // Goodwill section will be displayed. Hide other sections.
    $('#goodwill').siblings('section').hide();

    // Goodwill button
    $('#goodwill-button').click(function() {
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
    $('#housing-works-button').click(function() {
        $('#housing-works').animate({
            height: 'toggle'
        }, 'slow');
        $('#housing-works').siblings('section').animate({
            height: 'hide'
        }, 'slow');
    });

    // Salvation Army button
    $('#salvation-army-button').click(function() {
        $('#salvation-army').animate({
            height: 'toggle'
        }, 'slow');
        $('#salvation-army').siblings('section').animate({
            height: 'hide'
        }, 'slow');
    });

    // Resources page
    // Kondo book info button
    $('#kondo-button').click(function() {
        $(this).next().toggle(1000);
    })

    // Coolirpa info button
    $('#coolirpa-button').click(function() {
        $(this).next().toggle(1000);
    })
});