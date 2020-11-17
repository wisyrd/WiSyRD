import React from "react";
import { Box, Flex, Button, Heading, Text, } from 'rebass';
import { Input, Label } from "@rebass/forms"
import Widget from "./Widget";
import AttackRow from './AttackRow'

export default class AttacksWidget extends Widget {
  constructor(props){
    console.log(props);
    super(props);
    this.title = "Attacks Widget";
    this.widgetType = "attacks-widget"
    this.state = {rowArray: [0]}
  }
  addRow() {

    this.state.rowArray.push(0);
    this.setState(this.state)
}

  renderPanel=()=>{
    return (
        <>
          <Flex>
            {/* <Label htmlFor="Attack Name">Attack Name</Label> */}
            <Input
              name="attack"
              type="text"
              placeholder="Attack Name "
            />
          </Flex>
          <Flex>
            {/* <Label htmlFor="Hit">Hit</Label> */}
            <Input
              name="hit"
              type="text"
              placeholder="Hit Mod"
              width={1 / 3}
            />
            {/* <Label htmlFor="Range">Range</Label> */}
            <Input
              name="range"
              type="text"
              placeholder="Attack Range "
              width={1 / 3}
            />
            {/* <Label htmlFor="DamgageType">Damage/Type</Label> */}
            <Input
              name="damageType"
              type="text"
              placeholder="Damage"
              width={1 / 3}
            />
          </Flex>
          <Flex>
            {/* <Label htmlFor="Hit">Hit</Label> */}
            <Input
              name="hit"
              type="text"
              placeholder="Hit Mod"
              width={1 / 3}
            />
            {/* <Label htmlFor="Range">Range</Label> */}
            <Input
              name="range"
              type="text"
              placeholder="Attack Range "
              width={1 / 3}
            />
            {/* <Label htmlFor="DamgageType">Damage/Type</Label> */}
            <Input
              name="damageType"
              type="text"
              placeholder="Damage"
              width={1 / 3}
            />
          </Flex>
          <Flex>
            {/* <Label htmlFor="Hit">Hit</Label> */}
            <Input
              name="hit"
              type="text"
              placeholder="Hit Mod"
              width={1 / 3}
            />
            {/* <Label htmlFor="Range">Range</Label> */}
            <Input
              name="range"
              type="text"
              placeholder="Attack Range "
              width={1 / 3}
            />
            {/* <Label htmlFor="DamgageType">Damage/Type</Label> */}
            <Input
              name="damageType"
              type="text"
              placeholder="Damage"
              width={1 / 3}
            />
          </Flex>
            {this.state.rowArray.map(row => {
                return <AttackRow />
            })}
            
            <Button onClick = {() => {this.addRow()}}>
          +         
    </Button>   
        </>
    );
  }
}