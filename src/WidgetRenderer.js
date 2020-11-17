import React, { Component } from "react";
import ReactGridLayout from "react-grid-layout";
import AttacksWidget from "./components/AttacksWidget";
import ExampleWidget from "./components/ExampleWidget";
import ExplorationWidget from "./components/ExplorationWidget";
import NotesWidget from "./components/NotesWidget";
import SkillWidget from "./components/SkillWidget";
import AttributesWidget from "./components/AttributesWidget";
import BasicWidget from "./components/BasicWidget";
import CombatStatWidget from "./components/CombatStatWidget";
import InventoryWidget from "./components/InventoryWidget";
import SpellbookWidget from "./components/SpellbookWidget";

export default class WidgetRenderer extends Component{
    // static defaultProps = {
    //     onLayoutChange: function() {}
    // }

    constructor(props) {
        super(props);
        this.state = {
            0:{component: NotesWidget,
                layout: {x: 0, y:0, w:1, h: 2}
            },
            1:{component: AttacksWidget,
                layout: {x: 0, y:1, w:1, h: 2}
            },
            2:{component: ExplorationWidget,
                layout: {x: 0, y:2, w:1, h: 4}
            },
            3:{component: SkillWidget,
                layout: {x: 0, y:3, w:1, h: 17}
            },
            4:{component: ExampleWidget,
                layout: {x: 1, y:0, w:1, h: 2}
            },
            5:{component: AttributesWidget,
                layout: {x: 1, y:1, w:1, h: 9}
            },
            6:{component: BasicWidget,
                layout: {x: 1, y:2, w:1, h: 3}
            },
            7:{component: CombatStatWidget,
                layout: {x: 1, y:3, w:1, h: 9}
            },
            8:{component: InventoryWidget,
                layout: {x: 0, y:4, w:1, h: 3}
            },
            9:{component: SpellbookWidget,
                layout: {x: 1, y:4, w:1, h: 6}
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
        return (<ReactGridLayout className="layout"  cols={2} rowHeight={55} width={750}>
            {this.renderWidgets()}
        </ReactGridLayout>)
    }
}