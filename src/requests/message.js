export function getExternalMessage() {

    return fetch('http://localhost:8080/message')
        .then(response => {
            if (!response.ok) {
                throw new Error(" GET /message was not Ok");
            }
            return response.text();
        })
}
// return fetch('http://localhost:8080/message')
// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.text();
// })
// .then(message => setMessage(message))
// .catch(error => console.error('There was a problem with your fetch operation:', error));