import { UnControledOnOff } from './UnControledOnOff';
import { action } from '@storybook/addon-actions';

export default {
    title: 'UnControledOnOff',
    component: UnControledOnOff,
}

export const UnControledOnOffMode = () => (<UnControledOnOff onChange={x=>x}/>)
