import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

interface TransactionScreen { }

const TransactionScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ color: '#f2f2f2' }}>Transaction</Text>
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
    }
});
