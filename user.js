fetch ('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {
    console.log(` quantidade de itens: 10 ${json.length})`)

    json
    
    .filter(element => element.id % 2 === 0)
    .forEach(element => console.log(`${element.id} - ${element.name.toUpperCase()}, ${element.username.toLowerCase()}`))

})