import { apis, headers } from "../../constants/appLevelConstants";
import axios from "axios";
import userData1 from '../../../data.json'
// export function createUser(userData) {
//     return new Promise((resolve, reject) => {
//       fetch(apis.BASE_URL + apis.API_USER_ACCOUNT_CREATION, {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(userData),
//       }
//       ).then(async (res) => {
//         const data = await res.json();
//         if (data) {
//           resolve(data);
//         } else {
//           reject({ message: "Email already exists" })
//         }
//       }, (error) => {
//         reject([error]);
//       });
//     });
//   }

export function createUser(userData) {
return new Promise((resolve,reject)=>{

  setTimeout(() => {
    console.log(userData1,"userData1",userData)
    const existingUser = userData1.find(user => user.username === userData.username);
    if (existingUser) {
      console.log("Condition true")
      reject({ message: "Email already exists" });
    } else {
      // userData1.push(userData);
      userData1.push(userData);
      console.log("data-Pushed",userData1)
      localStorage.setItem('userData1',JSON.stringify(userData));
      resolve(userData1);
    }
  }, 1000);

})
}

// export function checkUser(userData) {
//     return new Promise((resolve, reject) => {
//       axios.get(apis.BASE_URL + apis.API_USER_ACCOUNT_CREATION + `?username=${userData.username}&password=${userData.password}`, headers
//       ).then(async (res) => {
//         if (res && res.data) {
//           resolve(res.data);
//         } else {
//           reject({ message: "Invalid Credentials" })
//         }
//       }, (error) => {
//         reject({ message: "Invalid Credentials" });
//       });
//     });
//   }

export function checkUser(userData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(userData,"datahai" ,userData1)
      // const dataOfUser = localStorage.getItem('userData1');
      // const makingArry = Object.values(dataOfUser)
      // console.log(makingArry);
      // const user = makingArry.find(user => user.username === userData.username && user.password === userData.password);
      const user = userData1.find(user => user.username === userData.username && user.password === userData.password);
      if (user) {
      console.log("signing-in",user)

        resolve(user);
      } else {

        reject({ message: "Invalid Credentials" });
      }
    }, 1000); 
  });
}
// export function checkUser(userData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(userData,"datahai")
//       const user = userData1.find(user => user.username === userData.username && user.password === userData.password);
//       if (user) {
//       console.log("data-Pushed",user)

//         resolve(user);
//       } else {

//         reject({ message: "Invalid Credentials" });
//       }
//     }, 1000); 
//   });
// }