import axios from "axios";
import { getRequestFailure, getRequestStart, getRequestSuccess } from "../../../Redux/features/requestsGetReducer";


export const getAllRequests = () => async (dispatch) => {
    dispatch(getRequestStart());
    try {
      const { data } = await axios.get(
        `https://hrappbackendwebapi20240119093404.azurewebsites.net/api/Admin/GetAllProcess`
      );
      dispatch(getRequestSuccess(data));
    } catch (error) {
      dispatch(getRequestFailure(error.message));
    }
  };

  export const changeRequestStatus = async (data, callback)=>{
    let message = null;
    let badResponse = null;
    try{
      const response = await axios.put(`https://hrappbackendwebapi20240119093404.azurewebsites.net/api/Admin/ProcessAcceptReject`,
      data
      )
      message = response.data;
    }catch(error){
      badResponse = error.message
    }
    callback(message,badResponse);
  }