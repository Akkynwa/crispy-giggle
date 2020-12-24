
    // The exact time to countdown to
    var countDownDate = new Date("january 1, 2021 05:10:00").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days 
    document.getElementById("hours").innerHTML = hours
    document.getElementById("mins").innerHTML = minutes 
    document.getElementById("secs").innerHTML = seconds 
        
    // Display the message when countdown is over
    if (timeleft < 120) {
    
    clearInterval(myfunc);
        document.getElementById("days").innerHTML= "MY" 
        document.getElementById("hours").innerHTML = "YEAR" 
        document.getElementById("mins").innerHTML = "OF"
        document.getElementById("secs").innerHTML = "PEACE"
        document.getElementById("end").innerHTML = "HAPPY NEWYEAR,WELCOME TO 2021!!!!!!!";
    }
    }, 1000);