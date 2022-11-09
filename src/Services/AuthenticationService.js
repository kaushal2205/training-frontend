import axios from 'axios'; // For API calls, we will be using Axios - npm install axios

const API_URL='http://localhost:8082/rockblack/api/EmployeeLogin';
const API_URL1='http://localhost:8082/rockblack/api/Employee';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService{

    loginEmployee(employee){
         console.log(employee);
          return axios.post(API_URL,employee);
    }

    registerEmployee(employee){
        return axios.post(API_URL1, employee);
       }

    registerSuccessfulLogin(username, password) {
      
       sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
      // console.log("First"+username);
      
    }

    logout() {
     
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
       // console.log("Second"+user);
        if (user === null) return ''
        return user
    }

} 
//Create an object of AuthenticationService.
export default new AuthenticationService();