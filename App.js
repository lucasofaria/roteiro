import { View, Text, StyleSheet, Platform, StatusBar, TextInput } from 'react-native';

const statusBarHeight = StatusBar.currentHeight

export default function roteiro() {


  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} translucent={true} backgroundColor="#F1F1F1" />
      <Text style={styles.heading}>Roteiro de viagem</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Cidade de destino</Text>
        <TextInput
          placeholder='Ex: Maragogi, AL'
          style={styles.input}
        />
        <Text style={styles.label}>Tempo de estadia: <Text style={styles.day}>10</Text> dias</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    paddingTop: 20 
  },
  heading:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: Platform.OS === 'android' ? statusBarHeight: 50
  },
  form:{
    backgroundColor: '#FFF',
    width: '90%',
    padding: 15,
    borderRadius: 6,
    marginTop: 16
  },
  label:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5
  },
  input:{
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 6,
    fontSize: 16,
    padding: 8,
    backgroundColor: '#f1f1f1',
    marginBottom: 10
  },
  day:{
    backgroundColor: '#f1f1f1'
  }
})