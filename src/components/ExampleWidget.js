import React from 'react';
import { Box, Button, Heading, Text } from 'rebass';
import Widget from './Widget';
import { Label, Input } from '@rebass/forms'

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class AttacksWidget extends Widget {

    render() {
        return (
            <Box {...this.props} className={"widget example-widget"}>
                <Heading>Attack Widget</Heading>
                <Button>Beep</Button>
                <Label htmlFor='Attack Widget'>Attack Name</Label>
                <Input
                    id='attackName'
                    name='Attack'
                    type='text'
                    placeholder='Enter Attack Name '
                />
                <Text>{this.props.children}</Text>
            </Box>
        )
    }
}
