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
                    (<Box className="modal-content" bg="white">
                        <Text>{props.tutorialText}</Text>
                    </Box>)
            }
        })
    }
    return (
            <Button className="tutorial-button" onClick={showModal}>
                <img src={pictureState} alt="tutorial-button" id="tutorial-button" width="50" height="50" />
            </Button>
    )
}