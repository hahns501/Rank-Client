import * as api from '../api'

export const getAllActiveUsers = () => async (dispatch) =>{
    console.log("Get All Active Users Action");

    try{
        const {data} = await api.fetchAllActive();

        dispatch({ type:'FETCH_ALL_ACTIVE', payload: data})
    }catch(error){
        console.log(error.message);
    }

}

export const deleteActiveUser = (id) => async (dispatch) =>{
    console.log("Delete Active User Action");
    console.log(id);
    try{
        await api.deleteActiveUser(id);
        dispatch({type: "DELETE_ACTIVE", payload: id})
    }catch(error){
        console.log(error.message);
    }
}

export const deleteAllActiveUsers = () => async (dispatch) =>{
    console.log("Delete All Active Users Action");

    try{
        await api.deleteAllActiveUsers();
        console.log("Test");
        dispatch({ type:'DeleteAllActive'})
    }catch(error){
        console.log(error.message);
    }
}