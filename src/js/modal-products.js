(() => {
  const refs = {
    openProdBtn: document.querySelector("[data-modalProd-open]"),
    closeProdBtn: document.querySelector("[data-modalProd-close]"),
    Prod: document.querySelector("[data-modalProd]"),
  };

  refs.openProdBtn.addEventListener("click", toggleModal);
  refs.closeProdBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modalProd-open");
    refs.Prod.classList.toggle("is-hiddenProd");
  }
})();