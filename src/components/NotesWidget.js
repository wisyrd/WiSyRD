import React from 'react';
import { Box, Button, Heading, Text, Flex } from 'rebass';
import Widget from './Widget';
import TutorialButton from "./TutorialButton"


export default class NotesWidget extends Widget {

    constructor(props){
        super(props);
        this.title = "Notes Widget";
        this.widgetType = "notes-widget"
        this.tutorialText = <Text>This is a basic widget for inputting and storing notes. The input field my be editted to add and delete text as desired.</Text>
    }

    renderPanel=()=> {
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
            <Flex>
                    <TutorialButton tutorialText={this.tutorialText}/>
                </Flex>
        </>
        )
    }
}
