import React from 'react';
import { Box, Button, Card, Heading, Text } from 'rebass';
import { Input, Label, Checkbox } from '@rebass/forms'
import Widget from './Widget';
import { Flex } from 'reflexbox'


// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class CombatStat extends Widget {

    render() {
        return (
            <Box width={350} {...this.props} className={"widget example-widget"}>
                <Heading
                    color="black"
                    bg='yellow'
                >Combat Stats</Heading>

                {/* ================================================
                                HP Header
                ================================================ */}
                <Box
                    p={3}
                    width={1}
                    bg='purple'>
                    HP
                </Box>
                <Flex>


                    {/* ================================================
                                Current HP Box
                ================================================ */}
                    <Box
                        width={1}
                        bg='green'
                        sx={{
                            borderWidth: '3px',
                            borderStyle: 'solid',
                            borderColor: 'white',
                            borderRadius: 8
                        }}>
                        <Label
                            htmlFor='currentHP'
                            fontSize={[3]}
                            fontWeight='bold'
                            color='black'>Current HP</Label>
                        <Input
                            id='currentHP'
                            name='currentHP'
                            type='integer'
                            placeholder='CurrentHP' />
                    </Box>


                    {/* ================================================
                                        Max HP Box
                    ================================================ */}
                    <Box>
                        <Box
                            width={1}
                            px={3}
                            py={3}
                            bg='orange'
                            sx={{
                                borderWidth: '3px',
                                borderStyle: 'solid',
                                borderColor: 'white',
                                borderRadius: 8
                            }}>
                            <Label
                                htmlFor='maxHP'
                                fontSize={[3]}
                                fontWeight='bold'
                                color='black'>Max HP</Label>
                            <Input
                                id='maxHP'
                                name='maxHP'
                                type='integer'
                                placeholder='#' />
                        </Box>

                        {/* ================================================
                                                Temp HP Box
                            ================================================ */}
                        <Box
                            width={1}
                            px={3}
                            py={3}
                            bg='orange'
                            sx={{
                                borderWidth: '3px',
                                borderStyle: 'solid',
                                borderColor: 'white',
                                borderRadius: 8
                            }}>
                            <Label
                                htmlFor='tempHP'
                                fontSize={[3]}
                                fontWeight='bold'
                                color='black'>Temp HP</Label>
                            <Input
                                id='tempHP'
                                name='tempHP'
                                type='integer'
                                placeholder='#' />
                        </Box>

                        {/* ================================================
                                                AC Box
                            ================================================ */}
                        <Box
                            width={1}
                            px={3}
                            py={3}
                            bg='orange'
                            sx={{
                                borderWidth: '3px',
                                borderStyle: 'solid',
                                borderColor: 'white',
                                borderRadius: 8
                            }}>
                            <Label
                                htmlFor='AC'
                                fontSize={[3]}
                                fontWeight='bold'
                                color='black'>AC</Label>
                            <Input
                                id='AC'
                                name='AC'
                                type='integer'
                                placeholder='#' />
                        </Box>
                    </Box>
                </Flex>


                {/* ================================================
                                Lower Bar Box
                ================================================ */}
                <Box
                    width={1}>
                    <Flex>
                        {/* ================================================
                                                Initiative Box
                        ================================================ */}
                        <Box
                            width={1 / 3}
                            px={3}
                            py={3}
                            bg='orange'
                            sx={{
                                borderWidth: '3px',
                                borderStyle: 'solid',
                                borderColor: 'white',
                                borderRadius: 8
                            }}>
                            <Label
                                htmlFor='initiative'
                                fontSize={[3]}
                                fontWeight='bold'
                                color='black'
                                py={1}>Initiative</Label>
                            <Input
                                id='initiative'
                                name='initiative'
                                type='integer'
                                placeholder='#' />
                        </Box>

                        {/* ================================================
                                        Death Saves Box
                        ================================================ */}
                        <Box
                            width={1 / 3}
                            px={3}
                            py={3}
                            bg='orange'
                            sx={{
                                borderWidth: '3px',
                                borderStyle: 'solid',
                                borderColor: 'white',
                                borderRadius: 8
                            }}>
                            <Label
                                htmlFor='initiative'
                                fontSize={[3]}
                                fontWeight='bold'
                                color='black'
                                py={1}>Death Saves</Label>
                            <Box>
                                <Label
                                    htmlFor='deathSuccess'
                                    fontSize={[1]}
                                    fontWeight='bold'
                                    color='black'>Successes</Label>
                                <Flex>
                                    <Label>
                                        <Checkbox
                                            id='deathSaveOne'
                                            name='deathSaveOne' />
                                    </Label>
                                    <Label>
                                        <Checkbox
                                            id='deathSaveTwo'
                                            name='deathSaveTwo' />
                                    </Label>
                                    <Label>
                                        <Checkbox
                                            id='deathSaveThree'
                                            name='deathSaveThree' />
                                    </Label>

                                </Flex>
                            </Box>

                            <Box>
                                <Label
                                    htmlFor='deathFail'
                                    fontSize={[1]}
                                    fontWeight='bold'
                                    color='black'>Failures</Label>
                                <Flex>
                                    <Label>
                                        <Checkbox
                                            id='deathSaveOne'
                                            name='deathSaveOne' />
                                    </Label>
                                    <Label>
                                        <Checkbox
                                            id='deathSaveTwo'
                                            name='deathSaveTwo' />
                                    </Label>
                                    <Label>
                                        <Checkbox
                                            id='deathSaveThree'
                                            name='deathSaveThree' />
                                    </Label>

                                </Flex>
                            </Box>

                        </Box>

                        {/* ================================================
                                        Speed Box
                        ================================================ */}
                        <Box
                            width={1 / 3}
                            px={3}
                            py={3}
                            bg='orange'
                            sx={{
                                borderWidth: '3px',
                                borderStyle: 'solid',
                                borderColor: 'white',
                                borderRadius: 8
                            }}>
                            <Label
                                htmlFor='speed'
                                fontSize={[3]}
                                fontWeight='bold'
                                color='black'
                                py={1}>Speed</Label>
                            <Input
                                id='speed'
                                name='speed'
                                type='integer'
                                placeholder='#' />
                        </Box>
                    </Flex>
                </Box>

                <Text>{this.props.children}</Text>
            </Box>
        )
    }
}
