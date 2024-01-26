import axios from "axios";
import { getLeaveFailure, getLeaveStart, getLeaveSuccess } from "../../../Redux/features/leaveGetReducer";

export const sendLeave = async (datas, callback) => {
  let message = null;
  let badResponse = null;
  try {
    const response = await axios.post(
      `https://hrappbackendwebapi20240119093404.azurewebsites.net/api/Leave/CreateLeave`,
      datas
    );
    message = response.data;
  } catch (error) {
    badResponse = error.message;
  }

  callback(message, badResponse);
};


export const changeLeave = async (datas, id, callback) => {
    let message = null;
    let badResponse = null;
  
    try {
      const response = await axios.put(
        `https://hrappbackendwebapi20240119093404.azurewebsites.net/api/Leave/UpdateLeave?leaveId=${id}`,
        datas
      );
      message = response.data;
    } catch (error) {
      badResponse = error.message;
    }
  
    callback(message, badResponse);
  };
  
  export const deleteLeave = async (id, callback) => {
    let message = null;
    let badResponse = null;
    try {
      const response = await axios.delete(
        `https://hrappbackendwebapi20240119093404.azurewebsites.net/api/Leave/DeleteLeave?leaveId=${id}`
      );
      message = response.data;
    } catch (error) {
      badResponse = error.message;
    }
  
    callback(message, badResponse);
  };
  
  export const getLeave = () => async (dispatch) => {
    dispatch(getLeaveStart());
    try {
      const { data } = await axios.get(
        `https://hrappbackendwebapi20240119093404.azurewebsites.net/api/Leave/GetLeaves`
      );
      dispatch(getLeaveSuccess(data));
    } catch (error) {
      dispatch(getLeaveFailure(error.message));
    }
  };