import React, { useState } from 'react';
import { Box, Heading, Text, Button } from 'rebass';
import { Flex } from 'reflexbox';

//Ask for name and class

export default function NewCharacter() {
    const [modalState, setModalState] = useState(false)

    function hideModal() {
        setModalState(false)
    }

    function handleModalClick(event){
        if (event.target.classList.contains("modalBackground"))
        {
            hideModal();
        }
    }

    function showModal() {
        console.log("showModal");
        setModalState(true)
    }

    return (<>
        <Box>
            <Button onClick={showModal()}>New Character</Button>
        </Box>
        {modalState} ? (<div className="modalBackground"
            onClick={handleModalClick}
            style={{
                position: "fixed",
                zIndex: "100000",
                width: "100vw",
                height: "100vh",
                backgroundColor: "#000000dd",
                margin: "none",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
            }}>
                <div className="modal"
              style={{position: "fixed",
                      zIndex: "100000",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)"}}>
                        <Heading>Create New Character</Heading>
                      </div>
        </div>) 
        : ""
        )
    </>)
}
