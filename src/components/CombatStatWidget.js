import React from 'react';
import { Box, Heading, Text } from 'rebass';
import { Input, Label, Checkbox } from '@rebass/forms'
import Widget from './Widget';
import { Flex } from 'reflexbox'
import TutorialButton from "./TutorialButton"

<<<<<<< HEAD:src/components/CombatStat.js
export default class CombatStat extends Widget {

    renderPanel() {
        return (<>
            <Box width={350} {...this.props} className={"widget example-widget"}>
                <Heading variant="heading">Combat Stats</Heading>
=======
// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class CombatStatWidget extends Widget {
    constructor(props){
        super(props);
        this.title = "Combat Stats";
        this.widgetType = "combat-stat-widget"
        this.tutorialText = <Text>This widget shows basic combat statistics needed most frequently. These statistics are directly influenced by the character's attribute modifiers. An in depth guide to combat can be found <a href="https://www.dndbeyond.com/sources/basic-rules/combat"target="blank">HERE</a></Text>
    }

    renderPanel=()=> {
        return (
            <Box width={350} {...this.props} className={"widget example-widget"}>
>>>>>>> dev:src/components/CombatStatWidget.js

            {/* ================================================
                                Primary box styling
            ================================================ */}
                <Box
                    p={3}
                    width={1}
                    bg='purple'>
               
                {/* ================================================
                                Current HP Box
                ================================================ */}
                    <Box variant="fullWidthBox">
                        <Text variant='cardHeader'>Current HP</Text>
                        <Input
                            id='currentHP'
                            type='integer'
                            textAlign='center'
                            placeholder='CurrentHP' />
                    </Box>
                
                    {/* ================================================
                                        Max HP Box
                    ================================================ */}
                         <Box>
                             <Flex>
                        <Box variant="statsBox">
                            <Text variant='cardHeader'>Max HP</Text>
                            <Input
                                id='maxHP'
                                type='integer'
                                textAlign='center'
                                placeholder='#' />
                        </Box>

                        {/* ================================================
                                                Temp HP Box
                            ================================================ */}
                        <Box variant="statsBox">
                            <Text variant='cardHeader'>Temp HP</Text>
                            <Input
                                id='tempHP'
                                type='integer'
                                textAlign='center'
                                placeholder='#' />
                        </Box>

                        {/* ================================================
                                                AC Box
                            ================================================ */}
                        <Box variant="statsBox">
                            <Text variant='cardHeader'>AC</Text>
                            <Input
                                id='AC'
                                type='integer'
                                textAlign='center'
                                placeholder='#' />
                        </Box>
                    </Flex>
                </Box>
               
                {/* ================================================
                                Lower Bar Box
                ================================================ */}
                <Box
                    width={1}>
                    <Flex>
                        {/* ================================================
                                                Initiative Box
                        ================================================ */}
                        <Box variant="statsBox">
                            <Text variant='cardHeader'>Initiative</Text>
                            <Input
                                id='initiative'
                                type='integer'
                                textAlign='center'
                                placeholder='#' />
                        </Box>

                        {/* ================================================
                                        Death Saves Box
                        ================================================ */}
                        <Box variant="statsBox">
                            <Text variant='cardHeader'>Death Saves</Text>
                            <Box>
                                <Label
                                    htmlFor='deathSuccess'
                                    fontSize={[1]}
                                    fontWeight='bold'
                                    color='black'>Successes</Label>
                                <Flex>
                                    <Label><Checkbox id='deathSaveOne' name='deathSaveOne' /></Label>
                                    <Label><Checkbox id='deathSaveTwo' name='deathSaveTwo' /></Label>
                                    <Label><Checkbox id='deathSaveThree' name='deathSaveThree' /></Label>
                                </Flex>
                            </Box>

                            <Box>
                                <Label
                                    htmlFor='deathFail'
                                    fontSize={[1]}
                                    fontWeight='bold'
                                    color='black'>Failures</Label>
                                <Flex>
                                    <Label><Checkbox id='deathSaveOne' name='deathSaveOne' /></Label>
                                    <Label><Checkbox id='deathSaveTwo' name='deathSaveTwo' /></Label>
                                    <Label><Checkbox id='deathSaveThree' name='deathSaveThree' /></Label>
                                </Flex>
                            </Box>
                        </Box>

                        {/* ================================================
                                        Speed Box
                        ================================================ */}
                        <Box variant="statsBox">
                            <Text variant='cardHeader'>Speed</Text>
                            <Input
                                id='speed'
                                type='integer'
                                textAlign='center'
                                placeholder='#' />
                        </Box>
                    </Flex>
                </Box>
            </Box>

                <Text>{this.props.children}</Text>
                <Flex>
                    <TutorialButton tutorialText={this.tutorialText}/>
                </Flex>
            </Box>
        </>)
    }
}
