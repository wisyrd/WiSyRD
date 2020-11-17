import React from 'react';
import Widget from './Widget';
import { ThemeProvider } from 'emotion-theming'
import { Box, Heading, Text } from 'rebass'
import DoubleCheckbox from './DoubleCheckbox'
import { Flex } from 'reflexbox'
import TutorialButton from "./TutorialButton"

// I've kept this long list of state in to remind us what obscure stats will be needed to be kept track of, but will be deleted later.

export default class SkillWidget extends Widget {
    constructor(props){
        super(props);
        this.title = "Skill Widget";
        this.widgetType = "skill-widget";
        this.tutorialText = <Text>This widget will let you see all current bonuses to each skill as determined by your attributes. Select the box next to intended attribute to indicate proficiency and once more to indicate Expertise. In depth information can be found <a href="https://www.dndbeyond.com/sources/basic-rules/using-ability-scores#UsingEachAbility" target="blank">HERE</a></Text>
    }

    state = {
        acProficiency: 0,
        ahProficiency: 0,
        arProficiency: 0,
        atProficiency: 0,
        deProficiency: 0,
        hiProficiency: 0,
        insProficiency: 0,
        intProficiency: 0,
        invProficiency: 0,
        meProficiency: 0,
        naProficiency: 0,
        percProficiency: 0,
        perfProficiency: 0,
        persProficiency: 0,
        reProficiency: 0,
        slProficiency: 0,
        stProficiency: 0,
        suProficiency: 0,
        tutorial: 0
    }

    // On the left, a checkbox that can be clicked on twice; once to indicate proficiency, a second time to indicate expertise

    // Each skill has a number and a name. 20 skills or so. Listed top-to-bottom in alphabetical order.

    // Eventually, import number for skill from props. But for now, populate it with default numbers. No exporting needed because the calculations are made in app's state.

    // Lower right will have a ? that, when clicked, will open a modal explaining each skill, how the number is calculated, and what proficiency/expertise means.

    renderPanel =()=> {
        return (
<<<<<<< HEAD
            <Box width={350} {...this.props} className={"widget example-widget"}>
            <Heading variant="heading">Skills</Heading>
                
                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Acrobatics</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Animal Handling</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
=======
            <>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Acrobatics</Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10
                    </Text> 
                    &#8287;
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    Animal Handling
                    </Text>
                </Flex>
                <Flex>
>>>>>>> dev
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Arcana</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Athletics</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Deception</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>History</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Insight</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Intimidation</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Investigation</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Medicine</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Nature</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Perception</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Performance</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Persuasion</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Religion</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
<<<<<<< HEAD
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Sleight of Hand</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
=======
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10
                    &#8287;
                    Sleight of Hand
                    </Text>
                </Flex>
                <Flex>
>>>>>>> dev
                    <DoubleCheckbox />
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Stealth</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <DoubleCheckbox />
<<<<<<< HEAD
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Survival</Text>
                    </Flex>
                </Box>

            </Box>
=======
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Survival
                    </Text>
                </Flex>
                <Flex>
                    <TutorialButton tutorialText={this.tutorialText}/>
                </Flex>
            </>
>>>>>>> dev
        )
    }
}
