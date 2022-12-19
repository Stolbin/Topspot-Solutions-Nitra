"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error = 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
            } else {
                alert("Error")
            }
        } else {
            // alert('Fill in the required field')
        }
    }
    
        function formValidate(form) {
            let error = 0;
            let formReq = document.querySelectorAll('_req')
            
            for (let index = 0; index < formReq.length; index += 1) {
                const input = formReq[index];
                formRemoveError(input);

                if (input.classList.contains('_email')) {
                    if (emeilTest(input)) {
                        formAddError(input);
                        error += 1;
                    }
                } else if (input.getAttribute("type" === "checkbox" && input.checked === false)) {
                        formAddError(input);
                        error += 1;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error += 1;
                    }
                }
            }
            return error;
    }

        function formAddError(input) {
            input.prentElement.classList.add('_error');
            input.classList.add('_error');
        }
        function formRemoveError(input) {
            input.prentElement.classList.remove('_error');
            input.classList.remove('_error');
    }
    // Функция теста email
    function emeilTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value);
    }
});