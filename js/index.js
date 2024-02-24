document.addEventListener("DOMContentLoaded", function () {
  console.log("Index script DOMContentLoaded");

  function seeEmail(event) {
    event.preventDefault();
    let email = "elvira.a.graf@gmail.com";
    alert("My 📧 address is: " + email);
  }

  let emailIcon = document.querySelector("#emailIcon");
  emailIcon.addEventListener("click", seeEmail);

  function toggleLanguage() {
    let languageElement = document.querySelector(".switch > span.on");

    if (languageElement.textContent === "EN") {
      languageElement.textContent = "DE";
    } else {
      languageElement.textContent = "EN";
    }

    translatePage(languageElement.textContent);
  }

  function translatePage(language) {
    const elementsToTranslate = document.querySelectorAll("[data-translate]");

    elementsToTranslate.forEach((element) => {
      const translationKey = element.getAttribute("data-translate");

      if (
        translations[translationKey] &&
        translations[translationKey][language]
      ) {
        element.textContent = translations[translationKey][language];
      }
    });
  }

  let switchElement = document.getElementById("language-toggle");
  switchElement.addEventListener("click", toggleLanguage);
});

$(document).ready(function () {
  $("#sendButton").click(function () {
    let name = $("#nameInput").val();
    let email = $("#emailInput").val();
    let message = $("#messageInput").val();

    $.ajax({
      type: "POST",
      url: "php/send_email.php",
      data: { name: name, email: email, message: message },
      success: function (response) {
        $("#formResponse").html(response);
      },
      error: function () {
        $("#formResponse").html("Error sending message.");
      },
    });
  });
});
