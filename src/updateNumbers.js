function updateNumbers(array, element){
    element.textContent = array.reduce((a,b)=>(a+b),0);
  }

export default updateNumbers