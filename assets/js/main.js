//MODAL//
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})




//FANCYBOX//
Fancybox.bind("[data-fancybox='gallery']", {
  infinite: true,
  Toolbar: {
    display: [
      { id: "back", label: "Voltar", position: "left" },
      "close",
    ],
  },
  callbacks: {
    on: {
      init: (fancybox) => {

        fancybox.$container.querySelector("[data-fancybox-back]").addEventListener("click", () => {
          window.history.back();
        });
      },
    },
  },
});