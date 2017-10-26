import React, { Component } from 'react'
import { Text, View ,Image, Moadl, Modal} from 'react-native'
import Button from '../../components/Button'

let picturePlaceHolder = require('../../../assets/images/pictures.png')
import Gallery from '../../components/Gallery'
export class FaceIdModule extends Component {

  constructor(){
    super();
    this.state = {
      ModalVisible : true,
      image : ''
    }
  }

  _onImageSelect = (image) => {
    this.setState({
      ModalVisible : false,
      image
    })
  }

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
            width : this.state.image ? '100%' : 100, 
            height : this.state.image ? '100%' : 100
          }}
          resizeMode = "contain"
          source = {this.state.image ? {uri : this.state.image.uri} : picturePlaceHolder}
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
          label = "Cancel"
          />
        </View>



        {
          <Modal
          visible={this.state.ModalVisible}
          transparent = {true}
          onRequestClose = {()=>{}}
          >
          <Gallery onPress ={this._onImageSelect}/>
          </Modal>
        }

      </View>
    )
  }
}

export default FaceIdModule