
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import axios from 'axios';

export default class MeteorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteors: {},
    };
  }

  componentDidMount() {
    this.getMeteors();
  }

  getMeteors = () => {
    axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/feed?&api_key=5bXVptYdKh2p7Y6KTxRxgbvL0df4X89FiMjsdh8B'
      )
      .then((response) => {
        this.setState({ meteors: response.data.near_earth_objects });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    //faça a condição caso a array de meteoros seja tenha comprimento igual a 0.
    if () {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Carregando...</Text>
        </View>
      );
    } 
    //caso não seja vazia
    else {
      //crie uma let (variavél) que irá receber todos os dados do objeto meteors e os retorne na tela
      
      //para cada item do objeto meteors, retorne uma função que calcula a ameaça dos meteoros em relação a terra.
      //Calcule também a pontuação de ameaça

    }
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />
        <Text>Tela de Meteoros</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
