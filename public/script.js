const spoilers = document.querySelectorAll(`.spoiler`);

spoilers.forEach(item => {
   item.addEventListener(`click`, e => {
      item.lastElementChild.classList.toggle(`hidden`)
      })
   }
)