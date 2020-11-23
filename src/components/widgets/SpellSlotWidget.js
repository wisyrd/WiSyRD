import React from 'react';
import { Box, Flex, Heading, Text } from 'rebass';
import {Checkbox, Label} from '@rebass/forms';
import Widget from '../Widget';

const slotList = {
    bard: "full",
    cleric: "full",
    druid: "full",
    fighter: "third",
    paladin: "half",
    ranger: "half",
    rogue: "third",
    sorcerer: "full",
    warlock: "pact",
    wizard: "full",
    spells: {
        0: [],
        1: [2],
        2: [3],
        3: [4,2],
        4: [4,3],
        5: [4,3,2],
        6: [4,3,3],
        7: [4,3,3,1],
        8: [4,3,3,2],
        9: [4,3,3,3,1],
       10: [4,3,3,3,2],
       11: [4,3,3,3,2,1],
       12: [4,3,3,3,2,1],
       13: [4,3,3,3,2,1,1],
       14: [4,3,3,3,2,1,1],
       15: [4,3,3,3,2,1,1,1],
       16: [4,3,3,3,2,1,1,1],
       17: [4,3,3,3,2,1,1,1,1],
       18: [4,3,3,3,3,1,1,1,1],
       19: [4,3,3,3,3,2,1,1,1],
       20: [4,3,3,3,3,2,2,1,1]
    },
    pactSpells: {
        1: [1,1,0],
        2: [2,1,0],
        3: [2,2,0],
        4: [2,2,0],
        5: [2,3,0],
        6: [2,3,0],
        7: [2,4,0],
        8: [2,4,0],
        9: [2,5,0],
       10: [2,5,0],
       11: [3,5,6],
       12: [3,5,6],
       13: [3,5,7],
       14: [3,5,7],
       15: [3,5,8],
       16: [3,5,8],
       17: [4,5,9],
       18: [4,5,9],
       19: [4,5,9],
       20: [4,5,9]
    }
}


export default class SpellSlotWidget extends Widget {

    // TODO: Handle resizing on update

    constructor(props){
        super(props);
        this.title = "Spell Slot Widget";
        this.widgetType = "spell-slot-widget";
        this.tutorialText = <Text><a href="" target="blank">Spell Slot Tutorial</a></Text>;

        this.charClass = this.getImportedValue("charClass");
        this.charLevel = this.getImportedValue("charLevel");
        
        if(slotList[this.charClass]=="pact"){
            let arcanums = (Math.floor((this.charLevel-9)/2));
            this.setHeight(7+3+(arcanums>0? 2*arcanums : 0));
        }else{
            this.setHeight(7+2+(this.charLevel));
        }
    }
    


    showSlots() {
        this.charClass = this.getImportedValue("charClass");
        this.charLevel = this.getImportedValue("charLevel");

           let casterType = slotList[this.charClass];
           let slotArray = [];
           switch(casterType){
               case "full":  slotArray = slotList.spells[                             this.charLevel       ]; break;
               case "half":  slotArray = slotList.spells[                  Math.floor(this.charLevel/2)    ]; break;
               case "third": slotArray = slotList.spells[this.charLevel>2? Math.ceil( this.charLevel/3) : 0]; break;
               case "pact":  slotArray = slotList.pactSpells[this.charLevel];                                 break;
               default:      slotArray = [];
           }

            if(casterType=="pact"){
                const level = slotArray[1];
                let slotChecks = new Array(slotArray[0]).fill(1);
                let mystics;
                if(slotArray[2]){
                    mystics = new Array(slotArray[2]-5).fill(1);
                }else{
                    mystics = []
                }
                

                return (<>
                    <Flex>  {/* The first spell slot item for warlocks */}
                        <Text width={1/4}>
                            Level {level}
                        </Text>
                        <Flex>
                        {slotChecks.map(s=>{
                            return <Label><Checkbox /></Label>
                        })}
                        </Flex>
                    </Flex>

                    {mystics.map((m, i)=>{
                        return (
                            <Flex> {/* The other spell slot items for warlocks */}
                                <Text width={1/4}>Level {i+6}</Text>
                                <Flex>
                                    <Label><Checkbox /></Label>
                                </Flex>
                            </Flex>
                            )
                    })}
                </>)
            }else{

                return slotArray.map((slots, index)=>{
                    const level = index+1;
                    let slotChecks = new Array(slots).fill(1);
                    return (
                        <Flex> {/* The spell slot item for other casters */}
                            <Text width={1/4}>Level {level}</Text>
                            <Flex>
                                {slotChecks.map(s=>{
                                    return <Label><Checkbox /></Label>
                                })}
                            </Flex>
                        </Flex>
                    )
                })
            }
    }

    renderPanel=()=> {
        return (<>
            <Heading>{this.props.children}</Heading>
                {this.showSlots()}
            </>
        )
    }
}