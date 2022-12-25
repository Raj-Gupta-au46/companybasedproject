const mongoose= require("mongoose")
const moment= require("moment")
//=========================================VALIDATIONS=====================================================//
const isValidObjectId = (objectId) => {
    return mongoose.Types.ObjectId.isValid(objectId)
}

const isValidEmail = function(value){
      let regex=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
      return  regex.test(value)
}

const isValidPhone = (Mobile) => {
    return /^[6-9]\d{9}$/.test(Mobile)
  }


const isValidString = (String) => {
    const regexName=/^[a-zA-Z ]+$/;
    return regexName.test(String)
  }

  const isValidDate = function (date) {
    if (typeof date != "string") return false
    return moment(date, 'YYYY-MM-DD', true).isValid()
  }
  const isValidCustomerId = (String) => {
    const regexName=/^[a-zA-Z 0-9]+$/;
    return regexName.test(String)
  }

  let isValidCardNumber= function(value){
    const regex=/(?:\d[ -]*?){13,16}/
    return regex.test(value)
  }
  module.exports={isValidObjectId,isValidPhone,isValidDate,isValidEmail,isValidString,isValidCustomerId,isValidCardNumber}