import { Mask } from "react-native-mask-input";

export const timeMask: Mask = (text) => {
  const cleanTime = text?.replace(/\D+/g, '') ?? '';
  
  const hourFirstDigit = /[012]/; // only 0,1 or 2
  let hourSecondDigit = /\d/; // any number
  
  if (cleanTime.charAt(0) === "2") {
    hourSecondDigit = /[0123]/; // only 0,1,2 or 3
  }
  
  const minuteFirstDigit = /[012345]/; // only 0,1,2,3,4 or 5
  const minuteSecondDigit = /\d/; // any number

  return [hourFirstDigit, hourSecondDigit , ":", minuteFirstDigit , minuteSecondDigit];
};