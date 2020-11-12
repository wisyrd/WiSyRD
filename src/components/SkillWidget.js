import React from 'react';
import Widget from './Widget';

// On the left, a checkbox that can be clicked on twice; once to indicate proficiency, a second time to indicate expertise

// Each skill has a number and a name. 20 skills or so. Listed top-to-bottom in alphabetical order.

// Eventually, import number for skill from props. But for now, populate it with default numbers. No exporting needed because the calculations are made in app's state.

// Lower right will have a ? that, when clicked, will open a modal explaining each skill, how the number is calculated, and what proficiency/expertise means.

//extends Widget

export default class SkillWidget extends React.Component {
    state = {
        acProficiency: 0,
        ahProficiency: 0,
        arProficiency: 0,
        atProficiency: 0,
        deProficiency: 0,
        hiProficiency: 0,
        insProficiency: 0,
        intProficiency: 0,
        invProficiency: 0,
        meProficiency: 0,
        naProficiency: 0,
        percProficiency: 0,
        perfProficiency: 0,
        persProficiency: 0,
        reProficiency: 0,
        slProficiency: 0,
        stProficiency: 0,
        suProficiency: 0
    }

    // tutorialOpen = () => {

    // }

    indicateAcProf = () => {
        if (this.state.acProficiency === 0) { this.setState({ acProficiency: 1 }) }

        else if (this.state.acProficiency === 1) { this.setState({ acProficiency: 2 }) }

        else if (this.state.acProficiency === 2) { this.setState({ acProficiency: 0 }) }
    }

    indicateAhProf = () => {
        if (this.state.ahProficiency === 0) { this.setState({ ahProficiency: 1 }) }

        else if (this.state.ahProficiency === 1) { this.setState({ ahProficiency: 2 }) }

        else if (this.state.ahProficiency === 2) { this.setState({ ahProficiency: 0 }) }
    }

    indicateArProf = () => {
        if (this.state.arProficiency === 0) { this.setState({ arProficiency: 1 }) }

        else if (this.state.arProficiency === 1) { this.setState({ arProficiency: 2 }) }

        else if (this.state.arProficiency === 2) { this.setState({ arProficiency: 0 }) }
    }

    indicateAtProf = () => {
        if (this.state.atProficiency === 0) { this.setState({ atProficiency: 1 }) }

        else if (this.state.atProficiency === 1) { this.setState({ atProficiency: 2 }) }

        else if (this.state.atProficiency === 2) { this.setState({ atProficiency: 0 }) }
    }

    indicateDeProf = () => {
        if (this.state.deProficiency === 0) { this.setState({ deProficiency: 1 }) }

        else if (this.state.deProficiency === 1) { this.setState({ deProficiency: 2 }) }

        else if (this.state.deProficiency === 2) { this.setState({ deProficiency: 0 }) }
    }

    indicateHiProf = () => {
        if (this.state.hiProficiency === 0) { this.setState({ hiProficiency: 1 }) }

        else if (this.state.hiProficiency === 1) { this.setState({ hiProficiency: 2 }) }

        else if (this.state.hiProficiency === 2) { this.setState({ hiProficiency: 0 }) }
    }

    indicateInsProf = () => {
        if (this.state.insProficiency === 0) { this.setState({ insProficiency: 1 }) }

        else if (this.state.insProficiency === 1) { this.setState({ insProficiency: 2 }) }

        else if (this.state.insProficiency === 2) { this.setState({ insProficiency: 0 }) }
    }

    indicateIntProf = () => {
        if (this.state.intProficiency === 0) { this.setState({ intProficiency: 1 }) }

        else if (this.state.intProficiency === 1) { this.setState({ intProficiency: 2 }) }

        else if (this.state.intProficiency === 2) { this.setState({ intProficiency: 0 }) }
    }

    indicateInvProf = () => {
        if (this.state.invProficiency === 0) { this.setState({ invProficiency: 1 }) }

        else if (this.state.invProficiency === 1) { this.setState({ invProficiency: 2 }) }

        else if (this.state.invProficiency === 2) { this.setState({ invProficiency: 0 }) }
    }

    indicateMeProf = () => {
        if (this.state.meProficiency === 0) { this.setState({ meProficiency: 1 }) }

        else if (this.state.meProficiency === 1) { this.setState({ meProficiency: 2 }) }

        else if (this.state.meProficiency === 2) { this.setState({ meProficiency: 0 }) }
    }

    indicateNaProf = () => {
        if (this.state.naProficiency === 0) { this.setState({ naProficiency: 1 }) }

        else if (this.state.naProficiency === 1) { this.setState({ naProficiency: 2 }) }

        else if (this.state.naProficiency === 2) { this.setState({ naProficiency: 0 }) }
    }

    indicatePercProf = () => {
        if (this.state.percProficiency === 0) { this.setState({ percProficiency: 1 }) }

        else if (this.state.percProficiency === 1) { this.setState({ percProficiency: 2 }) }

        else if (this.state.percProficiency === 2) { this.setState({ percProficiency: 0 }) }
    }

    indicatePerfProf = () => {
        if (this.state.perfProficiency === 0) { this.setState({ perfProficiency: 1 }) }

        else if (this.state.perfProficiency === 1) { this.setState({ perfProficiency: 2 }) }

        else if (this.state.perfProficiency === 2) { this.setState({ perfProficiency: 0 }) }
    }

