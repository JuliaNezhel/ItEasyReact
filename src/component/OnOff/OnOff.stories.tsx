import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {  OnOff } from './OnOff';
import { useState } from 'react';

export default {
    title: 'OnOff stories',
    component: OnOff,
};

// export default meta;

export const OnMode = () => (<OnOff on={true} onChange={x=>x}  />)
export const OffMode = () => (<OnOff on={false} onChange={x=>x}  />)

export const OnOffControl = () => {
    const [onOff, setOnOff] = useState(false);
    return <OnOff on={onOff} onChange={setOnOff}  />
}