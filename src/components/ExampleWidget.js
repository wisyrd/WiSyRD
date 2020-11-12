import React from 'react';
import { Box, Button, Heading, Text } from 'rebass';
import Widget from './Widget';

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class ExampleWidget extends Widget {

    render() {
        return (
            <Box {...this.props} className={"widget example-widget"}>
                <Heading>Example Widget</Heading>
                <Button>Beep</Button>
                <Text>{this.props.children}</Text>
            </Box>
        )
    }
}
