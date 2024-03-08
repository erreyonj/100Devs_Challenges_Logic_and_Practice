document.querySelector('button').addEventListener('click', getTitle)

if(!localStorage.getItem('Books')){
  localStorage.setItem('Books',[])
}



function getTitle(){

  let isbn = document.querySelector('input').value
  fetch(`https://openlibrary.org/isbn/${isbn}.json`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if(!localStorage.getItem('books')){
          localStorage.setItem('books',data.title)
        } else {
          let library = localStorage.getItem('books') + ', ' + data.title
          localStorage.setItem('books',library)
        }
        document.querySelector('h2').innerText = localStorage.getItem('books')
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


