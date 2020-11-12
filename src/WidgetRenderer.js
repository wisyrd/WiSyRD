export default function renderWidgets(widgetList) {
    let sortedWidgetList = sortWidgetList(widgetList);

    return sortedWidgetList.map((widget)=>{
        return widget.render();
    })
}

function sortWidgetList (widgetList) {
    return widgetList.sort((a,b)=>{
        return a.state.x - b.state.x;
    })
}