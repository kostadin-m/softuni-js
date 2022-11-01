function requestValidator(Obj) {
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const specialCharsForURI = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~\s]/;

    if (!validMethods.includes(Obj.method) || !Obj.hasOwnProperty("method")) {
        throw Error("Invalid request header: Invalid Method");
    }
    if (Obj.uri !== "*") {
        if (Obj.uri === "" || !Obj.hasOwnProperty("uri") || !/[.]/.test(Obj.uri) || specialCharsForURI.test(Obj.uri)) {
            throw Error("Invalid request header: Invalid URI");
        }
    }
    if (!validVersions.includes(Obj.version) || !Obj.hasOwnProperty("version")) {
        throw Error("Invalid request header: Invalid Version");
    }
    if (/[<>\\&'"]/.test(Obj.message.toString()) || !Obj.hasOwnProperty("message")) {
        throw Error("Invalid request header: Invalid Message");
    }
    return Obj;
}
requestValidator({
    method: "GET",
    uri: "blabla.bla",
    version: "HTTP/1.1",
    message: "\bgh\n",
});
