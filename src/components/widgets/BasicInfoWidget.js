import React from 'react';
import Widget from '../Widget';
import { Box, Flex, Text, } from 'rebass';
import { Input, Select } from "@rebass/forms"

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class BasicWidget extends Widget {

    constructor(props) {
        super(props);
        this.title = "Basic Info widget";
        this.widgetType = "basic-info-widget"
        this.tutorialText = <Text>This widget controls the display of basic character information. Information may be input and editted freely as necessary. In depth information on selecting a class and race may be found <a href="https://www.dndbeyond.com/sources/basic-rules/step-by-step-characters#1ChooseaRace"target="blank">HERE</a></Text>
    
        this.initializeIfNew();
    }

    initialize(){
        this.setExportedValue("charRace", "");
        this.setExportedValue("charClass", "barbarian");
        this.setExportedValue("charLevel", 1);
    }

    handleUpdate(event, field){
        let value = event.target.value;
        switch(field){
            case "charLevel": value = parseInt(value);
            case "charRace":
            case "charClass":
                this.setExportedValue(field, value);
                break;
            default:
                this.setWidgetState({[field]: value});
        }
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
                            placeholder='Character Name'
                            onChange={event=>this.handleUpdate(event, "charName")} />
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
                                    placeholder='Race'
                                    onChange={event=>this.handleUpdate(event, "charRace")} />
                            </Box>

                    {/* ================================================
                                        Class Box
                    ================================================ */}
                            {/* <Label htmlFor='Character Class'>
                            Class:
                            </Label> */}
                            <Box variant='halfWidthBox'>
                                <Text variant='cardHeaderSmall'>Class</Text>
                                <Box variant='classSelect'>
                                    <Select
                                        onChange={event=>this.handleUpdate(event, "charClass")}>
                                    <option value="barbarian">Barbarian</option>
                                    <option value="bard"     >Bard</option>
                                    <option value="cleric"   >Cleric</option>
                                    <option value="druid"    >Druid</option>
                                    <option value="fighter"  >Fighter</option>
                                    <option value="monk"     >Monk</option>
                                    <option value="paladin"  >Paladin</option>
                                    <option value="ranger"   >Ranger</option>
                                    <option value="rogue"    >Rogue</option>
                                    <option value="sorcerer" >Sorcerer</option>
                                    <option value="warlock"  >Warlock</option>
                                    <option value="wizard"   >Wizard</option>
                                </Select>
                                </Box>
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
                                    type="number"
                                    placeholder='level'
                                    onChange={event=>this.handleUpdate(event, "charLevel")}/> 
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
                                        placeholder='Subclass'
                                        onChange={event=>this.handleUpdate(event, "charSubclass")} />
                            </Box>

                    {/* ================================================
                                        Exp Box
                    ================================================ */}
                            <Box variant='statsBox'>
                                <Text variant='cardHeaderSmall'>Exp</Text>
                                <Input
                                    id='charExp'
                                    name="charExp"
                                    type="number"
                                    placeholder='Exp.'
                                    onChange={event=>this.handleUpdate(event, "charExp")}/>
                            </Box>

                        </Flex>
                    </Box>
                </Box>
            </>
        )
    }
}