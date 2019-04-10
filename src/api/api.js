import axios from "axios";
import {
  user,
  allItems,
  item,
  allWeapons,
  weapon,
  store,
  upcomingItems,
  challenges,
  news,
  serverStatus
} from "./paths";
import { async } from "q";

const getUserData = async username => {
  let userData = await axios.get(user + username);
  // console.log("userdata", userData)
  return userData;
};

const getAllItems = async () => {
  let allItemsData = await axios.get(allItems);
  // console.log("allItems data", allItemsData)
  return allItemsData;
};

const getSpecificItem = async itemId => {
  let singleItem = await axios.get(item + itemId);
  // console.log("allItems data", singleItem)
  return singleItem;
};

const getAllWeapons = async () => {
  let allWeaponData = await axios.get(allWeapons)
    .catch(err => {
      throw new Error(err);
    })
  // console.log("storeData", storeData )
  return allWeaponData;
};

const getWeapon = async weaponId => {
  let weaponData = await axios.get(weapon + weaponId);
  // console.log("storeData", storeData )
  return weaponData;
};

const getStoreData = async () => {
  let storeData = await axios.get(store);
  // console.log("storeData", storeData )
  return storeData;
};

const getUpcomingItems = async () => {
  let ucpcomingItemsData = await axios.get(upcomingItems);
  // console.log("storeData", upcomingItems)
  return ucpcomingItemsData;
};

const getChallanges = async season => {
  let challengeData = await axios.get(challenges + season);
  // console.log("storeData", upcomingItems)
  return challengeData;
};

const getNews = async () => {
  let newsData = await axios.get(news);
  // console.log("storeData", upcomingItems)
  return newsData;
};

const getServerStatus = async () => {
  let serverStatusData = await axios.get(serverStatus);
  // console.log("storeData", upcomingItems)
  return serverStatusData;
};

export {
  getUserData,
  getAllItems,
  getSpecificItem,
  getAllWeapons,
  getWeapon,
  getStoreData,
  getUpcomingItems,
  getChallanges,
  getNews,
  getServerStatus
};
