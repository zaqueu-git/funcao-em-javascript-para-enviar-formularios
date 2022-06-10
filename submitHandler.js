document.addEventListener("DOMContentLoaded", myPage);

function myPage() {
    let form = document.querySelector('.js-form');
    let submitButton = document.querySelector('.js-submit-field');

    form.addEventListener('submit', submitHandler);
    submitButton.addEventListener('click', submitHandler);

    function submitHandler(event) {
        event.preventDefault();

        let formData = new FormData(form);
        
        var params = {};
        formData.forEach((value, key) => {
            if(!Reflect.has(params, key)){
                params[key] = value;
                return;
            }
            if(!Array.isArray(params[key])){
                params[key] = [params[key]];    
            }
            params[key].push(value);
        });
        var json = JSON.stringify(params);
        
        fetch('entidade/spa', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: json
          }).then(res => res.json())
            .then(res => console.log(res)); 
    }
}