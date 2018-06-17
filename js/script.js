$(document).ready(function() {
    $(".product").hide();
    var current_time = new Date();
    var day = current_time.getDay();
    var time = current_time.getHours();
    var year_copy;

    var office_time = checkOfficeHours(day, time);
    if (office_time) {
        $(".phone").show()
    } else {
        $(".phone").hide();
    }
    // check office hours
    $.ajax({
        url: "https://www.algaecal.com/wp-json/acf/v3/options/options ",
        method: 'GET',
    }).done(function(response) {
        $(".talk span").html(response.acf.default_phone_number);
        $("#call").attr("href", "tel:+" + response.acf.default_phone_number);
        year_copy = response.acf.seven_year_guarantee_seal;
    });
    // call END 
    window._wq = window._wq || [];
    _wq.push({
        id: "cecdwaq3dz",
        onReady: function(video) {

            video.bind("crosstime", 133, function() {
                $(".product").fadeIn();

            })
        }
    });
    // video END
    $("#buynow").click(function(e) {
        e.preventDefault();

        var id = $(this).attr("href");
        var offset = $(id).offset();
        $("html, body").animate({
            scrollTop: offset.top - $("header").innerHeight()
        }, 500);
    });
    // smooth scroll END
    $("#popup-btn").click(function() {
        $("#popup .modal-body").html('<img src=' + year_copy.url + ' />');
    });
    // modal popup adding img END
});

function checkOfficeHours(day, time) {
    var officeTime;
    if (day <= 5 && day >= 1) {
        if (time >= 7 && time < 16) {
            officeTime = true;
        } else {
            officeTime = false;
        }
    } else if (day == 6) {
        if (time >= 8 && time < 16) {
            officeTime = true;
        } else {
            officeTime = false;
        }
    } else if (day == 0) {
        if (time >= 8 && time < 14) {
            officeTime = true;
        } else {
            officeTime = false;
        }
    } else {
        officeTime = false;
    }
    return officeTime;
}
// check office hours