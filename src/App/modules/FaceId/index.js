import React, { Component } from 'react'
import { Text, View ,Image } from 'react-native'
import Button from '../../components/Button'

let picturePlaceHolder = require('../../../assets/images/pictures.png')
export class FaceIdModule extends Component {
  render() {
    return (
      <View style={{
        flex : 1,
        padding : 10
      }}>
        
        <View style={{
          flex : 4,
          backgroundColor : 'rgba(1,1,1,0.1)',
          borderRadius : 6,
          alignItems : 'center',
          justifyContent : 'center'
        }}>
          <Image style={{
            width : 100,
            height : 100
          }}
          source = {picturePlaceHolder}
          />
        </View>

        <View style={{
          flex : 1,
          //backgroundColor : 'purple',
          alignItems : 'center',
          justifyContent : 'center'
        }}>

          <Button
          label = "Upload"
          />

          <Button
          label = "Capture"
          />
        </View>


      </View>
    )
  }
}

export default FaceIdModule