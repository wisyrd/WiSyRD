import { Box, Heading, Text, Button } from 'rebass';
import React, { Component } from 'react'
import API from '../utils/API'

//Ask for name and class, send the info to the API to create a new character with the name and class keys, refresh the page to show the new character

export default class NewCharacter extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            characterName: "",
            className: ""
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleModalClick = this.handleModalClick.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange (event){
        const {name,value}=event.target;
        this.setState({
            [name]:value
        })
    }

    formSubmit (event){
        event.preventDefault();
        console.log("submitted form")
        this.setState({modal: false})
        console.log(this.state.characterName, this.state.className)
        // Make a create call to the "sheets" route that would make a new character sheet with the character name, userID, and character class
        API.getProfile(sessionStorage.getItem("token")).then(userInfo=>{ 
            API.newSheets({name:this.state.characterName, userid: userInfo._id, sheetData: {}}).then(data=>{
            console.log(data);
            window.location.reload();
            })
        })
    }

    hideModal() {
        this.setState({modal: false})
    }

    handleModalClick(event){
        if (event.target.classList.contains("modalBackground"))
        {
            this.hideModal();
        }
    }

    showModal() {
        console.log("showModal");
        console.log(this)
        this.setState({modal: true})
    }

    render() {
        return (<>
            <Box>
            <Button onClick={this.showModal}>New Character</Button>
            </Box>
            {this.state.modal ? (
                <Box className="modalBackground"
                    onClick={this.handleModalClick}
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
                    <Box className="modal"
                        style={{
                          position: "fixed",
                          zIndex: "100000",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: "white"}}>
                            <Heading>Create New Character</Heading>
                                <form onSubmit={this.formSubmit}>
                                    <input onChange = {this.inputChange} value={this.state.characterName} type='text' name='characterName' placeholder='Name' /> 
                                    <input type='submit' value='Create!' /> 
                                </form>
                    </Box>
            </Box>
            ) : ""}
        </>)
    }
}