import React, { useState } from "react";
import { Box } from 'rebass'
import ritualcheckbox from '../images/ritual-checkbox.jpg';

export default function RitualButton() {
    // NO STATE IMPORTING IS NECESSARY (but maybe a better-looking picture)
    const [ritualState, setRitualState] = useState(ritualcheckbox);
        return (
            <Box className="single-checkbox">
                <img src={ritualState} alt="unchecked-checkbox" width="25" height="25" />
            </Box>
        )
}