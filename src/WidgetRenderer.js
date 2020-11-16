import React, { Component } from "react";
import ReactGridLayout from "react-grid-layout";
import AttacksWidget from "./components/AttacksWidget";
import ExampleWidget from "./components/ExampleWidget";

export default class WidgetRenderer extends Component{
    

    constructor(props) {
        super(props);
        this.state = {
            widgetList: [ 0, 1, 2, 3, 4, 5],
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

    sortWidgets(){

        let newWidgetList = this.state.widgetList.sort((a,b)=>{
            return this.state[a].x-this.state[b].x;
        })

        // this.state.widgetList = newWidgetList;

        return newWidgetList;
    }

    compressWidgets(){

        let newState = {... this.state}
        for(let i=0; i<newState.widgetList.length; i++){
            newState[newState.widgetList[i]].x = i;
        }

        // this.state = newState;

        return newState;

    }

    componentDidUpdate=(prevProps, prevState)=>{
        let sortedWidgetList = this.sortWidgets();
        
        if(this.state.widgetList!=sortedWidgetList){
            // this.setState({widgetList: sortedWidgetList});
            
            let compressedState = this.compressWidgets();
            
            this.setState({...compressedState, widgetList: sortedWidgetList});
            
        }
    }

    renderWidgets=()=>{
        console.log("RENDERING!");
        return this.state.widgetList.map(widgetId=>{
            // console.log(widget.component.setX(112));
            // return <AttacksWidget x={0} />
            let widget = this.state[widgetId];
            let ThisWidgetType = widget.component;
            return (<div data-grid = {widget.layout} key={widgetId}>
                    <ThisWidgetType id             = {widgetId}
                                    globalState    = {this.state}
                                    setGlobalState = {this.handleStateChange}
                                    widgetState    = {widget}/>
                                    </div>)
        })
    }

    render=()=>{
        return (<ReactGridLayout className="layout" cols={2} rowHeight={110} width={1200}>
            {this.renderWidgets()}
        </ReactGridLayout>)
    }
}