//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const img = document.querySelector('img')
const h3 = document.querySelector('h3')
const h2 = document.querySelector('h2')
const input = document.querySelector('input')
const button = document.querySelector('button')

// const getDrink = _ => {
//     const drink = input.value.split(' ').join('_')
//     const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
//     // practiced w/o template literal other wise fetch would use full url with ${drink} 
    
//     fetch(apiUrl+drink)
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data)
//         h2.innerText = data.drinks[0].strDrink
//         img.src = data.drinks[0].strDrinkThumb
//         h3.innerText = data.drinks[0].strInstructions
//     })
//     .catch(err =>{
//         console.log(`error${err}`)
//     })
// }


const getDrinkCarousel = _ => {
    const drink = input.value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data =>{
        
        let i = 0
        const carousel = setInterval(setData,3000)
        function setData(){
            h2.innerText = data.drinks[i].strDrink
            img.src = data.drinks[i].strDrinkThumb
            h3.innerText = data.drinks[i].strInstructions
            i++
            if(i >= data.drinks.length){
                clearInterval(carousel)
            }
        }
    })
    .catch(err =>{
        console.log(`error${err}`)
    })
}



button.addEventListener('click',getDrinkCarousel,)


