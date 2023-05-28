(() => {
  const closeBtn = document.querySelector(".close-btn");
  const logSns = document.querySelector(".log-sns");
  const bg = document.querySelector(".bg");

  function closeJoinForm() {
    document.body.classList.remove("On");
    bg.classList.remove("On");
  }
  function openJoinForm() {
    document.body.classList.add("On");
    bg.classList.remove("On");
  }

  closeBtn.addEventListener("click", closeJoinForm);
  logSns.addEventListener("click", openJoinForm);
})();
