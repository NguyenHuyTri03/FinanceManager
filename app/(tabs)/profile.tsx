import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

interface ProfileScreen { }

const ProfileScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ color: '#f2f2f2' }}>Profile</Text>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
