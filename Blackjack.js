let userGuess = process.argv[2]
let randDecimal = Math.random();
let randNum = randDecimal * 10;
let randInt = Math.floor(randNum);
let randDecimal_2 = Math.random();
let randNum_2 = randDecimal_2 * 11;
let randInt_2 = Math.floor(randNum_2);
let randDecimal_3 = Math.random();
let randNum_3 = randDecimal_3 * 10;
let randInt_3 = Math.floor(randNum_3);
let randDecimal_4 = Math.random();
let randNum_4 = randDecimal_4 * 10;
let randInt_4 = Math.floor(randNum_4);
let randDecimal_5 = Math.random();
let randNum_5 = randDecimal_5 * 11;
let randInt_5 = Math.floor(randNum_5);
let randDecimal_6 = Math.random();
let randNum_6 = randDecimal_6 * 10;
let randInt_6 = Math.floor(randNum_6);


if (userGuess == 3) {
    let sum_3 = randInt + randInt_2 + randInt_3
    let dealer_sum_3 = randInt_4 + randInt_5 + randInt_6

    console.log("Card_1:", randInt);
    console.log("Card_2:", randInt_2);
    console.log("Card_3:", randInt_3);
    console.log("Sum", sum_3)
    console.log("Dealer Sum", dealer_sum_3)

    if (sum_3 > 21 && dealer_sum_3 <= 21) {
        console.log("It was a bust!")
        console.log("You lost $500")
    }
    if (sum_3 > 21 && dealer_sum_3 > 21) {
        console.log("It was a bust!")
        console.log("No Money Lost!!!")
    }
    if (sum_3 < 21 && dealer_sum_3 < sum_3) {
        console.log("You won $250")
    }
    if (sum_3 == 21) {
        console.log("Blackjack!")
        console.log("You won $500")
    }
    if (sum_3 == 21 && dealer_sum_3 == 21) {
        console.log("You both have Blackjack!")
        console.log("No Money Lost")
    }
    if (sum_3 < 21 && dealer_sum_3 > sum_3) {
        console.log("Your hand was less!")
        console.log("You lost $500")
    }
}

else if (userGuess == 2) {
    let sum_2 = randInt + randInt_2
    let dealer_sum_2 = randInt_4 + randInt_5

    console.log("Card_1:", randInt);
    console.log("Card_2:", randInt_2);
    console.log("Sum", sum_2)
    console.log("Dealer Sum", dealer_sum_2)

    if (sum_2 > 21 && dealer_sum_2 <= 21) {
        console.log("It was a bust!")
        console.log("You lost $500")
    }
    if (sum_2 > 21 && dealer_sum_2 > 21) {
        console.log("It was a bust!")
        console.log("No Money Lost!!!")
    }
    if (sum_2 < 21 && dealer_sum_2 < sum_2) {
        console.log("You won $250")
    }
    if (sum_2 == 21) {
        console.log("Blackjack!")
        console.log("You won $500")
    }
    if (sum_2 == 21 && dealer_sum_2 == 21) {
        console.log("You both have Blackjack!")
        console.log("No Money Lost")
    }
    if (sum_2 < 21 && dealer_sum_2 > sum_2) {
        console.log("Your hand was less!")
        console.log("You lost $500")
    }
}

