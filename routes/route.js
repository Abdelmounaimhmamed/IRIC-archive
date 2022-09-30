const express = require("express")
const router = express.Router()
const Contact = require("../models/contact")
const data_s1 = [
    {
        id :"1" ,
        icon : "fa-solid fa-network-wired",
        title : "Architecture et interconnexion des réseaux",
        module_1 : {
            title : "00-introduction generale au reseau",
            link : "https://drive.google.com/file/d/1eB-wcPtya9zpeudstR-swbsern9IlBro/view?usp=sharing"
        },
        module_2 : {
            title : "01-modeles de references -OSI-TCPIP",
            link : "https://drive.google.com/file/d/1oBk3gWT3v9PKhgcnLM0SsX3Rrj1hT99t/view?usp=sharing"
        },
        module_3 : {
            title : "02-Equipement d'interconnexion",
            link : "https://drive.google.com/file/d/11iXX8SJIVUfSDTeFZOSxmo-3_ghZy_yE/view?usp=sharing"
        }, module_4 : {
            title : "03-adressage",
            link : "https://drive.google.com/file/d/1OPSL3GltepbRd0PKNZHKxfUoYY9eVd5j/view?usp=sharing"
        }, module_5 : {
            title : "Routage-vecteur-distance",
            link : "https://drive.google.com/file/d/1iUrTAqeu8vYuxNWSj2g0XL5U04tmswZT/view?usp=sharing"
        }, module_6 : {
            title : "Protocole RIP",
            link : "https://drive.google.com/file/d/1SBxD0IS6I69LrsFosnodqEy1nyRRAQXt/view?usp=sharing"
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },
    {
        id :"2",
        icon : "fa-solid fa-satellite-dish",
        title : "Traitement du signal & Modulation",
        module_1 : {
            title : "Les differents mode de modulation",
            link : "https://drive.google.com/file/d/1kXHp5vrLoLCCx5u-OObvtKeZwKHKaPY8/view?usp=sharing"
        },
        module_2 : {
            title : "chap-2 modulation d'amplitude ",
            link : "https://drive.google.com/file/d/192VHi6Dl_oVuAYSxWqYGgHfUyMQq_Weg/view?usp=sharing"
        },
        module_3 : {
            title : "chap transforme de  laplace",
            link : "https://drive.google.com/file/d/1quKo9qXCgyuNZ6EZM9Od4iomag7c_oyC/view?usp=sharing"
        }, module_4 : {
            title : "chap - Echantillonnage et quantification",
            link : "https://drive.google.com/file/d/1lSlCfRXL3i8IxdWoyS2VQa9OcUaeKVSe/view?usp=sharing"
        }, module_5 : {
            title : "chap - filtres analogiques",
            link : "https://drive.google.com/file/d/1fHSlPZ5ZAia94TDvIQA7K-hHX7qsN3Ex/view?usp=sharing"
        }, module_6 : {
            title : "TD-1 modulation ",
            link : "https://drive.google.com/file/d/1Mc6JxlVV-3t90Hylt24la0B3y4-uXdMh/view?usp=sharing"
        }, module_7 : {
            title : "TD1_IRIC_GE.pdf",
            link : "https://drive.google.com/file/d/1gy4JDAFWyNBpY7pLYCfht_gj1xDBKIu9/view?usp=sharing"
        }, module_8 : {
            title : "TD2 : Analyse de Fourier, transformée de Laplace",
            link : "https://drive.google.com/file/d/1kOpq8zB47Klqq93TRQ1TFRV-RgT-8ZLp/view?usp=sharing"
        }, module_9 : {
            title : "TD2-correction",
            link : "https://drive.google.com/file/d/1t0pYJu5a96MsjjGnrRw79wOti0iFZaAV/view?usp=sharing"
        }, module_10 : {
            title : "TD3 : Modulation de fréquence",
            link : "https://drive.google.com/file/d/198JxmlXw13etOE3sPajs4Jo_fNPgwnCN/view?usp=sharing"
        }, module_11 : {
            title : "TD3 : Modulation de fréquence correction",
            link : "https://drive.google.com/file/d/1FiEX0y4VNAjSpctKZHNRHMM9PG2y9Syy/view?usp=sharing"
        },module_12 : {
            title : "TP1 modulation.pdf",
            link : "https://drive.google.com/file/d/1xwiaNRfD5kj0dVh-ctKIDeDMUHl2Ni4W/view?usp=sharing"
        },module_13 : {
            title : "TP2 IRIC1 GE1.pdf",
            link : "https://drive.google.com/file/d/1M9r5aopkTTI-TuWCzfWbDwqHDV8iy1Z0/view?usp=sharing"
        },module_14 : {
            title : "Corrigé TD2 modulation",
            link : "https://drive.google.com/file/d/1LVEa7Rr25hiVt96czpGA3PI9FyWgiKEu/view?usp=sharing"
        },module_15 : {
            title : "Correction TD1 modulation",
            link : "https://drive.google.com/file/d/1PqT4rfNL7s3LPnqjqYwd13DRkwg_-s98/view?usp=sharing"
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id : "3",
        icon : "fa-brands fa-uncharted",
        title : "Soft embarqué(c++)",
      
        module_9 : {
            title : "Langage C++ / TD N°1",
            link : "https://drive.google.com/file/d/1t91Jb6FfJUAs-MfAGOlSh_WSDYRlgF69/view?usp=sharing"
        },
        module_10 : {
            title : "Langage C++ / TD N°2",
            link : "https://drive.google.com/file/d/1oDvb3_8V0cod-6xmMRqHV1isA4O0uoT8/view?usp=sharing"
        },
        module_11 : {
            title : "Langage C++ / TD N°4",
            link : "https://drive.google.com/file/d/1S6i_34Vqiwa3uTFuBw1eDPAVotoUoXdA/view?usp=sharing"
        }, module_1 : {
            title : "C___POO___course_1.pdf",
            link : "https://drive.google.com/file/d/1bZW3C8ZLv6CEKguqjG7BWSY3DaI8Bn23/view?usp=sharing"
        }, module_2 : {
            title : "C___POO___course_2.pdf",
            link : "https://drive.google.com/file/d/1TuKmvJxB_IBgl76ZUULwhuz2eDGsD2Vw/view?usp=sharing"
        }, module_3 : {
            title : "CoursPOO_cours_4.pdf",
            link : "https://drive.google.com/file/d/1tXlARE7Yum1zaIqRRdc4QKxTxGYoS64P/view?usp=sharing"
        }, module_4 : {
            title : "CoursPOO_course_5.pdf",
            link : "https://drive.google.com/file/d/1AUxAlCJ3xdGAgHJMp4d4nCPoVXnDpprB/view?usp=sharing"
        }, module_5 : {
            title : "CoursPOO_course_6.pdf",
            link : "https://drive.google.com/file/d/1h3JnLfVUPPwTSZuoXOKHOEgGm93NdEHw/view?usp=sharing"
        }, module_6 : {
            title : "CoursPOO_course_7.pdf",
            link : "https://drive.google.com/file/d/1dE01HTxSjk8u_8JcdSkNIkvM7WOyIC2m/view?usp=sharing"
        }, module_7 : {
            title : "CoursPOO_course_8.pdf",
            link : "https://drive.google.com/file/d/167Kgx_ValFM78tilzeIRRGWNGXsivSXA/view?usp=sharing"
        }, module_8 : {
            title : "Cpp_cours_10.pdf",
            link : "https://drive.google.com/file/d/1znsM2f394w5vccUjsf99e18VSFKeHv8n/view?usp=sharing"
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    }
    ,{
        id : "4",
        icon : "fa-brands fa-linux",
        title : "Administration réseaux",
        
        module_1 : {
            title : "chap-1 : introduction a l'administration reseau",
            link : "https://docs.google.com/presentation/d/1HMLZ8W-GkjmZeLK3GICVlmZexNa0ppDG/edit#slide=id.p1"
        },
        module_2 : {
            title : "chap-2 : intialisation a Unix/linux",
            link : "https://docs.google.com/presentation/d/1rx6_HDmdzg7mhjox5iZ_7-2EIh2VZdLJ/edit#slide=id.p1"
        },
        module_3 : {
            title : "chap-3 : commandes avancées",
            link : "https://docs.google.com/presentation/d/1Bfn69EgNhg5V_uragYNy_llDGzYukvp5/edit#slide=id.p1"
        }, module_4 : {
            title : "chap-4 : Programmation shell",
            link : "https://docs.google.com/presentation/d/1liaMA3lG0NYa184AoYDy3ZenZZ7oiXmO/edit#slide=id.p1"
        }, module_5 : {
            title : "TP1_Installation de Linux sur un ordinateur virtu…",
            link : "https://drive.google.com/file/d/1eN2RPoZI99xAhT5Y2Iu_AChDKg5CNQsl/view?usp=sharing"
        }, module_6 : {
            title : "TP2_Utilisation de la ligne de commande Linux.pdf",
            link : "https://drive.google.com/file/d/1WfFPyy0mVdtytN8m5fXyGlSq2HTnC7vu/view?usp=sharing"
        }, module_7 : {
            title : "TP3_commandes avancées.pdf",
            link : "https://drive.google.com/file/d/13Kn-oImLBR2w-hO1YO_Tb0OmZ0cGIxZJ/view?usp=sharing"
        }, module_8 : {
            title : "TP4_programmation_shell_Optionnel.pdf",
            link : "https://drive.google.com/file/d/1njjDbxazUZlXupZ2wx_1COM1qbq0sNVr/view?usp=sharing"
        }, module_9 : {
            title : "compte-rendu TP1 administration réeseaux.pdf",
            link : "https://drive.google.com/file/d/1Pux9td_bYhK6abWaEQOCKBTy1S5HAGUo/view?usp=sharing"
        }, module_10 : {
            title : "COMPTE RENDU administration reseaux-converti TP2.pdf",
            link : "https://drive.google.com/file/d/13WsS2MLf4gBb7O55JA5qBO4EJ_Yj_OIM/view?usp=sharing"
        }, module_11 : {
            title : "Compte rendu du TP3.pdf",
            link : "https://drive.google.com/file/d/1DR1Illx-yWPCMlPHnrNQSrx05GqlpLXk/view?usp=sharing"
        },module_12 : {
            title : "Partie-2 : administration reseau : chap:1 gestion des utilisateurs et droits",
            link : "https://docs.google.com/presentation/d/1ZC9cPf86DWkZmYecvEO9dZpuyacaQ2-V/edit#slide=id.p1"
        },module_13 : {
            title : "TP1_gestion des utilisateurs.pdf",
            link : "https://drive.google.com/file/d/1Av4DiJ3VdffCv0dFitriLgfW7-DoQuGU/view?usp=sharing"
        },module_14 : {
            title : "TP2 : gestion de droits de fichiers ",
            link : "https://docs.google.com/document/d/1117KL3FjTvDLCx8n47Vnb70FpNHWvOuk/edit"
        },module_15 : {
            title : "Projets_IRIC_ENSAK.docx",
            link : "https://docs.google.com/document/d/11-e4dCSPvKX-Xc66g94vekcO5MnaT0y_/edit"
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    }
    ,{
        id : "5",
        icon : "fa-solid fa-bolt",
        title : "Architecture des ordinateurs / Electronique numérique",
      
        module_1 : {
            title :"Chapitre 1 Electronum.pdf",
            link : "https://drive.google.com/file/d/10RzHsLivucdRUzXrzyvnPK2z2mzW5xR1/view"
        },
        module_2 : {
            title : "Electronique numerique logique combinatoire",
            link : "https://drive.google.com/file/d/17Uo0aX-EVkSbR98_A3rukgJJPhZgC6de/view?usp=sharing"
        },
        module_3 : {
            title : "Electronique numerique les compteurs",
            link : "https://drive.google.com/file/d/17Uo0aX-EVkSbR98_A3rukgJJPhZgC6de/view?usp=sharing"
        }, module_4 : {
            title : "Electronique numerique logique sequentielle ",
            link : "https://drive.google.com/file/d/17Uo0aX-EVkSbR98_A3rukgJJPhZgC6de/view?usp=sharing"
        }, module_5 : {
            title : "TP1 et TP2",
            link : "https://drive.google.com/file/d/1EymXxgibwyRDpH4zq_-MOv_ef_5cCyv2/view?usp=sharing"
        }, module_6 : {
            title : "TP3 electronique numerique",
            link : "https://drive.google.com/file/d/1pv8bqVNEMKrQUGJiUvSZGacMREfwrFRV/view?usp=sharing"
        }, module_7 : {
            title : "TP6.pdf",
            link : "https://drive.google.com/file/d/19OYVrpz-u1U9X-QqF1ruP3HdppwTVcub/view?usp=sharing"
        }, module_8 : {
            title : "electronique numerique Registre à décalage (Shift Registers)",
            link : "https://drive.google.com/file/d/1CJ8tFgxh1Kz7EFKIq1CSN_cfz696bMX9/view"
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
        }
    },{
        id : "6",
        icon : "fa-solid fa-briefcase",
        title : "Websites to learn cyber security ",
        module_1 : {
            title : "Try-hack-me",
            link : "https://tryhackme.com/"
        },
        module_2 : {
            title : "www.coursera.org \n ( \n  email : prenom.nom@usms.ac.ma \\ password :create your own password )",
            link : "https://www.coursera.org/"
        },
        module_3 : {
            title : "3wschool",
            link : "https://www.w3schools.com/cybersecurity/index.php"
        }, module_4 : {
            title : "Maharatech(for those who want to learn in arabic)",
            link : "https://maharatech.gov.eg/course/index.php?categoryid=11"
        }, module_5 : {
            title : "freecoursesite.com",
            link : "https://freecoursesite.com/full-ethical-hacking-course-2/"
        }, module_6 : {
            title : "gigacourse.com",
            link : "https://gigacourse.com/zerotomastery-complete-cybersecurity-bootcamp/"
        }, module_7 : {
            title : "hackerrank",
            link : "https://www.hackerrank.com/"
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
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
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
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
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
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
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
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
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
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
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
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
        }, module_5 : {
            title : "",
            link : ""
        }, module_6 : {
            title : "",
            link : ""
        }, module_7 : {
            title : "",
            link : ""
        }, module_8 : {
            title : "",
            link : ""
        }, module_9 : {
            title : "",
            link : ""
        }, module_10 : {
            title : "",
            link : ""
        }, module_11 : {
            title : "",
            link : ""
        },module_12 : {
            title : "",
            link : ""
        },module_13 : {
            title : "",
            link : ""
        },module_14 : {
            title : "",
            link : ""
        },module_15 : {
            title : "",
            link : ""
        },module_16 : {
            title : "",
            link : ""
        },module_17 : {
            title : "",
            link : ""
        },module_18 : {
            title : "",
            link : ""
        },module_19 : {
            title : "",
            link : ""
        },module_20 : {
            title : "",
            link : ""
        },module_21 : {
            title : "",
            link : ""
        },module_22 : {
            title : "",
            link : ""
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
                 },module_5 : {
                    title : data.module_5.title,
                    link : data.module_5.link
                 }, module_6 : {
                    title : data.module_6.title,
                    link : data.module_6.link
                 }, module_7 : {
                    title : data.module_7.title,
                    link : data.module_7.link
                 }, module_8 : {
                    title : data.module_8.title,
                    link : data.module_8.link
                 }, module_9 : {
                    title : data.module_9.title,
                    link : data.module_9.link
                 }, module_10 : {
                    title : data.module_10.title,
                    link : data.module_10.link
                 }, module_11 : {
                    title : data.module_11.title,
                    link : data.module_11.link
                 }, module_12 : {
                    title : data.module_12.title,
                    link : data.module_12.link
                 }, module_13 : {
                    title : data.module_13.title,
                    link : data.module_13.link
                 }, module_14 : {
                    title : data.module_14.title,
                    link : data.module_14.link
                 }
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
                 },
                 module_5 : {
                    title : data.module_5.title,
                    link : data.module_5.link
                 }, module_6 : {
                    title : data.module_6.title,
                    link : data.module_6.link
                 }, module_7 : {
                    title : data.module_7.title,
                    link : data.module_7.link
                 }, module_8 : {
                    title : data.module_8.title,
                    link : data.module_8.link
                 }, module_9 : {
                    title : data.module_9.title,
                    link : data.module_9.link
                 }, module_10 : {
                    title : data.module_10.title,
                    link : data.module_10.link
                 }, module_11 : {
                    title : data.module_11.title,
                    link : data.module_11.link
                 }, module_12 : {
                    title : data.module_12.title,
                    link : data.module_12.link
                 }, module_13 : {
                    title : data.module_13.title,
                    link : data.module_13.link
                 }, module_14 : {
                    title : data.module_14.title,
                    link : data.module_14.link
                 }
              })
             }
         })
        
   
})


module.exports = router