import React from "react";

type ItemType = {
    title: string
    value: any

}

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    onChange: () => void
    item: ItemType[]
    onClick: (value: any) => void
}

// const reduser = ()

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    return <div>
        <AccordionTitle title={props.titleValue}
            onChange={() => props.onChange()} />
        {!props.collapsed && <AccordionBody item={props.item} onClick={props.onClick} />}
    </div>
}

type AccordionTitleType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitleType) {

    console.log('AccordionTitle rendering')
    return <h3 onClick={props.onChange}>{props.title}</h3>
}

type AccordionBodyType = {
    item: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {
    console.log('AccordionBody rendering')
    return (<ul>
        {props.item.map((i, index) => <li key={index} onClick={() => { props.onClick(i.value) }}>{i.title}</li>)}
    </ul>
    )

}
