
let DD = document.getElementById("birthday")
let MM = document.getElementById("birthdayM")
let YY = document.getElementById("birthdayY")
let btn = document.getElementById("btn")

function getVal() {
    DD = parseInt(DD.value)
    MM = parseInt(MM.value)
    YY = parseInt(YY.value)
    let CC = YY.toString().substr(0, 2);


    if (DD <= 0 || DD > 31) {
        alert("Please enter a valid date");
    } else if (MM <= 0 || MM > 12) {
        alert("Please enter a valid month");
    } else {
        d = Math.floor(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7

        return d

    }
}

function getName() {
    let days = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    let femaleAkan = ["Yaa", "Afua", "Ama", "Akosua", "Adwoa", "Abena", "Akua"]
    let maleAkan = ["Kofi", "Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw"]

    let index = getVal()
    let female = document.getElementById("gridRadios1");
    let male = document.getElementById("gridRadios2");
    let nName = document.getElementById("newName")
    let dDay = document.getElementById("newDay")

    if (male.checked) {
        nName.innerHTML = " Your Akan name is: " + maleAkan[index]
        dDay.innerHTML = " You were born on: " + days[index]
    } 
    else if(female.checked){
        nName.innerHTML = "Your Akan name is: "  + femaleAkan[index]
        dDay.innerHTML = " You were born on: " + days[index]
    }
    else{
        alert("please enter valid inputs")
    }
    
    document.getElementById("form1").reset();
}


// btn.addEventListener("click", (e) => {
//     e.preventDefault()
//     getName()
// })


