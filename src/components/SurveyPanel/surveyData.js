import {$L} from "../utils/helperMethods"

let survey = null;

export const getSurveyData = () => {
    if(!survey){
        survey = [
            {   
                "id": "P1",
                "question": {
                    "age": {
                        "title": $L("현재 나이"),
                        "type": "dropdown",
                        "selectd": -1,
                        "dropdown": Array.from({ length: 101 }, (_, index) => `만 ${index}세`)
                    },
                    "height": {
                        "title": $L("키"),
                        "type": "dropdown",
                        "selectd": -1,
                        "dropdown": Array.from({ length: 101 }, (_, index) => `${index}cm`)
                    },
                    "weight": {
                        "title": $L("몸무게"),
                        "type": "dropdown",
                        "selectd": -1,
                        "dropdown": Array.from({ length: 101 }, (_, index) => `${index}kg`)
                    },
                    "gender": {
                        "title": $L("성별"),
                        "type": "radio",
                        "selectd": -1,
                        "radio": [
                            { "title": $L("남") },
                            { "title": $L("여") },
                        ]
                    },
                    "color": {
                        "title": $L("프로필 배경색"),
                        "type": "radio",
                        "selectd": -1,
                        "radio": [
                            { "title": $L("그레이"), "image": "img.src" },
                            { "title": $L("레드"), "image": "img.src" },
                            { "title": $L("블루"), "image": "img.src" },
                            { "title": $L("옐로"), "image": "img.src" },
                            { "title": $L("오렌지"), "image": "img.src" },
                        ]
                    },
                }
            },
            {   
                "id": "P2",
                "question": {
                    "disease": {
                        "title": $L("1. 현재 [고객명]님께서 보유하고 있는 질환을 선택해주세요."),
                        "type": "radio",
                        "selectd": [],
                        "radio": [
                            { "title": $L("고혈압") },
                            { "title": $L("심혈관 (심근경색/협심증)") },
                            { "title": $L("호흡기질환 (천식, 만성폐쇄성폐질환)") },
                            { "title": $L("당뇨") },
                        ]
                    },
                    "disability": {
                        "title": $L("2. 기타 신체활동을 제한하는 질환을 갖고 있나요?"),
                        "type": "radio",
                        "selectd": -1,
                        "radio": [
                            { "title": $L("예")},
                            { "title": $L("아니오")},

                        ]
                    },
                }
            }
        ]
    }

    return survey
}