import { count } from 'console';
import React, { useMemo, useState } from 'react';



export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {
    let [a, setA] = useState(0)
    let [b, setB] = useState(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tenpRsult = 1
        for (let i = 1; i <= a; i++) {
            tenpRsult = tenpRsult * i
        }
        return tenpRsult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))} />
        <div>
            Result for a : {resultA}
        </div>
        <div>
            Result for b : {resultB}
        </div>
    </>

}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpToReactMemo = () => {
    console.log('Exap')
    let [counter, setCounter] = useState(10)
    let [users, setUsers] = useState(["YOLA", 'Ann', 'lol'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newYsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newYsers)
    }

    return <>

        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>


        {counter}
        <Users users={newArray} />
    </>
}