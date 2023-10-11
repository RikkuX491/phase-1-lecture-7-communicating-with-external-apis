const cryptocurrencyList = document.getElementById('cryptocurrency-list')

fetch("http://localhost:3000/foods")
.then(response => response.json())
.then(foods => {
    foods.forEach(food => {
        addFoodImageToMenu(food)
    })
})

fetch("http://localhost:3000/foods/1")
.then(response => response.json())
.then(food => {
    displayFoodDetails(food)
})

function addFoodImageToMenu(food){
    const restaurantMenu = document.getElementById('restaurant-menu')
    const foodImage = document.createElement('img')
    foodImage.src = food.image
    foodImage.addEventListener('click', () => {
        displayFoodDetails(food)
    })
    restaurantMenu.appendChild(foodImage)
}

function displayFoodDetails(food){
    const foodImage = document.querySelector('.detail-image')
    foodImage.src = food.image

    const foodName = document.querySelector('.name')
    foodName.textContent = food.name

    const foodDescription = document.querySelector('#description-display')
    foodDescription.textContent = food.description
}

fetch('https://api.coincap.io/v2/assets')
.then(response => response.json())
.then(cryptocurrencyData => {

    const filteredCryptocurrencies = cryptocurrencyData.data.filter((cryptocurrency, index) => {
        if(Number(cryptocurrency.rank) <= 10){
            return true
        }
        // if(index < 10){
        //     return true
        // }
        else{
            return false
        }
    })

    filteredCryptocurrencies.forEach(cryptocurrency => {
        const liElement = document.createElement('li')
        liElement.textContent = `${cryptocurrency.name} (${cryptocurrency.symbol}): Rank ${cryptocurrency.rank}`
        cryptocurrencyList.appendChild(liElement)
    })
})