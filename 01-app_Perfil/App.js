import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class App extends Component{
  render() {
    let avatar = "https://avatars.githubusercontent.com/u/75401026?v=4";

    return(      
      <View style={styles.container}>
        <Text style={styles.title}>Verônica Marques</Text>

        <View style={styles.linha}></View>

        <Image 
          source={{ uri: avatar}}
          style={{width: 300, height: 300}}        
        />
        <Text style={styles.textImage}>Avatar do github</Text>
        <Text style={styles.text}>Dados Pessoais: </Text>
        <Text style={styles.info}>Nome: Verônica Bruno Marques Pinheiro</Text>
        <Text style={styles.info}>Idade: 20 anos</Text>
        <Text style={styles.info}>Cidade: Santos</Text>
        <Text style={styles.info}>Curso: Sistemas para Internet</Text>                                      
        <Text style={styles.text}>Formação: </Text>
        <Text style={styles.info}>Nível Superior Incompleto</Text>          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 15,
    paddingTop: 20,
    color: 'rgb(45, 46, 92)'
  },
  linha: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginBottom: 25
  },
  textImage: {
    fontSize: 15, 
    color: 'grey',
    marginTop: 2
  },
  text: {
    color: 'rgb(45, 46, 92)',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 8,
    fontStyle: 'normal'
  },
  info: {
    margin: 1
  },
  label: {
    color: 'rgb(45, 46, 92)',
    fontSize: 16,
    marginBottom: 5,
    fontStyle: 'normal'
  }
});

export default App;
