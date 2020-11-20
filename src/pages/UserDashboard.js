import React, { Component } from 'react'
import SheetCard from "../components/SheetCard"
import { Box, Heading, Text } from 'rebass';
import API from '../utils/API'
import NewCharacter from "../components/NewCharacter";

// Have to make a call to an API route that will find all character sheets under a user's name. For each sheet, give them the name of the character and then a link to that sheet. Also need to give them a button to make a new sheet...

export default class UserDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            sheetList: [{characterName: "Quint", link: "shadylink.com"}, {characterName: "Jeff", link: "cool.com"}, {characterName: "Always Named Jeff", link: "jeff.jeff"}]
        };
        // Needs to take in the username from the login page/session
        // this.username = props.widgetState.username
    }

    componentDidMount() {
        this.sheetRender(this.username);
    }
    // Updates the sheetlist with the user's info here by making an API call to fetch all their created character sheets
    sheetRender = (username) => {
        
    }

    renderSheets() {
        return (this.state.sheetList.map(sheet => (
            <SheetCard 
            name = {sheet.characterName}
            link = {sheet.link}
            />
            ))
        )
    }

    render() {
        return (<>
            <Box>
                <Heading>Welcome, Idiot</Heading>
                <Text>Here are your character sheets:</Text>
                {this.renderSheets()}
            </Box>
            <Box>
                {/* <NewCharacter /> */}
            </Box>
        </>)
    }
}
