import React from "react";
import { Flex, Text, Button, Box } from "rebass";
import Widget from "./Widget";
import { Input } from "@rebass/forms";
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
        <>
        {/* ================================================
                      Primary box styling
        ================================================ */}
                <Box
                    p={3}
                    width={1}
                    bg='purple'>
          
        {/* ================================================
                      Attack Box styling
        ================================================ */}
                  <Box variant='fullWidthBox'>
                    <Text variant='cardHeader'>Attack Name</Text>
                    <Input
                      name="attack"
                      type="text"
                      placeholder="Attack Name "/>
                  </Box>

                  {/* =============Hit Mod============= */}
                  <Box>
                    <Flex>
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Hit Mod</Text>
                        <Input
                          name="hit"
                          type="text"
                          placeholder="Hit Mod"/>
                      </Box>

                  {/* =============Attack Range============= */}
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Attack Range</Text>
                        <Input
                          name="range"
                          type="text"
                          placeholder="Attack Range "/>
                      </Box>

                  {/* =============Damage============= */}
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Damage</Text>
                        <Input
                          name="damageType"
                          type="text"
                          placeholder="Damage"/>
                      </Box>
                    </Flex>
                  </Box>

        {/* ================================================
                      Attack Box styling
        ================================================ */}
                  <Box variant='fullWidthBox'>
                    <Text variant='cardHeader'>Attack Name</Text>
                    <Input
                      name="attack"
                      type="text"
                      placeholder="Attack Name "/>
                  </Box>

                  {/* =============Hit Mod============= */}
                  <Box>
                    <Flex>
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Hit Mod</Text>
                        <Input
                          name="hit"
                          type="text"
                          placeholder="Hit Mod"/>
                      </Box>

                  {/* =============Attack Range============= */}
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Attack Range</Text>
                        <Input
                          name="range"
                          type="text"
                          placeholder="Attack Range "/>
                      </Box>

                  {/* =============Damage============= */}
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Damage</Text>
                        <Input
                          name="damageType"
                          type="text"
                          placeholder="Damage"/>
                      </Box>
                    </Flex>
                  </Box>

        {/* ================================================
                      Attack Box styling
        ================================================ */}
                  <Box variant='fullWidthBox'>
                    <Text variant='cardHeader'>Attack Name</Text>
                    <Input
                      name="attack"
                      type="text"
                      placeholder="Attack Name "/>
                  </Box>

                  {/* =============Hit Mod============= */}
                  <Box>
                    <Flex>
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Hit Mod</Text>
                        <Input
                          name="hit"
                          type="text"
                          placeholder="Hit Mod"/>
                      </Box>

                  {/* =============Attack Range============= */}
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Attack Range</Text>
                        <Input
                          name="range"
                          type="text"
                          placeholder="Attack Range "/>
                      </Box>

                  {/* =============Damage============= */}
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Damage</Text>
                        <Input
                          name="damageType"
                          type="text"
                          placeholder="Damage"/>
                      </Box>
                    </Flex>
                  </Box>

        {/* ================================================
                      Attack Box styling
        ================================================ */}
                  <Box variant='fullWidthBox'>
                    <Text variant='cardHeader'>Attack Name</Text>
                    <Input
                      name="attack"
                      type="text"
                      placeholder="Attack Name "/>
                  </Box>

                  {/* =============Hit Mod============= */}
                  <Box>
                    <Flex>
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Hit Mod</Text>
                        <Input
                          name="hit"
                          type="text"
                          placeholder="Hit Mod"/>
                      </Box>

                  {/* =============Attack Range============= */}
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Attack Range</Text>
                        <Input
                          name="range"
                          type="text"
                          placeholder="Attack Range "/>
                      </Box>

                  {/* =============Damage============= */}
                      <Box variant='statsBox'>
                        <Text variant='cardHeader'>Damage</Text>
                        <Input
                          name="damageType"
                          type="text"
                          placeholder="Damage"/>
                      </Box>
                    </Flex>
                  </Box>
                  
            {this.state.rowArray.map(row => {
                return <AttackRow />
            })}
            
            <Button onClick = {() => {this.addRow()}}>
          +         
    </Button> 
    
    
    </Box>
        </>
    );
  }
}
