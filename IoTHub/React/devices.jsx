var TopFrame = React.createClass({
    render: function () {
        return (<div>Rendered by React</div>);
    }
});

React.render(<TopFrame />, document.getElementById("react"));
