import React from 'react';
import { Box, Button, Heading, Text, Flex } from 'rebass';
import { Label, Textarea } from '@rebass/forms'
import Widget from './Widget';
import TutorialButton from "./TutorialButton"


export default class NotesWidget extends Widget {

    constructor(props) {
        super(props);
        this.title = "Notes Widget";
        this.widgetType = "notes-widget"
        this.tutorialText = <Text>This is a basic widget for storing any information needed in text format. It may be editted at will and is there for refernce.</Text>
    }

    renderPanel = () => {
        return (<>
            <Box variant='backgroundBox'>
                <Box variant='fullWidthBox'>
                    <Textarea variant='textArea' placeholder='Add notes' onChange={this.handleChange} style={{resize:"none"}}></Textarea>
                </Box>
            </Box>
        </>
        )
    }

    handleChange=(event)=>{
        this.setExportedValue("text", event.target.value);
    }
}
