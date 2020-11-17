import React from "react";
import { Flex, Text, Button } from "rebass";
import Widget from "./Widget";
import { Input } from "@rebass/forms";
import TutorialButton from "./TutorialButton"
import AttackRow from './AttackRow'

export default class AttacksWidget extends Widget {
  constructor(props){
    console.log(props);
    super(props);
    this.title = "Attacks Widget";
    this.widgetType = "attacks-widget"
    this.tutorialText = <Text>Add items or spell statistics to track various types of attacks here. Parameters for Hit modification, attack range, and damage amount and type are determined by the character's base attributes and type of attack used. Attack functionality can be explained further in depth <a href="https://www.dndbeyond.com/sources/basic-rules/combat#MakinganAttack" target ="blank"></a>HERE</Text>
    this.state = {rowArray: [0]}
  }
  addRow() {

    this.state.rowArray.push(0);
    this.setState(this.state)
}

  renderPanel=()=>{
    return (
<<<<<<< HEAD
      <Box width={350} {...this.props} className={"widget attacks-widget"}>
        <Heading variant="heading">Attack Widget</Heading>

        {/* ================================================
                                Primary box styling
        ================================================ */}
        <Box
          p={3}
          width={1}
          bg='purple'>

          {/* ================================================
                          Attack Name Box
        ================================================ */}
          {/* <Label htmlFor="Attack Name">Attack Name</Label> */}
          <Box variant="fullWidthBox">
            <Text variant='cardHeader'>Attack Name</Text>
=======
        <>
          <Flex>
            {/* <Label htmlFor="Attack Name">Attack Name</Label> */}
>>>>>>> dev
            <Input
              name="attack"
              type="text"
              placeholder="Attack Name "
            />
<<<<<<< HEAD
          </Box>

          {/* ================================================
                          Max HP Box
        ================================================ */}
          {/* <Label htmlFor="Hit">Hit</Label> */}
          <Box>
            <Flex>
              <Box variant="statsBox">
                <Text variant='cardHeader'>Hit Mod</Text>
                <Input
                  id="hit"
                  name="hit"
                  type="text"
                  placeholder="Hit Mod" />
              </Box>

              {/* ================================================
                          Attack Range Box
        ================================================ */}
              {/* <Label htmlFor="Range">Range</Label> */}
              <Box variant="statsBox">
                <Text variant='cardHeader'>Attack Range</Text>
                <Input
                  id="range"
                  name="range"
                  type="text"
                  placeholder="Attack Range " />
              </Box>

              {/* ================================================
                          Damage Box
        ================================================ */}
              {/* <Label htmlFor="DamgageType">Damage/Type</Label> */}
              <Box variant='statsBox'>
                <Text variant='cardHeader'>Damage</Text>
                <Input
                  id="damageType"
                  name="damageType"
                  type="text"
                  placeholder="Damage" />
              </Box>

            </Flex>
          </Box>

        </Box>
      </Box>
=======
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
    <Flex>
                    <TutorialButton tutorialText={this.tutorialText}/>
                </Flex>    
        </>
>>>>>>> dev
    );
  }
}