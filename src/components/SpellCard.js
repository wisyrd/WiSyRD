import React, { useState } from 'react';
import { Box, Heading, Text, Button } from 'rebass';
import { Flex } from 'reflexbox';
import SingleCheckbox from "./SingleCheckbox";
import RitualButton from "./RitualButton";

export default function SpellCard(props) {
    const [showModalState, setShowModalState] = useState(false);
    const [durationState, setDurationState] = useState("");
    const [levelState, setLevelState] = useState("");
    const [vComponentState, setVComponentState] = useState("");
    const [sComponentState, setSComponentState] = useState("");
    const [materialState, setMaterialState] = useState("");
    const [descriptionState, setDescriptionState] = useState("");

    function indicateState() {
        setDurationState(props.duration);
        setLevelState(props.level);
        setVComponentState(props.vComponent);
        setSComponentState(props.sComponent);
        setMaterialState(props.material);
        setDescriptionState(props.description);
        setShowModalState(true);
    }

    function hideState() {
        setShowModalState(false);
    }

    return (
        <Box>
            <Box>
                <Flex>
                    <Box width={1 / 4}><SingleCheckbox /> </Box>
                    <Box width={1 / 4}><Button onClick={indicateState}><Text>{props.name}</Text></Button></Box>
                    <Text width={1 / 4 } fontSize={[2, 3, 4]}
                    fontWeight='bold'
                    color='primary'>{props.castTime}</Text>
                    {props.ritual ? <RitualButton width={1 / 4} /> : <Text width={1 /4}></Text>}
                </Flex>
            </Box>
            <Box>
                {showModalState ? (
                    <div className="modal" style={{ position: "fixed", left: "25vh", top: "15vh", overflow: "auto", backgroundColor: "white", height: "25vh", width: "25vw" }}>
                        <div className="modal-content">
                            <span className="close" style={{ float: "right", fontWeight: "bold", textSize: "12", color: "black" }} onClick={hideState}>&times;</span>
                            <Heading>{props.name}</Heading>
                            <Text>Description: {descriptionState}</Text>
                            <Text>Spell Duration: {durationState}</Text>
                            <Text>Level: {levelState}</Text>
                            {vComponentState ? (<Text>V Component: True</Text>) : ""}
                            {sComponentState ? (<Text>S Component: True</Text>) : ""}
                            {materialState ? (<Text>Material: {materialState}</Text>) : "None"}
                        </div>
                    </div>) : ""
                }
            </Box>
        </Box>
    )
}