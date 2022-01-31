import * as api from '../api';

// Action Creators
export const getProducts = () => async (dispatch) => {
    console.log("getProducts Action");
    try{
        //
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }

}

export const createProduct = (product) => async (dispatch) => {
    console.log("createProduct Action");
    try{
        //makes a api request to the backend server to create a post
        const { data } = await api.createPost(product);

        dispatch({ type: 'CREATE_PRODUCT', payload: data });
    } catch(error) {
        console.log(error.message);
    }
}

export const deleteProduct = (id) => async (dispatch) =>{
    console.log("deleteProduct Action")

    try{
        await api.deleteProduct(id);
        dispatch({type:'DELETE', payload: id});
    }catch(error){
        console.log(error.message)
    }
}

export const updateProduct = (id, product) => async (dispatch) =>{
    console.log("Updating product action")

    try{
        const {data} = await api.updateProduct(id, product);

        dispatch({type: 'UPDATE_PROD', payload: data});
    }catch(error){
        console.log(error.message)
    }
}

