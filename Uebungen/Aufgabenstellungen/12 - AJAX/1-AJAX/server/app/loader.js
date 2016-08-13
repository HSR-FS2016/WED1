function getTime(onTimeAvailable, onTimeError) {
    if (typeof(onTimeAvailable) !== 'function') {
        throw "'onTimeAvaiable' must be a function";
    }
    if (typeof(onTimeError) !== 'function') {
        throw "'onTimeError' must be a function";
    }

    var client = new XMLHttpRequest();
    client.onreadystatechange = function () {
        if (client.readyState === 4) {
            if (client.status === 200) {
                onTimeAvailable(client.responseText);
            }
            else {
                onTimeError(client);
            }
        }
    };

    client.onerror = onTimeError;
    client.open('GET', '/time', true);
    client.send();
}