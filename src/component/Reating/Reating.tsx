import React from "react";

export type ReatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type ReatingPropsType = {
  value: ReatingValueType
  onClick: (value: ReatingValueType) => void
}

export function Reating(props: ReatingPropsType) {
  console.log('Reating rendering')
  return <div>
    <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
    <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
    <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
    <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
    <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
  </div>
}

type StartPropsType = {
  selected: boolean
  onClick: (value: ReatingValueType) => void
  value: ReatingValueType
}

function Star(props: StartPropsType) {
  console.log('Star rendering')
  return <span> {props.selected ? <b>Star</b> : "Star"}</span>
}