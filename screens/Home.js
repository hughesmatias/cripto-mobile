import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Image,
    ImageBackground,
} from 'react-native';

import PriceAlert from '../components/PriceAlert';

import { dummyData, COLORS, SIZES, FONTS, icons, images } from '../constants';

const NavbarSize = 130;

const Home = ({ navigation }) => {

    const [trending, setTrending] = useState(dummyData.trendingCurrencies);

    const renderHeader = () => {
        const renderItem = ({ item, index }) => (
            <TouchableOpacity style={{
                width: 180,
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                marginLeft: index == 0 ? SIZES.padding : 0,
                marginRight: SIZES.radius,
                borderRadius: 10,
                backgroundColor: COLORS.white,
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View>
                        <Image
                            source={item.image}
                            resizeMode="cover" style={{
                            marginTop: 5,
                            width: 25,
                            height: 25,
                        }} />
                    </View>
                    <View style={{
                        marginLeft: SIZES.base,
                    }}>
                        <Text style={{ ...FONTS.h2 }}>{item.currency}</Text>
                        <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.code}</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: SIZES.radius,
                }}>
                    <Text style={{ ...FONTS.h2 }}>${item.amount}</Text>
                    <Text style={{ color: item.type == 'I' ? COLORS.green : COLORS.red, ...FONTS.h3 }}>{item.changes}</Text>
                </View>
            </TouchableOpacity>
        );

        return <View style={{
            width: '100%',
            height: 290,
            ...styles.shadow,
        }}>
            <ImageBackground source={images.banner} resizeMode="cover" style={{
                flex: 1,
                alignItems: 'center',
            }}>
                {/** HEADER BAR */}
                <View style={{
                    marginTop: SIZES.padding * 2,
                    width: '100%',
                    alignItems: 'flex-end',
                    paddingHorizontal: SIZES.padding,
                }}>
                    <TouchableOpacity
                        style={{
                            height: 35,
                            width: 35,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={() => console.log(' notification ')}
                    >
                        <Image
                            source={icons.notification_white}
                            resizeMode="contain"
                            style={{
                                flex: 1,
                            }}
                        />
                    </TouchableOpacity>
                </View>

                {/** BALANCE */}

                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.h3,

                    }}>Your Portfolio balance</Text>
                    <Text style={{
                      color: COLORS.white,
                      marginTop: SIZES.base,
                      ...FONTS.h1,  
                    }}>${dummyData.portfolio.balance}</Text>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.body5,
                    }}>{dummyData.portfolio.changes} Last 24 hours</Text>
                </View>

                {/** TREND */}
                <View style={{
                    position: 'absolute',
                    bottom: '-30%'
                }}>
                    <Text style={{
                        marginLeft: SIZES.padding,
                        color: COLORS.white,
                        ...FONTS.h2,
                    }}>Trending</Text>
                    <FlatList
                        contentContainerStyle={{
                            marginTop: SIZES.base,
                        }}
                        data={trending}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ImageBackground>
        </View>
    }

    const renderAlert = () => (
        <PriceAlert customStyleComponent={{
            backgroundColor: 'white',
        }} />
    );

    return (
        <ScrollView>
            <View style={{ flex: 1, paddingBottom: NavbarSize }}>
                {renderHeader()}
                {renderAlert()}
            </View>
        </ScrollView>
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

export default Home;