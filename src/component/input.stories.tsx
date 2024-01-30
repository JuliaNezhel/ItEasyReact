import {action} from '@storybook/addon-actions';
import {useRef, useState} from 'react';
import React from "react";

export default {
  title: 'imput',

}

export const UncontrolledInput = () => (<input/>)

export const TrackVAlueUncontrolledInput = () => {
  const [value, setValue] = useState('')
  return (<>
    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      const actualValue = e.currentTarget.value
      setValue(actualValue)
    }}/> value this: {value}
  </>)
}

export const GetValueUncontrolledInput = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)
  }
  return (<>
    <input ref={inputRef}/>
    <button onClick={save}>+</button>
    value save: {value}
  </>)
} 