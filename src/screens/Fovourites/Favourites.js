import React, { useState, useEffect } from 'react';
import { getAllFavourites } from '../../functions';
import { View, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, SIZES } from '../../constants';
import { AnimatedLoader, NoDataFound } from '../../components';
import { SingleHotelView } from '../Hotels/components';
import { SingleCarView } from '../Cars/components';
export const Favourites = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [fData, SetFData] = useState([]);
    const getFavourites = () => {
        getAllFavourites((data) => {
            SetFData(data)
            setLoading(false)
        })
    }
    const [user, setUser] = useState(null);
    const getUser = async () => {
        let e = await AsyncStorage.getItem('user');
        if (e !== null) {
            setUser(JSON.parse(e));
        }
    };
    useEffect(() => {
        setLoading(true)
        getFavourites()
        getUser()
    }, [])
    return (
        <View style={styles.main_view}>
            {loading ? (
                <AnimatedLoader loadingText='Loading Favourites' />
            ) : fData?.length > 0 ? (
                <FlatList
                    data={fData}
                    keyExtractor={item => item?.key}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <>
                            {item?.hotelName ? (<SingleHotelView
                                name={item?.hotelName}
                                location={item?.hotelLocation}
                                price={item?.singlePrice}
                                ratings={item?.hotelRatings}
                                image={item?.url}
                                onPress={() =>
                                    navigation.navigate('ItemDetail', { hotel: item, user: user })
                                }
                                loading={loading}
                                onPressBookMark={() => {

                                }}
                            />) : (<SingleCarView
                                name={item?.carName}
                                segment={item?.carSegment}
                                location={item?.location}
                                price={item?.hourlyRate}
                                registration={item?.registrationNo}
                                image={item?.url}
                                onPress={() =>
                                    navigation.navigate('ItemDetail', { cars: item, user: user })
                                }
                                loading={loading}
                                onPressBookMark={() => {

                                }}
                            />)}
                        </>
                    )}
                />
            ) : (
                <NoDataFound />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        padding: SIZES.padding2,
        backgroundColor: COLORS.light_background,
    },
});