document.addEventListener("DOMContentLoaded", function () {
    const emailRadio = document.getElementById("emailRadio");
    const waRadio = document.getElementById("waRadio");
    const emailGroup = document.getElementById("emailGroup");
    const hpGroup = document.getElementById("hpGroup");
    const form = document.querySelector("form");

    function updateContactPreference() {
        if (emailRadio.checked) {
          emailGroup.classList.remove("hidden");
          emailGroup.querySelector("input").required = true;
          hpGroup.classList.add("hidden");
          hpGroup.querySelector("input").required = false;
        } else {
          hpGroup.classList.remove("hidden");
          hpGroup.querySelector("input").required = true;
          emailGroup.classList.add("hidden");
          emailGroup.querySelector("input").required = false;
        }
      }

    form.addEventListener("submit", function (event) {
        if (form.checkValidity()) {
            event.preventDefault();
            alert("Terima kasih telah menghubungi saya! Saya akan merespons secepatnya.");
        }

        form.reset();
        updateContactPreference();
    });

    updateContactPreference();
    emailRadio.addEventListener("change", updateContactPreference);
    waRadio.addEventListener("change", updateContactPreference);
});
