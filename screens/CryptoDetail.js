import React, { useEffect } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Animated,
} from 'react-native';

import { COLORS, images, } from '../constants';

import HeaderBar from '../components/HeaderBar';

const CryptoDetail = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightGray1,
        }}>
            <HeaderBar right={true} />
            <View style={styles.container}>
                <Text>CryptoDetail</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Transaction")}
                >
                    <Text>Navigate to Transaction</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default CryptoDetail;