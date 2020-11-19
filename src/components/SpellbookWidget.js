import React from 'react';
import Widget from './Widget';
import { Heading, Text } from 'rebass'
import { Flex } from 'reflexbox'
import axios from "axios";
import SpellCard from "./SpellCard";

const APIURL = process.env.API_URL? process.env.API_URL: "http://lvh.me:8080/api/spells/"// "localhost:8080/api/spells/";

// Eventually, render each blank space with all the spells depending on the user's class through an AJAX call to the 5e API.

//Can't figure out a way to do this without causing an infinite loop.

export default class SpellbookWidget extends Widget {
    constructor(props) {
        super(props);
        // Here is where you write the tutorial!!!
        this.tutorialText = "";
        this.title = "Spellbook Widget";
        this.state = {
            spellList: [],
            isAPICalling: false,
            value: 'Level',
            ritualList: []
        };
        //NEEDS THE STATE OF THE CHARACTER'S CLASS 
        this.classState = props.widgetState.classState
    }

    handleChange(event) {
        this.setState({value: event.target.value});
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
            let spellURL = APIURL + classState;
            axios.get(spellURL).then((spellList)=>{
                if (this.state.value == "Alphabetical")
                {this.setState({spellList: spellList.data})}
                else if (this.state.value == "Level")
                {
                    this.levelSort(spellList);
                }
                else if (this.state.value == "Ritual")
                {
                    this.ritualSort(spellList)
                }
            }).catch(err=>{
                console.error(err);
            }) 
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.spellRender(this.classState);
    }

    ritualSort = (spellList) => {
        let ritualList = spellList.data.filter(spell=> spell.ritual == true)
        this.setState({spellList: ritualList});
    }

    levelSort = (spellList) => {
        spellList = spellList.data.sort(this.compareLevels);
        this.setState({spellList: spellList});
    }

    compareLevels = (a, b) => {
        const spellA = a.level;
        const spellB = b.level;
        let comparison = 0;
        if (spellA > spellB) {
          comparison = 1;
        } else if (spellA < spellB) {
          comparison = -1;
        }
        return comparison;
      }

renderSpells () {
    return (this.state.spellList.map(spell => (
        <SpellCard 
        setGlobalState = {this.props.setGlobalState}
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
                    <label for="group">Group Spells by:
                    &#8287;
                    &#8287;
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Alphabetical">Alphabetical</option>
                        <option value="Level">Level</option>
                        <option value="Ritual">Ritual</option>
                    </select>
                    </label>
                    </Text>
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
