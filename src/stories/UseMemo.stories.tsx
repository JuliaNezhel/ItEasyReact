import {useState} from 'react';
import React from "react";


export default {
  title: 'React.memo demo'
}

const NewMessageCounter = (props: { count: number }) => {
  return <div> {props.count}</div>

}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log('u')
  return <div>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
  </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
  let [counter, setCounter] = useState(10)
  let [users, setUsers] = useState(["YOLA", 'Ann'])

  const addUser = () => {
    const newYsers = [...users, 'Sveta' + new Date().getTime()]
    setUsers(newYsers)
  }

  return <>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={addUser}>add user</button>

    <NewMessageCounter count={counter}/>
    <Users users={users}/>
  </>
}