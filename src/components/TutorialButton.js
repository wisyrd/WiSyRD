import React, { useState } from "react";
import { Box, Text } from 'rebass'
import tutorialbutton from '../images/tutorial-button.png';

export default function TutorialButton(props) {
    const [pictureState, setPictureState] = useState(tutorialbutton);
    const [showModalState, setShowModalState] = useState(false);
    const [tutorialState, setTutorialState] = useState("");

    //On click, open the specific tutorial...

    function indicateState() {
        setTutorialState(props.tutorialText);
        setShowModalState(true);
    }

    function hideState() {
        setShowModalState(false);
    }

    return (
        <Box>
            <Box className="tutorial-button">
                <img src={pictureState} alt="tutorial-button" id="tutorial-button" width="50" height="50" onClick={indicateState} />
            </Box>
            <Box>
                {/* Haven't fully stylized the modal but I've got it working!!! */}
                {showModalState ? (
                    <div className="modal" id="tutorial-box" style={{ position: "fixed", left: "25vh", top: "15vh", overflow: "auto", backgroundColor: "white", opacity: "0.8", height: "25vh", width: "25vw" }}>
                        <div className="modal-content">
                            <span className="close" style={{ float: "right", fontWeight: "bold", textSize: "12", color: "black" }} onClick={hideState}>&times;</span>
                            <Text>{tutorialState}</Text>
                        </div>
                    </div>) : ""
                }
            </Box>
        </Box>
    )
}