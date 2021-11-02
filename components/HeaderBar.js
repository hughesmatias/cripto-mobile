import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES, icons, COLORS, FONTS } from '../constants';

const HeaderBar = ({ right }) => {
    const navigation = useNavigation();

    return <View style={{
        paddingHorizontal: SIZES.padding,
        flexDirection: 'row',
    }}>
        <View style={{
            flex: 1,
            alignItems: 'flex-start',
        }}>
            <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={icons.back_arrow}
                    resizeMode="contain"
                    style={{
                        height: 25,
                        width: 25,
                        tintColor: COLORS.gray,
                    }}
                />
                <Text style={{
                    marginLeft: SIZES.padding,
                    ...FONTS.h2,
                }}>Back</Text>
            </TouchableOpacity>
        </View>
        
        {right && <View style={{
            flex: 1,
            alignItems: 'flex-end',
        }}>
            <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                onPress={() => navigation.goBack()}
            >
                <Image source={icons.star} resizeMode="contain" style={{
                    width: 30,
                    height: 30,
                }} />
            </TouchableOpacity>
        </View>}
    </View>
};

export default HeaderBar;
