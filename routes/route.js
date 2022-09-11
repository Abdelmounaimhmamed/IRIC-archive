const express = require("express")
const router = express.Router()
const Contact = require("../models/contact")
const data = [
    {
        id :1 ,
        icon : "fa-solid fa-shield-halved",
        title : "cyber punk",
    },
    {
        id : 2,
        icon : "fa-solid fa-shield-halved",
        title : "cyber punk",
    },{
        id : 3,
        icon : "fa-solid fa-shield-halved",
        title : "cyber punk",
    }
    ,{
        id : 4,
        icon : "fa-solid fa-shield-halved",
        title : "cyber punk",
    }
    ,{
        id : 5,
        icon : "fa-solid fa-shield-halved",
        title : "cyber punk",
    },{
        id : 6,
        icon : "fa-solid fa-shield-halved",
        title : "cyber punk",
    }
]


router.get("/" , (req,res) => {
    res.render("home.ejs" , {items : data})
})
router.get("/courses" , (req ,res) => {
    res.render( "courses.ejs")

})

router.get("/Team" , (req,res) => {
    res.render("Team.ejs")
})
router.get("/Contact" , (req,res) => {
    res.render("Contact.ejs")
})

router.post("/Contact" , async (req,res) => {
    const contact = new Contact({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        suggestion : req.body.suggestion
    })
    try {
        await contact.save()
        res.redirect("/")
    } catch (error) {
        console.log(error.message)
    }
})



module.exports = router