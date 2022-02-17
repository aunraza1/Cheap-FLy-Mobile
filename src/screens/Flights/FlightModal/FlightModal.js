import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { AnimatedLoader, NoDataFound } from '../../../components';
import SingleFlightView from './SingleFlightView';
import I18n from '../../../i18n';
import { COLORS, FONTS, images, SIZES } from '../../../constants';
export const FlightModal = ({ route, navigation }) => {
    const { flightData } = route.params;
    console.log(flightData)
    return (<View style={styles.main_view}>
        {flightData?.length > 0 ? (
            <FlatList
                data={flightData}
                keyExtractor={item => item?.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <SingleFlightView
                        name={item?.airLine}
                        location={{ origin: item?.flyingFrom, destination: item?.flyingTo }}
                        price={item?.total}
                        image={item?.airLine === 'PAKISTAN INTERNATIONAL' ? images?.PIA : images?.OA}
                        departDate={item?.departDate}
                        arrivalDate={item?.arrivalDate}
                        date={item?.date}
                        onPress={() => { }
                        }
                    />
                )}
            />
        ) : (
            <NoDataFound />
        )}
    </View>)
}
const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        padding: SIZES.padding2,
        backgroundColor: COLORS.light_background,
    },
});