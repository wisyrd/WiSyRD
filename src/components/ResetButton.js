import React, { useState } from "react";
import { Box } from 'rebass'
import resetbutton from '../images/reset-button.png';

export default function TutorialButton() {
    const [resetState, setResetState] = useState(resetbutton);

    function resetButtonState(event) {
        // if (checkboxState == uncheckedcheckbox) { setCheckboxState(checkedcheckbox) }

        // else if (checkboxState == checkedcheckbox) { setCheckboxState(starcheckbox) }
    }

        return (
            <Box className="reset-button">
                <img src={resetState} alt="reset-button" width="100" height="50" onClick={resetButtonState} />
            </Box>
        )
}