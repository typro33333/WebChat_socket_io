let users = []

const addUser = ({id,name,key}) => {
    name = name.trim().toLowerCase()
    key = name.trim().toLowerCase()

    const exitsUser = users.find((user)=>user.name === name && user.key === key);

    if(!name || !key) return { error: 'Username and room are required.' };
    if(exitsUser) return {error:'User is taken'}

    const user = {id,name,key}

    users.push(user)
    return {user}
}
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
  
    if(index !== -1) return users.splice(index, 1)[0];
  }
  
const getUser = (id) => users.find((user) => user.id === id);
  
const getUsersInkey = (key) => users.filter((user) => user.key === key);

module.exports = { addUser, removeUser, getUser, getUsersInkey };