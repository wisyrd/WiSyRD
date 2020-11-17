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
        this.widgetType = "skill-widget"
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
                    <Text
                    fontSize={[2, 3, 4]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    Animal Handling
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Arcana
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Athletics
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Deception
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    History
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Insight
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Intimidation
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Investigation
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;    
                    10 
                    &#8287;
                    Medicine
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Nature
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Perception
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Performance
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Persuasion
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Religion
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10
                    Sleight of Hand
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
                    <Text
                    fontSize={[3, 4, 5]}
                    fontWeight='bold'
                    color='primary'>
                    &#8287;
                    10 
                    &#8287;
                    Stealth
                    </Text>
                </Flex>
                <Flex>
                    <DoubleCheckbox />
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
                    <TutorialButton tutorialName="skill"/>
                </Flex>
            </>
        )
    }
}
