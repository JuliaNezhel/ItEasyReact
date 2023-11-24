import { log } from "console";
import React, { useState } from "react";


type UncontrolledAccordionPropsType = {
    titleValue: string;
    // collapsed: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    console.log('Accordion rendering')

    let [collapsed ,setCollapsed] = useState(false)

    const onClicHandler = ()=>(setCollapsed(!collapsed))

    console.log(collapsed)
    return <div>
        <AccordionTitle title={props.titleValue} onClicHandler={onClicHandler}/>
        {/* <button onClick={onClicHandler}>TOGGLE</button> */}
        {!collapsed && <AccordionBody />}
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

