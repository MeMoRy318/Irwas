const addZero = (number) => {
  if(number >= 10){
    return number;
  }else {
    return '0' + number;
  }
};

export default addZero;