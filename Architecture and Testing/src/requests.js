const request = (method, url, data, needsAuth = false) => {
    let options = {};
    if (method != "GET") {
        options = {
            method: method,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        };
        if (needsAuth) {
            options.headers["X-Authorization"] = localStorage.getItem("accessToken");
        }
    }
    return fetch(url, options).then((data) => data.json());
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const deletee = request.bind(null, "DELETE");
