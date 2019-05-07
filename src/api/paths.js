const baseURL = "https://fn-datahub-backend.appspot.com/api";

//User
const user = baseURL + "/users/user/";

//Items
const allItems = baseURL + "/items/all";
const item = baseURL + "/items/item/";

//Weapons
const allWeapons = baseURL + "/items/weapons";
const weapon = baseURL + "/items/weapon/";

//Store
const store = baseURL + "/upcoming/store";

//Upcoming Items
const upcomingItems = baseURL + "/upcoming/items";

//Challenges
const challenges = baseURL + "/info/challenges/";

//News
const news = baseURL + "/info/news";

//Server status
const serverStatus = baseURL + "/info/server-status";

//Feedback Email
const feedbackEndpoint = "/contact/email";

export {
  user,
  allItems,
  item,
  allWeapons,
  weapon,
  store,
  upcomingItems,
  challenges,
  news,
  serverStatus,
  feedbackEndpoint
};
