function validateReques(obj) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messageRgx = /^[^<>\\&'"]*$/;
    let uriRgx = /^[\w.]+$/;


    //check method
    if (!(obj.method && validMethods.includes(obj.method))) {
        throw new Error("Invalid request header: Invalid Method");
    }

    //check uri
    if (!(obj.uri && (uriRgx.test(obj.uri) || obj.uri == "*"))) {
        throw new Error("Invalid request header: Invalid URI");
    }

    //check version
    if (!(obj.version && validVersions.includes(obj.version))) {
        throw new Error("Invalid request header: Invalid Version");
    }

    //check message
    if (!(obj.hasOwnProperty('message') && (messageRgx.test(obj.message) || obj.message == ""))) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;
}