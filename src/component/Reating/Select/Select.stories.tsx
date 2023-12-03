import { Select } from './Select';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Select',
    component: Select,
}

export const UnControlledReatingMode = () => (<Select item={[{title:'f',value: 4}]}  onClick={()=>{}} value={'d'}/>)
