import React, { useState } from "react";
import { Text, Button, Box } from 'rebass'
import tutorialbutton from '../images/tutorial-button.png';

export default function TutorialButton(props) {
    const [pictureState, setPictureState] = useState(tutorialbutton);

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
                <img src={pictureState} alt="tutorial-button" id="tutorial-button" width="20" height="20" />
            </Button>
    )
}