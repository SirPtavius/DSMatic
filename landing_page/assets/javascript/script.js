const counters = document.querySelectorAll(".counters h2");
const container = document.querySelector(".counters");
//track activation counters
let activated = false;

//scroll event
window.addEventListener("scroll", () => {
  //controlla se la pagina è scrolled fino al containers e i counters non sono attivati
  if (
    pageYOffset > container.offsetTop - container.offsetHeight - 700 &&
    activated === false
  ) {
    //seleziona tutti i counters
    counters.forEach((counter) => {
      //set valore di counter 0
      counter.innerText = 0;
      // set variabile count
      let count = 0;

      function updateCount() {
        //get il numero fino a quanto contare
        const target = parseInt(counter.dataset.count);
        if (count < target) {
          count++;
          counter.innerText = count;
          setTimeout(updateCount, 40);
        } else {
          counter.innerText = target;
        }
      }
      updateCount();
      activated = true;
    });
    //se la paggina viene scrollato indietro fino a un certo valore o fino all'inizio e activated  true
  } else if (
    pageYOffset < container.offsetTop - container.offsetHeight - 900 ||
    (pageYOffset === 0 && activated === true)
  ) {
    //seleziona tutti i counter
    counters.forEach((counter) => {
      //set text counter a 0
      counter.innerText = 0;
    });
    // set activated to false
    activated = false;
  }
});
