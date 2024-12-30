import { ICandidateProfile } from "@components/UI/molecules/CandidateProfile";

export const candidateProfile: ICandidateProfile = {
    "data": {
        "name": "Sebastian",
        "lastname": "Cabal Quiroz",
        "last_updated": "Ultima actualización 26/12/2024",
        "img": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "role": "Ingeniero de sistemas",
        "score": "4.5"
    },
    "details": [
        {
            "title": {
                "value": "Información laboral",
                "size": "lg",
                "weight": "bold",
                "color": "black"
            },
            "type": "quick_access",
            "children": [
                {
                    "direction": "column",
                    "separation": "md",
                    "children": [
                        {
                            "value": "Grupo Bolivar",
                            "prefixIcon": {
                                "icon": "company"
                            },
                            "size": "sm",
                            "weight": "medium",
                            "color": "white",
                            "data": "Empresa"
                        },
                        {
                            "value": "Analista funcional",
                            "prefixIcon": {
                                "icon": "role"
                            },
                            "size": "sm",
                            "weight": "medium",
                            "color": "white",
                            "data": "Cargo"

                        },
                        {
                            "value": "Interno",
                            "prefixIcon": {
                                "icon": "position"
                            },
                            "size": "sm",
                            "weight": "medium",
                            "color": "white",
                            "data": "Posición"
                        }
                    ]
                }
            ]
        },
        {
            "title": {
                "value": "Datos personales",
                "size": "lg",
                "weight": "bold",
                "color": "green"
            },
            "type": "basic",
            "children": [
                {
                    "direction": "column",
                    "separation": "md",
                    "children": [
                        {
                            "value": "CC 1037651011",
                            "prefixIcon": {
                                "icon": "id"
                            },
                            "size": "sm",
                            "weight": "normal",
                            "color": "white"
                        },
                        {
                            "value": "14 / 08 / 1987",
                            "prefixIcon": {
                                "icon": "calendar"
                            },
                            "size": "sm",
                            "weight": "normal",
                            "color": "white"
                        },
                        {
                            "value": "Masculino, 35 años",
                            "prefixIcon": {
                                "icon": "gender"
                            },
                            "size": "sm",
                            "weight": "normal",
                            "color": "white"
                        },
                        {
                            "value": "nombre@correo.com",
                            "prefixIcon": {
                                "icon": "email"
                            },
                            "size": "sm",
                            "weight": "normal",
                            "color": "white"
                        },
                        {
                            "value": "+57 3002002028",
                            "prefixIcon": {
                                "icon": "phone"
                            },
                            "size": "sm",
                            "weight": "normal",
                            "color": "white"
                        },
                        {
                            "value": "Medellín, Colombia",
                            "prefixIcon": {
                                "icon": "location"
                            },
                            "size": "sm",
                            "weight": "normal",
                            "color": "blue"
                        }
                    ]
                }
            ]
        },
        {
            "title": {
                "value": "Nivel de estudios",
                "size": "lg",
                "weight": "bold",
                "color": "green"
            },
            "type": "basic",
            "children": [
                {
                    "direction": "column",
                    "separation": "md",
                    "children": [
                        {
                            "value": "Especialización / maestría",
                            "prefixIcon": {
                                "icon": "education"
                            },
                            "size": "sm",
                            "weight": "normal",
                            "color": "white"
                        }
                    ]
                }
            ]
        },
        {
            "title": {
                "value": "Aspiración salarial",
                "size": "lg",
                "weight": "bold",
                "color": "green"
            },
            "type": "basic",
            "children": [
                {
                    "direction": "column",
                    "separation": "md",
                    "children": [
                        {
                            "value": "$2.000.000",
                            "prefixIcon": {
                                "icon": "salary"
                            },
                            "size": "sm",
                            "weight": "normal",
                            "color": "white"
                        }
                    ]
                }
            ]
        },
        {
            "title": {
                "value": "Categoría",
                "size": "lg",
                "weight": "bold",
                "color": "green"
            },
            "type": "basic",
            "children": [
                {
                    "direction": "column",
                    "separation": "md",
                    "children": [
                        {
                            "value": "Diseño",
                            "prefixIcon": {
                                "icon": "category"
                            },
                            "size": "sm",
                            "weight": "normal",
                            "color": "white"
                        }
                    ]
                }
            ]
        }
    ]
}
