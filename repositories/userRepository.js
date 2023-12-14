const users = [];

const getAllUsers = () => users;

const getUserById = (userId) => users.find((user) => users.id === userId);

const getUserByEmail = (userEmail) => 
    users.find((user) => users.email === userEmail);

const createUser = (newUser) => {
    users.push(newUser);
    return newUser;
}

const editUser = (updateUser) => {
    const index = users.findIndex((user) => user.id === updateUser.id);
    users[index] = updateUser;
    return updateUser;
}

const deleteUser = (deleteUser) => {
    const index = users.findIndex((user) => user.id === deleteUser.id);
    const deletedUser = users.splice(index, 1);
    return deletedUser;
}


export default {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    editUser,
    deleteUser
};
