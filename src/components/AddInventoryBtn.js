import React, { Component } from 'react';
import { Box, Flex, Button, Heading, Text, } from 'rebass';
import {Input, Label} from "@rebass/forms"

class AddInventory extends Component {
  
  constructor(props) {
    super(props);
    this.addInv = this.addInv.bind(this);
  }

  addInv() {
    console.log('This button works');
  }
  
  render() {
    return (
      <Box>
        <Button onClick={this.addInv}>
          +         
    </Button>
    
      </Box>
    );
  }
}

export default AddInventory;