import database, {firebase} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
export const signin = async (email, password, data) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;
      if (user.emailVerified) {
        var names = [];
        var emails = [];
        var passwords = [];
        var keys = [];
        database()
          .ref('/Users')
          .once('value', snapshot => {
            snapshot.forEach(child => {
              names.push(child.val().name);
              emails.push(child.val().email);
              passwords.push(child.val().password);
              keys.push(child.val().key);
            });
            var flag = false;
            emails.map((v, i) => {
              if (emails[i] === email && passwords[i] == password) {
                flag = true;
                let obj = {
                  user: {
                    user_name: names[i],
                    user_id: keys[i],
                    vendror: null,
                  },
                  message: 'Login Successful',
                };
                data(obj);
              }
            });
          });
      } else {
        let obj = {
          message: 'Email Not Verified',
        };
        data(obj);
      }
    })
    .catch(() => {
      let obj = {
        message: 'Invalid/Email or Password',
      };
      data(obj);
    });
};
