import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Platform, 
  StatusBar, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Keyboard, 
  ActivityIndicator,
  Alert 
} from 'react-native';

import Slider from '@react-native-community/slider';

const statusBarHeight = StatusBar.currentHeight

export default function roteiro() {
  const [city, setCity] = useState('');
  const [days, setDays] = useState(3);
  const [travel, setTravel] = useState('');
  const [loading, setLoading] = useState(false);

  function handleGenerate(){
    if(city === ''){
      Alert.alert("Atenção", "Preencha a cidade de destino")
      return;
    }

    setTravel('')
    setLoading(true);
    Keyboard.dismiss();

    const prompt = `Crie um roteiro para uma viagem de exatos ${days.toFixed(0)} dias na cidade de ${city}, busque por lugares turisticos, lugares mais visitados, seja preciso nos dias de estadia fornecidos e limite o roteiro apenas na cidade fornecida. Forneça apenas em tópicos com nome do local onde ir em cada dia.`
    

  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} translucent={true} backgroundColor="#F1F1F1" />
      <Text style={styles.heading}>Planeja.<Text style={{color: '#D00000', fontStyle: 'italic', fontWeight: 'bold'}}>AI</Text> </Text>

      <View style={styles.form}>
        <Text style={styles.label}>Cidade de destino</Text>
        <TextInput
          placeholder='Ex: Maragogi, AL'
          style={styles.input}
          onChangeText={(text) => setCity(text) }
          value={city}
        />

        <Text style={styles.label}>Tempo de estadia: <Text style={styles.day}> {days.toFixed(0)} </Text> dias</Text>

        <Slider
          minimumValue={1}
          maximumValue={15}
          minimumTrackTintColor="#2EC4B6"
          maximumTrackTintColor="#000000"
          value={days}
          onValueChange={(value) => setDays(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleGenerate}>
        <Text style={styles.textButton}>Gerar roteiro</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 20, marginTop: 5 }} style={styles.areaRoteiro} showsVerticalScrollIndicator={false}>
        {loading && (
          <View style={styles.content}>
            <Text style={styles.textLoading}>Carregando roteiro...</Text>
            <ActivityIndicator color='#000' size="large" />
          </View>
        )}

        {travel && (
          <View style={styles.content}>
            <Text style={styles.title}>Roteiro da sua viagem ✈</Text>
          </View>
        )}
        
      </ScrollView>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    paddingTop: Platform.OS === 'android' ? statusBarHeight: 50
  },
  form:{
    backgroundColor: '#FFF',
    width: '90%',
    padding: 10,
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
  },
  button:{
    width: '90%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D00000',
    borderRadius: 6,
    marginTop: 10
  },
  textButton:{
    fontSize: 18,
    fontWeight:'bold',
    color: '#FFFFFF'
  },
  areaRoteiro:{
    width: '90%',
    marginTop: 30,
  },
  content:{
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center'
  },
  title:{
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'
  },
  textLoading:{
    fontSize: 20,
    color: '#000',
    marginBottom: 15
  }
})