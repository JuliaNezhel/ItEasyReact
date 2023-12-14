import { log } from "console";
import React, { useReducer, useState } from "react";
import { action } from '@storybook/addon-actions';
import { reduser } from './reduser';


type UncontrolledAccordionPropsType = {
    titleValue: string;
    // collapsed: boolean
}

// type ActionType = {
//     type: string
// }

// const reduser = (state: boolean, action: ActionType) => {

//     if(action.type === 'TOGGLE_CLLAPSED'){
//         return !state
//     }
//  return state
// }

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('Accordion rendering')

    // let [collapsed ,setCollapsed] = useState(false)

    let [state, dispatch] = useReducer(reduser, {collapsed: false})

    // const onClicHandler = ()=>(setCollapsed(!collapsed))
    const onClicHandler = ()=>(dispatch({type: 'TOGGLE_CLLAPSED'} ))

    console.log(state.collapsed)
    return <div>
        <AccordionTitle title={props.titleValue} onClicHandler={onClicHandler}/>
        {/* <button onClick={onClicHandler}>TOGGLE</button> */}
        
        {!state.collapsed && <AccordionBody />}
    </div>

}

type AccordionTitleType = {
    title: string,
    onClicHandler: ()=>void
}

function AccordionTitle(props: AccordionTitleType) {

    console.log('AccordionTitle rendering')
    return <h3 onClick={() => props.onClicHandler()}>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    )

}

