import React, { useState } from "react";
import { Box } from 'rebass'
import tutorialbutton from '../images/tutorial-button.png';

export default function TutorialButton() {
    const [tutorialState, setTutorialState] = useState(tutorialbutton);

    //On click, open the specific tutorial...

    function indicateState(event) {
        // if (checkboxState == uncheckedcheckbox) { setCheckboxState(checkedcheckbox) }

        // else if (checkboxState == checkedcheckbox) { setCheckboxState(starcheckbox) }
    }

        return (
            <Box className="tutorial-button">
                <img src={tutorialState} alt="tutorial-button" width="50" height="50" onClick={indicateState} />
            </Box>
        )
}