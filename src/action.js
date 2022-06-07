 export const increment=(value )=>{
    
    return{
        type:"INCREMENT",
        payload:value,
    }
    
}
export const decrement =(value)=>{
   return {
       type:"DECREMENT",
       payload: value,
    }
}
export const substraction=(value)=>{return{
    type:"SUB",
payload:value,
}}
export const addition =(value)=>{return{ 
    type:"ADD",
    payload:value,
}}
export const multiplication=(value)=>{return{
    type:"MUL",
    payload:value,
}}
export const division=(value)=>{return{
    type:"DIV",
payload:value
}}