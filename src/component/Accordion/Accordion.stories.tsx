import { action } from '@storybook/addon-actions';
import { Accordion } from './Accordion';
import { useState } from 'react';


export default {
    title: 'Accordion stories',
    component: Accordion,
};
const callbackAction = action('f')
const onClickCallback = action('some item wes clicked')
// export default meta;

export const OpenAccordion = () => (<Accordion collapsed={true} titleValue='Open Accordion' onChange={callbackAction} item={[{ title: 'Tom', value: 1 }, { title: "Ann", value: 2 }]} onClick={onClickCallback} />)

export const CollapsedAccordion = () => (<Accordion collapsed={false} titleValue='Collapsed Accordion' onChange={callbackAction} item={[{ title: 'Tom', value: 1 }, { title: "Ann", value: 2 }]} onClick={onClickCallback} />)

export const ControlAccordion = () => {
    const [value, setValue] = useState(false)
    return (
        <Accordion collapsed={value}
            titleValue='Collapsed Accordion'
            onChange={() => setValue(!value)}
            item={[{ title: 'Tom', value: 1 }, { title: "Ann", value: 2 }]}
            onClick={onClickCallback}
        />
    )
}