    indicatePersProf = () => {
        if (this.state.persProficiency === 0) { this.setState({ persProficiency: 1 }) }

        else if (this.state.persProficiency === 1) { this.setState({ persProficiency: 2 }) }

        else if (this.state.persProficiency === 2) { this.setState({ persProficiency: 0 }) }
    }

    indicateReProf = () => {
        if (this.state.reProficiency === 0) { this.setState({ reProficiency: 1 }) }

        else if (this.state.reProficiency === 1) { this.setState({ reProficiency: 2 }) }

        else if (this.state.reProficiency === 2) { this.setState({ reProficiency: 0 }) }
    }

    indicateSlProf = () => {
        if (this.state.slProficiency === 0) { this.setState({ slProficiency: 1 }) }

        else if (this.state.slProficiency === 1) { this.setState({ slProficiency: 2 }) }

        else if (this.state.slProficiency === 2) { this.setState({ slProficiency: 0 }) }
    }

    indicateStProf = () => {
        if (this.state.stProficiency === 0) { this.setState({ stProficiency: 1 }) }

        else if (this.state.stProficiency === 1) { this.setState({ stProficiency: 2 }) }

        else if (this.state.stProficiency === 2) { this.setState({ stProficiency: 0 }) }
    }

    indicateSuProf = () => {
        if (this.state.suProficiency === 0) { this.setState({ suProficiency: 1 }) }

        else if (this.state.suProficiency === 1) { this.setState({ suProficiency: 2 }) }

        else if (this.state.suProficiency === 2) { this.setState({ suProficiency: 0 }) }
    }

    acProfCheckbox = () => {
        if (this.state.acProficiency === 0)
        {return <h3 style={{ float: "left" }}>Ac not Prof</h3>;}
        else if (this.state.acProficiency === 1)
        {return <h3 style={{ float: "left" }}>Ac kinda Prof</h3>;}
        else if (this.state.acProficiency === 2)
        {return <h3 style={{ float: "left" }}>Ac v Prof</h3>;}
    }

    render() {
        return (
            <div>
                <h1>Skillz</h1>
                <p>{this.props.children}</p>
                <button className="prof-button" onClick={this.indicateAcProf} style={{ float: "left" }}>Proficiency Button</button>
                {this.acProfCheckbox()}
                <p className="skill-numbers">10 Acrobatics</p>
                <p>Proficiency: {this.state.acProficiency}</p>
                <button className="prof-button" onClick={this.indicateAhProf} style={{ float: "left" }}>Proficiency Button</button><p className="skill-numbers">10 Animal Handling</p>
                <p>Proficiency: {this.state.ahProficiency}</p>
                <button className="prof-button" onClick={this.indicateArProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Arcana</p>
                <p>Proficiency: {this.state.arProficiency}</p>
                <button className="prof-button" onClick={this.indicateAtProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Athletics</p>
                <p>Proficiency: {this.state.atProficiency}</p>
                <button className="prof-button" onClick={this.indicateDeProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Deception</p>
                <p>Proficiency: {this.state.deProficiency}</p>
                <button className="prof-button" onClick={this.indicateHiProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 History</p>
                <p>Proficiency: {this.state.hiProficiency}</p>
                <button className="prof-button" onClick={this.indicateInsProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Insight</p>
                <p>Proficiency: {this.state.insProficiency}</p>
                <button className="prof-button" onClick={this.indicateIntProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Intimidation</p>
                <p>Proficiency: {this.state.intProficiency}</p>
                <button className="prof-button" onClick={this.indicateInvProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Investigation</p>
                <p>Proficiency: {this.state.invProficiency}</p>
                <button className="prof-button" onClick={this.indicateMeProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Medicine</p>
                <p>Proficiency: {this.state.meProficiency}</p>
                <button className="prof-button" onClick={this.indicateNaProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Nature</p>
                <p>Proficiency: {this.state.naProficiency}</p>
                <button className="prof-button" onClick={this.indicatePercProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Perception</p>
                <p>Proficiency: {this.state.percProficiency}</p>
                <button className="prof-button" onClick={this.indicatePerfProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Performance</p>
                <p>Proficiency: {this.state.perfProficiency}</p>
                <button className="prof-button" onClick={this.indicatePersProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Persuasion</p>
                <p>Proficiency: {this.state.persProficiency}</p>
                <button className="prof-button" onClick={this.indicateReProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Religion</p>
                <p>Proficiency: {this.state.reProficiency}</p>
                <button className="prof-button" onClick={this.indicateSlProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Sleight of Hand</p>
                <p>Proficiency: {this.state.slProficiency}</p>
                <button className="prof-button" onClick={this.indicateStProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Stealth</p>
                <p>Proficiency: {this.state.stProficiency}</p>
                <button className="prof-button" onClick={this.indicateSuProf} style={{float: "left"}}>Proficiency Button</button><p className="skill-numbers">10 Survival</p>
                <p>Proficiency: {this.state.suProficiency}</p>
                <button className="tutorial-button" /* onClick={this.tutorialOpen}*/>Tutorial Button</button>
            </div>
        )
    }
}
