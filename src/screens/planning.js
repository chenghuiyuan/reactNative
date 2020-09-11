import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
import { styles } from '../components/styles'

type Props = {};  
export default class Planning extends Component<Props> {  
  render() {  
    return (  
      <View>  
        <Text style={styles.welcome}>Planning</Text>  
      </View>  
    );  
  }  
}  
