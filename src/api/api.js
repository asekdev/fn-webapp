import axios from 'axios';

const getUserData = async () => {
    let userData = await axios.get("http://localhost:3001/api/users/user/dbljntd")
    console.log("userdata", userData)
    return userData;
}

const getStoreData = async () => {
    let storeData = await axios.get("http://localhost:3001/api/upcoming/store")
    console.log("storeData", storeData )
    return storeData;
}

export { getUserData, getStoreData };