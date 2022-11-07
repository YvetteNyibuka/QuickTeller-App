const button = document.getElementById("button");

button.addEventListener("click", ()=>{
var myDate  = document.getElementById("text").value

var realDate  = new Date(myDate);
var birthMonth = realDate.getMonth()+1;
var birthDate = realDate.getDate(); 
var solution = document.getElementById("sol");
var sol = document.getElementById("sol1");

if((birthMonth ==3 && birthDate >=21)||(birthMonth == 4 && birthDate <= 19)){
    sol.innerHTML = `<h1>Aries</h1>` 
    solution.innerHTML = `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-aries_1024x1024.png?v=1517850072" alt=""  height="400" width="350">`
}
else if((birthMonth ==4 && birthDate > 19)||(birthMonth == 5 && birthDate <= 20)){
    sol.innerHTML = `<h1>Tarus</h1>`
    solution.innerHTML = `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-taurus_1024x1024.png?v=1517849684" alt=""  height="400" width="350">` 
}
else if((birthMonth ==5 && birthDate > 20)||(birthMonth == 6 && birthDate <= 21)){
    sol.innerHTML = `<h1>Gemini</h1>`
    solution.innerHTML = `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-gemini_1024x1024.png?v=1517844742" alt=""  height="400" width="350">`
}
else if((birthMonth ==6 && birthDate >21)||(birthMonth == 7 && birthDate <= 22)){
    sol.innerHTML = `<h1>Cancer</h1>`
    solution.innerHTML = `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-cancer_1024x1024.png?v=1517625158" alt=""  height="400" width="350">`
}
else if((birthMonth ==7 && birthDate >22)||(birthMonth == 8 && birthDate <= 22)){
    sol.innerHTML = `<h1>Leo</h1>` 
solution.innerHTML = `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-leo_1024x1024.png?v=1517617612" alt=""  height="400" width="350">`
}
else if((birthMonth ==8 && birthDate >22)||(birthMonth == 9 && birthDate <= 22)){
sol.innerHTML = `<h1>Virgo</h1>`
solution.innerHTML = `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-virgo_1024x1024.png?v=1517590104" alt=""  height="400" width="350">`
}
else if((birthMonth ==9 && birthDate >22)||(birthMonth == 10 && birthDate <= 23)){
    sol.innerHTML = `<h1>Libra</h1>`
    solution.innerHTML = `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-libra_1024x1024.png?v=1517444894" alt=""  height="400" width="350">`
}
else if((birthMonth ==10 && birthDate >23)||(birthMonth == 11 && birthDate <= 21)){
    sol.innerHTML = `<h1>Scorpius</h1>`
    solution.innerHTML = `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-scorpio_1024x1024.png?v=1517441497" alt=""  height="400" width="350">`
}
else if((birthMonth ==11 && birthDate > 21)||(birthMonth == 12 && birthDate <= 21)){
    sol.innerHTML = `<h1>Sagittarius</h1>`
    solution.innerHTML = `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-sagittarius_1024x1024.png?v=1517414803" alt="" height="400" width="350">`
}
else if((birthMonth ==12 && birthDate > 21)||(birthMonth == 1 && birthDate <= 19)){
    sol.innerHTML = `<h1>Capricornus</h1>`
    solution.innerHTML = `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-capricorn_1024x1024.png?v=1517361013" alt=" " height="400" width="350">`
}
else if((birthMonth ==1 && birthDate > 19)||(birthMonth == 2 && birthDate <= 18)){
    sol.innerHTML = `<h1>Aquarius</h1>`
    solution.innerHTML = `    <img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-aquarius_1024x1024.png?v=1517258109" alt="" height="400" width="350">
    `
}
else if((birthMonth ==2 && birthDate > 19)||(birthMonth == 3 && birthDate <= 30)){
    sol.innerHTML = `<h1>Pisces</h1>`
    solution.innerHTML = `<img src="http://cdn.shopify.com/s/files/1/1325/0879/articles/headers-zodiac-sign-astrology-personality-positives-negatives-cheat-sheet-pisces_1024x1024.png?v=1517257307" alt=""  height="400" width="350">`
}
})