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
        // Needs to take in the unique userID from the login page/session
        // this.userID = props.widgetState.userID
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
        // API.newSheet({characterName:this.state.characterName, className:this.state.className, userID: this.userID}).then(data=>{
        //     console.log(data);
        // just posting, so doesn't need to do anything with the data that comes back; the userpage will be refreshed with the new character info... hopefully; maybe send user to that sheet when they make it?
        // })
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
                <div className="modalBackground"
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
                    <div className="modal"
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
                                        <select value={this.state.value} onChange={this.inputChange} name="className" placeholder="barbarian">
                                            <option value="barbarian">Barbarian</option>
                                            <option value="bard">Bard</option>
                                            <option value="cleric">Cleric</option>
                                            <option value="druid">Druid</option>
                                            <option value="fighter">Fighter</option>
                                            <option value="monk">Monk</option>
                                            <option value="paladin">Paladin</option>
                                            <option value="ranger">Ranger</option>
                                            <option value="rogue">Rogue</option>
                                            <option value="sorcerer">Sorcerer</option>
                                            <option value="warlock">Warlock</option>
                                            <option value="wizard">Wizard</option>
                                        </select>
                                    <input type='submit' value='Create!' /> 
                                </form>
                    </div>
            </div>
            ) : ""}
        </>)
    }
}