import React from "react";
import { OnOff } from "../OnOff/OnOff";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <div>
        <AccordionTitle title={props.titleValue} />
        {!props.collapsed && <AccordionBody />}
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

export default Accordion;