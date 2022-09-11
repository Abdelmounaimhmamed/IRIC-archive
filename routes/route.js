const express = require("express")
const router = express.Router()
const Contact = require("../models/contact")
const data_s1 = [
    {
        id :1 ,
        icon : "fa-solid fa-shield-halved",
        title : "Architecture et interconnexion des réseaux",
    },
    {
        id : 2,
        icon : "fa-solid fa-shield-halved",
        title : "Traitement du signal & Modulation",
    },{
        id : 3,
        icon : "fa-solid fa-shield-halved",
        title : "Soft embarqué",
    }
    ,{
        id : 4,
        icon : "fa-solid fa-shield-halved",
        title : "Administration réseaux",
    }
    ,{
        id : 5,
        icon : "fa-solid fa-shield-halved",
        title : "Architecture des ordinateurs / Electronique numérique",
    },{
        id : 6,
        icon : "fa-solid fa-shield-halved",
        title : "Economie du marché et gestion budgétaire",
    }
]
const data_s2 = [
    {
        id :1 ,
        icon : "fa-solid fa-shield-halved",
        title : "...",
    },
    {
        id : 2,
        icon : "fa-solid fa-shield-halved",
        title : "...",
    },{
        id : 3,
        icon : "fa-solid fa-shield-halved",
        title : "...",
    }
    ,{
        id : 4,
        icon : "fa-solid fa-shield-halved",
        title : "...",
    }
    ,{
        id : 5,
        icon : "fa-solid fa-shield-halved",
        title : "...",
    },{
        id : 6,
        icon : "fa-solid fa-shield-halved",
        title : "...",
    }
]



router.get("/" , (req,res) => {
    res.render("home.ejs" , {items : data_s1 , items_2 : data_s2})
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