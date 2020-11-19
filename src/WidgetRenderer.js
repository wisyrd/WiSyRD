import React, { Component } from "react";
import {Responsive, WidthProvider} from "react-grid-layout";
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
import SpellSlotWidget from "./components/SpellSlotWidget";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class WidgetRenderer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            0:{component: NotesWidget,
                layout: {x: 0, y:0, w:1, h: 2}
            },
            1:{component: AttacksWidget,
                layout: {x: 0, y:1, w:1, h: 3}
            },
            2:{component: ExplorationWidget,
                layout: {x: 0, y:2, w:1, h: 5}
            },
            3:{component: SkillWidget,
                layout: {x: 0, y:3, w:1, h: 24}
            },
            4:{component: ExampleWidget,
                layout: {x: 1, y:0, w:1, h: 2}
            },
            5:{component: AttributesWidget,
                layout: {x: 1, y:1, w:1, h: 13}
            },
            6:{component: BasicWidget,
                layout: {x: 1, y:2, w:1, h: 4}
            },
            7:{component: CombatStatWidget,
                layout: {x: 1, y:3, w:1, h: 13}
            },
            8:{component: InventoryWidget,
                layout: {x: 0, y:4, w:1, h: 5}
            },
            9:{component: SpellSlotWidget,
                layout: {x: 0, y:5, w:1, h:5}},
            10:{component: SpellbookWidget,
                layout: {x: 1, y:4, w:1, h: 8},
                classState: "cleric"
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
            let widgetId = widgetPair[0];
            let widget = widgetPair[1];
            let ThisWidgetType = widget.component;
            return (<div data-grid = {widget.layout}
                                        key={widgetId}>
                    <ThisWidgetType id             = {widgetId}
                                    globalState    = {this.state}
                                    setGlobalState = {this.handleStateChange}
                                    widgetState    = {widget}/>
                                    </div>)
        })
    }

    render=()=>{
        return (<ResponsiveGridLayout className="layout"
                                 cols={{lg:2, md:2, sm:1, xs:1, xxs:1}}
                                 breakpoints={{lg:1200, md:996, sm: 720}}
                                 rowHeight={36}
                                 width={{lg:750, md:750, sm:350, xs:350, xxs:350}}
                                 draggableHandle=".dragHandle">
            {this.renderWidgets()}
        </ResponsiveGridLayout>)
    }
}