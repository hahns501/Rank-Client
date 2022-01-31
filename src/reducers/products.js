// eslint-disable-next-line
export default (products = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            //actual post
            console.log("FETCH_ALL Reducer")
            return action.payload;
        case 'CREATE_PRODUCT':
            console.log("CREATE_PRODUCT Reducer")
            return [...products, action.payload];
        case 'DELETE':
            console.log("DELETE Reducer")
            return products.filter((product) => product._id !== action.payload );
        case 'UPDATE_PROD':
            console.log("UPDATE_PROD Reducer")
            return products.map((product) => product._id === action.payload._id ? action.payload : product);
        default:
            return products;
    }
}