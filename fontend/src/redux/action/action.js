import {ADD_ARTICLE} from '../constant/action-type';

export function addArticle(payload){
    return {
        type:ADD_ARTICLE,
        payload
    }
}