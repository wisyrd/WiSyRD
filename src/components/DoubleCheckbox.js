import React, { useState } from "react";
import { Box } from 'rebass'
import uncheckedcheckbox from '../images/unchecked-checkbox.png';
import checkedcheckbox from '../images/checked-checkbox.png';
import starcheckbox from '../images/star-checkbox.jpg'

export default function DoubleCheckbox() {
    const [checkboxState, setCheckboxState] = useState(uncheckedcheckbox);

    function indicateState(event) {
        if (checkboxState == uncheckedcheckbox) { setCheckboxState(checkedcheckbox) }

        else if (checkboxState == checkedcheckbox) { setCheckboxState(starcheckbox) }

        else if (checkboxState == starcheckbox) { setCheckboxState(uncheckedcheckbox) }
    }

        return (
            <Box className="double-checkbox">
                <img src={checkboxState} alt="unchecked-checkbox" width="50" height="50" onClick={indicateState} />
            </Box>
        )
}