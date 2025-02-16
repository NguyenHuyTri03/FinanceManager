import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

interface NotificationScreen { }

const NotificationScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={{ color: '#f2f2f2' }}>Notification</Text>
            </View>
        </SafeAreaView>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {}
});
