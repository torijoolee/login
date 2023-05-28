(() => {
  const closeBtn = document.querySelector(".close-btn");
  const logSns = document.querySelector(".log-sns");
  const bg = document.querySelector(".bg");
  const termsElems = document.querySelectorAll(".terms-item .form-input");
  const more = document.querySelectorAll(".more");
  const moreTxtWrap = document.querySelectorAll(".terms-txt-wrap");
  let current;

  function closeJoinForm() {
    document.body.classList.remove("On");
    bg.classList.remove("On");
  }
  function openJoinForm() {
    document.body.classList.add("On");
    bg.classList.remove("On");
  }

  function handleTermsElems(e) {
    if (e.target.classList.contains("all")) {
      for (let i = 0; i < termsElems.length; i++) {
        termsElems[i].checked = true;
      }
    }
  }

  termsElems.forEach((elem) => {
    elem.addEventListener("click", handleTermsElems);
  });

  function handleViewMore(e) {
    current = e.target.dataset.filter;
    for (let i = 0; i < moreTxtWrap.length; i++) {
      if (current == moreTxtWrap[i].dataset.link) {
        moreTxtWrap[i].classList.toggle("On");
        more[i].classList.toggle("On");
      }
    }
  }
  more.forEach((more, i) => {
    more.addEventListener("click", handleViewMore);
  });

  closeBtn.addEventListener("click", closeJoinForm);
  logSns.addEventListener("click", openJoinForm);
})();
