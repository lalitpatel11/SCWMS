import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('screen');
export const GOOGLE_API_KEY = 'AIzaSyBGY9oosi2-AXKw0yQSO4_0NjudOEPnGmM';
export const workShiftType = [
  {
    id: 1,
    name: 'Full time',
  },
  {
    id: 2,
    name: 'First half',
  },
  {
    id: 3,
    name: 'Second half',
  },
];
export const genderData = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
];
const workingHourData = [
  {
    id: 1,
    day: 'Monday',
  },
  {
    id: 2,
    day: 'Tuesday',
  },
  {
    id: 3,
    day: 'Wednesday',
  },
  {
    id: 4,
    day: 'Thursday',
  },
  {
    id: 5,
    day: 'Friday',
  },
  {
    id: 6,
    day: 'Saturday',
  },
  {
    id: 7,
    day: 'Sunday',
  },
];
const getGreeting = () => {
  const hours = new Date().getHours();
  if (hours >= 5 && hours < 12) {
    return 'Good Morning';
  } else if (hours >= 12 && hours < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good evening';
  }
};
export const Constant = {
  screenHeight: height,
  workingHourData: workingHourData,
  workShiftType: workShiftType,
  screenWidth: width,
  GoogleApiKey: GOOGLE_API_KEY,
  genderData: genderData,
  isCheckinBeforeCheckout,
  greaterThanOneHour,
  getGreeting,
};

function isCheckinBeforeCheckout(checkin, checkout) {
  const [checkinHours, checkinMinutes] = checkin.split(':').map(Number);
  const [checkoutHours, checkoutMinutes] = checkout.split(':').map(Number);

  const checkinTime = checkinHours * 60 + checkinMinutes;
  const checkoutTime = checkoutHours * 60 + checkoutMinutes;

  // If checkout time is greater than or equal to checkin time, it's on the same day
  // If checkout time is less than checkin time, it means the checkout time is on the next day
  return checkinTime < checkoutTime;
}

function greaterThanOneHour(checkin, checkout) {
  const [checkinHours, checkinMinutes] = checkin.split(':').map(Number);
  const [checkoutHours, checkoutMinutes] = checkout.split(':').map(Number);

  const checkinTime = checkinHours * 60 + checkinMinutes;
  const checkoutTime = checkoutHours * 60 + checkoutMinutes;

  // If checkout time is greater than or equal to checkin time, it's on the same day
  // If checkout time is less than checkin time, it means the checkout time is on the next day
  let timeGap = checkoutTime - checkinTime;
  if (timeGap > 30) {
    return true;
  } else {
    return false;
  }
}
