async function postFormDataAsJson(url, formData, httpMethod) {
    const plainFormData = Object.fromEntries(formData.entries()); //fra chat: FormData to Plain Object: Object.fromEntries(formData.entries())

    const objectAsJsonString = JSON.stringify(plainFormData);


    const fetchOptions = {
        method: httpMethod,
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString,
    };
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
        const errorMessage = await response.text();
        console.log(errorMessage);
    } else {
        console.log(await response.json() + "repsponse.json() ")  // await needed?
        return response
    }
}

async function postObjectAsJson(url, object, httpMethod) {
    const objectAsJsonString = JSON.stringify(object);

    const fetchOptions = {
        method: httpMethod,
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString,
    };
    const response = await fetch(url, fetchOptions);
    return response }

function fetchAnyUrl(url) {
    return fetch(url).then(response => response.json())
}

async function restDelete(url) {
    const fetchOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: ""
    }
   const response = await fetch(url, fetchOptions)
    return response
    }

export { postFormDataAsJson, fetchAnyUrl, postObjectAsJson, restDelete}



