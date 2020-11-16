import React, { Component } from "react";
import {Tiles} from "@rebass/layout"
import AttacksWidget from "./components/AttacksWidget";
import ExampleWidget from "./components/ExampleWidget";

export default class WidgetRenderer extends Component{
    

    constructor(props) {
        super(props);
        this.state = {
            widgetList: [ 0, 1, 2, 3, 4, 5],
            0:{component: AttacksWidget,
                x: 0,
                y: 0
            },
            1:{component: AttacksWidget,
                x: 0,
                y: 0
            },
            2:{component: AttacksWidget,
                x: 0,
                y: 0
            },
            3:{component: AttacksWidget,
                x: 0,
                y: 0
            },
            4:{component: ExampleWidget,
                x: 0,
                y: 0
            },
            5:{component: AttacksWidget,
                x: 0,
                y: 0
            }
        };
    }

    handleStateChange=(newState)=>{
        console.log("Changing state!");
        this.setState(newState);
        console.log(this.state);
    }

    renderWidgets=()=>{
        console.log("RENDERING!");
        return this.state.widgetList.map(widgetId=>{
            // console.log(widget.component.setX(112));
            // return <AttacksWidget x={0} />
            let widget = this.state[widgetId];
            let ThisWidgetType = widget.component;
            return <ThisWidgetType  key            = {widgetId}
                                    id             = {widgetId}
                                    x              = {widget.x}
                                    y              = {widget.y}
                                    globalState    = {this.state}
                                    setGlobalState = {this.handleStateChange}
                                    widgetState    = {widget}/>;
        })
    }

    render=()=>{
        return (<Tiles columns={[1,2,4]}>
            {this.renderWidgets()}
        </Tiles>)
    }
}