$(document).ready(function () {
    
    var displayTime = $("#currentTime");
    var numberHours = 12;
    var saveBtn = $(".saveBtn");
    var clearBtn = $(".clearBtn");
    var saveAllBtn = $("#saveAll");
    var clearAllBtn = $("#clearAll")

    function timeBlock() {
        var hour = moment().hours();
        console.log (timeBlock);
    
        $(".time-block").each(function() {
            var currentTime = parseInt($(this).attr("id"));
            if (currentTime > hour) {
                $(this).addClass("future");
            } else if (currentTime === hour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("past");
            }
            timeBlock();
        })
    };
// this will show the time at the top of the page
    displayTime.html(moment().format('MMMM Do YYYY, h:mm:ss a'));

    setInterval(()=> {
        displayTime.html(moment().format('MMMM Do YYYY, h:mm:ss a'));
        timeBlock();
    }, 1000);


    saveBtn.on ("click", function() {
        var time = $(this).siblings(".hour").text();
        var data = $(this).siblings(".data").val();
    
        localStorage.setItem(time, data);
    });
    
    function saveInput() {
        console.log(saveInput);
    
        $(".hour").each(function() {
            var currentTime = $(this).text();
            var currData = localStorage.getItem(currentTime);
    
            if(currData !== null) {
                $(this).siblings(".data").val(currData);
            }
        });
        saveInput();
    }

});




