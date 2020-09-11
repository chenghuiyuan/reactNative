import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
import { styles } from '../components/styles'

type Props = {};  
export default class Home extends Component<Props> {  
  render() {  
    return (  
      <View>  
        <Text style={styles.welcome}>Home</Text>  
      </View>  
    );  
  }  
}  
