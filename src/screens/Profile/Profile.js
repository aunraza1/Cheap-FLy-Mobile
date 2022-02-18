import React, { useEffect, useState } from 'react';
import { NoDataFound, AnimatedLoader } from '../../components';
import { getUserDetails } from '../../functions';
import {
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';
import { COLORS, FONTS, images, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';

export const Profile = () => {
    const navigation = useNavigation();
    const [data, setData] = useState();
    const getData = async () => {
        await getUserDetails((data) => {
            setData(data)
        })
    }
    useEffect(() => {
        getData()
    }, [])

    return (<>
        {data?.uid ? (<View style={styles.container}>
            {console.log(data)}
            <Image style={styles.img} source={images.PI} />
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Name: {data?.name}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Email: {data?.email}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Password: {data?.password}</Text>
            </View>
            <View style={styles.button}>
                <Button buttonTitle='Log Out' style={{
                    backgroundColor: COLORS.maroon_color,
                    borderRadius: SIZES.padding2,
                }} onPress={() => navigation.navigate('Signup')} />
            </View>

        </View>) : (<AnimatedLoader />)}
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: SIZES.padding2 * 1.2,
    },
    textContainer: {
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
        padding: 5,
        marginBottom: 20
    },
    textStyle: {
        color: 'black',
        fontSize: 18,
        fontWeight: '800',
    },
    img: {
        height: 150,
        width: '40%',
        alignSelf: 'center',
    },
    subCont: {
        marginTop: SIZES.padding,
    },
    dont_account_cont: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: SIZES.padding2,
    },
    button: {
        paddingLeft: 40,
        paddingRight: 40
    },
});