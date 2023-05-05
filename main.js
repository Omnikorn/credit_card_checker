// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

const validateCred = (arr) => {
  //console.log("the aray lenght is " + arr.length)
  let sum1 = 0;
  let num = 0;
  // this loops around the odd numbers mutiplies them by 2 then sums them up
  for (i = arr.length - 2; i >= 0; i -= 2) {
    //console.log("the current number is " + arr[i])
    num = arr[i] * 2; //console.log("the number is " + num)
    if (num > 9) {
      num = num - 9;
      sum1 = sum1 + num;
    } else {
      sum1 = sum1 + num;
    }

    //console.log("the sum so far is "+ sum1)
  }

  //console.log("the sum of odds =" + sum1)
  //this loops around even numbers and sums them up
  let sum2 = 0;
  for (k = arr.length - 1; k >= 0; k -= 2) {
    //console.log("the number in the seocnd loop is "+ arr[k])
    sum2 += arr[k];
  }

  let finalSum = sum1 + sum2;
  //console.log("the final sum is " + finalSum)

  let verdict;
  if (finalSum % 10 === 0) {
    verdict = true;
  } else {
    verdict = false;
  }

  return verdict;
};

/*console.log(validateCred(valid1) + " shoud be true")
console.log(validateCred(invalid5))
console.log(validateCred(valid2) + " should be true");
console.log(validateCred(valid3) + " should be true")
console.log(validateCred(valid4)+ " should be true")
console.log(validateCred(invalid1) + " should be false")
console.log(validateCred(invalid2))
console.log(validateCred(invalid3))
console.log(validateCred(valid5) + " shoud be true")
*/

const findInvalidCards = arr =>{
  const invalidCards = arr.filter(card=>{
    //console.log("the card numbers is " + card)
    if (validateCred(card)){
      return card
    }
  })

  return invalidCards
}

const idInvalidCardCompanies = (arr) => {
 let companies =[]
 for (i=0; i<arr.length; i++){
   switch (arr[i][0]){
     case 3: 
     if (companies.includes("Amex")){
       continue 
     } else {
       companies.push("Amex")
     };
     break;
     case 4:
     if (companies.includes("Visa")){
       continue
     } else {
       companies.push("Visa")
     };
     break;
     case 5:
     if (companies.includes("Mastercard")){
       continue
     } else {
       companies.push("Mastercard")
     };
     break;
     case 6:
     if (companies.includes("Discover")){
       continue
     } else {
       companies.push("Discover")
     };
     break;
     default :
     companies.push("Company not found");
     break;
   }
 }
return companies;
  
}

console.log(findInvalidCards(batch))
console.log(idInvalidCardCompanies(findInvalidCards(batch)))