import { Select } from './Select';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => {

    const [value, setVAlue] = useState('2')

    return (<Select
        item={[
            { title: 'Vooo', value: 1 },
            { title: 'YYYY', value: 2 }
        ]}
        onClick={action('some item wes clicked')}
        value={value}
    />
    )
}

export const WithoutVAlue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select onClick={setValue}
            item={[
                { title: 'Vooo', value: 1 },
                { title: 'YYYY', value: 2 }
            ]}
            value={value}
        />
    </>
}
