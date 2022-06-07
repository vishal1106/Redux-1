let initialstate={
    count:0,
}


export const  reducer=(state=initialstate,action)=>{

    switch(action.type){
 case "INCREMENT":{
     state.count++;
     return {...state};
 }
 case "DECREMENT":{
     state.count--;
     return {...state};
 }
 case "SUB" :{
    state.count=state.count-action.payload;
    return {...state};
 }
 case "ADD":{
    state.count=state.count+action.payload;
    return {...state};
 }
 case "MUL":{
     state.count=state.count*action.payload;
     return {...state};
 }
 case "DIV":{
 state.count=state.count/action.payload;
 return {...state};
 }
 default : {
return state;
 }
    }



    return [...state];
}