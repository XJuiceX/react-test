"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData

        if(error === 0) {

        } else {
            alert('Заполните обязательные поля');
        }
    } 


    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req')

        //Проверяем обьект в инпуте
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];

            formRemoveError(input);

            if(input.classList.contains('_email')) {
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }  else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }

        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //func email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    
});

