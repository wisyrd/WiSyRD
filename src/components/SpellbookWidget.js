import React from 'react';
import Widget from './Widget';
import { Box, Heading, Text } from 'rebass'
import { Flex } from 'reflexbox'
import TutorialButton from "./TutorialButton"
import ResetButton from "./ResetButton"
import SingleCheckbox from "./SingleCheckbox"
import { Checkbox, Label } from "@rebass/forms";
import RitualButton from "./RitualButton";
import spells from "./spells.json";
import axios from "axios";
import SpellCard from "./SpellCard";

// Eventually, render each blank space with all the spells depending on the user's class through an AJAX call to the 5e API.

export default class SpellbookWidget extends Widget {
    constructor(props) {
        super(props);
        // Here is where you write the tutorial!!!
        this.tutorialText = "",
        this.state = {
            spellList: [{
                "name": "Acid Arrow",
                "castTime": "1 action",
                "duration": "Instantaneous",
                "level": 2,
                "range": "90 feet",
                "ritual": false,
                "aoe": "",
                "attackType": "ranged",
                "classNames": {
                    "classes": [
                        {
                            "index": "wizard",
                            "name": "Wizard",
                            "url": "/api/classes/wizard"
                        }
                    ]
                },
                "components": {
                    "V": true,
                    "S": true,
                    "M": true
                },
                "material": "Powdered rhubarb leaf and an adder's stomach.",
                "damage": {
                    "damage_type": {
                        "index": "acid",
                        "name": "Acid",
                        "url": "/api/damage-types/acid"
                    }
                },
                "desc": {
                    "desc": [
                        "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn."
                    ]
                },
                "healAtSlotLevel": {},
                "higherLevel": {
                    "higherLevel": [
                        "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
                    ]
                }
            },
            {
                "name": "Acid Splash",
                "castTime": "1 action",
                "duration": "Instantaneous",
                "level": 0,
                "range": "60 feet",
                "ritual": false,
                "aoe": "",
                "attackType": "",
                "classNames": {
                    "classes": [
                        {
                            "index": "sorcerer",
                            "name": "Sorcerer",
                            "url": "/api/classes/sorcerer"
                        },
                        {
                            "index": "wizard",
                            "name": "Wizard",
                            "url": "/api/classes/wizard"
                        }
                    ]
                },
                "components": {
                    "V": true,
                    "S": true
                },
                "material": "",
                "damage": {
                    "damage_type": {
                        "index": "acid",
                        "name": "Acid",
                        "url": "/api/damage-types/acid"
                    },
                    "damage_at_character_level": {
                        "1": "1d6",
                        "5": "2d6",
                        "11": "3d6",
                        "17": "4d6"
                    }
                },
                "desc": {
                    "desc": [
                        "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a dexterity saving throw or take 1d6 acid damage.",
                        "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
                    ]
                },
                "healAtSlotLevel": {},
                "higherLevel": {}
            },
            {
                "name": "Aid",
                "castTime": "1 action",
                "duration": "8 hours",
                "level": 2,
                "range": "30 feet",
                "ritual": false,
                "aoe": "",
                "attackType": "",
                "classNames": {
                    "classes": [
                        {
                            "index": "cleric",
                            "name": "Cleric",
                            "url": "/api/classes/cleric"
                        },
                        {
                            "index": "paladin",
                            "name": "Paladin",
                            "url": "/api/classes/paladin"
                        }
                    ]
                },
                "components": {
                    "V": true,
                    "S": true,
                    "M": true
                },
                "material": "A tiny strip of white cloth.",
                "damage": {},
                "desc": {
                    "desc": [
                        "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration."
                    ]
                },
                "healAtSlotLevel": {
                    "healAtSlotLevel": {
                        "2": "5",
                        "3": "10",
                        "4": "15",
                        "5": "20",
                        "6": "25",
                        "7": "30",
                        "8": "35",
                        "9": "40"
                    }
                },
                "higherLevel": {
                    "higherLevel": [
                        "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd."
                    ]
                }
            }],
            isAPICalling: false
        }
    }
    //Literally have to loop through every spell in the API
    //userClass/this.props.userClass MUST BE THE CLASS NAME IN ALL LOWERCASE OR THIS DOES NOT WORK
    // componentDidMount() {
    //     this.spellRender(this.props.userClass)
    // }
    // spellRender = (userClass) => {
    //     console.log("Firing the spell fetcher")
    //     if (this.state.isAPICalling)
    //     {
    //         console.log("going in true")
    //         return null;
    //     }
    //     else {
    //         // {this.state.spellList.map(spell => (
    //         //     <SpellCard 
    //         //     name = {spell.name}
    //         //     />
    //         // ))}
    //         //Call API of spells.json here
    //         let spellURL = "localhost:8080/api/spells/" + userClass
    //         axios.get(spellURL)
    //         for (let index = 0; index < spells.length; index++) {
    //             for (let i = 0; i< spells[index].classNames.classes.length; i++)
    //             {
    //                 if (spells[index].classNames.classes[i].index == userClass)
    //                 {
    //                     this.setState({ spellList: this.state.spellList.push(spells[index]) });
    //                 }
    //             }
    //         }
    //         console.log("spellList: ", this.state.spellList)
    // }
// }

    renderPanel=()=> {
        return (
            <>
                <Heading>
                    {this.props.children}
                </Heading>
                <Flex>
                    <Text
                    fontSize={[2, 3, 4]}
                    fontWeight='bold'
                    color='primary'>
                        {/* Eventually, I'll allow users to group their spells */}
                    <label for="group">Group spells by:</label>
                    <select name="group">
                        <option value="By Level">Level</option>
                        {/* <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option> */}
                    </select>
                    </Text>
                    <TutorialButton tutorialText={this.tutorialText}/>
                </Flex>

                <Flex>
                    <Text
                    fontSize={[2, 3, 4]}
                    fontWeight='bold'
                    color='primary'>
                        Spell Slots for Level 1:
                        <Flex><Label><Checkbox/></Label>
                        <Label><Checkbox/></Label>
                        <Label><Checkbox/></Label>
                        <Label><Checkbox/></Label>
                        <Label><Checkbox/></Label>
                        <Label><Checkbox/></Label></Flex> {/*Will put in Alex's cool-looking death save circles here*/}
                    </Text>
                </Flex>
                <Flex>
                    <ResetButton />
                </Flex>

                {/* Below here will be a for loop with a call to the API for all spells, then render only the ones for the class passed in as {this.props.userClass} that'll then populate this entire list of spells */}
                {this.state.spellList.map(spell => (
                <SpellCard 
                name = {spell.name}
                castTime = {spell.castTime}
                ritual = {spell.ritual}
                />
                ))}
            </>
        )
    }
}
