import React from 'react';
import Widget from './Widget';
import { Box, Heading, Text } from 'rebass'
import { Flex } from 'reflexbox'
import TutorialButton from "./TutorialButton"
import SingleCheckbox from "./SingleCheckbox"
import { Label } from "@rebass/forms";

// For every class, render the correct number of slots by their level

export default function SpellSlot(props) {
    const [levelState, setLevelState] = useState(props.level);
    const [classState, useClassState] = useState(props.class);

    function showSlots() {
        if (classState == "wizard")
        {
            if (levelState == 9)
                {
                    return (<Box><Flex>
                        <Text
                        fontSize={[1, 2, 3]}
                        fontWeight='bold'
                        color='primary'>
                            Spell Slots for Level 1:</Text>
                            <Flex><Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label></Flex> 
                    </Flex>
                    <Flex>
                        <Text
                        fontSize={[1, 2, 3]}
                        fontWeight='bold'
                        color='primary'>
                            Spell Slots for Level 2:</Text>
                            <Flex><Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label></Flex> 
                    </Flex>
                    <Flex>
                        <Text
                        fontSize={[1, 2, 3]}
                        fontWeight='bold'
                        color='primary'>
                            Spell Slots for Level 3:</Text>
                            <Flex><Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label></Flex> 
                    </Flex>
                    <Flex>
                        <Text
                        fontSize={[1, 2, 3]}
                        fontWeight='bold'
                        color='primary'>
                            Spell Slots for Level 4:</Text>
                            <Flex><Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label></Flex> 
                    </Flex>
                    <Flex>
                        <Text
                        fontSize={[1, 2, 3]}
                        fontWeight='bold'
                        color='primary'>
                            Spell Slots for Level 5:</Text>
                            <Flex><Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label></Flex>
                    </Flex>
                    <Flex>
                        <Text
                        fontSize={[1, 2, 3]}
                        fontWeight='bold'
                        color='primary'>
                            Spell Slots for Level 6:</Text>
                            <Flex><Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label></Flex>
                    </Flex>
                    <Flex>
                        <Text
                        fontSize={[1, 2, 3]}
                        fontWeight='bold'
                        color='primary'>
                            Spell Slots for Level 7:</Text>
                            <Flex><Label><SingleCheckbox/></Label>
                            <Label><SingleCheckbox/></Label></Flex>
                    </Flex>
                    <Flex>
                        <Text
                        fontSize={[1, 2, 3]}
                        fontWeight='bold'
                        color='primary'>
                            Spell Slots for Level 8:</Text>
                            <Flex><Label><SingleCheckbox/></Label></Flex>
                    </Flex>
                    <Flex>
                        <Text
                        fontSize={[1, 2, 3]}
                        fontWeight='bold'
                        color='primary'>
                            Spell Slots for Level 9:</Text>
                            <Flex><Label><SingleCheckbox/></Label></Flex>
                    </Flex></Box>)
                }
        }


        // return (<Flex>
        //             <Text
        //             fontSize={[1, 2, 3]}
        //             fontWeight='bold'
        //             color='primary'>
        //                 Spell Slots for Level 1:</Text>
        //                 <Flex><Label><SingleCheckbox/></Label>
        //                 <Label><SingleCheckbox/></Label>
        //                 <Label><SingleCheckbox/></Label>
        //                 <Label><SingleCheckbox/></Label></Flex> 
        //         </Flex>)
    }

    return (
        <div>
                {showSlots}
        </div>
    )
}
