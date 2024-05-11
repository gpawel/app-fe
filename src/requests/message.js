export function getExternalMessage() {

    return fetch('http://localhost:8080/message')
        .then(response => {
            if (!response.ok) {
                throw new Error(" GET /message was not Ok");
            }
            return response.text();
        })
}