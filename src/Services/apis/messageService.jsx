import axios from 'axios';

export const sendMessage = async (data, callback) => {
    let message = null;
    let badResponse = null;
    try {
        const response = await axios.post(
            `https://hrappbackendwebapi20240119093404.azurewebsites.net/api/ContactUs/sendmail`,
            data,
        );
        message = response.data;
    } catch (error) {
        badResponse = error.message;
    }
    callback(message, badResponse);
};
