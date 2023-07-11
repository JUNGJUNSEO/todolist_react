import {$L} from "../utils/helperMethods"

let survey = null;
const age = Array.from({ length: 101 }, (_, index) => `만 ${index}세`);
const height = Array.from({ length: 300 }, (_, index) => `${index}cm`);
const weight = Array.from({ length: 300 }, (_, index) => `${index}kg`);


export const getSurveyData = () => {
  if(!survey){
    survey = [
      {   
        "id": "P1",
        "questions": {
          "age": {
            "id": "age",
            "title": $L("현재 나이"),
            "type": "dropdown",
            "selected": age.indexOf("만 40세"),
            "dropdown": age
          },
          "gender": {
            "id": "gender",
            "title": $L("성별"),
            "type": "radio",
            "selected": 0,
            "radio": [
              { "title": $L("남") },
              { "title": $L("여") },
            ]
          },
          "height": {
            "id": "height",
            "title": $L("키"),
            "type": "dropdown",
            "selected": height.indexOf("172cm"),
            "dropdown": height
          },
          "weight": {
            "id": "weight",
            "title": $L("몸무게"),
            "type": "dropdown",
            "selected": weight.indexOf("74kg"),
            "dropdown": weight
          },
          "color": {
            "id": "color",
            "title": $L("프로필 배경색"),
            "type": "radio",
            "selected": 0,
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
      "questions": {
        "disease": {
          "id": "disease",
          "title": $L("1. 현재 [고객명]님께서 보유하고 있는 질환을 선택해주세요."),
          "type": "checkbox",
          "selected": [],
          "checkbox": [
            { "title": $L("고혈압") },
            { "title": $L("심혈관 (심근경색/협심증)") },
            { "title": $L("호흡기질환 (천식, 만성폐쇄성폐질환)") },
            { "title": $L("당뇨") },
          ]
        },
        "disability": {
          "id": "disability",
          "title": $L("2. 기타 신체활동을 제한하는 질환을 갖고 있나요?"),
          "type": "radio",
          "selected": -1,
          "radio": [
            { "title": $L("예")},
            { "title": $L("아니오")},
          ]
        },
      }
    },

    {   
      "id": "P3",
      "questions": {
        "pain": {
          "id": "pain",
          "title": $L("3. 통증이 있는 부위를 선택해주세요. (최대 3개)"),
          "type": "checkbox",
          "selected": [],
          "checkbox": [
            { "title": $L("목") },
            { "title": $L("어깨") },
            { "title": $L("팔꿈치") },
            { "title": $L("손목") },
            { "title": $L("등") },
            { "title": $L("허리") },
            { "title": $L("골반") },
            { "title": $L("엉덩이") },
            { "title": $L("허벅지") },
            { "title": $L("종아리") },
            { "title": $L("발목") },
            { "title": $L("발바닥") },
          ]
        },
      }
    },
    {   
      "id": "P4",
      "questions": {
        "purpose": {
          "id": "purpose",
          "title": $L("4. [고객명]님의 운동목적은 무엇인가요?"),
          "type": "checkbox",
          "selected": [],
          "checkbox": [
            { "title": $L("다이어트") },
            { "title": $L("몸매관리(뷰티)") },
            { "title": $L("근력강화") },
            { "title": $L("건강유지(활력)") },
            { "title": $L("자세교정") },
            { "title": $L("만성질환관리") },
            { "title": $L("근골격계질환 재활") },
            { "title": $L("기타 (성취감/재미/친목") },
          ]
        },
        "interest": {
          "id": "interest",
          "title": $L("5. 건강해지기 위해 관심을 갖고 있는 신체부위는 무엇인가요?"),
          "type": "checkbox",
          "selected": [],
          "checkbox": [
            { "title": $L("전신") },
            { "title": $L("팔") },
            { "title": $L("가슴") },
            { "title": $L("복근") },
            { "title": $L("다리 (허벅지, 종아리)") },
            { "title": $L("등") },
            { "title": $L("엉덩이") },
          ]
        },
        "preference": {
          "id": "preference",
          "title": $L("6. 선호하는 운동을 선택해주세요."),
          "type": "checkbox",
          "selected": [],
          "checkbox": [
            { "title": $L("스트레칭") },
            { "title": $L("유산소운동") },
            { "title": $L("근력운동") },
            { "title": $L("요가, 필라테스") },
            { "title": $L("댄스") },
            { "title": $L("트레드밀") },
            { "title": $L("스피닝") },
            { "title": $L("근골격계 만성질환 재활운동") },
          ]
        },
        "motivation": {
          "id": "motivation",
          "title": $L("7. 동기부여가 잘되는 방법은 무엇인가요"),
          "type": "checkbox",
          "selected": [],
          "checkbox": [
            { "title": $L("자신감 찾기") },
            { "title": $L("스트레스 해소") },
            { "title": $L("근력운동") },
            { "title": $L("에너지 활성화") },
          ]
        },
      },
    },
    {   
      "id": "P5",
      "questions": {
        "frequency": {
          "id": "frequency",
          "title": $L("8. 일주일 운동 목표 횟수는 얼마인가요?"),
          "type": "dropdown",
          "selected": 0,
          "dropdown": Array.from({ length: 7 }, (_, index) => `${index+1}회`),
        },
        "time": {
          "id": "time",
          "title": $L("9. 1회 목표하는 운동 시간은 얼마인가요?"),
          "type": "radio",
          "selected": 0,
          "radio": [
            { "title": $L("5분") },
            { "title": $L("15분") },
            { "title": $L("30분") },
          ]
        },
        "intensity": {
          "id": "intensity",
          "title": $L("10. 목표하는 운동 강도는 얼마인가요?"),
          "type": "radio",
          "selected": 0,
          "radio": [
            { "title": $L("저강도") },
            { "title": $L("중강도") },
            { "title": $L("고강도") },
          ]
        },
        "level": {
          "id": "level",
          "title": $L("11. 현재 운동수준은 어떤가요?"),
          "type": "radio",
          "selected": 0,
          "radio": [
            { "title": $L("30분 이상 주 1회") },
            { "title": $L("30분 이상 주 2회") },
            { "title": $L("30분 이상 주 3회") },
            { "title": $L("하지 않습니다.") },
          ]
        },
      }
    },
  ]

    // survey[0].questions.height.selected = survey[0].questions.height.selected < 0 ? (questions.gender.selected === 0 ? questions.height.dropdown.indexOf("172cm") : questions.height.dropdown.indexOf("161cm")) : questions.height.selected
    // survey[0].questions.weight.selected = survey[0].questions.weight.selected < 0 ? (questions.gender.selected === 0 ? questions.weight.dropdown.indexOf("74kg") : questions.weight.dropdown.indexOf("54kg")) : questions.weight.selected
  }

  

  return survey
}