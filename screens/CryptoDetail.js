import React, { useEffect, useState } from 'react';
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

import { VictoryLine, VictoryChart, VictoryAxis, VictoryScatter } from 'victory-native';
import { VictoryCustomTheme } from '../styles';

import { COLORS, FONTS, images, SIZES, } from '../constants';

import HeaderBar from '../components/HeaderBar';
import CurrencyLabel from '../components/CurrencyLabel';

const CryptoDetail = ({ navigation, route }) => {
    const [selectedCurrency, setCurrency] = useState();
    const item = route.params.currency;

    useEffect(() => {
        setCurrency(route.params.currency);
    }, []);

    const renderChart = () => (
        <View style={{
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.radius,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...styles.shadow,
        }}>
            <View style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.padding,
            }}>
                <View style={{
                    flex: 1,
                }}><CurrencyLabel
                    icon={selectedCurrency?.image}
                    currency={selectedCurrency?.currency}
                    code={selectedCurrency?.code}
                /></View>
                <View>
                    <Text style={{
                        ...FONTS.h3,
                    }}>${selectedCurrency?.amount}</Text>
                    <Text style={{
                        color: selectedCurrency?.type == 'I' ? COLORS.green : COLORS.red,
                        ...FONTS.body3, 
                    }}>{selectedCurrency?.changes}</Text>
                </View>

            </View>

            <View style={{
                marginTop: -25,
            }}>
                <VictoryChart
                    theme={VictoryCustomTheme}
                    height="220"
                    width={SIZES.width - 40}
                >
                    <VictoryLine
                        style={{
                            data: {
                                stroke: COLORS.secondary,
                            },
                            parent: {
                                border: "1px solid #ccc",
                            }
                        }}
                        data={selectedCurrency?.chartData}
                        categories={{
                            x: ['15min', '30min', '45min', '60min'],
                            y: ['15', '30', '45'],
                        }}
                    />
                    <VictoryScatter
                        data={selectedCurrency?.chartData}
                        size="7"
                        style={{
                            data: {
                                fill: COLORS.secondary,
                            }
                        }}
                    />
                    <VictoryAxis
                        style={{
                            grid: {
                                stroke: 'transparent'
                            },
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            axis: {
                                stroke: 'transparent'
                            },
                            grid: {
                                stroke: 'grey'
                            },
                        }}
                    />
                </VictoryChart>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightGray1,
        }}>
            <HeaderBar right={true} />
            <ScrollView>
                <View style={{
                    flex: 1,
                    paddingBottom: SIZES.padding,
                }}>
                    {renderChart()}
                </View>
            </ScrollView>
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