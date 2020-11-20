import React from 'react';
import { Box, Button, Heading, Text } from 'rebass';
import Widget from './Widget';

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class ExampleWidget extends Widget {

    constructor(props){
        super(props);
        this.title = "My amazing widget";
        this.widgetType = "example-widget"
    }

    renderPanel=()=> {
        console.log(this.importedId);
        console.log(this.getImportedValue("text"));
        return (<>
                <Button>Beep</Button>
                <Text>{this.getImportedValue("text")}</Text>
            </>
        )
    }
}
