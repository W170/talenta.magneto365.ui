import { IVacancyProcessCard } from "@components/UI/molecules/VacancyProcessCard/VacancyProcessCard.interface";

export const vacancyProcessCard: IVacancyProcessCard = {
    vacancyDetail: {
        title: {
            "value": "Consultor Rrhh",
            "size": "md",
            "weight": "bold",
            "color": "black"
        },
        status: {
            "value": "Activo",
            "size": "sm",
            "weight": "normal",
            "color": "green"
        },
        date: {
            "value": "Septiembre 2024",
            "size": "xs",
            "weight": "normal",
            "color": "lightGray"
        },
        origin: {
            "value": "Jobsite Empleos y vacantes",
            "size": "xs",
            "weight": "normal",
            "color": "lightGray"
        },
        stage: {
            "value": "Etapa: Prueba técnica",
            "size": "xs",
            "weight": "normal",
            "color": "lightGray"
        },
        children: [{
            stageDetail: {
                title: {
                    "size": "md",
                    "weight": "bold",
                    "color": "black",
                    "value": "Etapa: prueba tecnica",
                },
                date: {
                    "size": "xs",
                    "weight": "normal",
                    "color": "black",
                    "value": "Sep 2024 | 4:15px",
                },
                email: {
                    "size": "xs",
                    "weight": "normal",
                    "color": "black",
                    "value": "correo@correo",
                },
                children: {
                    children: [
                        {
                            "size": "md",
                            "weight": "bold",
                            "color": "black",
                            "value": "Etapa: prueba tecnica",
                        }
                    ]
                }
            }
        }]
    }
}