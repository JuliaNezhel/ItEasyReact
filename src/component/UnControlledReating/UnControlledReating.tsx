import React, { useState } from "react";
import { ReatingValueType } from "../Reating/Reating";

type ReatingPropsType = {
    defaultValue?: ReatingValueType
    onChange?: (value: ReatingValueType) => void
}

export function UnControlledReating(props: ReatingPropsType) {
    console.log('Reating rendering')

    let [value, setValue] = useState<ReatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return <div>
        <Star selected={value > 0} setValue={() => setValue(1)} />
        <Star selected={value > 1} setValue={() => setValue(2)} />
        <Star selected={value > 2} setValue={() => setValue(3)} />
        <Star selected={value > 3} setValue={() => setValue(4)} />
        <Star selected={value > 4} setValue={() => setValue(5)} />
    </div>

}

type StartPropsType = {
    selected: boolean
    // value: 1 | 2 | 3 | 4 | 5
    setValue: () => void
}

function Star(props: StartPropsType) {
    return <span onClick={() => props.setValue()}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>



}