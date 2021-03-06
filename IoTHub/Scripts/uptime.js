﻿$(function () {
    // Declare a proxy to reference the hub.
    var iotHub = $.connection.ioTHub;
    // Create a function that the hub can call to broadcast messages.
    iotHub.client.queryUptime = function (device, seconds) {
        // Html encode display name and message.
        var encodedDevice = $('<div />').text(device).html();
        var encodedSeconds = $('<div />').text(seconds).html();
        // Add the message to the page.
        $('#uptimeInfo').append('<li><strong>' + encodedDevice + '&nbsp;&nbsp;' + encodedSeconds + '</li>');
    };

    // Start the connection.
    $.connection.hub.start().done(function () {
        chat.server.uptimeResponse();
    });
});
