

    var button = document.querySelector(".feedback");
    var popup = document.querySelector(".modal");
    var closeOverlay = document.querySelector(".js-feedback-overlay");
    var closeModalButton = popup.querySelector(".modal-close");

    button.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      closeOverlay.style.display = "block";
    });

    closeModalButton.addEventListener("click", function (evt) {
      popup.classList.remove("modal-show");
      closeOverlay.style.display = "none";
    });

    closeOverlay.addEventListener("click", function (evt) {
      this.style.display = "none";
      popup.classList.remove("modal-show");
    });

