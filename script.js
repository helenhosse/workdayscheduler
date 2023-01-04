

$(document).ready(function () {
    
    var displayTime = $("#currentTime");
    var saveBtn = $(".saveBtn");

// this will show the time at the top of the page
displayTime.html(moment().subtract(10, 'days').calendar());

function timeBlock() {
    var hour = moment().hours();

    console.log(timeBlock); 

    // this will show the colors of the past, present and future hours
    $(".time-block").each(function() {
        var currentTime = parseInt($(this).attr("index"));
        if (currentTime > hour) {
            $(this).addClass("future");
        } else if (currentTime === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var data = $(this).siblings(".data").val();

    localStorage.setItem(time, data);
});

// this is what will save the activity anytime you refresh
function saveActivity() {

    console.log(saveActivity); 

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currData = localStorage.getItem(currentTime);

        if(currData !== null) {
            $(this).siblings(".data").val(currData);
        }
    });
}

//this will call the function
timeBlock();
saveActivity()})