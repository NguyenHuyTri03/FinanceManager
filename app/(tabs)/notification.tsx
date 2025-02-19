import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

interface NotificationScreen { }

const NotificationScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>Notification</Text>
            </View>
            <View style={styles.bodyContainer}>

            </View>
        </SafeAreaView>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        borderBottomColor: '#3f3f3f',
        borderBottomWidth: 1
    },
    bodyContainer: {
        flex: 10,
    },

    title: {
        fontSize: 25,
        color: 'white'
    }
});
