import { UnControlledReating } from './UnControlledReating';
import { action } from '@storybook/addon-actions';

export default {
    title: 'UnControledOnOff',
    component: UnControlledReating,
}

export const UnControlledReatingMode = () => (<UnControlledReating />)
export const EmptyReating = () => (<UnControlledReating  defaultValue={5} />)
export const Reating1 = () => (<UnControlledReating  defaultValue={1} />)
export const Reating2 = () => (<UnControlledReating defaultValue={2} />)
export const Reating3 = () => (<UnControlledReating defaultValue={3} />)
