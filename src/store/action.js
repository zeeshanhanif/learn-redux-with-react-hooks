

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT";

export const increment = ()=>{
    return {
        type: INCREMENT
    }
}

export const decrement = ()=>{
    return {
        type: DECREMENT
    }
}

export const incrementByAmount = (number)=>{
    return {
        type: INCREMENT_BY_AMOUNT,
        payload: number
    }
}