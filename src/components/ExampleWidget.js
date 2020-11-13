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

    renderPanel() {
        return (<>
                <Button>Beep</Button>
                <Text>{this.props.children}</Text>
            </>
        )
    }
}
