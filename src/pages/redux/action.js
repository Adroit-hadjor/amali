export const addProduct = (pay) =>{
    const payload = pay
return{
    type:"ADDPRODUCT",
    payload
}
}


export const deleteProduct = (payload) =>{
    return{
        type:"DELETEPRODUCT",
        payload
    }
    }