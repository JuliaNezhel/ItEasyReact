import { ReatingValueType } from "../Reating"
import style from './SelectStyled.module.css'
import { useState } from 'react';

type ItemType = {
    title: string
    value: any
    // onChange: (value: any) => void
}

type SelectPropsType = {
    value?: any
    onClick: (value: any) => void
    item: ItemType[]
}
export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(true)
    const toglItemd = () => setActive(!active)

    const selectedItem = props.item.find(i => i.value === props.value)

    return (
        <div >
            <div className={style.select}>
                <span className={style.main} onClick={toglItemd}>{selectedItem && selectedItem.title}</span>
                ds
                {
                    active &&
                    <div className={style.item}>
                        {props.item.map(i => <div
                            key={i.value}
                            onChange={() => {
                                props.onClick(i.value);
                                // toglItemd()
                            }}
                        >{i.title}</div>)}
                    </div>
                }
            </div>

        </div>
    )
}