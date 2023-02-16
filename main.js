// 1. harry potter titles
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

// create a loop to output the titles to console 

for (let i = 0; i < harryPotterTitles.length; i++ ){
    console.log("Harry Potter " + harryPotterTitles[i]);
}

// 2. student grades 
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 0 && grades[i] <= 69) 
        console.log("You got an F");
    else if (grades[i] >= 70 && grades[i] <=76)
        console.log("You got a D");
    else if (grades[i] >=77 && grades[i] <=84)
        console.log("You got a C");
    else if (grades[i] >=84 && grades[i] <=92)
        console.log("You got a B");
    else if (grades[i] >=93 && grades[i] <=100)
        console.log("You got an A");
}

// 3. student grades: part 2 
// 3a. how many students got A's? ANSWER: 2 
let aGrades = 0; // scoped generally, not to the loop itself
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >=93 && grades[i] <=100) {
        aGrades ++
    }
}
console.log("There were " + aGrades + " A's");


// 3b. how many students got B's? ANSWER: 7 
let bGrades = 0; // scoped generally, not to the loop itself
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >=84 && grades[i] <=92) {
        bGrades ++
    }
}
console.log("There were " + bGrades + " B's");


// 3c. most common letter grade 
let aGrade = 0;
let bGrade = 0;
let cGrade = 0;
let dGrade = 0;
let fGrade = 0;

let numGrades = [aGrade, bGrade, cGrade, dGrade, fGrade]
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 0 && grades[i] <= 69) {
        fGrade ++
    } else if (grades[i] >= 70 && grades[i] <=76) {
        dGrade ++
    } else if (grades[i] >=77 && grades[i] <=84) {
        cGrade ++
    } else if (grades[i] >=84 && grades[i] <=92) {
        bGrade ++
    } else if (grades[i] >=93 && grades[i] <=100) {
        aGrade ++
    }
}

console.log("F Grades: " + fGrade);
console.log("D Grades: " + dGrade);
console.log("C Grades: " + cGrade);
console.log("B Grades: " + bGrade); // most common: 7 
console.log("A Grades: " + aGrade);



// 3d. what was the average percentage grade in class?
let total = 0;
for (let i = 0; i < grades.length; i++) {
    total += grades[i]
}
let average = total / grades.length;
console.log(Math.floor(average)); // 81 


// 4. two, four, six, eight - who do we appreciate
let appreciate = [];
for (let i = 2; ; i += 2) {
    appreciate.push(i);
    if (i >= 8) {
        break;   
    } 
}
console.log(typeof(appreciate));
console.log(appreciate.join(" ") + " who do we appreciate?");



// 5. interrupting cow 
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let fullSentence = "";
for (let i = 1; i < sentenceArray.length+1; i++) {
        fullSentence += sentenceArray[i-1] + ' ';
    if (i % 3 === 0 && i !== 12) {
        fullSentence += "MOOOO ";
    }
}
console.log(fullSentence);


// 6. beatles 
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}


for (let bandMember of beatles.members) { // for of loop because members are in an array 
    console.log(`${bandMember.name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${bandMember.birth}. He contributed heavily to the ${beatles.albums.join(', ')} album. `); 
}







