import React, { useState, useEffect } from 'react';



export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    console.log('SimpleExample')

    let [counter, setCounter] = useState(1)
    let [fake, setFake] = useState(1)


    useEffect(() => {
        console.log('useEffect every render') // каждый раз когда компонента изменяется
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)') // только первфый раз когда компонента вмонтировалась
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}> counter+</button>
        <button onClick={() => setFake(fake + 1)}> fake +</button>

        {counter}
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    let [counter, setCounter] = useState(1)
    let [fake, setFake] = useState(1)


    useEffect(() => {
        console.log('useEffect every render') 
        setTimeout(()=> {
            console.log('setTimeout') 
            setCounter(state => state +1)
        }, 2200)
    }, [counter])


    return <>
        <button onClick={() => setCounter(counter + 1)}> counter+</button>
        <button onClick={() => setFake(fake + 1)}> fake +</button>

        {counter}
    </>
}

