const add = (item) => {
    console.log('adding to cart', item)
    try {
        localStorage.setItem('cart', JSON.stringify([ ...get(), item ]))
    } catch (err) { // cart not initialized yet
        localStorage.setItem('cart', JSON.stringify([ item ]))
    }
    
    console.log('cart:')
    console.log(get())
}

const get = () => {
    return JSON.parse(localStorage.getItem('cart'))
}


const cart =  { add, get }
export default cart
