import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import WidgetRenderer from '../WidgetRenderer'

export default function SheetPage() {
    let id = window.location.href.split("/").pop();

    let [secretState, setSecretState] = useState({sheets: []});

    useEffect(()=>{
        API.loadSheet(id).then(data=>{
            let sheets = [...secretState.sheets];
            sheets.push(data.sheetData);
            setSecretState({sheets});
        })
    }, []);

    return (<div>
        {secretState.sheets.map(sheet=>{
            return <WidgetRenderer state={sheet} id={id} />
        })}
    </div>)
}
