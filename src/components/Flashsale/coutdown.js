import React,{useEffect,memo} from 'react'

function Coutdown() {
    var countDownDate = new Date("November 25, 2021 15:37:25").getTime();

    useEffect(() => {
        var x = setInterval(function() {

            var now = new Date().getTime();
    
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            if(minutes < 10){
                minutes = "0" + minutes;
            }
            if(hours < 10){
                hours = "0" + hours;
            }
            if(seconds < 10){
                seconds = "0" + seconds;
            }
    
            document.getElementById("demo").innerHTML =hours;
            document.getElementById("demo1").innerHTML =minutes;
            document.getElementById("demo2").innerHTML =seconds;
    
            if (distance < 0) {
                clearInterval(x);
            }
        }, 1000);
        return () => {
            clearInterval(x)
        }
    }, [])
    return (
        <div className="flashsale-coutdown">
            <p id="demo"></p>
            <p id="demo1"></p>
            <p id="demo2"></p>
        </div>
    )
    
}

export default memo(Coutdown)




