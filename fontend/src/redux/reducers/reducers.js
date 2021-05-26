import {ADD_ARTICLE} from '../constant/action-type';

const initialState ={
    articles:[]
}

function rootReducer(state = initialState, action) {
  if(action.type === ADD_ARTICLE){
    return Object.assign({},state,{
      articles:state.articles.concat(action.payload)
    });
  };
}
  
export default rootReducer;