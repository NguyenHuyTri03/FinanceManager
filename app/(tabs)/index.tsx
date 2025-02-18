import { Image, StyleSheet, Platform, SafeAreaView, View, Text } from 'react-native';
// import { serverCon } from '../../components/Backend/serverCon';

export default function HomeScreen() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ color: '#f2f2f2' }}>Home</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#1e1e1e',
  }
});
