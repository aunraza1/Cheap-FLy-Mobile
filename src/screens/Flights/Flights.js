import React, { useState, useEffect } from 'react';
import { fetchCity } from '../../functions';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { View, StyleSheet, TextInput, Text, ScrollView } from 'react-native';
import { IconComponent } from '../../components';
import { faArrowDown, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../components';
import DateTimePicker from '@react-native-community/datetimepicker';
import { travelClass } from '../../config';
import { checkFlight } from '../../functions';
import { COLORS, SIZES } from '../../constants';
import { AnimatedLoader } from '../../components';
import FlightAlert from './FlightAlert';
export const Flights = ({ navigation }) => {
    const [selectedItem, setSelectedItem] = useState({
        origin: '',
        destination: '',
        departureDate: new Date(),
        adult: '',
        child: '',
        class: '',
    });
    const [textTO, setTextTo] = useState([]);
    const [textFrom, setTextFrom] = useState([]);
    const [showDate, setShowDate] = useState(false)
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setSelectedItem({ ...selectedItem, departureDate: currentDate });
        setShowDate(false);
    };

    const getFlight = async () => {
        const flightVal = selectedItem;
        if (selectedItem?.origin != '' && selectedItem?.destination != '' && selectedItem?.class != '' && selectedItem?.child != '' && selectedItem?.adult != '') {
            await checkFlight(flightVal, setLoader, (data) => {
                setSelectedItem({ ...selectedItem, origin: '', destination: '', class: '', adult: '', child: '' })
                navigation.navigate('FlightModal', {
                    flightData: data,
                });
            });
        } else {
            setError(true);

            setTimeout(() => setError(false), 2000)
        }
    }

    return (
        <View style={styles.container} >
            <FlightAlert show_modal={error} modal_message='Input field Missing' modal_type='error' setError={setError} />
            {
                loader ? (<AnimatedLoader loadingText='Fetching Flights' />) : (<>
                    <Text style={styles.textStyle}>Origin:</Text>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        onChangeText={(text) => fetchCity(text, setTextTo)}
                        onSelectItem={(item) => setSelectedItem({ ...selectedItem, origin: item?.id })}
                        dataSet={textTO}
                        textInputProps={{
                            style: styles.inputStyle,
                        }}
                        ChevronIconComponent={
                            <IconComponent
                                iconName={faArrowDown}
                            />
                        }
                        ClearIconComponent={
                            <IconComponent
                                iconName={faPlusSquare}
                                iconColor={'red'}
                            />
                        }
                    />
                    <Text style={styles.textStyle}>Destination:</Text>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        onChangeText={(text) => fetchCity(text, setTextFrom)}
                        onSelectItem={(item) => setSelectedItem({ ...selectedItem, destination: item?.id })}
                        dataSet={textFrom}
                        textInputProps={{
                            style: styles.inputStyle,
                        }}
                        ChevronIconComponent={
                            <IconComponent
                                iconName={faArrowDown}
                            />
                        }
                        ClearIconComponent={
                            <IconComponent
                                iconName={faPlusSquare}
                                iconColor={'red'}
                            />
                        }
                    />
                    <Text style={styles.textStyle}>Departure Date:</Text>
                    <Button
                        buttonTitle={`${selectedItem?.departureDate.toDateString()}`}
                        onPress={() => { setShowDate(true); }} />
                    {showDate && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={selectedItem?.departureDate}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                    <Text style={styles.textStyle}>Travel Class:</Text>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        onSelectItem={(item) => setSelectedItem({ ...selectedItem, class: item?.id })}
                        dataSet={travelClass}
                        textInputProps={{
                            style: styles.inputStyle,
                        }}
                        ChevronIconComponent={
                            <IconComponent
                                iconName={faArrowDown}
                            />
                        }
                        ClearIconComponent={
                            <IconComponent
                                iconName={faPlusSquare}
                                iconColor={'red'}
                            />
                        }
                    />
                    <Text style={styles.textStyle}>Adults:</Text>
                    <TextInput
                        onChangeText={(text) => setSelectedItem({ ...selectedItem, adult: text })}
                        keyboardType='number-pad'
                        borderBottom={true}
                        style={styles.inputStyle2} />
                    <Text style={styles.textStyle}>Childs:</Text>
                    <TextInput
                        onChangeText={(text) => setSelectedItem({ ...selectedItem, child: text })}
                        keyboardType='number-pad'
                        borderBottom={true}
                        style={styles.inputStyle2}
                    />
                    <View style={styles.button}>
                        <Button buttonTitle='Check Flights' style={{
                            backgroundColor: COLORS.maroon_color,
                            borderRadius: SIZES.padding2,
                        }} onPress={() => getFlight()} />
                    </View>
                </>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 10
    },
    inputStyle: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: "white",
        color: "black",
    },
    inputStyle2: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: "white",
        color: "black",
    },
    button: {
        paddingLeft: 30,
        paddingRight: 30
    },
    textStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 3
    },

});