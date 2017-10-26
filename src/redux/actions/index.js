import API from '../../api'

export const RecongniseImage = (photo) => {
    return dispatch => {
        API.uploadImage("",photo)
            .then((response) => {
                console.log("Success")
                dispatch({
                    type : 'UPLOADED_IMAGE_SUCCESSFULLY',
                    payload : response.data
                })
            })
            .catch((e) => {
                dispatch({
                    type : 'UPLOAD_IMAGE_FAILED',
                    payload : e.response
                })  
            })
    }
}