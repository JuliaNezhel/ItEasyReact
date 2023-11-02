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
        <AccordionTitle title={props.titleValue} />
        <button onClick={onClicHandler}>TOGGLE</button>
        {!collapsed && <AccordionBody />}
    </div>



}

type AccordionTitleType = {
    title: string,
}

function AccordionTitle(props: AccordionTitleType) {

    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
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

