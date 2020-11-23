import { Box, Heading, Text, Button } from 'rebass';
import React, { Component } from 'react'
import { Input } from '@rebass/forms'
import API from '../utils/API'

const sheetTemplate = JSON.parse('{"0":{"component":"Notes","layout":{"x":0,"y":0,"w":1,"h":20},"exports":{"text":"Check this out!"},"hasBeenInitialized":"true"},"1":{"component":"Attacks","layout":{"x":1,"y":0,"w":1,"h":27},"attackArray":0,"testing":"true","hasBeenInitialized":"true","name0":"One"},"2":{"component":"Exploration","layout":{"x":0,"y":3,"w":1,"h":39},"value":0,"description":0,"hasBeenInitialized":"true"},"3":{"component":"Skill","layout":{"x":1,"y":3,"w":1,"h":129},"importedId":5,"hasBeenInitialized":"true","athletics":1},"5":{"component":"Attributes","layout":{"x":0,"y":1,"w":1,"h":59},"exports":{"strmod":3,"dexmod":0,"conmod":0,"intmod":0,"wismod":0,"chamod":0,"prof":2},"str":16,"dex":10,"con":10,"int":10,"wis":10,"cha":10,"hasBeenInitialized":"true"},"6":{"component":"BasicInfo","layout":{"x":1,"y":1,"w":1,"h":39},"exports":{"charRace":0,"charClass":"monk","charLevel":1},"hasBeenInitialized":"true"},"7":{"component":"CombatStat","layout":{"x":0,"y":4,"w":1,"h":55},"importedId":5,"hasBeenInitialized":"true"},"8":{"component":"Inventory","layout":{"x":1,"y":4,"w":1,"h":57},"importedId":5,"itemArray":0,"weight":50,"capacity":250,"hasBeenInitialized":"true"},"10":{"component":"Spellbook","layout":{"x":1,"y":6,"w":1,"h":113},"importedId":6,"sortBy":"Level","hasBeenInitialized":"true"},"modal":{"show":false,"contents":""},"layouts":{"lg":[{"x":0,"y":0,"w":1,"h":20,"i":"0"},{"x":1,"y":0,"w":1,"h":27,"i":"1"},{"x":0,"y":3,"w":1,"h":39,"i":"2"},{"x":1,"y":3,"w":1,"h":129,"i":"3"},{"x":0,"y":1,"w":1,"h":59,"i":"5"},{"x":1,"y":1,"w":1,"h":39,"i":"6"},{"x":0,"y":4,"w":1,"h":55,"i":"7"},{"x":1,"y":4,"w":1,"h":57,"i":"8"},{"x":1,"y":6,"w":1,"h":113,"i":"10"}],"md":[{"x":0,"y":0,"w":1,"h":20,"i":"0"},{"x":1,"y":0,"w":1,"h":27,"i":"1"},{"x":0,"y":3,"w":1,"h":39,"i":"2"},{"x":1,"y":3,"w":1,"h":129,"i":"3"},{"x":0,"y":1,"w":1,"h":59,"i":"5"},{"x":1,"y":1,"w":1,"h":39,"i":"6"},{"x":0,"y":4,"w":1,"h":55,"i":"7"},{"x":1,"y":4,"w":1,"h":57,"i":"8"},{"x":1,"y":6,"w":1,"h":113,"i":"10"}],"sm":[{"x":0,"y":0,"w":1,"h":20,"i":"0"},{"x":1,"y":0,"w":1,"h":27,"i":"1"},{"x":0,"y":3,"w":1,"h":39,"i":"2"},{"x":1,"y":3,"w":1,"h":129,"i":"3"},{"x":0,"y":1,"w":1,"h":59,"i":"5"},{"x":1,"y":1,"w":1,"h":39,"i":"6"},{"x":0,"y":4,"w":1,"h":55,"i":"7"},{"x":1,"y":4,"w":1,"h":57,"i":"8"},{"x":1,"y":6,"w":1,"h":113,"i":"10"}]}}');


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
            API.newSheets({name:this.state.characterName, userid: userInfo._id, sheetData: sheetTemplate}).then(data=>{
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
                    <Box className="modal" variant='halfWidthBox'
                        style={{
                          position: "fixed",
                          zIndex: "100000",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: "#ebe1bd"}}>
                            <Heading variant='cardHeaderSmall'>Create New Character</Heading>
                                <form onSubmit={this.formSubmit}>
                                    <Input onChange = {this.inputChange} value={this.state.characterName} type='text' name='characterName' placeholder='Name' /> 
                                    <Button type='submit' value='Create!'>Create</Button>
                                </form>
                    </Box>
            </Box>
            ) : ""}
        </>)
    }
}