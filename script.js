document.addEventListener("DOMContentLoaded", function () {

    /* CONTACT FORM VALIDATION */

    const form = document.getElementById("contactForm");

    if (form) {

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const quantity = document.getElementById("quantity");
        const branch = document.getElementById("branch");
        const message = document.getElementById("message");
        const formMessage = document.getElementById("formMessage");

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            document.querySelectorAll(".error").forEach(function (error) {
                error.textContent = "";
            });

            formMessage.textContent = "";

            let valid = true;

            if (name.value.trim() === "") {
                document.getElementById("nameError").textContent =
                    "Name is required.";
                valid = false;
            }

            if (email.value.trim() === "") {
                document.getElementById("emailError").textContent =
                    "Email is required.";
                valid = false;
            } else if (!email.validity.valid) {
                document.getElementById("emailError").textContent =
                    "Please enter a valid email address.";
                valid = false;
            }

            if (quantity.value === "") {
                document.getElementById("quantityError").textContent =
                    "Quantity of orders is required.";
                valid = false;
            } else {

                const orderQuantity = Number(quantity.value);

                if (
                    !Number.isInteger(orderQuantity) ||
                    orderQuantity < 1 ||
                    orderQuantity > 10
                ) {
                    document.getElementById("quantityError").textContent =
                        "Quantity must be a whole number from 1 to 10.";
                    valid = false;
                }
            }

            if (branch.value === "") {
                document.getElementById("branchError").textContent =
                    "Please select a branch.";
                valid = false;
            }

            if (message.value.trim() === "") {
                document.getElementById("messageError").textContent =
                    "Message is required.";
                valid = false;
            }

            if (!valid) {
                formMessage.textContent =
                    "Please correct the highlighted fields.";
                formMessage.style.color = "#b00020";
                return;
            }

            formMessage.textContent =
                "Thank you, " +
                name.value.trim() +
                "! Your message has been received.";

            formMessage.style.color = "#7a5a00";

            form.reset();
        });
    }


    /* GALLERY CLICK-TO-ENLARGE */

    const galleryImages =
        document.querySelectorAll(".gallery-item img");

    const imageModal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalClose =
        document.getElementById("modalClose");


    if (
        galleryImages.length > 0 &&
        imageModal &&
        modalImage &&
        modalClose
    ) {

        galleryImages.forEach(function (image) {

            image.addEventListener("click", function () {

                modalImage.src = image.src;
                modalImage.alt = image.alt;

                imageModal.classList.add("show");

                document.body.style.overflow = "hidden";
            });

        });


        modalClose.addEventListener("click", function () {

            imageModal.classList.remove("show");

            document.body.style.overflow = "";
        });


        imageModal.addEventListener("click", function (event) {

            if (event.target === imageModal) {

                imageModal.classList.remove("show");

                document.body.style.overflow = "";
            }
        });


        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                imageModal.classList.remove("show");

                document.body.style.overflow = "";
            }
        });
    }

});