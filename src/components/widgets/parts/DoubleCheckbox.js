import React, { useState } from "react";
import { Box } from 'rebass'
import uncheckedcheckbox from '../../../images/unchecked-checkbox.png';
import checkedcheckbox from '../../../images/checked-checkbox.png';
import starcheckbox from '../../../images/star-checkbox.jpg'

export default function DoubleCheckbox(props) {
    // NO STATE IMPORTING NECESSARY

    const [checkboxState, setCheckboxState] = useState(uncheckedcheckbox);

    let onChange = props.onChange;

    if(!onChange){
        onChange = function(){};
    }

    function indicateState(event) {
        if (checkboxState == uncheckedcheckbox) { setCheckboxState(checkedcheckbox); onChange(1) }

        else if (checkboxState == checkedcheckbox) { setCheckboxState(starcheckbox); onChange(2) }

        else if (checkboxState == starcheckbox) { setCheckboxState(uncheckedcheckbox); onChange(0) }
    }

        return (
            <Box className="double-checkbox">
                <img src={checkboxState} alt="unchecked-checkbox" width="30" height="30" onClick={indicateState} />
            </Box>
        )
}