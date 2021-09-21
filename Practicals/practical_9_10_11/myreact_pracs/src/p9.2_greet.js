/*
p9.2_greet.js
Author: Jagrut Gala
Date: 13-09-2021
Practical: 9
Objective: WAP in ReactJS to get current Hours and display Greeting Message. Example: if 1 to 12 –Good Morning,12 to 4 Good Afternoon,4 to 12 good Evening
*/

const morning= <span style={{color: "red"}}>Morning</span>
const afternoon= <span style={{color: "blue"}}>Afternoon</span>
const evening= <span style={{color: "green"}}>Evening</span>
var greet_element;

var time_now= new Date(2021, 9, 13, 5, 30, 3);
//                Date(year, m, d,  h,  m,  s, mil)

console.log(time_now.getHours());
if(0< time_now.getHours() && time_now.getHours()< 12) {
    greet_element= morning;
} else if (12<= time_now.getHours() && time_now.getHours()<= 16) {
    greet_element= afternoon;
} else if (17<= time_now.getHours() && time_now.getHours()<= 24) {
    greet_element= evening;
}

function Greet() {
    return (
    <div>
        <p>Hello {greet_element}</p>
    </div>
    );
}

export default Greet;
