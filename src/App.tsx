import React from 'react';
import './App.css';
import Accordion from "./component/Accordion/Accordion";
import { UncontrolledAccordion } from './component/Accordion/UnControlledAccordion';
import { OnOff } from './component/OnOff/OnOff';
import { Reating } from "./component/Reating/Reating";
import { UnControlledReating } from './component/Reating/UnControlledReating';

function sum(a: number, b: number) {
    alert(a + b)
}

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            {/* <PageTitle title={'This is APP component'} />
            <PageTitle title={'My friendf'} />
            <Reating value={0} />
            <Reating value={1} />
            <Reating value={2} />
            <Reating value={3} />
            <Reating value={4} />
            <Reating value={5} />

            <Accordion titleValue={'World'} 
            collapsed={true} />
            <Accordion titleValue={'Hello'} 
            collapsed={false} /> */}
            <UncontrolledAccordion titleValue='dd'/>
            <UnControlledReating/>
            <Reating value={4} />
            <OnOff  />
            <OnOff  />

        </div>
    );
}
type PagePropsType = {
    title: string
}

function PageTitle(props: PagePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
