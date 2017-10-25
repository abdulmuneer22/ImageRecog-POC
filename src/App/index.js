import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from '../redux/store'
import { PersistGate } from 'redux-persist/es/integration/react'
import EntryModule from './modules/entrymodule'
import RootNavigator from './navigation'


const {store,persistor} = configureStore()


const Loading = () => {
    return(
        <View>
            <Text>Loading</Text>
        </View>
    );
}

export class FaceIdApp extends Component {

    onBeforeLift = () => {
        console.log("loading app")
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate 
                loading={<Loading />}
                onBeforeLift={this.onBeforeLift}
                persistor={persistor}>
                    <RootNavigator />
                </PersistGate>
            </Provider>
        )
    }
}

export default FaceIdApp