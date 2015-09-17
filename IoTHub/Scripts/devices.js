var TopFrame = React.createClass({displayName: "TopFrame",
    render: function () {
        return (React.createElement("div", null, "Rendered by React"));
    }
});

React.render(React.createElement(TopFrame, null), document.getElementById("react"));
