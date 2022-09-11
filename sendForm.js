document.addEventListener("DOMContentLoaded", myPage);

function myPage() {
    const formTestTag = document.querySelector('.js-form-test-tag');
    const submitTag = formTestTag.querySelector('.js-submit-tag');

    formTestTag.addEventListener('submit', formTestHandler);
    submitTag.addEventListener('click', formTestHandler);

    function formTestHandler(event) {
        event.preventDefault();
        
        send();

        function send() {
            const url = formTestTag.action;
            const method = formTestTag.method;
        
            const myHeaders = new Headers();
            myHeaders.append("Cookie", document.cookie);
        
            const formData = new FormData(formTestTag);
        
            const requestOptions = {
                method: method,
                headers: myHeaders,
                body: formData,
            };
        
            fetch(url, requestOptions)
                .then((response) => {
                    response.json().then((data) => {
                        responseCallback(data);
                    });
                })
                .catch((error) => console.log("error", error));  
        }
        
        function responseCallback(data) {
            if(typeof data.status === "undefined" || typeof data.message === "undefined") {
                return console.log("invalid data");
            }
        
            const status = data.status;
            const message = data.message;
            const colors = {red: "#F2B8B8", green: "#B7E6B5", blue: "#AFDBE5", yellow: "#F2EAC7",};
        
            switch (status) {
                case "success":
                    return success();
                default:
                    return error();
            }
        
            function success() {
                /*-- code --*/
            }
        
            function error() {
                /*-- code --*/
            }
        }
    }
}
