import React, { useState } from "react";
import { Box } from 'rebass'
import uncheckedcheckbox from '../images/unchecked-checkbox.png';
import checkedcheckbox from '../images/checked-checkbox.png';

export default function SingleCheckbox() {
    //NO STATE IMPORTING IS NECESSARY
    const [checkboxState, setCheckboxState] = useState(uncheckedcheckbox);

    function indicateState(event) {
        if (checkboxState == uncheckedcheckbox) { setCheckboxState(checkedcheckbox) }

        else if (checkboxState == checkedcheckbox) { setCheckboxState(uncheckedcheckbox) }
    }

        return (
            <Box className="single-checkbox">
                <img src={checkboxState} alt="unchecked-checkbox" width="25" height="25" onClick={indicateState} />
            </Box>
        )
}