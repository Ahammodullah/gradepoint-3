// grade point //

var marks = parseInt(prompt("Input Your Marks to check your 'Grade'"));

if (marks >= 80) document.write("A+");
else if (marks <= 79 && marks >= 70) document.write("A");
else if (marks <= 69 && marks >= 60) document.write("A-");
else if (marks <= 59 && marks >= 50) document.write("B");
else if (marks <= 49 && marks >= 40) document.write("C");
else if (marks <= 39 && marks >= 33) document.write("D");
else document.write("F");
