//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getTitle)



function getTitle(){

  let isbn = document.querySelector('input').value
  fetch(`https://openlibrary.org/isbn/${isbn}.json`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}