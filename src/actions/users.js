import * as api from '../api'

export const createUser = (user) => async (dispatch) => {
    console.log("Create User Action")
    try{
        const { data } = await api.createUser(user);

        dispatch({type: 'CREATE', payload: data});
    }catch(error){
        console.log(error)
    }
}

export const deleteUser = (id) => async (dispatch) =>{
    console.log("Delete User Action");

    try{
        await api.deleteUser(id);
        dispatch({type:'DELETE_USER', payload: id})
    }catch(error){
        console.log(error.message);
    }
}

export const getUsers = () => async (dispatch) => {
    console.log("Get all users Action")
    try{
        const { data } =  await api.fetchUsers();

        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch(error){
        console.log(error.message)
    }
}

export const findUser = (user) => async (dispatch) => {
    console.log("Find one user Action")
    // console.log(user)
    try{
        const { data } = await api.findUser(user);

        sessionStorage.setItem('user', JSON.stringify(data));
    }catch(error){
        console.log(error.message)
    }
}

export const updateUser = (id, user) => async (dispatch) =>{
    try{
        const {data} = await api.updateUser(id, user);

        dispatch({type: 'UPDATE', payload: data});
    }catch(error){
        console.log(error.message);
    }
}
