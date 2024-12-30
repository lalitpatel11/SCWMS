import axios from 'axios';
import {Constant} from './Constant';

// export const BASE_URL = `https://compilesoftware.com/ess/`;
export const BASE_URL = `https://SCWms.shandilyam.com/`;
export const BASE_URL_2 = `https://SCWms.shandilyam.com/`;

//endpoint
export const login = `loginapi`;
export const resend_otp = `resendotp`;
export const login_now = `loginnowapi`;
export const getattendenceapi = `getattendenceapi`;
export const checkinapi = `checkinapi`;
export const checkoutapi = `checkoutapi`;
export const getprofileapi = `getprofileapi`;
export const getattendenceahistory = `getattendenceahistory`;
export const getactivitythismonthapi = `getactivitythismonthapi`;
export const getattendenceahistory_v2 = `getattendenceahistory_v2`;
export const getattendancelistapi = `getattendancelistapi`;
export const getearlyleaveapi = `getearlyleaveapi`;
export const getabsentapi = `getabsentapi`;
export const updateemergencycontact = `updateemergencycontact`;
export const updateprofileimg = `updateprofileimg`;
export const banner = `bannerapi`;
export const get_profile = `mgetuserprofile`;
export const getprofileapi_v2 = `getprofileapi_v2`;
export const getprofileapi_v3 = `getprofileapi_v3`;
export const getdocumentapi = `getdocumentapi`;
export const add_vehicle = `addvehicleapi`;
export const vehiclenoapi = `vehiclenoapi`;
export const searchvehicleapi = `searchvehicleapi`;
export const parkinlistapi = `parkinlistapi`;
export const parkoutlistapi = `parkoutlistapi`;
export const parkinapi = `parkinapi`;
export const parkoutapi = `parkoutapi`;
export const vehicle_type = `vehicletypeapi`;
export const get_home = `gethomeapi`;
export const scanqrapi = `scanqrapi`;
export const parking_list_by_city = `parkinglistbycityapi`;
export const todaybookinglistapi = `todaybookinglistapi`;
export const add_remove_fav = `addremovefavorite`;
export const parkingdetailapi = `parkingdetailapi`;
export const update_profile = `updateuserprofile`;
export const update_profile_image = `mupdateuserprofileimg`;
export const vehicles = `getvehicleapi`;
export const deletevehicleapi = `deletevehicleapi`;
export const privacy_policy = `front-privacy`;
export const terms_condition = `front-terms`;
export const help_support = `	front-help`;
export const topratedlistapi = `topratedlistapi`;
export const parkinglistbycityapi = `parkinglistbycityapi`;
export const searchbylocationapi = `searchbylocationapi`;
export const searchbylatlongapi = `searchbylatlongapi`;
export const parkingslotapi = `parkingslotapi`;
export const paymentdetailapi = `paymentdetailapi`;
export const bookorderapi = `bookorderapi`;
export const bookingdetailapi = `bookingdetailapi`;
export const getbookingdetailapi = `getbookingdetailapi`;
export const ongoingapi = `ongoingapi`;
export const upcomingapi = `upcomingapi`;
export const orderhistoryapi = `orderhistoryapi`;
export const cancelationvehiclelistapi = `cancelationvehiclelistapi`;
export const cancelenow = `cancelenow`;
export const feedbackapi = `feedbackapi`;
export const orderhistorydetailapi = `orderhistorydetailapi`;
export const bookingstatusapi = `bookingstatusapi`;
export const recentsearchlistapi = `recentsearchlistapi`;
export const usercoinapi = `usercoinapi`;
export const deleteaccountapi = `deleteaccountapi`;
export const getmysubscriptionapi = `getmysubscriptionapi`;
export const getsubscriptionplan = `getsubscriptionplan`;
export const subscriptionpaymentdetail = `subscriptionpaymentdetail`;
export const buysubscriptionapi = `buysubscriptionapi`;
export const newbooking = `newbooking`;
export const bookneworderapi = `bookneworderapi`;
export const upcominglistapi = 'upcominglistapi';
export const cancelelistapi = 'cancelelistapi';
export const completedlistapi = 'completedlistapi';
export const notparkedlistapi = `notparkedlistapi`;
export const userfeedbackapi = `userfeedbackapi`;
export const transactionapi = `transactionapi`;
export const transactiondetailapi = `transactiondetailapi`;
export const sendtransactionotp = `sendtransactionotp`;
export const collectamountnow = `collectamountnow`;
export const transactionorderlist = `transactionorderlist`;
export const managernotificationlist = `managernotificationlist`;
export const managerclearallnotification = `managerclearallnotification`;
export const updatecurrentaddress = `updatecurrentaddress`;
export const updateotherskills = `updateotherskills`;
export const addskillsnow = `addskillsnow`;
export const addlangnow = `addlangnow`;
export const deleteotherdetailnow = `deleteotherdetailnow`;
//function : imp function
const objToQueryString = obj => {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]),
    );
  }
  return keyValuePairs.length == 0 ? '' : '?' + keyValuePairs.join('&');
};
//function : get API
export const getAPI = async (endPoint, paramsData = {}, token = '') => {
  const url = BASE_URL + endPoint + objToQueryString(paramsData);
  console.log('GET URL', url);
  const header = {
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios
    .get(url, header)
    .then(res => {
      return {
        response: res?.data,
        msg: res?.data?.message,
        status: res.data.success == 200 ? true : false,
      };
    })
    .catch(err => {
      return {
        response: err?.response?.data,
        msg: err?.response?.data?.message,
        status: false,
      };
    });
};
//function : post API
export const postAPI = async (endPoint, data, token = '') => {
  const url = BASE_URL + endPoint;
  console.log('POST URL', url);
  console.log('POST DATA', data);
  const header = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: '*/*',
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios
    .post(url, data, header)
    .then(res => {
      return {
        response: res?.data,
        msg: res?.data?.message,
        status: res.data.success == 200 ? true : false,
      };
    })
    .catch(err => {
      return {
        response: err?.response?.data,
        msg: err?.response?.data?.message,
        status: false,
      };
    });
};
//function : post API with base url 2
export const postAPI2 = async (endPoint, data, token = '') => {
  const url = BASE_URL_2 + endPoint;
  console.log('POST URL', url);
  console.log('POST DATA', data);
  const header = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: '*/*',
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios
    .post(url, data, header)
    .then(res => {
      return {
        response: res?.data,
        msg: res?.data?.message,
        status: res.data.success == 200 ? true : false,
      };
    })
    .catch(err => {
      return {
        response: err?.response?.data,
        msg: err?.response?.data?.message,
        status: false,
      };
    });
};

//function : serch location api
export const searchLocationAPI = async SearchedLetter => {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${Constant.GoogleApiKey}&input=${SearchedLetter}`;
  return await axios
    .post(url)
    .then(response => {
      return {
        response: response.data,
        status: true,
      };
    })
    .catch(error => {
      return {
        response: error,
        status: false,
      };
    });
};

export const completeDetailAPI = async placeId => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?key=${Constant.GoogleApiKey}&placeid=${placeId}`;
  return await axios
    .post(url)
    .then(response => {
      return {
        response: response.data,
        status: true,
      };
    })
    .catch(error => {
      return {
        response: error,
        status: false,
      };
    });
};
