import styled from "styled-components";
import {
    LKHeader
}   from '../';
import { useState } from "react";


interface Props{

}


function PersonalCabinetPage(props:Props){


    const [coursesList, setCoursesList] = useState<any>([
        {
            'title': 'Название курса\nв две строки', 'mini_img': './images/course_mini_img.png', 'warning': 'Сдача д/з через 3 дня', 'progres': 2  , 'all_size': 18, 'additional_info': '', 'bgColor': '#F9EFE6',
        },
        {   
            'title': 'Название курса\nв две строки', 'mini_img': './images/course_mini_img.png', 'warning': '', 'progres': 0, 'all_size': 18, 'additional_info': '18 лекций 8 тестов', 'bgColor': '#FFEAF3',
        },
        {   
            'title': 'Название курса\nв две строки', 'mini_img': './images/course_mini_img.png', 'warning': '', 'progres': 0, 'all_size': 18, 'additional_info': '18 лекций 8 тестов', 'bgColor': '#F0F5FE',
        },
    ]);
    const [freeCourses, setFreeCourses] = useState<any>([
        {   
            'title': 'Название курса\nв две строки', 'mini_img': './images/course_mini_img.png', 'warning': '', 'progres': 0, 'all_size': 18, 'additional_info': 'Бесплатно', 'bgColor': '#F9EFE6',
        },
        {   
            'title': 'Название курса\nв две строки', 'mini_img': './images/course_mini_img.png', 'warning': '', 'progres': 0, 'all_size': 18, 'additional_info': 'Бесплатно', 'bgColor': '#FFEAF3',
        },
        {   
            'title': 'Название курса\nв две строки', 'mini_img': './images/course_mini_img.png', 'warning': '', 'progres': 0, 'all_size': 18, 'additional_info': 'Бесплатно', 'bgColor': '#F0F5FE',
        },
    ]);
    const [testList, setTestList] = useState<any>([
        {
            'title': 'Управление\nфинансовым отделом', 'subtitle': 'Проверяем навыки управления\nв финансовой сфере', 'button_text': 'Пройти тест', 'bg_img': 'test1_bg.png',
        },
        {
            'title': 'Английский язык\nAdvanced +', 'subtitle': 'Оценим уровень вашего английского языка\nв профессиональной деятельности', 'button_text': 'Пройти тест', 'bg_img': 'test2_bg.png',
        },
    ])

    return(
        <>
            <ExternalWrapper>
                <LKHeader/>
                <PersonalCoursesWrapper>
                    <PersonalCoursesTitle>Ваши курсы</PersonalCoursesTitle>
                    <CoursesListWrapper>
                        {
                            coursesList.map((elem:any)=>{
                                return (
                                    <CoursesElemWrapper bgColor={elem.bgColor}>
                                        <CourseTitleWrapper>
                                            <CourseTitleText>{elem.title}</CourseTitleText>
                                            <CourseTitleImage src={elem.mini_img}/>
                                        </CourseTitleWrapper>
                                        {elem.warning ?
                                                <CourseWarningWrapper>
                                                    <CourseWarningIcon src="./images/course_warning_icon.svg"/>
                                                    <CourseWarningText>{elem.warning}</CourseWarningText>
                                                </CourseWarningWrapper>
                                                :
                                                null
                                        }
                                        {
                                            elem.progres === 0 ?
                                                <CourseInfoWrapper>
                                                    <CourseInfoText>
                                                        {elem.additional_info}
                                                    </CourseInfoText>
                                                </CourseInfoWrapper>
                                                :
                                                <CourseProgresWrapper>
                                                    <CourseProgresText>{elem.progres} из {elem.all_size} лекций пройдено!</CourseProgresText>
                                                    <CourseProgresBar><CourseInnerProgresBar progres={((elem.progres / elem.all_size) * 100)}/></CourseProgresBar>
                                                </CourseProgresWrapper>
                                        }
                                    </CoursesElemWrapper>
                                )
                            })
                        }
                    </CoursesListWrapper>
                </PersonalCoursesWrapper>
                <FreeCoursesWrapper>
                    <FreeCoursesTitle>Бесплатные вводные курсы</FreeCoursesTitle>
                    <CoursesListWrapper>
                        {
                            freeCourses.map((elem:any)=>{
                                return (
                                    <CoursesElemWrapper bgColor={elem.bgColor}>
                                        <CourseTitleWrapper>
                                            <CourseTitleText>{elem.title}</CourseTitleText>
                                            <CourseTitleImage src={elem.mini_img}/>
                                        </CourseTitleWrapper>
                                        {elem.warning ?
                                                <CourseWarningWrapper>
                                                    <CourseWarningIcon src="./images/course_warning_icon.svg"/>
                                                    <CourseWarningText>{elem.warning}</CourseWarningText>
                                                </CourseWarningWrapper>
                                                :
                                                null
                                        }
                                        {
                                            elem.progres === 0 ?
                                                <CourseInfoWrapper>
                                                    <CourseInfoText>
                                                        {elem.additional_info}
                                                    </CourseInfoText>
                                                </CourseInfoWrapper>
                                                :
                                                <CourseProgresWrapper>
                                                    <CourseProgresText>{elem.progres} из {elem.all_size} лекций пройдено!</CourseProgresText>
                                                    <CourseProgresBar><CourseInnerProgresBar progres={((elem.progres / elem.all_size) * 100)}/></CourseProgresBar>
                                                </CourseProgresWrapper>
                                        }
                                    </CoursesElemWrapper>
                                )
                            })
                        }
                    </CoursesListWrapper>
                </FreeCoursesWrapper>
                <TestWrapper>
                    <TestWrapperTitle>Профориентационные тесты для вышего резюме</TestWrapperTitle>
                    <TestWrapperSubtitle>В результате получите сертификат, который можно приложить к портфолио</TestWrapperSubtitle>
                    <TestProgramsListWrapper>
                        {
                            testList.map((elem:any)=>{
                                return (
                                    <TestProgramsListElem bg={elem.bg_img}>
                                        <TestProgramTitle>{elem.title}</TestProgramTitle>
                                        <TestProgramSubtitle>{elem.subtitle}</TestProgramSubtitle>
                                        <TestProgramButton>{elem.button_text}</TestProgramButton>
                                    </TestProgramsListElem>
                                )
                            })
                        }
                    </TestProgramsListWrapper>
                </TestWrapper>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`
        white-space: pre-wrap
`
const PersonalCoursesWrapper = styled.div`
    padding: 40px 100px;
    font-family: 'Montserrat';
`
const PersonalCoursesTitle = styled.p`
    font-size: 28px;
    font-weight: 700;
    color: #101010;
`
const CoursesListWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 25px;
    font-family: 'Montserrat';

`
interface ICoursesElemWrapper {
    bgColor: string;
}
const CoursesElemWrapper = styled.div<ICoursesElemWrapper>`
    background-color: ${props => props.bgColor};
    width: 400px;
    height: 165px;
    padding: 16px;
    border-radius: 12px;
    position: relative;
`
const CourseTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const CourseTitleText = styled.p`
    white-space: pre-wrap
    font-size: 20px;
    font-weight: 600;
    color: #101010;
    font-family: 'Montserrat';
`
const CourseTitleImage = styled.img`

`
const CourseWarningWrapper = styled.div`
    display: flex;
    align-items: center;
    background: #FC505529;
    border-radius: 3px;
    width: max-content;
    padding: 2px 5px;
    margin-top: 10px;
`
const CourseWarningText = styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    color: #5A6E85;
`
const CourseWarningIcon = styled.img`
    padding-right: 5px;
`

const CourseInfoWrapper = styled.div`
    position: absolute;
    bottom: 16px;
`
const CourseInfoText = styled.p`
    color: #5A6E85;
    font-size: 14px;
    font-family: 'Roboto';
`
const CourseProgresWrapper = styled.div`
    position: absolute;
    bottom: 16px;
    
`
const CourseProgresText = styled.p`
    font-family: 'Roboto';
    color: #5A6E85;
    font-size: 14px;
`
const CourseProgresBar = styled.div`
    margin-top: 4px;
    width: 365px;
    border-radius: 4px;
    position: relative;
    background-color: white;
    height: 17px;
    position: relative;
`
interface ICourseInnerProgresBar{
    progres: number;
   
}
const CourseInnerProgresBar = styled.div<ICourseInnerProgresBar>`
    width: ${props => props.progres}%;
    position: relative;
    height: 17px;
    background-color: #0F3A9B;
    border-radius: 4px;
`
const FreeCoursesWrapper = styled.div`
    padding: 40px 100px;
    font-family: 'Montserrat';
`
const FreeCoursesTitle = styled.p`
    font-size: 28px;
    font-weight: 700;
    color: #101010;
`
const TestWrapper = styled.div`
    padding: 40px 100px;
    font-family: 'Montserrat';
`
const TestWrapperTitle = styled.p`
    font-size: 28px;
    font-weight: 600;
`
const TestWrapperSubtitle = styled.p`
    font-family: 'Roboto';
    color: #5A6E85;
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;   
`
const TestProgramsListWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
`
interface ITestProgramsListElem {
    bg: string;
}
const TestProgramsListElem = styled.div<ITestProgramsListElem>`
    background-image: url('./images/${props => props.bg}');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 608px;
    padding: 16px;
    height: 192px;
`
const TestProgramTitle = styled.p`
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
`
const TestProgramSubtitle = styled.p`
    font-family: Roboto;
    margin-top: 12px;
    font-size: 14px;
    font-weight: 400;
    color: #5A6E85;
    line-height: 20px;
    letter-spacing: 0em;
`
const TestProgramButton = styled.button`
    font-family: 'Roboto';
    margin-top: 16px;
    background-color: white;
    font-size: 16px;
    color: #101010;
    border: none;
    border-radius: 1px;
    padding: 12px 24px;
    cursor: pointer;
`
export default PersonalCabinetPage;