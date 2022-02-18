import database, { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  await database()
    .ref('/Hotels')
    .once('value', snapshot => {
      snapshot.forEach(child => {
        hotelData.push(child.val());
      });
      sendData(hotelData);
    });
};
export const getAllCars = async (sendData) => {
  let carData = [];
  await database()
    .ref('/Cars')
    .once('value', snapshot => {
      snapshot.forEach(child => {
        carData.push(child.val());
      });
      sendData(carData);
    });
};




export const getAllFavourites = async (sendData) => {
  let oFavourites = [];
  let carData = [];
  let hotelData = [];
  let hData = [];
  let cData = [];
  await getAllCars((data) => {
    carData = data
  })
  await getAllHotels((data) => {
    hotelData = data
  })
  const items = await AsyncStorage.getItem('user');
  let obj = JSON.parse(items);
  await database()
    .ref('/Favourite')
    .once('value', snapshot => {
      snapshot.forEach(async (child) => {
        oFavourites.push(child.val());
      });
      oFavourites?.map(async (item, i) => {
        if (item?.userId === obj?.user_id) {
          const carResult = carData.filter((caritem) => {
            if (caritem?.key === item?.favItemId) {
              cData.push(caritem)
            }
          })
          const hotelResult = hotelData.filter((hotelItem) => {
            if (hotelItem?.key === item?.favItemId) {
              hData.push(hotelItem)
            }
          })


        }
      })
      const arrayMerge = cData.concat(hData)
      sendData(arrayMerge);
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

export const addBooking = (obj, sendResponce) => {
  let key = database().ref('/Bookings').push().key;
  firebase
    .database()
    .ref('/Bookings/' + key)
    .set({ ...obj, key: key }, err => {
      if (err) {
        sendResponce({
          message: 'Something Went Wrong!',
        });
      } else {
        sendResponce({
          message: 'Booking Added ,wait for booking confirmation',
        });
      }
    });
};

export const fetchCity = (text, setState, setData) => {
  axios({
    method: "get",
    url: `https://autocomplete.travelpayouts.com/places2?term=${text}&locale=en&types[]=city`,
  })
    .then((res) => {
      let value = res?.data?.map((item) => ({
        id: item?.code,
        title: item?.name,
      }))
      setState([...value])
    })
    .catch((err) => {
      console.log(err);
    });
};


export const checkFlight = (flightVal, setLoader, setData) => {
  //YYYY-MM-DD
  let dt = moment(
    flightVal?.departureDate
  ).format("YYYY-MM-DD");
  let dtf = moment(
    flightVal?.departureDate
  ).format("MMMM Do YYYY");
  setLoader(true)
  axios.post('https://cheapfly.azurewebsites.net/api/amadeus?code=cxVrg4u3qRfMDPr8lTrr1drxtwDhzt59geI98e0akgictMa8HkkvJw==', {
    origin: flightVal?.origin,
    destination: flightVal?.destination,
    departureDate: dt,
    adult: flightVal?.adult,
    child: flightVal?.child,
    travelClass: flightVal?.class,
  })
    .then((res) => {
      console.log(res)
      let json = [];
      if (res?.data?.data?.length > 0) {
        res?.data?.data &&
          res?.data?.data.map((Val, i) => {
            let departDate = moment(
              res?.data?.data[i]?.itineraries[0]?.segments[0]?.departure?.at
            ).format("h:mm a");
            let arrivalDate = moment(
              res?.data?.data[i]?.itineraries[0]?.segments[0]?.arrival?.at
            ).format("h:mm a");
            let total = res?.data?.data[i]?.price?.base;
            let airLine = "";
            let airlineCode =
              res?.data?.data[i]?.itineraries[0]?.segments[0]?.carrierCode;
            for (const [key, value] of Object.entries(
              res?.data?.result?.dictionaries?.carriers
            )) {
              if (key === airlineCode) {
                airLine = value;
              }
            }
            let word = res?.data?.data[i]?.itineraries[0]?.duration;
            let duration = "";
            let interval;
            let hour = "";
            let minute = "";
            for (let i = 0; i <= word.length - 1; i++) {
              if (word.charAt(i) === "H") {
                hour = word.slice(2, i + 1);
                interval = i + 1;
              }
              if (word.charAt(i) === "M") {
                minute = word.slice(interval, i + 1);
              }
              duration = hour + " " + minute;
            }
            json.push({
              id: i,
              flyingFrom: flightVal?.origin,
              flyingTo: flightVal?.destination,
              adults: flightVal?.adult,
              child: flightVal?.child,
              class: flightVal?.class,
              departDate: departDate,
              arrivalDate: arrivalDate,
              date: dtf,
              total: total,
              airLine: airLine,
              duration: duration,
            });
          });
        setData(json)
        setLoader(false)
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const approveduserBookings = async (sendData) => {
  const items = await AsyncStorage.getItem('user');
  let obj = JSON.parse(items);
  let approvedBookings = [];
  let unApproveBooking = [];
  await database().ref('/Bookings/').orderByChild('bookingStatus').equalTo(false + obj?.user_id).once('value', (snapshot) => {
    snapshot.forEach((child) => {
      unApproveBooking.push(child.val())
    })

  })
  await database().ref('/Bookings/').orderByChild('bookingStatus').equalTo(true + obj?.user_id).once('value', (snapshot) => {
    snapshot.forEach((child) => {
      approvedBookings.push(child.val())
    })

  })
  sendData(approvedBookings, unApproveBooking)

}