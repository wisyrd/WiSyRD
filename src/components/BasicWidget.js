import React from 'react';
import { Box, Flex, Button, Heading, Text, } from 'rebass';
import { Input, Label } from "@rebass/forms"
import Widget from './Widget';
import TutorialButton from "./TutorialButton"

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class BasicWidget extends Widget {

    constructor(props) {
        super(props);
        this.title = "Basic Info widget";
        this.widgetType = "Basic-widget"
        this.tutorialText = <Text>This widget controls the display of basic character information. Information may be input and editted freely as necessary. In depth information on selecting a class and race may be found <a href="https://www.dndbeyond.com/sources/basic-rules/step-by-step-characters#1ChooseaRace"target="blank">HERE</a></Text>
    }

    renderPanel=()=> {
        return (<>
                {/* ================================================
                                Primary box styling
            ================================================ */}
                <Box variant='backgroundBox'>

                    {/* ================================================
                                Character Name Box
                ================================================ */}
                    {/* <Label htmlFor='Character Name'>
                            Name:
                            </Label> */}
                    <Box variant='fullWidthBox'>
                        <Text variant='cardHeaderSmall'>Character Name</Text>
                        <Input
                            id='charName'
                            name='name'
                            type='text'
                            placeholder='Character Name' />
                    </Box>

                    {/* ================================================
                                        Race Box
                    ================================================ */}

                    <Box>
                        <Flex>
                            {/* <Label htmlFor='Race'>
                            Race:
                            </Label> */}
                            <Box variant='halfWidthBox'>
                                <Text variant='cardHeaderSmall'>Race</Text>
                                <Input
                                    id='charRace'
                                    name='race'
                                    type='text'
                                    placeholder='Race' />
                            </Box>

                    {/* ================================================
                                        Subclass Box
                    ================================================ */}
                            {/* <Label htmlFor='Character Class'>
                            Class:
                            </Label> */}
                            <Box variant='halfWidthBox'>
                                <Text variant='cardHeaderSmall'>Subclass</Text>
                                <Input
                                    id='charClass'
                                    name='charClass'
                                    type='text'
                                    placeholder='Class' />
                            </Box>
                        </Flex>
                    </Box>

                    {/* ================================================
                                        Level Box
                    ================================================ */}
                    <Box>
                        <Flex>
                            <Box variant="statsBox">
                                <Text variant='cardHeaderSmall'>Level</Text>                        
                                <Input
                                    id='charlvl'
                                    name="level"
                                    type="text"
                                    placeholder='level'/> 
                            </Box>
           
                    {/* ================================================
                                        Subclass Box
                    ================================================ */}
                            <Box variant='statsBox'>
                                <Text variant='cardHeaderSmall'>Subclass</Text>
                                    <Input
                                        id='charSub'
                                        name="charSub"
                                        type="text"
                                        placeholder='Subclass' />
                            </Box>

                    {/* ================================================
                                        Exp Box
                    ================================================ */}
                            <Box variant='statsBox'>
                                <Text variant='cardHeaderSmall'>Exp</Text>
                                <Input
                                    id='charExp'
                                    name="charExp"
                                    type="text"
                                    placeholder='Exp.'/>
                            </Box>

                        </Flex>
                    </Box>
                    <Flex>
                        <TutorialButton tutorialText={this.tutorialText}/>
                    </Flex>
                </Box>
            </>
        )
    }
}