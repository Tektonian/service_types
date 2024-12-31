import Joi from "@hapi/joi";
import parse from "joi-to-json";
import { SCHOOL_STATUS_ENUM, SCHOOL_DEGREE_ENUM } from "../../enum/service/Student";
import { COUNTRY_CODE_ENUM } from "../../global/CountryCode";

const AcademicHistoryData = Joi.object({
    school_id: Joi.number().positive().required(),
    degree: Joi.number().required().allow(Object.values(SCHOOL_DEGREE_ENUM)).description("Bachelor | Master | Doctor"),
    faculty: Joi.string().required(),
    status: Joi.number()
        .allow(Object.values(SCHOOL_STATUS_ENUM))
        .description("In Progress | Graduated | Leave of Absence"),
    start_date: Joi.date().iso().required(),
    end_date: Joi.date().iso().required().description("Graduated Date Or Expecting Graduation Date"),
});

const LanguageData = Joi.object({
    exam_result: Joi.string().required(),
    exam_id: Joi.number().positive().required(),
});

export const ReqCreateStudentProfileSchema = Joi.object({
    name_glb: Joi.array().items(
        Joi.object({
            country_code: Joi.string().required().allow(Object.values(COUNTRY_CODE_ENUM)),
            name: Joi.string().required(),
        }),
    ),
    nationality: Joi.string().required().allow(Object.values(COUNTRY_CODE_ENUM)),
    academic_history: Joi.array().items(AcademicHistoryData),
    exam_history: Joi.array().items(LanguageData),
    // TODO: image
    birth_date: Joi.date().iso().required(),
    gender: Joi.number().required().allow(0, 1).description("0: Male, 1: Female"),
    has_car: Joi.number().required().allow(0, 1),
    keyword_list: Joi.array()
        .items(Joi.string().required(), Joi.string().required(), Joi.string().required())
        .description("3 Keywords that Express Student"),
    phone_number: Joi.string().required().description("Is not Exposed to Others"),
    emergency_contact: Joi.string().required().description("Is not Exposed to Others"),
});

export const ReqCreateStudentProfileSchemaJSON = parse(ReqCreateStudentProfileSchema);

