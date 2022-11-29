let num = prompt("Enter a number")
isEven(num)
function isEven(num){
    if (num%2 === 0) {
       console.log("even")
   }
}

let movie = ['cod','aot','ow']
//push - add the input at the end
movie.push('nvm')
console.log(movie)
//pop - remove at the end 
movie.pop()
console.log(movie)
//shift-remove from the start
movie.shift()
console.log(movie)
//unshift-add to start
movie.unshift('aws')
console.log(movie)
//includes-check if the array contains the input
let check = movie.includes('ws')
console.log(check)
//reverse
movie.reverse()
console.log(movie)
//slice-insert or remove thing
let notMovie = movie.slice(1)
console.log(notMovie)
notMovie = movie.slice(0,1)
console.log(notMovie)
//------- remove part
//movie.splice(2,1)
//console.log(movie)
//------- insert part
movie.splice(2,0,'aaa')
console.log(movie)
//sort-it only sort based on the first number
let scores =[1,-2,12,54,5,-53]
scores.sort()
console.log(scores)

//creating objects
const person= {
    firstName: 'Mike',
    lastName: 'Jax'}
console.log(person)
//accessing data out of objects
person["lastName"]
person.firstName
person['first'+'Name']

//Object storing array
const someone= {
    firstName: 'Mike',
    lastName: 'Jax',
    grade: [2,14,100]}
console.log(someone)
//Array storing Objects
const people= [
    {firstName: 'Mike', lastName: 'Jax'},
    {firstName: 'Mic', lastName: 'Jay'}]
console.log(people)

//for of loop
const subreddits = ['soccer','red','tv','asmr','stock']
for (let sub of subreddits) {
    console.log(sub);
}

//using for-in loop for Object will only give you the key unless declare in the statement
const testScores = {a:23,b:44,c:93,d:48,e:75}
for (let student in testScores) {
    console.log(`${student} scored ${testScores[student]}`)
}
//Object.keys(testScores)-will print the object without the score
//Objects.values(testScores)-will give the value of the key
//Object.entries(testScores)-print all info
isSnakeEyes(1,1);
function isSnakeEyes(num1,num2){
    
    if (num1 ===1 && num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes");
    }
}

//the first letter is capitalized only
console.log(capitalize('asd'));
function capitalize (a) {
    let first = a.slice(0,1).toUpperCase();
    let rest = a.slice(1);
    return first+rest;
}

//return day corresponding to the input using Object
const days = {1:"Monday", 2:"Tuesday",3:"Wednesday",4:'Thursday',5:'Friday',6:'Saturday',7:'Sunday'};
function returnDay(num) {
    if (num <1 || num>7) {
        return null;
    }
    return days[num];
}
//tenary solution
function returnDays(num){
//    const days = {1:'Monday',2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",7:"Sunday"};
    return num > 0 && num <= 7 ?days[num] : null;
}

//return day corresponding to the input, starts with 1 using array
const dayss = [null,"Monday", "Tuesday","Wednesday",'Thursday','Friday','Saturday','Sunday'];
function returnDayss(num) {
    if (num <1 || num>7) {
        return null;
    }
    return dayss[num];
}

//nested functions
function bankRob() {
    const heroes = ['Spidey','BackWidow','Hulk','Thor'];
    function help() {
        for (let hero of heroes) {
            console.log(`Help ${hero.toUpperCase()}`);
        }
    }
    help(); //required to be able to access the innder function
}

//function expression
const add = function(x,y) {
    return x+y;
}

//higher order functions
function callTwice(func) {
    func();
    func();
}
function rollDie() {
    const roll = Math.floor(Math.random()*6)+1;
    console.log(roll)
}
callTwice(rollDie)

//returning functions
function between(min,max) {
    return function(num) {
        return num>=min && num <=max;
    }
}
//then
const isChild = between(0,10)
isChild(10) //in console

//defining methods
const myMath = {
    PI: 3.14,
    square(num) { return num**2},
    cube(num) {return num**3}
}
myMath.cube(2)


const movies = [
    {title: "Avatar", score:90, year: 2000}, 
    {title: "Marvel", score:20, year: 2010},
    {titla: "Frozen", score:50, year: 2013}
]
//filter function, m is the parameter in the function
const goodMovies = movies.filter(m => m.score > 80)
//map function to locate where the value is
const goodTitles = goodMovies.map(m => m.title)
//combine 2 function above into 1
const list = movies.filter(m=>m.score>80).map(m=>m.title)

const exams = [13,57,95,53];
//every:tests whether all elements in the array pass the provided function. It returns a Boolean value.
exams.every(score => score >=75)
//^this will return false because only 1 score is >= 75 and the rest isnt
exams.every(score => score >=5)
//^ this will be true because all scores are above 5

//SOME: similar to every, but returns true if ANY of the array elements pass the test function
exams.some(score => score >=75) //will return true because 1 matches the description

//REDUCE: execute a reducer function on each element of the array, resulting in a single value
const total = exams.reduce((total,score) => total+score)

const a = movies.reduce((bestMovie,currMovie) => {
    if(currMovie.score > bestMovie.score) {
        return currMovie;
    } return bestMovie;
})

//spread ... copy from 1 to another, array/object
const dogs = ["Pom","chi","tzi","golden"]
const cats =["brown","black"]
const allPets = [...dogs, ...cats]
const hi =[..."hi"]

//rest is similar to spread ...
function sum(...nums){
    return nums.reduce((total, el) => total+el)
}
function raceResult(gold,silver,...other){
    console.log(`${gold} receive gold`)
    console.log(`${silver} receive silver`)
    console.log(`${other} receive participation prize`)
}
raceResult('Tee','Tommy','Paul','Aaron')

//array destructuring
const raceResults=['a','b','c','d','e'];
const [gold,silver,brone]= raceResults;
gold; //a
silver; //b
const [fastest,...everyoneElse] = raceResults;
fastest; //a
everyoneElse; //b-e

//destructuring object -more common than array
const user = {
    email: 'abc@gmail.com',
    password: 'abcde',
    firstName: 'Jason',
    lastName: 'Mike',
    born: 1990,
}
const {email,firstName,lastName} = user
//rename born to birthyear, or change value
const {born:birthYear, died= "N/A"} = user //change and rename 'died:deathYear = 'N/A'
//destructuring params
function fullName({firstName,lastName}) {
    return `${firstName} ${lastName}`
}
fullName(user)