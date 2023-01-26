const libreriaOnline = async function () {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/books");
    console.log(response);
    if (response.ok) {
      let data = await response.json();
      console.log("I data sono:", data);

      //Inizio DOM manipulation
      let mainSessionRow = document.querySelector("#main");
      data.forEach((book) => {
        mainSessionRow.innerHTML =
          mainSessionRow.innerHTML +
          `<div class="card col-4">
              <img src="${book.img}"  class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.price}$
                </p>
                <button class="btn btn-primary" onClick="removeTask(event)">Remove</button>
              </div>
            </div> `;
      });
      //Fine DOM manipulation
    } else {
      console.log("Occhio che c'è stato un errore durante la chiamata");
    }
  } catch (error) {
    console.log("Ops c'è stato un errore", error);
  }
};

function removeTask(e) {
  e.target.parentElement.parentElement.style.display = "none";
}
window.onload = libreriaOnline();
