import React, { useState } from "react";
import { Box } from 'rebass'
import ritualcheckbox from '../images/ritual-checkbox.jpg';

export default function RitualButton() {
    const [ritualState, setRitualState] = useState(ritualcheckbox);
        return (
            <Box className="single-checkbox">
                <img src={ritualState} alt="unchecked-checkbox" width="50" height="50" />
            </Box>
        )
}