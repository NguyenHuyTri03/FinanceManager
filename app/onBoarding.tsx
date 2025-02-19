import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface onBoarding { }

const onBoarding = () => {
    return (
        <View style={styles.container}>
            <Text>onBoarding</Text>
        </View>
    );
};

export default onBoarding;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2'
    }
});
