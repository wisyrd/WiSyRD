import React from 'react';
import { Box, Button, Heading, Text, Flex } from 'rebass';
import {Input, Label} from "@rebass/forms"
import Widget from './Widget';



export default class NotesWidget extends Widget {

    constructor(props){
        super(props);
        this.title = "Notes Widget";
        this.widgetType = "notes-widget"
    }

    renderPanel=()=> {
        return (<>
        <Flex>
            <Box>
            <Label htmlFor='email'></Label>
            <Input
                name='notes'
                type='notes'
                placeholder='Note'
            />
            </Box>
        </Flex>
        </>
        )
    }
}
