import React from 'react';
import { Box, Text, Button } from 'rebass';
import { Flex } from 'reflexbox';
import { Link } from "react-router-dom";


export default function SheetCard(props) {
    return (
        <Box>
            <Box >
                <Flex>
<<<<<<< HEAD
                    <Box variant='characterBox'>
                        <Text variant='cardHeader'>{props.name}</Text>
                        <Text variant='ingestionText'>Race</Text>
                        <Text variant='modalText'>Elf</Text>
                        <Text variant='ingestionText'>Level</Text>
                        <Text variant='modalText'>12</Text>
                        <Button>Select {props.name}</Button>
                    </Box>
                    <Box>
                        <Button onClick={goLink}>
                            <Text>{props.link}</Text>
                        </Button>
                    </Box>
=======
                    <Box width={1 / 2}><Text>{props.name}</Text></Box>
                    <Box width={1 / 2}><Button><Text><Link to={`/sheets/${props.link}`}>{props.link}</Link></Text></Button></Box>
>>>>>>> dev
                </Flex>
            </Box>
        </Box>
    )
}