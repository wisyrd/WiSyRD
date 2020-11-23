import React from 'react';
import Widget from '../Widget';
import { Box, Heading, Text } from 'rebass'
import DoubleCheckbox from './parts/DoubleCheckbox'
import { Flex } from 'reflexbox'

export default class SkillWidget extends Widget {
    constructor(props){
        super(props);
        this.title = "Skill Widget";
        this.widgetType = "skill-widget";
        this.tutorialText = <Text>This widget will let you see all current bonuses to each skill as determined by your attributes. Select the box next to intended attribute to indicate proficiency and once more to indicate Expertise. In depth information can be found <a href="https://www.dndbeyond.com/sources/basic-rules/using-ability-scores#UsingEachAbility" target="blank">HERE</a></Text>
        
        this.initializeIfNew();
    }

    initialize = () =>{

    }

    calculateSkill = (stat, skill) =>{
        let output = 0;
        if(this.props.widgetState[skill])
            output = this.getImportedValue(`${stat}mod`)+(this.getImportedValue("prof")*parseInt(this.props.widgetState[skill]));
        else
            output = this.getImportedValue(`${stat}mod`);
        return output;
    }

    handleUpdate = (value, skill) =>{
        this.setWidgetState({[skill]: value});
    }

    // On the left, a checkbox that can be clicked on twice; once to indicate proficiency, a second time to indicate expertise

    // Each skill has a number and a name. 20 skills or so. Listed top-to-bottom in alphabetical order.

    // Eventually, import number for skill from props. But for now, populate it with default numbers. No exporting needed because the calculations are made in app's state.

    // EVERY NUMBER NEXT TO A SKILL HERE REQUIRES IMPORTED STATE INFO OF THE CHARACTER'S ATTRIBUTES/COMBAT STATS SO THAT THEIR SKILL NUMBERS CAN BE CALCULATED
    renderPanel =()=> {
        return (<>
            <Box variant='backgroundBox'>
                <Box variant='skillsBox'>
                    <Flex>
                        <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "acrobatics")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("dex", "acrobatics")}</Text>
                    <Text variant='skillsText'>Acrobatics</Text>
                    </Flex>
                </Box>
                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "animal")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("wis", "animal")}</Text>
                    <Text variant='skillsText'>Animal Handling</Text>
                    </Flex>
                </Box>
                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "arcana")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("int", "arcana")}</Text>
                    <Text variant='skillsText'>Arcana</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "athletics")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("str", "athletics")}</Text>
                    <Text variant='skillsText'>Athletics</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "deception")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("cha", "deception")}</Text>
                    <Text variant='skillsText'>Deception</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "history")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("int", "history")}</Text>
                    <Text variant='skillsText'>History</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "insight")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("wis", "insight")}</Text>
                    <Text variant='skillsText'>Insight</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "intimidation")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("cha", "intimidation")}</Text>
                    <Text variant='skillsText'>Intimidation</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "investigation")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("int", "investigation")}</Text>
                    <Text variant='skillsText'>Investigation</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "medicine")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("wis", "medicine")}</Text>
                    <Text variant='skillsText'>Medicine</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "nature")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("int", "nature")}</Text>
                    <Text variant='skillsText'>Nature</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "perception")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("wis", "perception")}</Text>
                    <Text variant='skillsText'>Perception</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "performance")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("cha", "performance")}</Text>
                    <Text variant='skillsText'>Performance</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "persuasion")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("cha", "persuasion")}</Text>
                    <Text variant='skillsText'>Persuasion</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "religion")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("int", "religion")}</Text>
                    <Text variant='skillsText'>Religion</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "sleight")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("dex", "sleight")}</Text>
                    <Text variant='skillsText'>Sleight of Hand</Text>
                    </Flex>
                </Box>
                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "stealth")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("dex", "stealth")}</Text>
                    <Text variant='skillsText'>Stealth</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox onChange={value=>{this.handleUpdate(value, "survival")}}/>
                        </Box>
                    <Text variant='skillsNumber'>{this.calculateSkill("wis", "survival")}</Text>
                    <Text variant='skillsText'>Survival</Text>
                    </Flex>
                </Box>
                </Box>
            </>
        )
    }
}
