import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';
import { useState } from 'react';


export default {
    title: 'Accordion stories',
    component: Accordion,
};
const callbackAction = action('f')
// export default meta;

export const OpenAccordion = () => (<Accordion collapsed={true} titleValue='Open Accordion' onChange={callbackAction} />)

export const CollapsedAccordion = () => (<Accordion collapsed={false} titleValue='Collapsed Accordion' onChange={callbackAction} />)

export const ControlAccordion = () => {
    const [value, setValue] = useState(false)
    return (
        <Accordion collapsed={value} titleValue='Collapsed Accordion' onChange={()=>setValue(!value)} />
    )
}
