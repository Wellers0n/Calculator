/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class Botao extends Component{

  constructor(props){
    super(props);
    this.state;

    let c = 1;
    if(this.props.c){
      c = parseInt(this.props.c);
    }

    let bg = '#E0E0E0';
    if(this.props.bg){
      bg = this.props.bg;
    }


    this.styles = StyleSheet.create({
      area:{
        flex: c,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: bg,

      },
      text: {
        fontSize: 150,
        fontWeight: 'bold'
      }
    });
  }

  render(){
    return (
      <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.texto}</Text>
      </TouchableOpacity>

    );
  }

}

//ARQUIVO PRINCIPAL
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {resultado: '0'};
    this.btn = this.btn.bind(this);
  }

  btn(b){
    let s = this.state;

    if(b == 'C'){
      s.resultado = '0';
    }else if( b == '='){
      s.resultado = eval(s.resultado);
    }else{
      if(s.resultado == '0'){
        s.resultado = b;
      }else{
        s.resultado += b;
      }
    }
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultado}>
          <Text style={styles.resultadoTexto}>{this.state.resultado}</Text>
        </View>
        <View style={styles.linha}>
          <Botao  c={'3'} texto={'C'} onPress={() => { this.btn("C") }}/>
          <Botao texto={'/'} bg={'#FD9526'} onPress={() => { this.btn("/") }}/>
        </View>
        <View style={styles.linha}>
          <Botao texto={'7'} onPress={() => { this.btn("7") }}/>
          <Botao texto={'8'} onPress={() => { this.btn("8") }}/>
          <Botao texto={'9'} onPress={() => { this.btn("9") }}/>
          <Botao texto={'*'} bg={'#FD9526'} onPress={() => { this.btn("*") }}/>
        </View>
        <View style={styles.linha}>
          <Botao texto={'4'} onPress={() => { this.btn("4") }}/>
          <Botao texto={'5'} onPress={() => { this.btn("5") }}/>
          <Botao texto={'6'} onPress={() => { this.btn("6") }}/>
          <Botao texto={'-'} bg={'#FD9526'} onPress={() => { this.btn("-") }}/>
        </View>
        <View style={styles.linha}>
          <Botao texto={'1'} onPress={() => { this.btn("1") }}/>
          <Botao texto={'2'} onPress={() => { this.btn("2") }}/>
          <Botao texto={'3'} onPress={() => { this.btn("3") }}/>
          <Botao texto={'+'} bg={'#FD9526'} onPress={() => { this.btn("+") }}/>
        </View>
        <View style={styles.linha}>
          <Botao  c={'2'} texto={'0'} onPress={() => { this.btn("0") }}/>
          <Botao texto={'.'} onPress={() => { this.btn(".") }}/>
          <Botao texto={'='} bg={'#FD9526'} onPress={() => { this.btn("=") }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#F5FCFF',
  },
  linha: {
    flex:1,
    flexDirection: 'row',
  },
  resultado:{
    height:100,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  resultadoTexto:{
    color: 'white',
    fontSize: 40,
    textAlign: 'right',
  }
});
