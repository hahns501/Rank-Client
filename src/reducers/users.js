// eslint-disable-next-line
export default (users = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            console.log("Fetch_all reducer");
            return action.payload;
        case 'CREATE':
            console.log("Create reducer");
            return [...users, action.payload];
        case 'UPDATE':
            return users.map((user) => user._id === action.payload._id ? action.payload : user);
        case 'DELETE_USER':
            console.log("Delete User reducer");
            return users.filter((user) => user._id !== action.payload );
        default:
            return users;
    }
}