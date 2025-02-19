import * as react from 'react';
import { Image, StyleSheet, Platform, SafeAreaView, View, Text, Pressable, FlatList } from 'react-native';
import { ITransactions } from './../../../server/models/Transactions';
import * as TransactionCon from '../../components/controllers/TransactionCon'


export default function HomeScreen() {
  const [transactions, setTransactions] = react.useState<ITransactions[]>([]);

  const getTransactions = async () => {
    try {
      TransactionCon.getAll('6208HFAHCu')
        .then(data => {
          setTransactions(data)
        })
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  }

  getTransactions()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text style={{ color: 'white' }}>{item.amount}</Text>
              <Text style={{ color: 'white' }}>{item.date}</Text>
              <Text style={{ color: 'white' }}>{item.description}</Text>
              <Text style={{ color: 'white' }}>{item.category}</Text>
            </View>
          )}
        />
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
