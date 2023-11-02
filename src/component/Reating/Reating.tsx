import React from "react";

type ReatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Reating(props: ReatingPropsType) {
    console.log('Reating rendering')
    return <div>
        <Star selected={props.value > 0} />
        <Star selected={props.value > 1} />
        <Star selected={props.value > 2} />
        <Star selected={props.value > 3} />
        <Star selected={props.value > 4} />
    </div>
}

type StartPropsType = {
    selected: boolean
}

function Star(props: StartPropsType) {
    console.log('Star rendering')
    return props.selected ? <span><b>Star</b></span> : <span> Star </span>
}