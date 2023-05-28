(() => {
  const closeBtn = document.querySelector(".close-btn");
  const logSns = document.querySelector(".log-sns");
  const bg = document.querySelector(".bg");
  const termsElems = document.querySelectorAll(".terms-item .form-input");

  function closeJoinForm() {
    document.body.classList.remove("On");
    bg.classList.remove("On");
  }
  function openJoinForm() {
    document.body.classList.add("On");
    bg.classList.remove("On");
  }

  function handleTermsElems(e) {
    console.log(e.target);
    if (e.target.classList.contains("all")) {
      for (let i = 0; i < termsElems.length; i++) {
        termsElems[i].checked = true;
      }
    }
  }

  termsElems.forEach((elem) => {
    elem.addEventListener("click", handleTermsElems);
  });

  closeBtn.addEventListener("click", closeJoinForm);
  logSns.addEventListener("click", openJoinForm);
})();
