import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../../constants';
import { IconComponent, Text, Ratings, Loader } from '../../../components';
import {
    faClock,
    faMapMarkerAlt,
    faDollarSign,
    faCalendar
} from '@fortawesome/free-solid-svg-icons';
const SingleFlightView = ({
    name,
    image,
    location,
    price,
    onPress,
    departDate,
    arrivalDate,
    date,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.main_view}>
            <Image resizeMode="contain" style={styles.img} source={image} />
            <View style={styles.sub_view}>
                <View style={styles.row}>
                    <Text style={[styles.text, { ...FONTS.Medium16 }]} text={name} />
                </View>
                <View style={styles.row}>
                    <IconComponent
                        size={16}
                        iconColor={COLORS.primary_color}
                        iconName={faMapMarkerAlt}
                    />
                    <Text style={styles.desc} text={`${location?.origin}    <--->    ${location?.destination}`} />
                </View>
                <View style={styles.row}>
                    <IconComponent
                        iconColor={COLORS.maroon_color}
                        size={16}
                        iconName={faClock}
                    />
                    <Text style={styles.desc} text={`${departDate}      ${arrivalDate}`} />
                </View>
                <View style={styles.row}>
                    <IconComponent
                        iconColor={COLORS.maroon_color}
                        size={16}
                        iconName={faDollarSign}
                    />
                    <Text style={styles.desc} text={price} />
                </View>
                <View style={styles.row}>
                    <IconComponent
                        iconColor={COLORS.maroon_color}
                        size={16}
                        iconName={faCalendar}
                    />
                    <Text style={styles.desc} text={date} />
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default SingleFlightView;

const styles = StyleSheet.create({
    main_view: {
        flexDirection: 'row',
        borderRadius: SIZES.padding2 * 0.7,
        paddingHorizontal: SIZES.padding2,
        backgroundColor: COLORS.white_color,
        elevation: 1,
        marginTop: SIZES.padding2,
    },
    sub_view: {
        flex: 1,
        padding: SIZES.padding2,
    },
    row: {
        flexDirection: 'row',
        height: SIZES.padding,
    },
    img: {
        borderRadius: SIZES.padding,
        width: '30%',
    },
    text: {
        textAlign: 'left',
        ...FONTS.Light15,
    },
    desc: {
        textAlign: 'left',
        ...FONTS.Light15,
        marginLeft: SIZES.padding2,
    },
});