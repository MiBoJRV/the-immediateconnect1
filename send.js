document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('form.dr-form');

    function getFormElements(form) {
        const firstNameField = form.querySelector('.form__input.first-name');
        const lastNameField = form.querySelector('.form__input.last-name');
        const emailField = form.querySelector('.form__input.email');
        const phoneField = form.querySelector('.form__input.phone');
        const areaCodeField = form.querySelector('.form__input.area_code');

        return {
            firstNameField,
            lastNameField,
            emailField,
            phoneField,
            areaCodeField
        };
    }

    function sendLeadData(event, form, formElements) {
        event.preventDefault();
        const firstName = formElements.firstNameField.value;
        const lastName = formElements.lastNameField.value;
        const email = formElements.emailField.value;
        const phone = formElements.phoneField.value;
        // const areaCodeField = formElements.areaCodeField.value;
        const countryCode = '420';
        const fullNumber = `${countryCode}${phone}`;

        const data = {
            ApiKey: 'TnpFMU5sODFNVEJmTnpFMU5sOD0=',
            ApiPassword: 'FiLurGU71q',
            CampaignID: '10853',
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            PhoneNumber: fullNumber,
            Page: 'the-immediateconnect',
        };

        const apiUrl = 'https://tracker.pablo.partners/repost.php?act=register';

        function encodeFormData(data) {
            return Object.keys(data)
                .map(function (key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
                })
                .join('&')
        }

        fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encodeFormData(data)
        })
            .then(response => {
                if (response.ok) {
                    console.log('Lead data sent successfully!');
                    return response.json();
                } else {
                    throw new Error('Failed to send lead data');
                }
            })
            .then(responseJson => {
                if (responseJson.ret_code !== '404') {
                    const redirectUrl = responseJson.url;
                    window.location.href = redirectUrl;
                } else {
                    console.log('Problem with redirect.');
                }
            })
            .catch(error => {
                console.error('An error occurred:', error.message);
            });
    }

    const formElements = getFormElements(form);

    const submitBtn = document.querySelector('.main-form-btn');
    submitBtn.addEventListener('click', (event) => {
        console.log('click');


        let isValid;
////////////////////////////
        const validForm = () => {
            const firstName = formElements.firstNameField.value;
            const lastName = formElements.lastNameField.value;
            const email = formElements.emailField.value;
            const phone = formElements.phoneField.value;

            const firstNameError = document.querySelector('.error.f-name');
            const lastNameError = document.querySelector('.error.l-name');
            const emailError = document.querySelector('.error.email');
            const phoneError = document.querySelector('.error.tel');

            const isNotEmpty = (value) => value.trim() !== '';
            const isMinLength = (value, minLength) => value.length >= minLength;
            const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            const isPhoneValid = (phone) => /^\d+$/.test(phone);

            const isValidFirstName = isNotEmpty(firstName) && isMinLength(firstName, 2);
            const isValidLastName = isNotEmpty(lastName) && isMinLength(lastName, 2);
            const isValidEmail = isNotEmpty(email) && isEmailValid(email);
            const isValidPhone = isNotEmpty(phone) && isPhoneValid(phone);

            if (!isValidFirstName) {
                firstNameError.style.display = 'block'
            }

            if (!isValidLastName) {
                lastNameError.style.display = 'block'
            }

            if (!isValidEmail) {
                emailError.style.display = 'block'
            }

            if (!isValidPhone) {
                phoneError.style.display = 'block';
            }


            isValid = isValidFirstName && isValidLastName && isValidEmail && isValidPhone;
            return isValid;
        };
        validForm();
////////////////////////////

        if (isValid) {
            document.querySelector(".loader-sub").style.display = "flex";
            const countdownElement = document.getElementById('countdown');
            let seconds = 5;

            const updateCountdown = () => {
                countdownElement.textContent = seconds;
                if (seconds === 0) {
                    document.getElementById('loader-sub').style.display = 'none';
                } else {
                    seconds--;
                    setTimeout(updateCountdown, 1000);
                }
            };

            setTimeout(updateCountdown, 1000);

            event.preventDefault();
            sendLeadData(event, form, formElements);
        }
        // sendLeadData(event, form, formElements);

        // Решта коду для обробки кліку кнопки "Відправити форму"
        const urlParams = new URLSearchParams(window.location.search);
        const access_token = urlParams.get('access_token');

        const version = "fb";
        const subDomainIndex = 1;
        const createTime = Date.now() / 1000;

        let fbp, fbc;

        if (!urlParams.get('fbp')) {
            const userHash = Math.floor(Math.random() * (Math.pow(2, 32) - 1));
            fbp = `${version}.${subDomainIndex}.${createTime}.${userHash}`;
        } else {
            fbp = urlParams.get('fbp');
        }

        if (!urlParams.get('fbc')) {
            const fbclid = urlParams.get('fbclid');
            if (fbclid) {
                fbc = `${version}.${subDomainIndex}.${createTime}.${fbclid}`;
            } else {
                fbc = "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890";
            }
        } else {
            fbc = urlParams.get('fbc');
        }
    });


    form.addEventListener('submit', (event) => {
        document.querySelector(".loader-sub").style.display = "flex";
        const countdownElement = document.getElementById('countdown');
        let seconds = 3;

        const updateCountdown = () => {
          countdownElement.textContent = seconds;
          if (seconds === 0) {
            document.getElementById('loader-sub').style.display = 'none';
          } else {
            seconds--;
            setTimeout(updateCountdown, 1000);
          }
        };

        setTimeout(updateCountdown, 1000);
        console.log('click');
        event.preventDefault();

        sendLeadData(event, form, formElements);

        // Решта коду для обробки кліку кнопки "Відправити форму"
        const urlParams = new URLSearchParams(window.location.search);
        const access_token = urlParams.get('access_token');

        const version = "fb";
        const subDomainIndex = 1;
        const createTime = Date.now() / 1000;

        let fbp, fbc;

        if (!urlParams.get('fbp')) {
            const userHash = Math.floor(Math.random() * (Math.pow(2, 32) - 1));
            fbp = `${version}.${subDomainIndex}.${createTime}.${userHash}`;
        } else {
            fbp = urlParams.get('fbp');
        }

        if (!urlParams.get('fbc')) {
            const fbclid = urlParams.get('fbclid');
            if (fbclid) {
                fbc = `${version}.${subDomainIndex}.${createTime}.${fbclid}`;
            } else {
                fbc = "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890";
            }
        } else {
            fbc = urlParams.get('fbc');
        }
    });

});
