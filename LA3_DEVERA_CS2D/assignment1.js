let userScore = prompt("Enter your score: ");
console.log("RESULT: ");

(userScore <= 71) ? console.log("Your equivalent Grade is “5.00” Poor")
: (userScore <= 74) ? console.log("Your equivalent Grade is “4.00” Poor")
: (userScore == 75) ? console.log("Your equivalent Grade is “3.00” Below Average")
: (userScore <= 78) ? console.log("Your equivalent Grade is “2.75” Below Average")
: (userScore <= 81) ? console.log("Your equivalent Grade is “2.50” Below Average")
: (userScore <= 84) ? console.log("Your equivalent Grade is “2.25” Average")
: (userScore <= 87) ? console.log("Your equivalent Grade is “2.00” Average")
: (userScore <= 90) ? console.log("Your equivalent Grade is “1.75” Above Average")
: (userScore <= 93) ? console.log("Your equivalent Grade is “1.50” Above Average")
: (userScore <= 96) ? console.log("Your equivalent Grade is “1.25” Excellent")
: (userScore >= 97) ? console.log("Your equivalent Grade is “1.00” Excellent")
: console.log("Score Input error");

if (userScore <= 74) {
    console.log("Final Remarks: FAILED, Needs Improvement")
} else if (userScore <= 79) {
    console.log("Final Remarks: LOW PASS")
} else if (userScore <= 89) {
    console.log("Final Remarks: AVERAGE PASS")
} else if (userScore >= 90) {
    console.log("Final Remarks: HIGH PASS, Candidate for Cum Laude")
} else {
    console.log("Score Input error")}
