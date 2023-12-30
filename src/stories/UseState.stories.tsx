import React, { useState, useMemo } from 'react';



export default {
    title: 'useState'
}

    function generateDate () {
        console.log('dvsd1')
    return 654881
}


export const HelpToUseState = () => {
    console.log('Example1')

    // const initialValue = useMemo(generateDate, [])
    // useState может принимать функцию как начальнное значение ти то что вернет эта функция то и буде начальным значением. использ если в  начальном значении тяжелве вычяисления
 
    let [counter, setCounter] = useState(generateDate)

const changer = (state: number)=> { //state - текущее значение   state
    return state +1
}

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}
