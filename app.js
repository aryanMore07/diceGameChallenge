const img =document.querySelector(".img1");
const imgTwo =document.querySelector(".img2");


let ranNum = Math.floor(Math.random() * 6) + 1;
let ranNumTwo = Math.floor(Math.random() * 6) + 1;
let randomDiceImg = `images/dice${ranNum}.png`;
let randomDiceImgTwo = `images/dice${ranNumTwo}.png`;

img.setAttribute("src", randomDiceImg);
imgTwo.setAttribute("src", randomDiceImgTwo);

if(ranNum > ranNumTwo) {
    document.querySelector("h2").innerText = "Player One wins 🙌🥳🎉";
} else if (ranNumTwo > ranNum) {
    document.querySelector("h2").innerText = "Player Two wins 🙌🥳🎉";
} else {
    document.querySelector("h2").innerText = "Draw!!!";
}

