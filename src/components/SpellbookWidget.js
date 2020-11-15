import React from 'react';
import Widget from './Widget';
import { Box, Heading, Text } from 'rebass'
import { Flex } from 'reflexbox'
import TutorialButton from "./TutorialButton"
import ResetButton from "./ResetButton"
import SingleCheckbox from "./SingleCheckbox"
import { Input } from "@rebass/forms";
import RitualButton from "./RitualButton";
import axios from "axios";

// Eventually, render each blank space with all the spells depending on the user's class through an AJAX call to the 5e API.

export default class SpellbookWidget extends Widget {
    constructor(props) {
        super(props);
        this.state = {
            spellList: [],
            isAPICalling: false
        }
    }
    //Literally have to loop through every spell in the API
    //userClass/this.props.userClass MUST BE THE CLASS NAME IN ALL LOWERCASE OR THIS DOES NOT WORK
    componentDidMount() {
        this.spellRender(this.props.userClass)
    }
    spellRender = (userClass) => {
        console.log("Firing the spell fetcher")
        if (this.state.isAPICalling)
        {
            console.log("going in true")
            return null;
        }
        else {
            console.log("going in false")
        this.setState({isAPICalling: true})
        let spellArray = [];
        // let classArray = [];
        let spellsURL = "https://www.dnd5eapi.co/api/spells/"
        axios.get(spellsURL).then(async response => {
            for (let index = 0; index < response.data.results.length; index++) {

                const spellName = response.data.results[index];
                let oneSpellURL = "https://www.dnd5eapi.co/api/spells/" + spellName.index;
                await axios.get(oneSpellURL).then(response2 => {
                    spellArray.push(response2.data);
                        // for (let classIndex = 0; classIndex < response2.data.classes.length; classIndex++) {
                        //     const classFound = response2.data.classes[classIndex].index;
                        //     if (userClass === classFound)
                        //     {
                        //         classArray.push(response2.data)
                        //     }
                        // }
                })
            }
            // console.log("classArray", classArray)
            console.log("spellArray", spellArray)
            this.setState({isAPICalling: false})
        })
        return (<h1>{userClass}</h1>)
    }
}

    render() {
        return (
            <Box>
                <Heading>
                    {this.props.children}
                </Heading>
                <Flex>
                    <Text
                    fontSize={[2, 3, 4]}
                    fontWeight='bold'
                    color='primary'>
                    <label for="group">Group spells by:</label>
                    <select name="group">
                        <option value="By Level">Level</option>
                        {/* <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option> */}
                    </select>
                    </Text>
                    <TutorialButton tutorial="spellbook"/>
                </Flex>

                {/* Below here will be a for loop with a call to the API for all spells, then render only the ones for the class passed in as {this.props.userClass} that'll then populate this entire list of spells */}
                {/* {this.spellRender(this.props.userClass)} */}

                <Flex>
                    <Text
                    fontSize={[2, 3, 4]}
                    fontWeight='bold'
                    color='primary'>
                        Spell Slots for Level 1: {/*Will put in Alex's cool-looking death save circles here*/}
                    </Text>
                </Flex>
                <Flex>
                    <ResetButton />
                </Flex>
                <Flex>
                    {/* Single Checkbox indicates if spell is prepped or not */}
                    <SingleCheckbox />
                    &#8287;
                    <Box width={1/2} px={2}>
                        <Input
                        className="spellName"
                        name="spell"
                        type="text"
                        placeholder="Spell Name"
                        />
                    </Box>
                    <Box width={1/2} px={2}>
                        <Input
                        className="castTime"
                        name="cast time"
                        type="text"
                        placeholder="Cast Time"
                        />
                    </Box>
                    <RitualButton />
                </Flex>
            </Box>
        )
    }
}
