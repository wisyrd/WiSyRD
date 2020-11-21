import React, { Component } from 'react';
import { Box, Heading, Text } from 'rebass';
import { Link } from "react-router-dom";

export default class ErrorPage extends Component {
    render() {
        return (
            <Box>
                <Heading>Error!</Heading>
                <Link to="/">Back Home</Link>
            </Box>
        )
    }
}

