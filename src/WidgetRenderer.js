import React, { Component } from "react";
import {Responsive, WidthProvider} from "react-grid-layout";


import AttacksWidget from "./components/widgets/AttacksWidget";
import ExampleWidget from "./components/widgets/ExampleWidget";
import ExplorationWidget from "./components/widgets/ExplorationWidget";
import NotesWidget from "./components/widgets/NotesWidget";
import SkillWidget from "./components/widgets/SkillWidget";
import AttributesWidget from "./components/widgets/AttributesWidget";
import BasicInfoWidget from "./components/widgets/BasicInfoWidget";
import CombatStatWidget from "./components/widgets/CombatStatWidget";
import InventoryWidget from "./components/widgets/InventoryWidget";
import SpellbookWidget from "./components/widgets/SpellbookWidget";
import SpellSlotWidget from "./components/widgets/SpellSlotWidget";

import Modal from "./components/Modal";
import _ from "lodash";
import { Button } from "rebass";
import API from "./utils/API";

const ResponsiveGridLayout = WidthProvider(Responsive);

function mapType(widgetType){
    switch(widgetType){
        case "Attacks": return AttacksWidget;
        case "Example": return ExampleWidget;
        case "Exploration": return ExplorationWidget;
        case "Notes": return NotesWidget;
        case "Skill": return SkillWidget;
        case "Attributes": return AttributesWidget;
        case "BasicInfo": return BasicInfoWidget;
        case "CombatStat": return CombatStatWidget;
        case "Inventory": return InventoryWidget;
        case "Spellbook": return SpellbookWidget;
        case "SpellSlot": return SpellSlotWidget;
        default: return ExampleWidget;
    }
}

export default class WidgetRenderer extends Component{

    constructor(props) {
        super(props);

        this.id = this.props.id || 0;

        if(!props.state){
            this.state = {
                0:{component: "Notes",
                    layout: {x: 0, y:0, w:1, h: 7+13},
                    exports: {text: "Testing"}
                },
                1:{component: "Attacks",
                    layout: {x: 1, y:0, w:1, h: 7+20},
                    exports: {}
                },
                2:{component: "Exploration",
                    layout: {x: 0, y:3, w:1, h: 7+32},
                    exports: {}
                },
                3:{component: "Skill",
                    layout: {x: 1, y:3, w:1, h: 7+122},
                    exports: {},
                    importedId: 5
                },
                5:{component: "Attributes",
                    layout: {x: 0, y:1, w:1, h: 7+52},
                    exports: {}
                },
                6:{component: "BasicInfo",
                    layout: {x: 1, y:1, w:1, h: 7+32},
                    exports: {}
                },
                7:{component: "CombatStat",
                    layout: {x: 0, y:4, w:1, h: 7+48},
                    exports: {},
                    importedId: 5
                },
                8:{component: "Inventory",
                    layout: {x: 1, y:4, w:1, h: 7+50},
                    exports: {},
                    importedId: 5
                },
                // 9:{component: SpellSlotWidget,
                //     layout: {x: 0, y:6, w:1, h:7+8},
                //     exports: {},
                //     importedId: 6
                // },
                10:{component: "Spellbook",
                    layout: {x: 1, y:6, w:1, h: 7+106},
                    exports: {},
                    importedId: 6
                },
                modal:{show: false,
                    contents: ""}
            };

            this.state.layouts = this.compressLayouts();
        }

        this.state = JSON.parse(JSON.stringify(props.state), (key, value)=>{
            if(key=="i") return value;

            let num = _.toNumber(value)
            if(num||num===0){
                return _.toNumber(value)
            }

            return value;
        })

            

            console.log(this.state);

    }

    handleStateChange=(newState)=>{
        this.setState(newState);
    }

    renderWidgets=()=>{
        console.log("RENDERING!");
        console.log(JSON.stringify(this.state));
        return Object.entries(this.state).filter(widgetPair=>parseInt(widgetPair[0]) >= 0)
            .map(widgetPair=>{
            let widgetId = widgetPair[0];
            let widget = widgetPair[1];
            let ThisWidgetType = mapType(widget.component);
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
        let layouts = {lg: [], md: [], sm: []};
        for(const key in this.state){
            if(parseInt(key)>=0){
                layouts.lg.push({...this.state[key].layout, i:key});
                layouts.md.push({...this.state[key].layout, i:key});
                layouts.sm.push({...this.state[key].layout, i:key});
            }
        }
        return layouts;
    }

    componentDidUpdate=(prevProps, prevState)=>{
        if(!(_.isEqual({...this.state, layouts: []}, {...prevState, layouts: []}))){
            // Something other than layouts changed
            this.resizeGrid();
        }
    }

    handleSave = (event) =>{
        API.saveSheet(this.id, this.state).then(data=>{
            console.log("Saved!");
            console.log(data);
        })
    }

    // TODO: Fix layouts

    render=()=>{
        return (<><Modal modal={this.state.modal} setGlobalState={this.handleStateChange}/>
        <Button onClick={this.handleSave}>SAVE</Button>
        <ResponsiveGridLayout className="layout"
                                 layouts={{lg: this.state.layouts.lg, md: this.state.layouts.md, sm: this.state.layouts.sm}}
                                 cols={{lg:3, md:2, sm:1}}
                                 margin={[2,2]}
                                 breakpoints={{lg:1200, md:996, sm: 720}}
                                 rowHeight={8}

                                 width={{lg:750, md:750, sm:350}}
                                 draggableHandle=".dragHandle">
            {this.renderWidgets()}
        </ResponsiveGridLayout>
        </>)
    }
}