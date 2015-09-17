var TopFrame = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Attached Devices</h1>
                <ul id="uptimeInfo"></ul>
            </div>);
    }
});

React.render(<TopFrame />, document.getElementById("react"));
