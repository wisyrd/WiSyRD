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
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Acrobatics</Text>
                    </Flex>
                </Box>
                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Animal Handling</Text>
                    </Flex>
                </Box>
                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Arcana</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Athletics</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Deception</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>History</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Insight</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Intimidation</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Investigation</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Medicine</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Nature</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Perception</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Performance</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Persuasion</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Religion</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Sleight of Hand</Text>
                    </Flex>
                </Box>
                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Stealth</Text>
                    </Flex>
                </Box>

                <Box variant='skillsBox'>
                    <Flex>
                    <Box variant='doubleCheckbox'>
                            <DoubleCheckbox />
                        </Box>
                    <Text variant='skillsNumber'>10</Text>
                    <Text variant='skillsText'>Survival</Text>
                    </Flex>
                </Box>
                </Box>
            </>
        )
    }
}
