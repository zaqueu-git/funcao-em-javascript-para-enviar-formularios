document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        console.log('Antes de fazer a requisição');

        const url = "https://jsonplaceholder.typicode.com/todos/1";
        const method = "GET";
        const requestOptions = {method: method};
        //const formData = new FormData();
        //const requestOptions = {method: method, body: formData};

        fetch(url, requestOptions)
        
        .then(response => {
            if (!response.ok) {
                throw new Error('Resposta da requisição inválida');
            }
            return response.json();
        })

        .then(data => {
            console.log('Resposta da requisição');
            console.log(data);
        })
        
        .catch(error => {
            console.log('Erros da requisição');
            console.log(error);
        })

        .finally(() => {
            console.log('Depois da requisição');           
        });

    });
});
