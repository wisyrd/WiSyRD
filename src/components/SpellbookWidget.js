import React from 'react';
import Widget from './Widget';
import { Heading, Text } from 'rebass'
import { Flex } from 'reflexbox'
import TutorialButton from "./TutorialButton"
import axios from "axios";
import SpellCard from "./SpellCard";

// Eventually, render each blank space with all the spells depending on the user's class through an AJAX call to the 5e API.

export default class SpellbookWidget extends Widget {

    constructor(props) {
        super(props);
        // Here is where you write the tutorial!!!
        this.tutorialText = "";
        this.title = "Spellbook Widget";
        this.state = {
            spellList: [],
            isAPICalling: false
        };
        //CHANGE THE SECOND HALF OF THIS TO SET EQUAL TO THE IMPORTED DATA
        this.classState = props.widgetState.classState

        this.apiURL = props.widgetState.apiURL
    }

    // userClass/this.props.userClass MUST BE THE CLASS NAME IN ALL LOWERCASE OR THIS DOES NOT WORK
    componentDidMount() {
        this.spellRender(this.classState);
    }

    spellRender = (classState) => {
        if (this.state.isAPICalling)
        {
            return null;
        }
        else {
<<<<<<< Updated upstream
            let spellURL = APIURL + classState;
            console.log(spellURL)
=======
            let spellURL = this.apiURL + classState;
>>>>>>> Stashed changes
            axios.get(spellURL).then((spellList)=>{
                this.setState({spellList: spellList.data})
            }).catch(err=>{
                console.error(err);
            }) 
        }
    }

renderSpells () {
    return (this.state.spellList.map(spell => (
        <SpellCard 
        name = {spell.name}
        castTime = {spell.castTime}
        ritual = {spell.ritual}
        duration = {spell.duration}
        level = {spell.level}
        material = {spell.material}
        vComponent = {spell.components.V ? ("V") : ""}
        sComponent = {spell.components.S ? ("S") : ""}
        description = {spell.desc}
        />
        )))
}

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
                        {/* Eventually, I'll allow users to group their spells... maybe lol */}
                    <label for="group">Group Spells by:</label>
                    &#8287;
                    &#8287;
                    <select name="group">
                        <option value="By Level">Level</option>
                        {/* <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option> */}
                    </select>
                    </Text>
                    &#8287;
                    &#8287;
                    <TutorialButton tutorialText={this.tutorialText}/>
                </Flex>
                <Flex>
                    <Text width={1 / 4}>Prep Spell</Text>
                    <Text width={1 / 4}>Name</Text>
                    <Text width={1 / 4}>Casting Time</Text>
                    <Text width={1 / 4}>Ritual</Text>              
                </Flex>
                {this.renderSpells()}
            </>
        )
    }
}
