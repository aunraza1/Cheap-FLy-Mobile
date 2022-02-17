import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Button, DropDowwn, InputField, Loader, Text} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import I18n from '../../i18n';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {ModalHandler} from '../../store/actions/modal-actions';
import {Book} from '../../store/actions/booking-actions';

const Booking = ({route, navigation}) => {
  const data = route?.params;
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.BookingReducer);

  const [user, setUser] = useState(null);
  const [days, setDays] = useState(null);
  const [amount, setAmount] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const getUser = async () => {
    let e = await AsyncStorage.getItem('user');
    if (e !== null) {
      setUser(JSON.parse(e));
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const BookHotel = () => {
    if (selectedType?.value !== null && days) {
      const api_data = {
        amountPayable: parseInt(amount),
        bookingStatus: false + user?.user_id,
        cancelBooking: false,
        checkInDate: moment(date).format('YYYY-MM-DD'),
        days: parseInt(days),
        hotelLocation: data?.hotelLocation,
        hotelName: data?.hotelName,
        hotelRatings: data?.hotelRatings,
        roomType: selectedType?.label,
        userId: user?.user_id,
        ownerId: data?.ownerId,
        owenrName: data?.ownerName,
        price: selectedType?.value,
      };
      dispatch(Book(api_data, navigation));
    } else {
      dispatch(
        ModalHandler({
          show: true,
          message: I18n.t('select_room_and_days_alert'),
        }),
      );
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  let options = [];
  data?.singlePrice &&
    options.push({label: I18n.t('single_text'), value: data?.singlePrice});
  data?.doublePrice &&
    options.push({label: I18n.t('double_text'), value: data?.doublePrice});
  data?.kingPrice &&
    options.push({label: I18n.t('king_text'), value: data?.kingPrice});
  data?.queenPrice &&
    options.push({label: I18n.t('queen_text'), value: data?.queenPrice});

  return (
    <ScrollView style={styles.main_view}>
      <View style={styles.sub_view}>
        <Text text={I18n.t('look_text')} />
        <Text
          style={styles.text}
          text={data?.hotelName ? I18n.t('hotel_name') : 'Car Name'}
        />
        <InputField
          style={styles.input}
          editable={false}
          value={data?.hotelName}
        />
        <Text
          style={styles.text}
          text={data?.hotelRatings ? I18n.t('hotel_ratings') : 'Car Name'}
        />
        <InputField
          style={styles.input}
          editable={false}
          value={data?.hotelRatings + ' ' + I18n.t('star_text')}
        />
        <Text style={styles.text} text={I18n.t('user_name')} />
        <InputField
          style={styles.input}
          editable={false}
          value={user?.user_name}
        />
        <Text style={styles.text} text={I18n.t('room_text')} />
        <DropDowwn
          onSelectValue={value => setSelectedType(value)}
          style={{marginTop: SIZES.padding2}}
          type={I18n.t('room_type')}
          options={options}
        />
        <Text style={styles.text} text={I18n.t('price_text')} />
        <InputField
          placeholder={I18n.t('price_text')}
          value={selectedType ? selectedType.value : null}
          style={styles.input}
          editable={false}
        />
        <Text style={styles.text} text={I18n.t('stay_days')} />
        <InputField
          keyboardType="numeric"
          placeholder={I18n.t('stay_days')}
          onChangeText={text => {
            selectedType?.value && setDays(text);
            let value = parseInt(text) * parseInt(selectedType?.value);
            setAmount(value);
          }}
          style={styles.input}
          value={days ? days : null}
        />
        <Text style={styles.text} text={I18n.t('amount_text')} />
        <InputField
          placeholder={I18n.t('amount_text')}
          value={amount ? amount.toString() : null}
          style={styles.input}
          editable={false}
        />
        <Text style={styles.text} text={I18n.t('date_text')} />
        <TouchableOpacity onPress={() => setShow(true)}>
          <InputField
            placeholder={I18n.t('select_date')}
            value={moment(date).format('YYYY-MM-DD')}
            style={styles.input}
            editable={false}
          />
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            androidMode={'default'}
            defaultDate={new Date()}
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        {loading ? (
          <Loader />
        ) : (
          <Button
            onPress={() => BookHotel()}
            buttonTitle={I18n.t('book_hotel')}
          />
        )}
      </View>
      <View style={{height: SIZES.padding * 2}} />
    </ScrollView>
  );
};
export default Booking;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    padding: SIZES.padding,
    backgroundColor: COLORS.light_background,
  },
  sub_view: {
    backgroundColor: COLORS.white_color,
    padding: SIZES.padding2,
    borderRadius: SIZES.padding2,
  },
  text: {
    textAlign: 'left',
    ...FONTS.Bold12,
    marginTop: SIZES.padding2,
  },
  input: {
    height: SIZES.padding * 2,
    borderRadius: SIZES.padding2,
  },
});
