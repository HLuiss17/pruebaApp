import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
// declaracion de variables
  const [estudiante1, setEstudiante1]=useState("");
  const [estudiante2, setEstudiante2]=useState("");
  const [estudiante3, setEstudiante3]=useState("");
  // funciones 
  const suma =()=>{
    let resultado =parseFloat(estudiante1) + parseFloat(estudiante2) + parseFloat(estudiante3);
    let promedio = resultado/3;
    if(estudiante1>0 && estudiante2>0 && estudiante3>0){
      Alert.alert("Promedio :"+" Nota1: "+estudiante1+"  Nota2: "+estudiante2+ "  Nota3:  "+estudiante3+" Suma "+resultado +" Promedio"+promedio );
    }
    else{
      Alert.alert("Ingrese solo numeros y valores positivos")
    }
  }

  return (
    <View style={styles.container}>
      <Text>Ingrese las notas de los Estudiantes</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setEstudiante1(value)}
        value={estudiante1}
        placeholder="Nota 1"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        onChangeText={(value) => setEstudiante2(value)}
        value={estudiante2}
        placeholder="Nota 2"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        onChangeText={(value) => setEstudiante3(value)}
        value={estudiante3}
        placeholder="Nota 3"
        keyboardType="numeric"
      />
      <Button
        color="blue"
        title="Promedio"
        onPress={suma}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    marginTop: 10,

  }

});
