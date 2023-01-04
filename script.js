// adding the time at the top of the page

$(document).ready(function () {
    
    var displayTime = $("#currentTime");
    var numberHours = 12;
    var saveBtn = $(".saveBtn");
    var clearBtn = $(".clearBtn");
    var saveAllBtn = $("#saveAll");
    var clearAllBtn = $("#clearAll")
});


("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

function timeBlock() {
    var hour = moment().hours();

    console.log (timeBlock);

    $(".time-block").each(function() {
        var currentTime = parseInt($(this).attr("id"));
        if (currrentTime > hour) {
            $(this).addClass("future");
        } else if (currrentTime === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

var saveBtn = $(".saveBtn");

saveBtn.on ("click", function() {
    var time = $(this).siblings(".hour").text();
    var data = $(this).siblings(".data").val();

    localStorage.setItem(time, data);
});

function saveInput() {
    console.log(saveInput);

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currData = localStorage.getItem(currentHour);

        if(currData !== null) {
            $(this).siblings(".data").val(currData);
        }
    });
}

timeBlock();
saveInput();
