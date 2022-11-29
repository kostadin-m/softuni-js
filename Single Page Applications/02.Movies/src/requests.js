const request = (method, url, data) => {
    let options = {};
    if (method != "GET" || method != "DELETE") {
        options = {
            method: "POST",
            headers: { "content-type": "application/json", "X-Authorization": sessionStorage.getItem("accessToken") },
            body: JSON.stringify(data),
        };
    }
    return fetch(url, options);
};

export const get = request.bind(null, "GET");
