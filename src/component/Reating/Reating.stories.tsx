import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Reating, ReatingValueType } from './Reating';
import { useState } from 'react';

export default {
    title: 'Reating stories',
    component: Reating,
};

// export default meta;

export const EmptyReating = () => (<Reating onClick={() => ({})} value={5} />)
export const Reating1 = () => (<Reating onClick={() => ({})} value={1} />)
export const Reating2 = () => (<Reating onClick={x => x} value={2} />)
export const ChanhgeReating = () => {
    const [reating, setReating] = useState<ReatingValueType>(3);
    return <Reating value={reating} onClick={setReating}  />
}