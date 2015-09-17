$(function () {
    // Declare a proxy to reference the hub.
    var chat = $.connection.ioTHub;
    // Create a function that the hub can call to broadcast messages.
    chat.client.uptimeResponse = function (device, seconds) {
        // Html encode display name and message.
        var encodedDevice = $('<div />').text(device).html();
        var encodedSeconds = $('<div />').text(seconds).html();
        // Add the message to the page.
        $('#uptimeInfo').append('<li><strong>' + encodedDevice + '&nbsp;&nbsp;' + encodedSeconds + '</li>');
    };

    // Start the connection.
    $.connection.hub.start().done(function () {
        chat.server.queryUptime();
    });
});
