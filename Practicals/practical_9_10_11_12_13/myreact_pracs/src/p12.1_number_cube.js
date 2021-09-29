/*
p12.1_number_cube.js
Author: Jagrut Gala
Date: 28-09-2021
Practical: 12
Objective: WAP in React JS Program to demonstrate the use of arrays as a state variable (using useState()).Display cube of number on every single click.
*/

import React, {
    useState
} from 'react';

function Cube() {
    const [click, setClick] = useState([{key: 1, value: 1}]);
    const addNumber = () => {
        setClick([...click, {
                id: click.length,
                value: click.length * click.length * click.length,
            },
        ]);
    };
    return (
        <div>
            <button onClick={()=>addNumber()}>Add Number</button>
            <ul>
                {
                    click.map((item)=>
                        (
                            <li key={item.id}>
                                {item.id} cube is {item.value}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default Cube;

