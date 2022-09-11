const express = require("express")
const { reset } = require("nodemon")
const router = express.Router()
const Contact = require("../models/contact")
const data_s1 = [
    {
        id :"1" ,
        icon : "fa-solid fa-shield-halved",
        title : "Architecture et interconnexion des réseaux",
        additional : {
            module_1 : "Architecture OSI/TCP-IP",
            module_2 : "Interconnexion des réseaux"
        }
    },
    {
        id :"2",
        icon : "fa-solid fa-shield-halved",
        title : "Traitement du signal & Modulation",
        additional : {
            module_1 : "Traitement du signal",
            module_2 : "Modulations analogiques"
        }
    },{
        id : "3",
        icon : "fa-solid fa-shield-halved",
        title : "Soft embarqué",
        additional : {
            module_1 : "Architecture OSI/TCP-IP",
            module_2 : "Interconnexion des réseaux"
        }
    }
    ,{
        id : "4",
        icon : "fa-solid fa-shield-halved",
        title : "Administration réseaux",
        additional : {
            module_1 : "Architecture OSI/TCP-IP",
            module_2 : "Interconnexion des réseaux"
        }
    }
    ,{
        id : "5",
        icon : "fa-solid fa-shield-halved",
        title : "Architecture des ordinateurs / Electronique numérique",
        additional : {
            module_1 : "Architecture OSI/TCP-IP",
            module_2 : "Interconnexion des réseaux"
        }
    },{
        id : "6",
        icon : "fa-solid fa-shield-halved",
        title : "Economie du marché et gestion budgétaire",
        additional : {
            module_1 : "Architecture OSI/TCP-IP",
            module_2 : "Interconnexion des réseaux"
        }
    }
]
const data_s2 = [
    {
        id :"1" ,
        icon : "fa-solid fa-shield-halved",
        title : "...",
    },
    {
        id : "2",
        icon : "fa-solid fa-shield-halved",
        title : "...",
    },{
        id : "3",
        icon : "fa-solid fa-shield-halved",
        title : "...",
    }
    ,{
        id : "4",
        icon : "fa-solid fa-shield-halved",
        title : "...",
    }
    ,{
        id : "5",
        icon : "fa-solid fa-shield-halved",
        title : "...",
    },{
        id : "6",
        icon : "fa-solid fa-shield-halved",
        title : "...",
    }
]



router.get("/" , (req,res) => {
    res.render("home.ejs" , {items : data_s1 , items_2 : data_s2})
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



// router.get("/courses/:id" , (req,res) => {
//     id = req.params.id 
    
//           data_s1.forEach((data) => {
//            if (id === data.id) {
//              res.render("courses.ejs" , {
//                 content :  data.title,
//                 additional : data.additional.module_1
//              })
//             }
//         })
        
   
// })


module.exports = router