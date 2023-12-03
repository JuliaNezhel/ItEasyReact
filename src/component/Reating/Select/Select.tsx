import { ReatingValueType } from "../Reating"

type ItemType = {
    title: string
    value: any
    
}

type SelectPropsType = {
    value: any
    onClick: (value: ReatingValueType) => void
    item: ItemType[]
}
export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <div>{props.value}</div>
            {props.item.map(i => <div>{i.title}</div>)}
        </div>
    )
}