import React from 'react';
import Widget from './Widget';

// Usage: <ExampleWidget>Hello World!</ExampleWidget>
export default class ExampleWidget extends Widget {

    render() {
        return (
            <div className={"widget example-widget"}>
                <h2>Example Widget</h2>
                <p>{this.props.children}</p>
            </div>
        )
    }
}
