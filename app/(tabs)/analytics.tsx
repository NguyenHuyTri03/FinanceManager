import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

interface AnalyticsScreen { }

const AnalyticsScreen = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={{ color: '#f2f2f2' }}>Analytics</Text>
            </View>
        </SafeAreaView>
    );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
    container: {}
});
