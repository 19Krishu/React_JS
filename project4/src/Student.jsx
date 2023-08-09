import React from 'react';
function Student1() {
    return <>
    <h1> (1) This is my separate component</h1>
    <h1> (2) Hello from First Component</h1>
    </>
}

function Name1() {
    return <>
    <h1> (3) First and Second Component</h1>
    </>
}

export default Student1;
export {Name1};