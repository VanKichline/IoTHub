var TopFrame = React.createClass({displayName: "TopFrame",
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Attached Devices"), 
                React.createElement("ul", {id: "uptimeInfo"})
            ));
    }
});

React.render(React.createElement(TopFrame, null), document.getElementById("react"));
