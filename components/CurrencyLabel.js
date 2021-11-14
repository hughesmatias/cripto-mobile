import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import { SIZES, icons, COLORS, FONTS } from '../constants';

const CurrencyLabel = ({ icon, currency, code }) => {
    return (
        <View style={{
            flexDirection: 'row',
        }}>
            <Image source={icon} style={{
                height: 25,
                width: 25,
                marginTop: 5,
            }} />
            <View style={{
                marginTop: SIZES.base,
            }}>
                <Text>{currency}</Text>
                <Text>{code}</Text>
            </View>
        </View>
    );
};

export default CurrencyLabel;
