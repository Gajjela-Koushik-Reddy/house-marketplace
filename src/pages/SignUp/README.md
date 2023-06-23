Same as [SignIn](../SignIn/)

Additional:
    - added extra input `Name`  

Authentication:
- setup the authentication in firebase.config.js
- use `getAuth()` on the `app`i.e., `getAuth(app)`
This Helped: [Freecodecamp](https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/)

- Added users to database `setDoc(doc(db, "users", user.uid), formDataCopy)`
- before adding users into the database, password has been removed from the data that is bring added into the database.
- Whenever a user fails to fill the whole form or if there is any error in the regestration process a banner is popped up saying `Something went wrong with registration`