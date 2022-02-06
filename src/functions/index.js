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
export const getAllHotels = async sendData => {
  let hotelData = [];
  database()
    .ref('/Hotels')
    .once('value', snapshot => {
      snapshot.forEach(child => {
        hotelData.push(child.val());
      });
      sendData(hotelData);
    });
};

export const addToFavourite = async (
  user_id,
  favourite_item_id,
  sendResponce,
) => {
  let favourites = [];
  database()
    .ref('/Favourite')
    .orderByChild('favItemId')
    .equalTo(favourite_item_id)
    .once('value', snapshot => {
      snapshot.forEach(child => {
        if (child.val().userId === user_id) {
          favourites.push(child.val());
        }
      });
      if (favourites.length > 0) {
        sendResponce({
          message: 'Item Already Favourite',
        });
      } else {
        if (user_id && favourite_item_id) {
          let key = firebase.database().ref('/Favourite').push().key;
          let data = {
            userId: user_id,
            favItemId: favourite_item_id,
          };
          database()
            .ref('/Favourite/' + key)
            .set(data, err => {
              if (err) {
                sendResponce({
                  message: 'Something went wrong!',
                });
              } else {
                sendResponce({
                  type: 'Suceess',
                  message: 'Item Added to Favourite',
                });
              }
            });
        } else {
          sendResponce({
            message: 'Missing Params (user_id: , fav_id:)',
          });
        }
      }
    });
};
