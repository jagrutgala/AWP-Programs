/*
p11.2_even_odd.js
Author: Jagrut Gala
Date: 20-09-2021
Practical: 11
Objective: Write a program in reactjs create react app to display number is odd or even on every single click of button using useState(Hook)
*/

import React, { useState } from 'react';

function EvenOdd() {
    const [Click, setClick] = useState(0); 

    return(
        <div>
            <p>No of Clicks {Click}</p>
            <p>Clicks is {Click%2== 0? <span>Even</span> : <span>Odd</span>}!</p>
            <button onClick={()=> setClick(Click+1)}>Click Me</button>
        </div>
    )
}

export default EvenOdd;