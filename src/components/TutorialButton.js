import React, { useState } from "react";
import { Text, Button, Box } from 'rebass'
import { FiHelpCircle } from 'react-icons/fi'

export default function TutorialButton(props) {


    //On click, open the specific tutorial...

    function showModal() {
        props.setGlobalState({
            modal:
            {
                show: true,
                contents:
                        <Box variant='tutorialModal' className="modal-content">
                            <Text variant='modalText'>{props.tutorialText}</Text>
                        </Box>
            }
        })
    }
    return (
            <Button className="tutorial-button" onClick={showModal}>
                <Box variant='tutorialIcon'>
                    <FiHelpCircle />
                </Box>
                
            </Button>
    )
}