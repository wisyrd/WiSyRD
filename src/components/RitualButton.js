import React, { useState } from "react";
import { Box } from 'rebass'
import uncheckedcheckbox from '../images/unchecked-checkbox.png';
import ritualcheckbox from '../images/ritual-checkbox.jpg';

export default function RitualButton() {
    const [ritualState, setRitualState] = useState(uncheckedcheckbox);

    function indicateState(event) {
        if (ritualState == uncheckedcheckbox) { setRitualState(ritualcheckbox) }

        else if (ritualState == ritualcheckbox) { setRitualState(uncheckedcheckbox) }
    }

        return (
            <Box className="single-checkbox">
                <img src={ritualState} alt="unchecked-checkbox" width="50" height="50" onClick={indicateState} />
            </Box>
        )
}