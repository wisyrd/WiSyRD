import React from 'react';
import { Box, Flex, Button, Heading, Text, } from 'rebass';
import {Input, Label} from "@rebass/forms"
import Widget from './Widget';
import TutorialButton from "./TutorialButton"

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class BasicWidget extends Widget {

    constructor(props){
        super(props);
        this.title = "Basic Info widget";
        this.widgetType = "Basic-widget"
        this.tutorialText = <Text>This widget controls the display of basic character information. Information may be input and editted freely as necessary. In depth information on selecting a class and race may be found <a href="https://www.dndbeyond.com/sources/basic-rules/step-by-step-characters#1ChooseaRace"target="blank">HERE</a></Text>
    }

    renderPanel=()=> {
        return (<>
                 <Flex>
                    {/* <Label htmlFor='Character Name'>
                            Name:
                            </Label> */}
                        <Input
                            id='charName'
                            name="name"
                            type="text"
                            placeholder='Character Name'
                        width={1 / 2} />
                    {/* <Label htmlFor='Race'>
                            Race:
                            </Label> */}
                        <Input
                            id='charRace'
                            name="race"
                            type="text"
                            placeholder='Race'
                            width={1 / 2}/>            
                </Flex>
                <Flex>
                    {/* <Label htmlFor='Character Class'>
                            Class:
                            </Label> */}
                        <Input
                            id='charClass'
                            name="charClass"
                            type="text"
                            placeholder='Class'
                        width={3 / 4} />
                    {/* <Label
                        width={1 / 4}
                        htmlFor='Race'>
                            Level:
                            </Label> */}
                        <Input
                            id='charlvl'
                            name="level"
                            type="text"
                            placeholder='level'
                            width={1 / 4}/>            
                </Flex>
                <Flex>
                    {/* <Label htmlFor='Character Subclass'>
                        Subclass:
                    </Label> */}
                    <Input
                            id='charSub'
                            name="charSub"
                            type="text"
                            placeholder='Subclass'
                    width={1 / 2} />
                <Input
                            id='charExp'
                            name="charExp"
                            type="text"
                            placeholder='Exp.'
                        width={1 / 2} />
            </Flex>
            <Flex>
                    <TutorialButton tutorialText={this.tutorialText}/>
                </Flex>
            </>
        )
    }
}
