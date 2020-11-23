import React from 'react';
import Widget from '../Widget';
import { Heading, Text, Box } from 'rebass'
import { Select, Input } from "@rebass/forms"
import { Flex } from 'reflexbox'
import axios from "axios";
import SpellCard from "./parts/SpellCard";

// Eventually, render each blank space with all the spells depending on the user's class through an AJAX call to the 5e API.

//Can't figure out a way to do this without causing an infinite loop.

export default class SpellbookWidget extends Widget {

    constructor(props) {
        super(props);
        // Here is where you write the tutorial!!!
        this.tutorialText = <Text>This widget allows you to manage various spells each class can utilize during play. There is a slot to mark the uses and variables involved with each spell. More information on spells may be found <a href="https://roll20.net/compendium/dnd5e/Spells#content" target="blank">HERE</a> </Text>;
        this.title = "Spellbook Widget";
        this.state = {
            spellList: [],
            isAPICalling: false,
            value: 'Level',
            ritualList: []
        };
        //NEEDS THE STATE OF THE CHARACTER'S CLASS 
        this.classState = props.widgetState.classState

        this.apiURL = props.widgetState.apiURL
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    // userClass/this.props.userClass MUST BE THE CLASS NAME IN ALL LOWERCASE OR THIS DOES NOT WORK
    componentDidMount() {
        this.spellRender(this.classState);
    }

    spellRender = (classState) => {
        if (this.state.isAPICalling) {
            return null;
        }
        else {
            let spellURL = this.apiURL + classState;
            axios.get(spellURL).then((spellList) => {
                if (this.state.value == "Alphabetical") { this.setState({ spellList: spellList.data }) }
                else if (this.state.value == "Level") {
                    this.levelSort(spellList);
                }
                else if (this.state.value == "Ritual") {
                    this.ritualSort(spellList)
                }
            }).catch(err => {
                console.error(err);
            })
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        this.spellRender(this.classState);
    }

    ritualSort = (spellList) => {
        let ritualList = spellList.data.filter(spell => spell.ritual == true)
        this.setState({ spellList: ritualList });
    }

    levelSort = (spellList) => {
        spellList = spellList.data.sort(this.compareLevels);
        this.setState({ spellList: spellList });
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

    renderSpells() {
        return (this.state.spellList.map(spell => (
            <SpellCard
                setGlobalState={this.props.setGlobalState}
                name={spell.name}
                castTime={spell.castTime}
                ritual={spell.ritual}
                duration={spell.duration}
                level={spell.level}
                material={spell.material}
                vComponent={spell.components.V ? ("V") : ""}
                sComponent={spell.components.S ? ("S") : ""}
                description={spell.desc}
            />
        )))
    }

    renderPanel = () => {
        return (
            <>

                    {/* <Heading>
                        {this.props.children}
                    </Heading>
                    <Flex>
                        <Box variant='fullWidthBox'>
                            <Text variant='cardHeaderSmall'>
                                <Text for="group">Group Spells by:
                                &#8287;
                                &#8287;
                                    <Box variant='classSelect'>
                                        <Select value={this.state.value} onChange={this.handleChange}>
                                            <option value="Alphabetical">Alphabetical</option>
                                            <option value="Level">Level</option>
                                            <option value="Ritual">Ritual</option>
                                        </Select>
                                    </Box>
                                </Text>
                            </Text>
                        </Box>
                    </Flex> */}

                    <Box variant='clusterMain'>
                        <Box variant='tableName'>Name</Box>
                        <Input
                            textAlign='center'
                            name="attack"
                            type="text"
                            placeholder="Name" />

                        <Box>
                            <Flex className="attackBox">
                                <Box variant='tableLeft'>
                                    <Box variant='tableLabel'>Prep Spell</Box>
                                    <Input
                                        textAlign='center'
                                        name="hit"
                                        type="text"
                                        placeholder="#" />
                                </Box>

                                <Box variant='tableMid'>
                                    <Box variant='tableLabel'>Cast Time</Box>
                                    <Input
                                        textAlign='center'
                                        name="damageType"
                                        type="text"
                                        placeholder="#" />
                                </Box>

                                <Box variant='tableRight'>
                                    <Box variant='tableLabel'>Ritual</Box>
                                    <Input
                                        textAlign='center'
                                        name="range"
                                        type="text"
                                        placeholder="#" />
                                </Box>
                            </Flex>
                        </Box>
                    </Box>



                { this.renderSpells()}
            </>
        )
    }
}