/**
 * TODO: 학과 정보 파싱 임시 저장
 * {"인문계열":"{"어문":"{"국어국문학과":"{}","기타어문학과":"{}","노어노문학과":"{}","독어독문학과":"{}","불어불문학과":"{}","서어서문학과":"{}","언어학과":"{}","영어영문학과":"{}","인도어과":"{}","일어일문학과":"{}","중어중문학과":"{}","대외한어과":"{}","한문학과":"{}"}","인문":"{"고고학과":"{}","문예창작과":"{}","문화재보존학과":"{}","문화콘텐츠학과":"{}","미술사학과":"{}","사학과":"{}","신학과":"{}","(대학원 목회자/성직자양성과정*)":"{}","개신교":"{}","(M.Div.*)":"{}","선교학과":"{}","천주교":"{}","(STL*)":"{}","원불교":"{}","(M.A.*)":"{}","음악학과":"{}","한국학과":"{}","종교학과":"{}","기독교학과":"{}","불교학과":"{}","철학과":"{}","유학과":"{}","PPE":"{}"}"}","사회계열":"{"법학":"{"법학과":"{}"}","사회과학":"{"관광학과":"{}","광고홍보학과":"{}","국제개발협력학과":"{}","국제학부":"{}","군사학과":"{}","경제학과":"{}","PPE":"{}","경찰행정학과":"{}","문화인류학과":"{}","문헌정보학과":"{}","북한학과":"{}","부동산학과":"{}","부사관과":"{}","비서학과":"{}","사회복지학과":"{}","사회학과":"{}","심리학과":"{}","아동가족학과":"{}","여성학과":"{}","장례지도과":"{}","정치외교학과":"{}","정책학과":"{}","지리학과":"{}","지적학과":"{}","지역개발학과":"{}","행정학과":"{}","미디어커뮤니케이션학과":"{}"}","상경":"{"경영학과":"{}","금융보험학과":"{}","무역학과":"{}","세무학과":"{}","유통물류학과":"{}","회계학과":"{}"}"}","이학계열":"{"농림수산":"{"산림과학과":"{}","수산생명의학과":"{}","수산자원학과":"{}","식물자원학과":"{}","식물의학과":"{}","원예학과":"{}"}","생물화학":"{"말특수동물학과":"{}","생명공학과":"{}","생명과학과":"{}","수의학과":"{}","애완동물과":"{}","축산학과":"{}","화학과":"{}"}","생활과학":"{"소비자학과":"{}","식품영양학과":"{}","의류의상학과":"{}","조리과학과":"{}","제과제빵과":"{}","주거환경학과":"{}"}","수리물리":"{"대기과학과":"{}","물리학과":"{}","수학과":"{}","지구환경과학과":"{}","지질학과":"{}","해양학과":"{}","천문학과":"{}","통계학과":"{}"}"}","의약계열":"{"의학":"{"의학과":"{}","치의학과":"{}","한의학과":"{}"}","간호":"{"간호학과":"{}"}","약학":"{"약학과":"{}","한약학과":"{}"}","보건":"{"보건행정학과":"{}","건강관리학과":"{}","안경광학과":"{}","방사선학과":"{}","응급구조학과":"{}","임상병리학과":"{}","치위생학과":"{}","치기공학과":"{}","의공학과":"{}","물리치료학과":"{}","작업치료학과":"{}","재활학과":"{}","언어치료학과":"{}"}"}","공학계열":"{"기계":"{"기계공학과":"{}","기전공학과":"{}","금형공학과":"{}","드론학과":"{}","로봇공학과":"{}","설비공학과":"{}","원자력공학과":"{}","자동차공학과":"{}","조선해양공학과":"{}","항공우주공학과":"{}"}","전기":"{"광공학과":"{}","반도체공학과":"{}","산업공학과":"{}","정보보안학과":"{}","정보통신공학과":"{}","인공지능학과":"{}","전기전자공학과":"{}","제어계측공학과":"{}","컴퓨터공학과":"{}"}","토목":"{"건축공학과":"{}","건축학과":"{}","교통공학과":"{}","도시공학과":"{}","안전공학과":"{}","조경학과":"{}","철도공학과":"{}","토목공학과":"{}","환경공학과":"{}"}","화공":"{"고분자공학과":"{}","나노공학과":"{}","재료공학과":"{}","섬유공학과":"{}","식품공학과":"{}","에너지공학과":"{}","화학공학과":"{}"}","학제간연구":"{"국방기술학과":"{}","기관학과":"{}","소방학과":"{}","예술공학과":"{}","출판인쇄과":"{}","철도운전관제과":"{}","특수장비과":"{}","항공운항과":"{}","항해학과":"{}","해양공학과":"{}"}"}","예체능계열":"{"디자인":"{"산업디자인학과":"{}","시각디자인학과":"{}","실내디자인학과":"{}","패션디자인학과":"{}"}","무용체육":"{"경호학과":"{}","무용학과":"{}","스포츠의학과":"{}","체육학과":"{}"}","미술조형":"{"동양화과":"{}","보석감정과":"{}","서양화과":"{}","조소과":"{}","종교미술학과":"{}","판화과":"{}"}","연극영화":"{"공연제작과":"{}","극작과":"{}","영화영상학과":"{}","연극학과":"{}"}","음악":"{"국악과":"{}","교회음악과":"{}","기악과":"{}","성악과":"{}","실용음악과":"{}","작곡과":"{}","음향과":"{}"}","응용예술":"{"게임학과":"{}","귀금속공예과":"{}","도예과":"{}","만화애니메이션학과":"{}","모델과":"{}","목형과":"{}","미용학과":"{}","사진학과":"{}"}"}","교육계열":"{"교육일반":"{"교육공학과":"{}","교육학과":"{}","유아교육과":"{}","초등교육과":"{}","특수교육과":"{}"}","언어문학":"{"국어교육과":"{}","영어교육과":"{}","외국어교육과":"{}","독어교육과":"{}","불어교육과":"{}","일어교육과":"{}","중국어교육과":"{}","한문교육과":"{}"}","예술체육":"{"미술교육과":"{}","음악교육과":"{}","체육교육과":"{}"}","인문사회":"{"문헌정보교육과":"{}","역사교육과":"{}","윤리교육과":"{}","일반사회교육과":"{}","종교교육과":"{}","지리교육과":"{}"}","자연공학":"{"과학교육과":"{}","물리교육과":"{}","화학교육과":"{}","생물교육과":"{}","지구과학교육과":"{}","경영금융교육과":"{}","기계교육과":"{}","기술가정교육과":"{}","기술교육과":"{}","가정교육과":"{}","농업교육과":"{}","수학교육과":"{}","수해양산업교육과":"{}","컴퓨터교육과":"{}","전기전자교육과":"{}","환경교육과":"{}"}","비사범계열":"{"평생교육학과":"{}","한국어교육학과":"{}","TESOL학과":"{}"}"}","기타계열":"{"자율":"{"자유전공학부":"{}","교양학부":"{}"}","특성화":"{"특성화학과":"{}","계약학과":"{}"}","기타":"{"간판학과":"{}","면허 부여 학과":"{}","유일한 학과":"{}","실존하지 않는 학과":"{}"}"}","- * 표시가 있는 학과는 특정 직업에 대한 자격을 부여함(해당 학과를 졸업할 경우 임용되는 형태이거나(군사과 등), 전문자격이 부여되거나(교육과 등), 전문자격 시험을 응시할 수 있는(의학과 등) 경우로 한정)":"{}"}
 */
