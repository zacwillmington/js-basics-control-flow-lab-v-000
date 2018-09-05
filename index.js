// Write your code in this file!
let customers;
function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
        customers = "This one is on me!";
    } else if (distance > 400 && distance < 2500 ) {
        customers = "I will gladly take your thirty bucks.";
    } else {
        customers = "No can do."
    }
    return customers;
}


function ternaryCheckCity(city){
    city === "NYC" ? "Ok, sounds good." : "No go.";
}
