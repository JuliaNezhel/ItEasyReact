import { count } from 'console';
import React, { memo, useCallback, useMemo, useState } from 'react';



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

export const LikeUseCallbackMemo = () => {
    console.log('LikeUseCallbackMemo')
    let [counter, setCounter] = useState(10)
    let [books, setBooks] = useState(["Css", 'HTML'])

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])

    const addBook = () => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }

    const memoizedAddBook = useMemo(() => {
        return addBook
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>

        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book
            //  books={newArray} 
            addBook={memoizedAddBook2} />
    </>
}

type BooksSecretPropsType = {
    // books: Array<string>
    addBook: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add Book</button>
        {/* {props.books.map((book, i) => <div key={i}>{book}</div>)} */}
    </div>
}

const Book = memo(BooksSecret)