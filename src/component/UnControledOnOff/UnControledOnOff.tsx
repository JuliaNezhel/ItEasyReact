import { useState } from "react"


type OnOffPropsType = {
    onChange: (on: boolean) => void
}

export const UnControledOnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid red',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'rgb(60, 226, 101)': 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid red',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: !on ? 'rgb(240, 95, 95)':'white',
    }
    const indicatiorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50px',
        border: '1px solid red',
        marginLeft: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'rgb(60, 226, 101)' : 'rgb(240, 95, 95)',

    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{
                setOn(true)
                props.onChange(true)
                }}>on</div>
            <div style={offStyle} onClick={()=>{
                setOn(false)
                props.onChange(false)
                }}>off</div>
            <div style={indicatiorStyle}></div>
        </div>
    )
}