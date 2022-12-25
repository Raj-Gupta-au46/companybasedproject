const express= require("express")
const router= express.Router()
const customerController= require("../controller/customerController")
const cardController= require("../controller/cardController")

//===================================CUSTOMER API's======================================//
router.post("/customer",customerController.createCustomer)

router.get("/customer",customerController.getCustomer)

router.delete("/customer/:customerId",customerController.deleteCustomer)

//==================================CARD API's==============================================//

router.post("/card",cardController.createCard)

router.get("/card",cardController.getCardDetails)


module.exports= router