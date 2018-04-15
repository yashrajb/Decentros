const filtersReducerDefaultState = {
  text: ''
};

export default (state = filtersReducerDefaultState, action) => {

 if(action.type==="SET_TEXT_FILTER"){

   return {
     ...state,
     text:action.text
   }


 }else {


   return state;


 }

   
};
