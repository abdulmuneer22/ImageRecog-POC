import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Metrics} from '../../../constants'

export class Button extends Component {
  render() {
    return (
      <View style={{
        width : this.props.width || Metrics.FULL_WIDTH * 0.4,
        backgroundColor : this.props.backgroundColor || 'green',
        alignItems : 'center',
        justifyContent : 'center',
        paddingVertical : 10,
        borderRadius : 6,
        marginVertical : 5
      }}>
        <Text style={{
            color : this.props.color || 'white'
        }}> {this.props.label || 'Label'} </Text>
      </View>
    )
  }
}

export default Button