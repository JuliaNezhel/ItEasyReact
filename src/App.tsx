import React, { useState } from 'react';
import './App.css';
import { Accordion } from "./component/Accordion/Accordion";
import { UncontrolledAccordion } from './component/UnControlledAccordion/UnControlledAccordion';
import { OnOff } from './component/OnOff/OnOff';
import { UnControledOnOff } from './component/UnControledOnOff/UnControledOnOff';
import { Reating, ReatingValueType } from "./component/Reating/Reating";
import { UnControlledReating } from './component/UnControlledReating/UnControlledReating';



function App() {

    let [reatingValue, setReatingValue] = useState<ReatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [swichOn, setswichOn] = useState(false)

    console.log('App rendering')
    return (
        <div className="App">
            <UncontrolledAccordion titleValue='This is Title' />
            <Accordion titleValue='Tix us Title Accordion' item={[{ title: 'Tom', value: 1 }, { title: "Ann", value: 2 }]}
                onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                collapsed={accordionCollapsed} onClick={() => { }}
            />
            <Reating value={4} onClick={setReatingValue} />
            <UnControlledReating />
            <OnOff on={swichOn} onChange={setswichOn} />

            <UnControledOnOff onChange={setswichOn} />{swichOn.toString()}
            {/* <OnOff on={on} onChange={setOn}/> */}

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
