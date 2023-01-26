const libreriaOnline = async function () {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/books");
    console.log(response);
    if (response.ok) {
      let data = await response.json();
      console.log("I data sono:", data);

      //Inizio DOM manipulation
      let mainSession = document.querySelector("#main");
      data.forEach((book) => {
        mainSession.innerHTML =
          mainSession.innerHTML +
          `<div class="row d-flex justify-content-center" id="rigaCards">
            <div class="col card">
              <div class="card">
              <img src="${book.img}" id="copertina" class="card-img-top w-100" />
              <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">
               Prezzo: ${book.price}$
             </p>
            <a href="#" class="btn btn-primary">Buy</a>
            </div>
            
        </div>`;
      });
      //Fine DOM manipulation
    } else {
      console.log("Occhio che c'è stato un errore durante la chiamata");
    }
  } catch (error) {
    console.log("Ops c'è stato un errore", error);
  }
};

console.log(libreriaOnline());
