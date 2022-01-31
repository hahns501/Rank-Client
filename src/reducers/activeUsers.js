export default (activeUsers = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_ACTIVE':
            console.log("FETCH_ALL_ACTIVE reducer");
            return action.payload;
        case 'DELETE_ACTIVE':
            console.log("DELETE_ACTIVE reducer");
            return activeUsers.filter((user) => user._id !== action.payload );
        case 'DeleteAllActive':
            console.log("DELETE_ALL_ACTIVE reducer");
            return activeUsers = [];
        default:
            return activeUsers;
    }
}