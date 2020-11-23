import React from "react";
import Widget from "../Widget";
import {Text, Button, Box} from "rebass";

import AttackRow from './parts/AttackRow';

export default class AttacksWidget extends Widget {
  constructor(props) {
    console.log(props);
    super(props);
    this.title = "Attacks Widget";
    this.widgetType = "attacks-widget"
    this.tutorialText = <Text>Add items or spell statistics to track various types of attacks here. Parameters for Hit modification, attack range, and damage amount and type are determined by the character's base attributes and type of attack used. Attack functionality can be explained further in depth <a href="https://www.dndbeyond.com/sources/basic-rules/combat#MakinganAttack" target="blank"></a>HERE</Text>
    this.initializeIfNew();
  }

  initialize(){
    console.log("Setting Attack Array!");
    this.setWidgetState({attackArray: [0], testing: true});
  }

  addRow() {
    const oldAttackArray = this.props.widgetState.attackArray || [];
    const numAttacks = oldAttackArray.length;
    let newAttackArray = [...oldAttackArray];

    newAttackArray.push(numAttacks);
    this.setWidgetState({attackArray: newAttackArray})
  }

  handleUpdate=(event, field, rowNumber)=> {
    this.setWidgetState({[`${field}${rowNumber}`]: event.target.value});
  }

  renderPanel = () => {
    let array = this.props.widgetState.attackArray || [];
    return (
      <>
        {array.map(row => {
          return <AttackRow rowNumber={row} handleUpdate={this.handleUpdate} />
        })}
        <Box width="100%">
          <Button variant="secondary" onClick={() => { this.addRow() }} style={{margin: "0 auto", display: "block"}}>+</Button>
        </Box>
      </>
    );
  }
}
