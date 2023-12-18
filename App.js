import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const url = "tads4spring-production.up.railway.app/";

function Products(){
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>

      </View>
    </SafeAreaView>
  );
}

function Users(){
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.txt}>Olá mundo!</Text>
      </View>
    </SafeAreaView>
  );
}

function Telas(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Users" component={Users} 
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account-circle" size={size} color={color} />;
          },
        }}/>
      <Tab.Screen name="Products" component={Products} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Telas/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 30
  },
  box:{    
    width: '90%',
    backgroundColor: '#f6f6f6',
    height: 150,
    alignItems: 'center',
    elevation: 5,
  },
  txt:{
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10
  }
});

export default App;