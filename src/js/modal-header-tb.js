

  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-td]'),
      closeModalBtn: document.querySelector('[data-modal-close-td]'),
      modal: document.querySelector('[data-modal-td]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      document.body.classList.toggle('modal-open');
      refs.modal.classList.toggle('is-hidden');
    }
  })();


      // <div class="mobile-menu" data-menu>

      //   <button class="mobile-btn" type="button" data-mob-open-btn></button>