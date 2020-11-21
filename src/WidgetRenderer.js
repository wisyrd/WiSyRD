import React, { Component } from "react";
import {Responsive, WidthProvider} from "react-grid-layout";
import GridLayout from "react-grid-layout";
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
import Modal from "./components/Modal";
import _ from "lodash";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class WidgetRenderer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            0:{component: NotesWidget,
                layout: {x: 0, y:0, w:1, h: 7+13},
                exports: {text: "Testing"}
            },
            1:{component: AttacksWidget,
                layout: {x: 0, y:1, w:1, h: 7+142}
            },
            2:{component: ExplorationWidget,
                layout: {x: 0, y:2, w:1, h: 7+40}
            },
            3:{component: SkillWidget,
                layout: {x: 0, y:3, w:1, h: 7+122}
            },
            4:{component: ExampleWidget,
                layout: {x: 1, y:0, w:1, h: 7+6}
            },
            5:{component: AttributesWidget,
                layout: {x: 1, y:1, w:1, h: 7+52}
            },
            6:{component: BasicWidget,
                layout: {x: 1, y:2, w:1, h: 7+46},
                exports: {
                    charClass: "paladin",
                    charLevel: 20
                }
            },
            7:{component: CombatStatWidget,
                layout: {x: 1, y:3, w:1, h: 7+58}
            },
            8:{component: InventoryWidget,
                layout: {x: 0, y:4, w:1, h: 7+50}
            },
            9:{component: SpellSlotWidget,
                layout: {x: 0, y:5, w:1, h:7+8},
                importedId: 6
            },
            10:{component: SpellbookWidget,
                layout: {x: 1, y:4, w:1, h: 7+16},
                classState: "cleric",
                apiURL: this.props.apiURL
            },
            modal:{show: false,
                   contents: ""}
        };

        this.state.layouts = this.compressLayouts();
    }

    handleStateChange=(newState)=>{
        console.log("Changing state!");
        this.setState(newState);
        console.log(this.state);
    }

    renderWidgets=()=>{
        console.log("RENDERING!");
        return Object.entries(this.state).filter(widgetPair=>parseInt(widgetPair[0]) >= 0)
            .map(widgetPair=>{
            let widgetId = widgetPair[0];
            let widget = widgetPair[1];
            let ThisWidgetType = widget.component;
            return (<div data-grid = {widget.layout}
                               key = {widgetId}>
                    <ThisWidgetType id             = {widgetId}
                                    globalState    = {this.state}
                                    setGlobalState = {this.handleStateChange}
                                    widgetState    = {widget}/>
                                    </div>)
        })
    }

    resizeGrid=()=>{
        
        console.log("RESIZING")
        this.setState({layouts: this.compressLayouts()});
    }

    compressLayouts(){
        let layouts = [];
        for(const key in this.state){
            if(parseInt(key)>=0){
                layouts.push({...this.state[key].layout, i:key});
            }
        }
        console.log(layouts)
        return layouts;
    }

    componentDidUpdate=(prevProps, prevState)=>{
        if(!(_.isEqual({...this.state, layouts: []}, {...prevState, layouts: []}))){
            // Something other than layouts changed
            this.resizeGrid();
        }
    }

    render=()=>{
        return (<><Modal modal={this.state.modal} setGlobalState={this.handleStateChange}/>
        <ResponsiveGridLayout className="layout"
                                 layouts={{lg: this.state.layouts, md: this.state.layouts, sm: this.state.layouts, xs: this.state.layouts, xxs: this.state.layouts}}
                                 cols={{lg:2, md:2, sm:1, xs:1, xxs:1}}
                                 margin={[2,2]}
                                 breakpoints={{lg:1200, md:996, sm: 720}}
                                 rowHeight={8}
                                 width={{lg:750, md:750, sm:350, xs:350, xxs:350}}
                                 draggableHandle=".dragHandle">
            {this.renderWidgets()}
        </ResponsiveGridLayout>
        {/* <GridLayout className="layout"
                    layout={this.state.layouts}
                    cols={2}
                    rowHeight={36}
                    width={750}
                    draggableHandle=".dragHandle">
                        {this.renderWidgets()}
                    </GridLayout> */}
        </>)
    }
}