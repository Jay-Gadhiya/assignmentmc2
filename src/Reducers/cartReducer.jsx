
export const cartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems : [...state.cartItems, action.payload],
                totalPrice : [...state.cartItems, action.payload].reduce((acc, curr) => acc + curr.price ,0) - 50,
                saveLaterItems : state.saveLaterItems.filter(item => item.id != action.payload.id),
                // state.totalPrice + (action.payload.price * action.payload.qty) - 50
            }

        case "INCREASE_QUANTITY":
            return {
                ...state,
                cartItems : state.cartItems.map(item => item.id == action.payload.id ? {...item, qty : item.qty + 1} : item),
                totalPrice : state.totalPrice + action.payload.price,
            }

        case "DECREASE_QUANTITY":
            return {
                ...state,
                cartItems : state.cartItems.map(item => item.id == action.payload.id ? {...item, qty : item.qty - 1} : item),
                totalPrice : state.totalPrice - action.payload.price,
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems : state.cartItems.filter(item => item.id != action.payload.id),
                totalPrice : state.totalPrice - action.payload.price * action.payload.qty,
                saveLaterItems : state.saveLaterItems.filter(item => item.id != action.payload.id),
            }

        case "SAVE_FOR_LATER":
            return {
                ...state,
                cartItems : state.cartItems.filter(item => item.id != action.payload.id),
                totalPrice : state.totalPrice - action.payload.price * action.payload.qty,
                saveLaterItems : [...state.saveLaterItems, action.payload]
            }
            
        default:
            return state;
    }
}