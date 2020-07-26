//The ready() method is used to make a function available after the document is loaded.
$(document).ready(function () {
    //Used Moment.js library to display current day & time 
    $('#currentDay').text("Today is " + moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));
    //$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
    //Assign saveBtn click listener for user input and time stamp??
    // $(".saveBtn").on("click", function () {
    //     //get nearby values.
    //     console.log(this);
    //     var text = $(this).siblings(".description").val();
    //     var time = $(this).parent().attr("id");

        
        //localStorage.setItem(time, text);
    //Assign saveBtn click listener for user input and time stamp??   
        $("button").click(function() {
           //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
          //set items in local storage.  
        localStorage.setItem(time, text);
         
    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#time9am .description").val(localStorage.getItem("time9am"));
    $("#time10am .description").val(localStorage.getItem("time10am"));
    $("#time11am .description").val(localStorage.getItem("time11am"));
    $("#time12pm .description").val(localStorage.getItem("time12pm"));
    $("#time13pm .description").val(localStorage.getItem("time13pm"));
    $("#time14pm .description").val(localStorage.getItem("time14pm"));
    $("#time15pm .description").val(localStorage.getItem("time15pm"));
    $("#time16pm .description").val(localStorage.getItem("time16pm"));
    $("#time17pm .description").val(localStorage.getItem("time17pm"));


    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("time")[1]);
            console.log( blockHour, currentHour)

            //check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})

