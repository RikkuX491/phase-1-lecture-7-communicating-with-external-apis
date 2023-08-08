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

const cryptocurrencyList = document.getElementById('cryptocurrency-list')

// A GET request is made to an external API here
fetch("https://api.coincap.io/v2/assets")
.then(response => response.json())
.then(cryptocurrencyData => {
    const topTenCryptocurrencies = cryptocurrencyData.data.filter(cryptocurrency => {
        const rank = Number(cryptocurrency.rank)
        return rank <= 10
    })
    topTenCryptocurrencies.forEach(cryptocurrency => {
        const cryptocurrencyLI = document.createElement('li')
        cryptocurrencyLI.textContent = cryptocurrency.name
        cryptocurrencyList.appendChild(cryptocurrencyLI)
    })
})