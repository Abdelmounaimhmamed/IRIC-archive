const express = require("express")
const router = express.Router()
const Contact = require("../models/contact")
const data_s1 = [
    {
        id :"1" ,
        icon : "fa-solid fa-network-wired",
        title : "Architecture et interconnexion des réseaux",
        additional : {
            module_1 : "Architecture OSI/TCP-IP",
            module_2 : "Interconnexion des réseaux"
        }
    },
    {
        id :"2",
        icon : "fa-solid fa-satellite-dish",
        title : "Traitement du signal & Modulation",
        additional : {
            module_1 : "Traitement du signal",
            module_2 : "Modulations analogiques"
        }
    },{
        id : "3",
        icon : "fa-brands fa-uncharted",
        title : "Soft embarqué",
        additional : {
            module_1 : "Architecture OSI/TCP-IP",
            module_2 : "Interconnexion des réseaux"
        }
    }
    ,{
        id : "4",
        icon : "fa-brands fa-linux",
        title : "Administration réseaux",
        additional : {
            module_1 : "Architecture OSI/TCP-IP",
            module_2 : "Interconnexion des réseaux"
        }
    }
    ,{
        id : "5",
        icon : "fa-solid fa-bolt",
        title : "Architecture des ordinateurs / Electronique numérique",
        additional : {
            module_1 : "Architecture OSI/TCP-IP",
            module_2 : "Interconnexion des réseaux"
        }
    },{
        id : "6",
        icon : "fa-solid fa-briefcase",
        title : "Economie du marché et gestion budgétaire",
        additional : {
            module_1 : "Architecture OSI/TCP-IP",
            module_2 : "Interconnexion des réseaux"
        }
    }
]

const data_s2 = [
    {
        id :"7" ,
        icon : "fa-solid fa-shield-halved",
        title : "Embarque",
        module_1: {
            link : "https://drive.google.com/file/d/1yeYery2dj4Hzk7gPtgPjLY56Dfwn_1ok/view?usp=sharing",
            title : "VHDL"
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }
    },
    {
        id : "8",
        icon : "fa-solid fa-shield-halved",
        title : "filtrage numerique",
        module_1 : {
            title : "",
            link : ""
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }
    },{
        id : "9",
        icon : "fa-solid fa-shield-halved",
        title : "modelisation et ingenierie des trafics",
        module_1 : {
            title : "",
            link : ""
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }
    }
    ,{
        id : "10",
        icon : "fa-solid fa-shield-halved",
        title : "securite reseau",
        module_1 : {
            title : "chap_1_introduction",
            link:"https://drive.google.com/file/d/1kx3rUr-kxHCw4XKl-IB1xFbuty09WSzI/view?usp=sharing"
        },
        module_2 : {
            title : "chap_2_sniffing Réseau",
            link : "https://docs.google.com/presentation/d/1UQxzJAB9Z4B-5JT9Pi5vI8pkSHNGTzA4/edit#slide=id.p1",
        },
        module_3 : {
            title : "securite des echanges",
            link : "https://docs.google.com/presentation/d/1dFhtpssoEyS4XNqCz86CDx_6y05Y6wrN/edit#slide=id.p1",
        },
        module_4 : {
            title : "configuration de firewall",
            link : "https://docs.google.com/presentation/d/1myGmQWHLzmWowIxjKnIbGNunQqGbXGWc/edit#slide=id.p1",
        }
    }
    ,{
        id : "11",
        icon : "fa-solid fa-shield-halved",
        title : "signaux aleatoires",
        module_1 : {
            title : "",
            link : ""
        },
        module_2 : {
            title : "",
            link : ""
        },
        module_3 : {
            title : "",
            link : ""
        }, module_4 : {
            title : "",
            link : ""
        }
    },{
        id : "12",
        icon : "fa-solid fa-shield-halved",
        title : "theorie de l'info",
        module_1 : {
            title : "theo. chap_1",
            link:"https://drive.google.com/file/d/1jPDirn2UUiRvbbyVhqX8P_b2hOxMITkr/view?usp=sharing",
        },
        module_2 : {
            title : "theo. chap_2 ",
            link : "https://drive.google.com/file/d/1qgCPqzl-0Z9JVsv62RS87W6CNf1URsnR/view?usp=sharing"
        },
        module_3 : {
            title : "TD_1",
            link : "https://drive.google.com/file/d/1q0WS9lTbBOZ3cyDkR5LOPXRVMJQDZI8_/view?usp=sharing",
        },
        module_4 : {
            title : "TD_2",
            link : "https://drive.google.com/file/d/1AuwZU2iYy7AykuJfFlTiVX8xmw1vUxng/view?usp=sharing",
        }
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



router.get("/courses/:id" , (req,res) => {
    id = req.params.id 
    
          data_s1.forEach((data) => {
           if (id === data.id) {
             res.render("courses.ejs" , {
                content :  data.title,
                additional : data.additional.module_1
             })
            }
        })
        data_s2.forEach((data) => {
            if (id === data.id) {
                console.log(data.title)
              res.render("courses.ejs" , {
                content : data.title,
                 module_1 : {
                    title : data.module_1.title,
                    link : data.module_1.link
                 },
                 module_2 : {
                    title : data.module_2.title,
                    link : data.module_2.link
                 },
                 module_3 : {
                    title : data.module_3.title,
                    link : data.module_3.link
                 },
                 module_4 : {
                    title : data.module_4.title,
                    link : data.module_4.link
                 }
              })
             }
         })
        
   
})


module.exports = router