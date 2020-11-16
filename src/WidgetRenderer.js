import React, { Component } from "react";
import ReactGridLayout from "react-grid-layout";
import AttacksWidget from "./components/AttacksWidget";
import ExampleWidget from "./components/ExampleWidget";

export default class WidgetRenderer extends Component{
    // static defaultProps = {
    //     onLayoutChange: function() {}
    // }

    constructor(props) {
        super(props);
        this.state = {
            0:{component: AttacksWidget,
                layout: {x: 0, y:0, w:1, h: 1}
            },
            1:{component: AttacksWidget,
                layout: {x: 0, y:1, w:1, h: 1}
            },
            2:{component: AttacksWidget,
                layout: {x: 0, y:2, w:1, h: 1}
            },
            3:{component: AttacksWidget,
                layout: {x: 0, y:3, w:1, h: 1}
            },
            4:{component: ExampleWidget,
                layout: {x: 0, y:4, w:1, h: 1}
            },
            5:{component: AttacksWidget,
                layout: {x: 0, y:5, w:1, h: 1}
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
        return Object.entries(this.state).map(widgetPair=>{
            // console.log(widget.component.setX(112));
            // return <AttacksWidget x={0} />
            let widgetId = widgetPair[0];
            let widget = widgetPair[1];
            let ThisWidgetType = widget.component;
            return (<div data-grid = {widget.layout} key={widgetId}>
                    <ThisWidgetType id             = {widgetId}
                                    globalState    = {this.state}
                                    setGlobalState = {this.handleStateChange}
                                    widgetState    = {widget}/>
                                    </div>)
        })
    }

    // onLayoutChange(layout) {
    //     this.props.onLayoutChange(layout);
    // }

    render=()=>{
        return (<ReactGridLayout className="layout"  cols={2} rowHeight={110} width={1200}>
            {this.renderWidgets()}
        </ReactGridLayout>)
    }
}