 var name;
 var age;

 name = prompt('Enter whit your name');
 age = prompt('enter your age');
 console.log(' welcome ' + name + ' How old are you ' + age + ' ans');


 function TotalCost(costPerPerson, numberOfPeople) {
   return costPerPerson - numberOfPeople;
 }
 console.log(TotalCost(100, 55));



 function checkDiscount(age) {
   if (age > 18) {
     console.log("You are eligible for a discount!");
   } else {
     console.log("Sorry, no discount for you.");
   }
 }
 checkDiscount(16);


 let figuer = 99.99;
 let roundedfiguer = Math.round(figuer);
 console.log("Rounded figuer: " + roundedfiguer);


 let name = 'meveil';
 let age = 42;
 let paidregistration = true;

 console.log(typeof name);
 console.log(typeof age);
 console.log(typeof paidregistration);


let participants = ["Meveil", "steve", "nehemie"];
 participants.push("ken");

 console.log(participants);



let name = prompt("What’s your name?");
alert("Welcome, " + name + "!");
alert("Welcome, " + name + "!");









