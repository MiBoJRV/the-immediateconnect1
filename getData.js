document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('form.dr-form');
    const firstNameField = form.querySelector('.form__input.first-name');
    const lastNameField = form.querySelector('.form__input.last-name');
    const emailField = form.querySelector('.form__input.email');
    const phoneField = form.querySelector('.form__input.phone');
    // const areaCodeField = form.querySelector('.form__input.area_code');

    // console.log(form);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const firstName = firstNameField.value;
        const lastName = lastNameField.value;
        const email = emailField.value;
        const phone = phoneField.value;
        const countryCode = '420';
        // const areaCode = areaCodeField.value;
        const fullNumber = `+420${phone}`;

        // console.log('click')

        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(phone);
        // console.log(areaCode);
        console.log(fullNumber);
    });

    //accordion

    document.addEventListener("DOMContentLoaded", function() {
        const accordionItems = document.querySelectorAll(".faq-accordion-item");

        accordionItems.forEach(item => {
            const title = item.querySelector(".faq-accordion-title");

            title.addEventListener("click", function() {
                const wrap = item.querySelector(".faq-accordion-wrap");
                const arrow = title.querySelector(".faq-arrow");

                if (wrap.style.display === "none" || wrap.style.display === "") {
                    wrap.style.display = "block";
                    arrow.textContent = "-";
                } else {
                    wrap.style.display = "none";
                    arrow.textContent = "+";
                }
            });
        });
    });


});
