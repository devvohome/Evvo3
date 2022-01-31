// put you application javascript here

const store = Vue.reactive({
 statet: {
     cartState: []
 },

 getCard(){
    fetch('/cart.js').then(res => res.json()).then(response => {
        this.state.cartState.unshift(response.data)
    }).catch(error=>{
        console.log(error)
    })
 }

})


const miniCartState = Vue.reactive({
    hidden: true
})

// Toggle Open and Close MiniCart
const toogleMiniCart = {
    
    openCart(){
        miniCartState.hidden = !miniCartState.hidden
    }
}

const toogleClose = {
    closeAll(){
        miniCartState.hidden = true
    }
}