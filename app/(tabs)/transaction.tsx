import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';

// Icons
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface TransactionScreen { }



const TransactionScreen = () => {
    const icons = {
        fnb: <Ionicons name="fast-food-outline" size={38} color="#f2f2f2" style={styles.iconItem} />,
        home: <FontAwesome5 name="home" size={38} color="#f2f2f2" style={styles.iconItem} />,
        transportation: <AntDesign name="car" size={38} color="#f2f2f2" style={styles.iconItem} />,
        utilities: <MaterialCommunityIcons name="hammer-wrench" size={38} color="#f2f2f2" style={styles.iconItem} />,
        insurance: <MaterialIcons name="health-and-safety" size={38} color="#f2f2f2" style={styles.iconItem} />,
        healthcare: <Entypo name="squared-plus" size={38} color="#f2f2f2" style={styles.iconItem} />,
        savings: <FontAwesome6 name="sack-dollar" size={38} color="#f2f2f2" style={styles.iconItem} />,
        personal: <FontAwesome name="user" size={38} color="#f2f2f2" style={styles.iconItem} />,
        entertainment: <FontAwesome name="gamepad" size={38} color="#f2f2f2" style={styles.iconItem} />,
        miscellaneous: <MaterialIcons name="miscellaneous-services" size={38} color="#f2f2f2" style={styles.iconItem} />,
        income: <FontAwesome6 name="hand-holding-dollar" size={38} color="#f2f2f2" style={styles.iconItem} />
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.iconSelectContainer}>
                    {icons.fnb}
                    {icons.home}
                    {icons.transportation}
                    {icons.utilities}
                    {icons.insurance}
                    {icons.healthcare}
                    {icons.savings}
                    {icons.personal}
                    {icons.entertainment}
                    {icons.miscellaneous}
                    {icons.income}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TransactionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconSelectContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 30,
        justifyContent: 'center',
        borderWidth: 1,
    },
    iconItem: {
        padding: 15,
        borderWidth: 1,
        borderRadius: '50%',
        borderColor: 'white'
    }
});
