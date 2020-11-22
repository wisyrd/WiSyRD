import React, { Component } from 'react'
import SheetCard from "../components/SheetCard"
import { Box, Heading, Text, Button } from 'rebass';
import { Flex } from 'reflexbox';
import API from '../utils/API'
import NewCharacter from "../components/NewCharacter";
import { Link } from "react-router-dom";

// Have to make a call to an API route (sheets) that will find all character sheets under a user's name. For each sheet, give them the name of the character and then a link to that sheet. Also need to give them a button to make a new sheet...

export default class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sheetList: [{ name: "Quint", link: "shadylink.com" }, { name: "Jeff", link: "cool.com" }, { name: "Always Named Jeff", link: "jeff.jeff" }]
        };
        // Needs to take in the unique userID from the login page/session
        // this.userID = 
    }

    componentDidMount() {
        this.sheetRender(this.userID);
    }
    // Updates the sheetlist with the user's info here by making an API call to fetch all their created character sheets
    sheetRender = () => {
        //A fetch route that'll locate the user's sheets, sets the sheetList to be equal to the sheets that I get

        API.getProfile(sessionStorage.getItem("token")).then(userInfo => {
            console.log(userInfo)
            API.getSheets(userInfo._id).then(sheetData => {
                if (sheetData) { this.setState({ sheetList: sheetData }) }
                else { this.setState({ sheetList: [] }) }
            })
        })
    }

    renderSheets() {
        return (this.state.sheetList.map(sheet => (
            <SheetCard
                name={sheet.name}
                link={sheet.link}
            />
        ))
        )
    }

    render() {
        return (<>
            <Box variant='dashboard'>
                <Heading variant='ingestionLabel'>Welcome, {sessionStorage.getItem("username")}</Heading>
                <Text variant='ingestionText'>Please select one of your character sheets below:</Text>
                <Flex>
                    {this.renderSheets()}
                </Flex>
                <Box variant='dashboardCharacter'>
                    <NewCharacter variant='newCharacter' userID={this.userID} />
                </Box>
            </Box>
        </>)
    }
}
