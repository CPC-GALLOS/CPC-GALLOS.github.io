document.addEventListener("DOMContentLoaded", () => {
    const map = document.getElementById("mexico-map");
    const infoBox = document.getElementById("info-box");
    const tooltip = document.getElementById("tooltip");
    const tooltipXoffset = 20; // Offset for tooltip position
    const tooltipYoffset = -40;
    // JSON
    const stateData = {
        "path7339": {
            name: "Aguascalientes", clubs: [
                {
                    club: "Γα=Ω5 (CPC-GALLOS)",
                    estatus: "activo",
                    universidad: "Universidad Autónoma de Aguascalientes",
                    redes: [
                        {
                            pagina: "https://cpc-gallos.github.io/",
                            facebook: "https://www.facebook.com/people/CPC-Gallos/61563419165843/",
                            instagram: "https://www.instagram.com/cpc_gallos",
                            linkedin: "https://www.linkedin.com/company/cpc-gallos"
                        }
                    ],
                    recursos: [
                        {
                            presentaciones: "https://cpc-gallos.github.io/blog/Presentaciones/",
                            github: "https://github.com/CPC-GALLOS",
                            youtube: "https://www.youtube.com/@CPC-GALLOS"
                        }
                    ],
                    contacto: [
                        {
                            email: "mailto:cpc.gallos@gmail.com"
                        }
                    ],
                    concurso: [
                        {
                            Concurso_ciencias_exactas_UAA: "https://cpc-gallos.github.io/blog/Concursos/#concurso-de-programaci%C3%B3n-del-congreso-de-ciencias-exactas-uaa",
                        }
                    ]
                },
                {
                    club: "Colmena-Competitiva",
                    estatus: "inactivo",
                    universidad: "Universidad Autónoma de Aguascalientes",
                    redes: [
                        {
                            facebook: "https://www.facebook.com/colmenaccademy/",
                            instagram: "https://www.instagram.com/colmena.oficial",
                            tiktok: "https://www.tiktok.com/@colmena.oficial"
                        }
                    ],
                    contacto: [
                        {
                            whatsapp: "https://api.whatsapp.com/send?phone=602814"
                        }
                    ],
                },
                {
                    club: "Red de Programación Competitiva UAA",
                    universidad: "Universidad Autónoma de Aguascalientes",
                    estatus: "inactivo",
                }]
        },
        "path7285": {
            name: "Baja California", clubs: [
                {
                    club: "FIAD-UABC Coderbloom",
                    universidad: "Universidad Autónoma de Baja California",
                    estatus: "activo",
                    redes: [
                        {
                            instagram: "https://www.instagram.com/fiad.uabc/"
                        }
                    ],
                    contacto: [
                        {
                            email: "mailto:hello@coderbloom.org"
                        }
                    ],
                    concurso: [
                        {
                            coderbloom: "https://coderbloom.org/concursos-de-programacion"
                        }
                    ],
                    training_camp: [
                        {
                            exploradoras_de_codigo: "https://exploradorasdecodigo.com/"
                        }
                    ]
                },
                {
                    club: "CTRL Coders Club",
                    universidad: "Universidad Autónoma de Baja California",
                    estatus: "activo",
                    redes: [
                        {
                            facebook: "https://www.facebook.com/ctrl.coders",
                            instagram: "https://www.instagram.com/ctrl.coders/"
                        }
                    ],
                    contacto: [
                        {
                            email: "mailto:ctrl.coders.club@gmail.com",
                            discord: "https://discord.com/invite/RtCRDM7y9G"
                        }
                    ]
                }]
        },
        "path7319": { name: "Baja California Sur", clubs: null },
        "path7383": { name: "Campeche", clubs: null },
        "path7315": {
            name: "Coahuila", clubs: [
                {
                    club: "Club de Programación Competitiva ITLag",
                    universidad: "Instituto Tecnológico de la Laguna",
                    estatus: "activo",
                    redes: [
                        {
                            facebook: "https://www.facebook.com/ClubProgramacionCompetitivaITLag/",
                        }
                    ]
                }]
        },
        "path7375": { name: "Colima", clubs: null },
        "path7397": { name: "Chiapas", clubs: null },
        "path7297": {
            name: "Chihuahua", clubs: [
                {
                    club: "UACJ Algorithmic Club",
                    universidad: "Universidad Autónoma de Ciudad Juárez",
                    estatus: "activo",
                    redes: [
                        {
                            facebook: "https://www.facebook.com/p/UACJ-Algorithmic-Club-100071607840216/"
                        }
                    ],
                    contacto: [
                        {
                            email: "mailto:uacj.algorithmic.club@outlook.com"
                        }
                    ]
                },
                {
                    club: "Club De Programación FING",
                    universidad: "Universidad Autónoma de Chihuahua",
                    estatus: "activo",
                    redes: [
                        {
                            facebook: "https://www.facebook.com/clubprogramacionFING"
                        }
                    ],
                    contacto: [{
                        email: "mailto:clubprog@uach.mx",
                        whatsapp: "https://chat.whatsapp.com/CJPmbbUPbjC8fVe7wgpYhr"
                    }]
                },
                {
                    club: "Club de Programación Competitiva UACH",
                    universidad: "Universidad Autónoma de Chihuahua",
                    estatus: "inactivo",
                    recursos:
                        [{
                            github: "https://github.com/UACH-club-de-programacion"
                        }],
                    contacto: [{
                        email: "mailto:clubprog@uach.mx"
                    }]
                }
            ]
        },
        "path7369": {
            name: "Ciudad de México", clubs: [
                {
                    club: "Club de Algoritmos UAM Azcapotzalco",
                    universidad: "Universidad Autónoma Metropolitana Azcapotzalco",
                    estatus: "activo",
                    redes: [
                        {
                            facebook: "https://www.facebook.com/algoritmiauamazc"
                        }
                    ],
                    concurso: [{
                        Concurso_de_programacion_de_la_UAM_Luis_Erick_González_Moreno: "https://academicos.azc.uam.mx/franz/acm/"
                    }],
                },
                {
                    club: " Algoritmia ESFM",
                    universidad: "Instituto Politécnico Nacional",
                    estatus: "activo",
                    redes: [
                        {
                            facebook: "https://www.facebook.com/algoritmiaesfm"
                        }
                    ],
                    recursos: [{
                        github: "https://github.com/CPCESFM",
                        youtube: "https://www.youtube.com/@clubdealgoritmiaesfm3307"
                    }],
                    contacto: [
                        {
                            email: "mailto:cpcesfm@gmail.com",
                            discord: "https://discord.gg/R7urzSYyVW"
                        },
                    ],
                },
                {
                    club: "Club de Algoritmia ESCOM",
                    universidad: "Instituto Politécnico Nacional",
                    estatus: "activo",
                    redes: [
                        {
                            pagina: "https://escom-ipn.hosting.acm.org/blog/",
                            facebook: "https://www.facebook.com/algoritmiaescom/",
                            instagram: "https://www.instagram.com/algoritmiaescom/",
                            twitter_x: "https://x.com/algoritmiaESCOM"
                        }
                    ],
                    recursos: [{ youtube: "https://www.youtube.com/@algoritmiaESCOM" }],
                    contacto: [{
                        email: "mailto:edfrancom@ipn.mx",
                        telefono: "Phone:57296000 Ext. 52022"
                    }],
                    training_camp: [{
                        invierno_de_entrenamiento: "https://algoritmiaescom.eakdemy.com/invierno2025/",
                        verano_de_entrenamiento: "https://algoritmiaescom.eakdemy.com/"
                    }]
                },
                {
                    club: "CPC FI",
                    universidad: "Universidad Nacional Autónoma de México",
                    estatus: "activo",
                    redes: [
                        {
                            pagina: "www.cpcfi.unam.mx",
                            facebook: "https://www.facebook.com/profile.php?id=100078157784809",
                            instagram: "https://www.instagram.com/cpcfi.unam/"
                        }
                    ]
                },
                {
                    club: "Club de algoritmia UPIICSA",
                    universidad: "Instituto Politécnico Nacional",
                    estatus: "inactivo",
                    redes: [
                        {
                            facebook: "https://www.facebook.com/algoritmiaupiicsa"
                        }
                    ],
                },
                {
                    club: "Club de algoritmia UPIIZ-IPN",
                    universidad: "Instituto Politécnico Nacional",
                    estatus: "inactivo",
                    redes: [
                        {
                            pagina: "https://caupiiz.github.io/2701/",
                            instagram: "https://www.instagram.com/algoritmiaupiiz/",
                            twitter: "https://x.com/algoritmiaUPIIZ"
                        }
                    ],
                    recursos: [{ github: "https://github.com/caupiiz" }],
                    contacto: [{ grupo_facebook: "https://www.facebook.com/groups/clubalgoritmiaupiizipn" }],
                },
                {
                    club: "Programación Competitiva UNAM",
                    universidad: "Universidad Nacional Autónoma de México",
                    estatus: "inactivo",
                    redes: [
                        {
                            facebook: "https://www.facebook.com/pumasmasOG/",
                        }
                    ]
                },
                {
                    club: "PU++",
                    universidad: "Universidad Nacional Autónoma de México",
                    estatus: "inactivo",
                    redes: [
                        {
                            pagina: "https://sistemas.fciencias.unam.mx/~acm2014/",
                            facebook: "https://www.facebook.com/clubpumasmas"
                        }
                    ],
                    recursos: [{ google_drive: "https://drive.google.com/drive/folders/102ieishfTjxw0nq-Q0vs3E3AITbA5oYZ" }],
                    contacto: [{ email: "mailto:clubpumasmas@gmail.com", discord: "https://discord.com/invite/bAgCEr4" }],
                    concurso: [{ concurso_de_la_facultad_de_ciencias: "https://sistemas.fciencias.unam.mx/~acm2014/concursos.html" }]
                }
            ]
        },
        "path7327": { name: "Durango", clubs: null },
        "path7361": {
            name: "Guanajuato", clubs: [
                {
                    club: "CPCI",
                    universidad: "Instituto Tecnológico del Sur de Guanajuato",
                    estatus: "activo",
                    redes: [
                        {
                            facebook: "https://www.facebook.com/ClubProgramacionITSUR"
                        }
                    ],
                    concurso: [
                        {
                            Coding_Cup_ITSUR: "https://www.facebook.com/CodingCupITSUR"
                        }
                    ]
                }
            ]
        },
        "path7393": { name: "Guerrero", clubs: null },
        "path7365": {
            name: "Hidalgo", clubs: [
                {
                    club: "CPC ICBI",
                    universidad: "Universidad Autónoma del Estado de Hidalgo",
                    estatus: "activo",
                    redes: [
                        {
                            facebook: "https://www.facebook.com/ICBIUAEHOficial"
                        }
                    ],
                    contacto: [
                        {
                            whatsapp: "https://chat.whatsapp.com/DgptAaNmpwoCO6INsFIPR7"
                        }
                    ],
                    concurso: [{
                        XPOCET: "https://www.google.com/search?q=ceca.uaeh.edu.mx%2Fxpocet&sclient=gws-wiz-serp"
                    }],
                    training_camp: [
                        {
                            Campamento_de_Otoño: "https://www.facebook.com/ICBIUAEHOficial/photos/-el-club-de-programaci%C3%B3n-competitiva-te-invita-a-su-campamentolugar-sala-de-usos/1029207925675719/"
                        }
                    ]
                },
                {
                    club: "Algoritmia Avanzada Y Programación Competitiva (Algoritmia-Acatlan GUAPA)",
                    universidad: "Universidad Nacional Autónoma de México",
                    estatus: "activo",
                    redes: [
                        {
                            pagina: "https://club-de-algoritmia-acatlan-guapa.github.io/",
                            facebook: "https://www.facebook.com/programacioncompetitiva"
                        }
                    ],
                    recursos: [
                        {
                            github: "https://github.com/Club-de-Algoritmia-Acatlan-GUAPA/"
                        }
                    ],
                    contacto: [{
                        email: "mailto:programacion.competitiva@acatlan.unam.mx",
                        discord: "https://discord.gg/EJKBpR2"
                    }]
                }
            ]
        },
        "path7371": {
            name: "Jalisco", clubs: [
                {
                    club: "Comunidad ICPC Mexico at ITESO",
                    universidad: "Instituto Tecnológico y de Estudios Superiores de Occidente",
                    estatus: "activo",
                    redes: [
                        {
                            pagina: "https://eventos.iteso.mx/acm/",
                            facebook: "https://www.facebook.com/acmitesochapter"
                        }
                    ],
                    contacto: [{
                        email: "mailto:guillot@icpcmexico.org",
                        telefono: "phone: +52 33 3669 3434",
                        discord: "https://discord.gg/icpcmx"
                    }],
                    concurso: [{
                        ICPC_Gran_Premio_México: "https://eventos.iteso.mx/acm/1-primera-fase-granpremiomx/sobre-los-concursos-del-granpremiomx2025/"
                    }],
                    training_camp: [{ TCMX: "https://tcmx.icpcmexico.org/" }]
                },
                {
                    club: "CUCEI",
                    universidad: "Universidad de Guadalajara",
                    estatus: "activo",
                    redes: [
                        {
                            pagina: "https://algoritmia.club/",
                            facebook: "https://www.facebook.com/ClubAlgoritmiaCUCEI",
                            instagram: "https://www.instagram.com/club.algoritmia.cucei/?",
                        }
                    ],
                    recursos: [
                        {
                            youtube: "https://www.youtube.com/@clubalgoritmiacuceicac6204",
                            google_drive_2023:"https://drive.google.com/drive/folders/19O2Cykuk5HtxvbHT1Ixf1uOR8H3QdS0_",
                            google_drive_2024:"https://drive.google.com/drive/folders/1iV_VFbMpodIqZWTOoqZYBhbsbimjyFtg"
                        }
                    ],
                    contacto: [
                        {
                            discord: "https://discord.com/invite/VmKrSgK5mQ",
                            grupo_facebook: "https://www.facebook.com/groups/625338907916400/",
                            whatsapp: "https://chat.whatsapp.com/E7JHbJeJgmML0A12pHrTfD"

                        }
                    ],
                    concurso: [
                        {
                            CUCEI_vjudge: "https://vjudge.net/group/cac2022b"
                        }
                    ]
                },
                {
                    club: "Club de algoritmia de CUValles",
                    universidad: "Universidad de Guadalajara: Centro Universitario de los Valles",
                    estatus: "activo",
                    redes: [{
                        instagram: "https://www.instagram.com/club.algoritmia.cuvalles/",
                        facebook: "https://www.facebook.com/p/Club-De-Algoritmia-CUValles-100057294324552"
                    }],
                    recursos: [{ github: "https://github.com/Club-Algoritmia-CUValles/" }]
                }
            ]
        },
        "path7377": {
            name: "Estado de México", clubs: [{
                club: "Club de Algoritmia ITESM CEM",
                universidad: "Tecnológico de Monterrey Campus Estado de México",
                estatus: "activo",
                redes: [
                    {
                        notion: "https://sheer-cloudberry-f14.notion.site/Club-de-Algoritmia-ITESM-CEM-90276879e02441a8bead226e7e7b9afa",
                        instagram: "https://www.instagram.com/algoritmiacem/"
                    }
                ],
                recursos: [
                    {
                        youtube: "https://www.youtube.com/@clubdealgoritmiaitesmcem4829/videos",
                        google_colab: "https://colab.research.google.com/drive/1pn3HT0mUTx9d7QRAL4Pf_EtKeTzIHE_x?usp=sharing",
                        apuntes_notion: "https://beautiful-crater-9c5.notion.site/85a03e53d77a46f3b92ea6f1fe160959?v=18c7be1bd75f4d758960a42bb2b8447d",
                    }
                ],
                contacto: [{ contactos_notion: "https://sheer-cloudberry-f14.notion.site/e3e3d13bfee74ef8b999077624cebfa3?v=2074c565fca24775adad8ef1ec4603fb" }]
            }]
        },
        "path7387": {
            name: "Michoacán", clubs: [
                {
                    club: "Club de Algoritmia Crocoders",
                    universidad: "Instituto Tecnológico de Lázaro Cárdenas",
                    estatus: "activo",
                    redes: [{ facebook: "https://www.facebook.com/ACMITLAC" }],
                    contacto: [{ email: "mailto:programacionmichoacan@gmail.com" }],
                    concurso: [{ Coding_Cup_Michoacán: "https://codingcupmichoacan.org/" }]
                }
            ]
        },
        "path7379": { name: "Morelos", clubs: null },
        "path7355": { name: "Nayarit", clubs: null },
        "path7321": {
            name: "Nuevo León", clubs: [
                {
                    club: "RAMcpp",
                    universidad: "Tecnológico de Monterrey Campus Monterrey",
                    estatus: "activo",
                    redes: [{
                        instagram: "https://www.instagram.com/ramcpp.mty",
                        facebook: "https://www.facebook.com/algoritmiaITESM"
                    }],
                    recursos: [{ youtube: "https://www.youtube.com/@ramcpp-mty" }],
                    contacto: [{ discord: "https://discord.gg/dhxmX6eVws", whatsapp: "https://chat.whatsapp.com/BFEf8MABPySFBYwL7BXLsD" }]
                }
            ]
        },
        "path7395": {
            name: "Oaxaca", clubs: [{
                club: "Club de programación ITOsaurios",
                universidad: "Instituto Tecnológico de Oaxaca",
                estatus: "activo",
                redes: [
                    {
                        facebook: "https://www.facebook.com/profile.php?id=100090904074513"
                    }
                ],
                concurso: [{ ITO_enero: "https://www.facebook.com/photo/?fbid=563742009999263&set=a.390121390694660" }]
            }]
        },
        "path7385": {
            name: "Puebla", clubs: [
                {
                    club: "Club de Algoritmia Puebla (CAP)",
                    universidad: "Tecnológico de Monterrey Campus Puebla",
                    estatus: "activo",
                    redes: [{ instagram: "https://www.instagram.com/cap_tecpuebla_official/" }],
                    concurso: [{ Code_Rush: "https://www.instagram.com/cap_tecpuebla_official/" }]
                },
                {
                    club: "Club de Algoritmia BUAP",
                    universidad: "Benemérita Universidad Autónoma de Puebla",
                    estatus: "activo",
                    redes: [{
                        facebook: "https://www.facebook.com/people/Club-de-Algoritmia-BUAP/61558223310114/",
                        instagram: "https://www.instagram.com/cabuap.ig/"
                    }]
                }
            ]
        },
        "path7359": { name: "Querétaro", clubs: null },
        "path7381": { name: "Quintana Roo", clubs: null },
        "path7347": {
            name: "San Luis Potosí", clubs: [
                {
                    club: "ICPC San Luis Potosí",
                    universidad: "Universidad Autónoma de San Luis Potosí",
                    estatus: "activo",
                    redes: [{ facebook: "https://www.facebook.com/icpcsanluis/" }],
                    recursos: [{ presentaciones: "https://icpcsanluis.github.io/curso/", youtube: "https://icpcsanluis.github.io/curso/" }],
                    contacto: [{ email: "mailto:icpcsanluis@gmail.com" }]
                }
            ]
        },
        "path7325": {
            name: "Sinaloa", clubs: [
                {
                    club: "Club de Algoritmos de Sinaloa",
                    universidad: "Tecnológico Nacional de México Campus Culiacán",
                    estatus: "activo",
                    redes: [{
                        pagina: "https://algoritmos.club/",
                        facebook: "https://www.facebook.com/algoritmos.club"
                    }],
                    contacto: [{ email: "mailto:admin@algoritmos.club" }],
                    concurso: [{ Coding_Cup_Sinaloa: "https://www.facebook.com/CodingCupSinaloa" }]

                },
                {
                    club: "Club de Programación Competitiva en la Facultad de Informática Culiacán",
                    universidad: "Universidad Autónoma de Sinaloa",
                    estatus: "inactivo",
                    redes: [{ pagina: "https://fic.uas.edu.mx/?page_id=44218" }],
                    contacto: [{ email: "mailto:club.programacion@info.uas.edu.mx" }]
                }
            ]
        },
        "path7289": { name: "Sonora", clubs: null },
        "path7389": { name: "Tabasco", clubs: null },
        "path7329": {
            name: "Tamaulipas", clubs: [
                {
                    club: "Coding-UP",
                    universidad: "Universidad Politécnica de Altamira",
                    estatus: "activo",
                    redes: [{ facebook: "https://www.facebook.com/acmupalt" }],
                    contacto: [{ discord: "https://discord.gg/5syVYcds" }],
                    concurso: [{ Hack_IT_UP: "#Hack_It_Up_es_un_concurso_privado" }]
                }
            ]
        },
        "path7367": { name: "Tlaxcala", clubs: null },
        "path7391": {
            name: "Veracruz", clubs: [
                {
                    club: "CEPC ITVer",
                    universidad: "Instituto Tecnológico de Veracruz",
                    estatus: "inactivo",
                    redes: [{ facebook: "https://www.facebook.com/CEPC.ITV" }],
                    contacto: [{ email: "mailto:cepc.itver@gmail.com" }]
                }
            ]
        },
        "path7357": {
            name: "Yucatán", clubs: [{
                club: "CPC UADY",
                universidad: "Universidad Autónoma de Yucatán",
                estatus: "activo",
                redes: [{
                    pagina: "https://sites.google.com/view/cpcfmat-uady"
                }],
                recursos: [{ presentaciones: "https://sites.google.com/view/cpcfmat-uady/entrenamientos/iniciaci%C3%B3n" }],
                contacto: [{ discord: "https://discord.gg/5QWvqerS" }],
                concurso: [{ Jujutsu_Koding: "https://sites.google.com/view/cpcfmat-uady/actividades/jujutsu-koding" }]
            }]
        },
        "path7349": {
            name: "Zacatecas", clubs: [
                {
                    club: "Club PC UAZ",
                    universidad: "Universidad Autónoma de Zacatecas",
                    estatus: "activo",
                    redes: [{ pagina: "https://www.progcompetitivauaz.club/", facebook: "https://www.facebook.com/clubpcuaz" }],
                    contacto: [{ email: "mailto:rsolis@uaz.edu.mx" }]
                }
            ]
        },
    };
    let selectedState = null;
    map.addEventListener("load", () => {
        const svgDoc = map.contentDocument;
        const svgRoot = map.contentDocument.documentElement;
        svgRoot.setAttribute("viewBox", "0 0 999.73236 679.94141");
        svgRoot.setAttribute("preserveAspectRatio", "xMidYMid meet");
        const tspans = svgDoc.querySelectorAll("tspan");
        tspans.forEach((tspan) => {
            tspan.style.display = "none"; // Hide all <tspan>, eg. state numbers
        });
        const hoverColor = "#5e81ac";
        const states = svgDoc.querySelectorAll("[id^='path']");
        states.forEach((state) => {
            const originalColor = "#b9b9b9";
            state.addEventListener("mouseover", (e) => {
                if (state !== selectedState) {
                    state.style.fill = hoverColor;
                }
                const stateInfo = stateData[state.id];
                if (stateInfo) {
                    tooltip.textContent = stateInfo.name;
                    tooltip.style.display = "block";
                }
            });
            state.addEventListener("mousemove", (e) => {
                const containerRect = document.getElementById("map-container").getBoundingClientRect();
                const relativeX = e.clientX + containerRect.left;
                const relativeY = e.clientY + containerRect.top;
                tooltip.style.left = `${relativeX + tooltipXoffset}px`;
                tooltip.style.top = `${relativeY + tooltipYoffset}px`;
            });
            state.addEventListener("mouseout", () => {
                if (state !== selectedState) {
                    state.style.fill = originalColor;
                }
                tooltip.style.display = "none";
                if (selectedState) {
                    const selectedStateInfo = stateData[selectedState.id];
                    if (selectedStateInfo) {
                        let clubInfo = "";
                        if (selectedStateInfo.clubs && selectedStateInfo.clubs.length > 0) {
                            selectedStateInfo.clubs.forEach((club, index) => {
                                let redesHTML = club.redes
                                    ? `<strong>Redes:</strong> ${club.redes.map(r =>
                                        Object.entries(r).map(([k, v]) =>
                                            `<a href="${v}" target="_blank">${k}</a>`).join(", ")
                                    ).join("<br>")}<br>`
                                    : "";
                                let contactoHTML = club.contacto
                                    ? `<strong>Contacto:</strong> ${club.contacto.map(c =>
                                        Object.entries(c).map(([k, v]) =>
                                            `<a href="${v}" target="_blank">${k}</a>`).join(", ")
                                    ).join("<br>")}<br>`
                                    : "";
                                let recursosHTML = club.recursos
                                    ? `<strong>Recursos:</strong> ${club.recursos.map(r =>
                                        Object.entries(r).map(([k, v]) =>
                                            `<a href="${v}" target="_blank">${k}</a>`).join(", ")
                                    ).join("<br>")}<br>`
                                    : "";
                                let concursoHTML = club.concurso
                                    ? `<strong>Concurso:</strong> ${club.concurso.map(c =>
                                        Object.entries(c).map(([k, v]) =>
                                            `<a href="${v}" target="_blank">${k}</a>`).join(", ")
                                    ).join("<br>")}<br>`
                                    : "";
                                let trainingHTML = club.training_camp
                                    ? `<strong>Training Camp:</strong> ${club.training_camp.map(t =>
                                        Object.entries(t).map(([k, v]) =>
                                            `<a href="${v}" target="_blank">${k}</a>`).join(", ")
                                    ).join("<br>")}<br>`
                                    : "";
                                clubInfo += `
        <div style="margin-bottom: 1em; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
            <strong>Club ${index + 1}:</strong> ${club.club}<br>
            <strong>Estatus:</strong> <span style="color: ${club.estatus === 'activo' ? '#a3be8c' : '#bf616a'};">${club.estatus}</span><br>
            <strong>Universidad:</strong> ${club.universidad || 'N/D'}<br>
            ${redesHTML}
            ${contactoHTML}
            ${recursosHTML}
            ${concursoHTML}
            ${trainingHTML}
        </div>
    `;
                            });
                        } else {
                            clubInfo = `<em>Sin clubes conocidos</em>`;
                        }
                        infoBox.innerHTML = `
<strong>Estado:</strong> ${selectedStateInfo.name}<br><br>
${clubInfo}
`;
                        infoBox.classList.add("clicked");
                    }
                } else {
                    infoBox.classList.add("hidden");
                }
            });
            state.addEventListener("click", () => {
                if (selectedState) {
                    selectedState.style.fill = originalColor;
                }
                selectedState = state;
                state.style.fill = hoverColor;
                const stateInfo = stateData[state.id];
                if (stateInfo) {
                    let clubInfo = "";
                    if (stateInfo.clubs && stateInfo.clubs.length > 0) {
                        stateInfo.clubs.forEach((club, index) => {
                            let redesHTML = club.redes
                                ? `<strong>Redes:</strong> ${club.redes.map(r =>
                                    Object.entries(r).map(([k, v]) =>
                                        `<a href="${v}" target="_blank">${k}</a>`).join(", ")
                                ).join("<br>")}<br>`
                                : "";
                            let contactoHTML = club.contacto
                                ? `<strong>Contacto:</strong> ${club.contacto.map(c =>
                                    Object.entries(c).map(([k, v]) =>
                                        `<a href="${v}" target="_blank">${k}</a>`).join(", ")
                                ).join("<br>")}<br>`
                                : "";
                            let recursosHTML = club.recursos
                                ? `<strong>Recursos:</strong> ${club.recursos.map(r =>
                                    Object.entries(r).map(([k, v]) =>
                                        `<a href="${v}" target="_blank">${k}</a>`).join(", ")
                                ).join("<br>")}<br>`
                                : "";
                            let concursoHTML = club.concurso
                                ? `<strong>Concurso:</strong> ${club.concurso.map(c =>
                                    Object.entries(c).map(([k, v]) =>
                                        `<a href="${v}" target="_blank">${k}</a>`).join(", ")
                                ).join("<br>")}<br>`
                                : "";
                            let trainingHTML = club.training_camp
                                ? `<strong>Training Camp:</strong> ${club.training_camp.map(t =>
                                    Object.entries(t).map(([k, v]) =>
                                        `<a href="${v}" target="_blank">${k}</a>`).join(", ")
                                ).join("<br>")}<br>`
                                : "";
                            clubInfo += `
<div style="margin-bottom: 1em; border: 1px solid #ddd; padding: 10px; border-radius: 8px;">
<strong>Club ${index + 1}:</strong> ${club.club}<br>
<strong>Estatus:</strong> <span style="color: ${club.estatus === 'activo' ? '#a3be8c' : '#bf616a'};">${club.estatus}</span><br>
<strong>Universidad:</strong> ${club.universidad || 'N/D'}<br>
${redesHTML}
${contactoHTML}
${recursosHTML}
${concursoHTML}
${trainingHTML}
</div>
`;
                        });
                    } else {
                        clubInfo = `<em>Sin clubes conocidos</em>`;
                    }
                    infoBox.innerHTML = `
<strong>Estado:</strong> ${stateInfo.name}<br><br>
${clubInfo}
`;
                }
                infoBox.classList.add("clicked");
                infoBox.classList.remove("hidden");
            });
        });
        document.addEventListener("click", (e) => {
            const mapContainer = document.getElementById("map-container");
            const infoBox = document.getElementById("info-box");
            if (!mapContainer.contains(e.target) && !infoBox.contains(e.target)) {
                infoBox.classList.add("hidden");
                infoBox.classList.remove("clicked");
                if (selectedState) {
                    selectedState.style.fill = "#b9b9b9";
                    selectedState = null;
                }
            }
        });
    });
});