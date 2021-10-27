import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES, icons, FONTS } from '../constants';

const PriceAlert = ({ customStyleComponent }) => {
    return (<TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 4.5,
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.padding,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        ...customStyleComponent,
        ...styles.shadow,
    }}>
        <Image source={icons.notification_color} style={{
            height: 30,
            width: 30,
        }} />

        <View style={{
            flex: 1,
            marginLeft: SIZES.radius,
        }}>
            <Text style={{
                ...FONTS.h3
            }}>Set price alert</Text>
            <Text style={{ ...FONTS.body4 }}>Description</Text>
        </View>
        <Image source={icons.right_arrow} style={{
            width: 25,
            height: 25,
            color: COLORS.lightGray,
        }} />
    </TouchableOpacity>)
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    }
})

export default PriceAlert;