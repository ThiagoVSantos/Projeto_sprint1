var button1 = document.getElementById("button_1")
var button2 = document.getElementById("button_2")
var button3 = document.getElementById("button_3")

var informação1 = document.getElementById("informação_1")
var informação2 = document.getElementById("informação_2")
var informação3 = document.getElementById("informação_3")

var icon1 = document.getElementById("icon_1")
var icon2 = document.getElementById("icon_2")
var icon3 = document.getElementById("icon_3")


informação1.style.display = "none"
informação2.style.display = "none"
informação3.style.display = "none"

    button1.addEventListener("click", function() {
        if (informação1.style.display == "block") {
            informação1.style.display = "none"
            icon1.innerHTML = "expand_more" 
        } else {
            informação1.style.display = "block"
            icon1.innerHTML = "expand_less" 
        }
    })

    button2.addEventListener("click", function() {
        if (informação2.style.display == "block") {
            informação2.style.display = "none"
            icon2.innerHTML = "expand_more" 
        } else {
            informação2.style.display = "block"
            icon2.innerHTML = "expand_less" 
        }
    })

    button3.addEventListener("click", function() {
        if (informação3.style.display == "block") {
            informação3.style.display = "none"
            icon3.innerHTML = "expand_more" 
        } else {
            informação3.style.display = "block"
            icon3.innerHTML = "expand_less" 
        }
    })

function size_change() {
    
}