import React from 'react';
import { Box, Button, Heading, Text, Flex } from 'rebass';
import Widget from './Widget';



export default class NotesWidget extends Widget {

    constructor(props){
        super(props);
        this.title = "Notes Widget";
        this.widgetType = "notes-widget"
    }

    renderPanel() {
        return (<>
        <Flex>
            <Text>{this.props.children}</Text>

        <Text
            fontSize={[ 3, 4, 5 ]}
            fontWeight=''
            color='primary'>
            Text
        </Text>
        </Flex>
        </>
        )
    }
}
