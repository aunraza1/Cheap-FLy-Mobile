import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SIZES } from '../../constants';
import I18n from '../../i18n';
import { SingleRequestView, Tabs } from './components';
import { approveduserBookings } from '../../functions';
import { AnimatedLoader, NoDataFound } from '../../components';
import { SingleHotelView } from '../Hotels/components';
import { SingleCarView } from '../Cars/components';
const Requests = () => {
  const [accepted, setAccepted] = useState(true);
  const [pending, setPending] = useState(false);
  const [approve, setApprove] = useState([]);
  const [unApprove, setUnApprove] = useState([])
  const [loading, setLoading] = useState(false)
  const tabArray = [I18n.t('accepted_text'), I18n.t('pending_text')];

  const getRequest = value => {
    if (value === 'accepted') {
      setAccepted(true);
      setPending(false);
    } else {
      setPending(true);
      setAccepted(false);
    }
  };
  const getApproved = async () => {
    setLoading(true)
    await approveduserBookings((approve, unApprove) => {
      setApprove(approve);
      setUnApprove(unApprove);
    });
    setLoading(false)
  }
  useEffect(() => {
    getApproved()
  }, [])
  return (
    <View style={styles.main_view}>
      {
        loading ? (<AnimatedLoader loadingText='Loading Requests' />) : (
          <>
            <Tabs
              accepted={accepted}
              pending={pending}
              onPress={data => getRequest(data)}
              tabArray={tabArray}
            />
            <FlatList
              data={accepted ? approve : unApprove}
              keyExtractor={item => item?.key}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <>
                  {console.log(item)}
                  {item?.hotelName ? (<SingleHotelView
                    name={item?.hotelName}
                    location={item?.hotelLocation}
                    price={item?.amountPayable}
                    ratings={item?.hotelRatings}
                    image={'https://i.pinimg.com/originals/26/d0/9a/26d09a278e221e55e31e13dddab2e8df.png'}
                    onPress={() => { }
                    }
                    loading={loading}
                    onPressBookMark={() => {

                    }}
                  />) : item?.carName ? (<SingleCarView
                    name={item?.carName}
                    segment={item?.carSegment}
                    location={item?.location}
                    price={item?.amountPayable}
                    registration={item?.registrationNo}
                    image={'https://static.vecteezy.com/system/resources/thumbnails/000/623/239/small/auto_car-16.jpg'}
                    onPress={() => { }
                    }
                    loading={loading}
                    onPressBookMark={() => {

                    }}
                  />) : (<NoDataFound />)}
                </>
              )}
            />
          </>
        )
      }
    </View>
  );
};
export default Requests;
const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2,
    marginTop: SIZES.padding2,
    backgroundColor: '#FAF9F6',
  },
});
