import axios from 'axios';

const api = axios.create({
    baseURL : 'https://eastasia.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Faces&details=Celebrities&language=en',
    headers : {
        'Ocp-Apim-Subscription-Key' : '117d69a261084eee82905cc2933c490a'
    }
});

import RNFetchBlob from 'react-native-fetch-blob'
export default {
    uploadImage(endpoint ,photo) {
        const formData = new FormData();
        formData.append('imageData', {
            uri: photo.uri,
            type: 'image/jpeg',
          });
        return api.post("",formData)
          .then((response)=>{
              return response
          })
    }

}