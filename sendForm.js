document.addEventListener("DOMContentLoaded", myPage);

function myPage() {
    let formTestTag = document.querySelector('.js-form-test-tag');
    let submitTag = formTestTag.querySelector('.js-submit-tag');

    formTestTag.addEventListener('submit', formTestHandler);
    submitTag.addEventListener('click', formTestHandler);

    function formTestHandler(event) {
        event.preventDefault();

        let url = formTestTag.action;
        let method = formTestTag.method;

        let myHeaders = new Headers();
        myHeaders.append("Cookie", document.cookie);

        let formData = new FormData(formTestTag);
        
        let requestOptions = {
          method: method,
          headers: myHeaders,
          body: formData,
        };
        
        fetch(url, requestOptions)
        .then(response => {
            response.json().then(data => {
                myResponseJsonHandler(data)
            });
        })
        .catch(error => console.log('error', error));
    }

    function myResponseJsonHandler(data) {
        console.log(data);
    }    
}