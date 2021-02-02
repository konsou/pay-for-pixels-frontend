const add = (item) => {
    console.log('adding to local storage cart', item)
    const currentCartArray = get() || []

    if (!currentCartArray.some(i => (i.x === item.x && i.y === item.y))){
        console.log('cart doesn\'t contain that, adding')
        localStorage.setItem('cart', JSON.stringify([...currentCartArray, item]))
    } else {
        console.log('duplicate item, not adding')
    }

    console.log('local storage cart:')
    console.log(get())
}

const get = () => {
    return JSON.parse(localStorage.getItem('cart'))
}

const empty = () => {
    localStorage.removeItem('cart')
}


const localStorageCart =  { add, get, empty }
export default localStorageCart
