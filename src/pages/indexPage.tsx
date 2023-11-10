import styled from 'styled-components';
import {
    WelcomeHeaderUI
}   from '../';
import { link } from 'fs';

interface Props{

}



function IndexPage(props: Props){


    const programs_buff_data: any = [
        {"start": "Старт: 16 ноября", "img_link": "program1", "keywords_array": ["Очно", "6 мес"], "title": "Устойчивое развитие бизнеса", "subtitle": "Для владельцев в сфере Fintech"},
        {"start": "Старт: 16 ноября", "img_link": "program2", "keywords_array": ["Очно", "6 мес"], "title": "Устойчивое развитие бизнеса", "subtitle": "Для владельцев в сфере Fintech"},
        {"start": "Уже идет", "img_link": "program1", "keywords_array": ["Очно", "6 мес"], "title": "Устойчивое развитие бизнеса", "subtitle": "Для владельцев в сфере Fintech"},
        {"start": "Старт: 16 ноября", "img_link": "program1", "keywords_array": ["Очно", "6 мес"], "title": "Устойчивое развитие бизнеса", "subtitle": "Для владельцев в сфере Fintech"},
        {"start": "Старт: 16 ноября", "img_link": "program1", "keywords_array": ["Очно", "6 мес"], "title": "Устойчивое развитие бизнеса", "subtitle": "Для владельцев в сфере Fintech"},
        {"start": "Старт: 16 ноября", "img_link": "program1", "keywords_array": ["Очно", "6 мес"], "title": "Устойчивое развитие бизнеса", "subtitle": "Для владельцев в сфере Fintech"},
    ]


    const teachers_buff_data: any = [
        {"img_link": "teacher1"},
        {"img_link": "teacher2"},
        {"img_link": "teacher3"},
    ]

    const test = [1,2,3];

    return(
        <ExternalWrapper>
            <WelcomeHeaderUI/>
            <OfferWrapper>
                <OfferInnerWrapper>
                    <OfferTextWrapper>
                        <OfferTextMain>Корпоративный <br/> университет</OfferTextMain>
                        <OfferTextSubmain>Развиваем лидеров в сфере финансов</OfferTextSubmain>
                        <OfferTextButton>Смотреть курсы</OfferTextButton>
                    </OfferTextWrapper>
                    <OfferImageWrapper>
                        <OfferMainImg src="./images/offer_human_img.png"/>
                    </OfferImageWrapper>
                </OfferInnerWrapper>
            </OfferWrapper>
            <EducationProgramsWrapper>
                <OfferBlocksWrapper>
                    <OfferBlockElemWrapper>
                        <OfferBlockElemTitle>Более 500</OfferBlockElemTitle>
                        <OfferBlockElemPlainText>образовательных решений для развития навыков</OfferBlockElemPlainText>
                    </OfferBlockElemWrapper>
                    <OfferBlockElemWrapper>
                        <OfferBlockElemTitle>340+</OfferBlockElemTitle>
                        <OfferBlockElemPlainText>преподавателей и спикеров</OfferBlockElemPlainText>
                    </OfferBlockElemWrapper>
                    <OfferBlockElemWrapper>
                        <OfferBlockElemTitle>55 000+</OfferBlockElemTitle>
                        <OfferBlockElemPlainText>слушателей ежегодно</OfferBlockElemPlainText>
                    </OfferBlockElemWrapper>
                    <OfferBlockElemWrapper>
                        <OfferBlockElemTitle>38</OfferBlockElemTitle>
                        <OfferBlockElemPlainText>аудиторий и конференц-залов</OfferBlockElemPlainText>
                    </OfferBlockElemWrapper>
                </OfferBlocksWrapper>
                <EducationProgramsTitle>Программы обучения</EducationProgramsTitle>
                <EducationProgramsSelectWrapper>
                    <EducatuonProgramsSelectElemButton>Все</EducatuonProgramsSelectElemButton>
                    <EducatuonProgramsSelectElemButton>Очно</EducatuonProgramsSelectElemButton>
                    <EducatuonProgramsSelectElemButton>Очно-заочно</EducatuonProgramsSelectElemButton>
                    <EducatuonProgramsSelectElemButton>Soft skills</EducatuonProgramsSelectElemButton>
                    <EducatuonProgramsSelectElemButton>Hard skills</EducatuonProgramsSelectElemButton>
                    <EducatuonProgramsSelectElemButton>Digital skills</EducatuonProgramsSelectElemButton>
                    <EducatuonProgramsSelectElemButton>12 месяцев</EducatuonProgramsSelectElemButton>
                    <EducatuonProgramsSelectElemButton>6 месяцев</EducatuonProgramsSelectElemButton>
                    <EducatuonProgramsSelectElemButton>3 месяца</EducatuonProgramsSelectElemButton>
                </EducationProgramsSelectWrapper>
                <ProgramsList>
                    {programs_buff_data.map((elem:any)=>{
                        return <ProgramElemCard link={elem.img_link}></ProgramElemCard>
                    })}
                </ProgramsList>
                <ShowMoreProgramsWrapper>
                    <ShowMoreProgramsButton>Показать еще</ShowMoreProgramsButton>
                </ShowMoreProgramsWrapper>
            </EducationProgramsWrapper>
            <TeachersWrapper>
                <TeachersHeaderWrapper>
                    <TeachersHeaderTextWrapper>
                        <TeachersTitleText>Преподаватели</TeachersTitleText>
                        <TeachersSubtitleText>Пару слов о преподавателях, которые будут принимать участие в этом    </TeachersSubtitleText>
                    </TeachersHeaderTextWrapper>
                    <TeachersHeaderSliderNavigationWrapper>
                        <TeachersHeaderSliderLeftNavigateButton>
                            <TeachersHeaderSliderLeftNavigateButtonIcon src="./images/index_left_slider_arrow.svg"/>
                        </TeachersHeaderSliderLeftNavigateButton>
                        <TeachersHeaderSliderRightNavigateButton>
                            <TeachersHeaderSliderRightNavigateButtonIcon src="./images/index_left_slider_arrow.svg"/>
                        </TeachersHeaderSliderRightNavigateButton>
                    </TeachersHeaderSliderNavigationWrapper>
                </TeachersHeaderWrapper>
                <TeachersCardList>
                    {teachers_buff_data.map((elem:any)=>{
                        return <TeachersCardElem img_link={elem.img_link}></TeachersCardElem>
                    })}
                </TeachersCardList>
            </TeachersWrapper>
        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    
`


const OfferWrapper = styled.div`
    background-color: #F0F5FE;
`
const OfferInnerWrapper = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0px 100px;
`
const OfferTextWrapper = styled.div`
    margin-top: 60px;
`

const OfferTextMain = styled.h1`
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px;
    margin-bottom: 16px;
`
const OfferTextSubmain = styled.h2`
    color: #101010;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; 
    
`
const OfferTextButton = styled.button`
    background: #FF4B5F;
    color: white;
    padding: 16px 24px;
    margin-top: 50px;
    border: none;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; 
    cursor: pointer;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`

const OfferImageWrapper = styled.div`

`
const OfferMainImg = styled.img`

`


const EducationProgramsWrapper = styled.div`
    background-color: white;
    
    margin: 0px 100px;
`
const OfferBlocksWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 70px;
`
const OfferBlockElemWrapper = styled.div`
    padding: 24px;
    background-color: #FAFBFD;
    width: 310px;
`
const OfferBlockElemTitle = styled.p`
    color: #101010;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; 
    margin-bottom: 10px;
`
const OfferBlockElemPlainText = styled.p`
    color: #5A6E85;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`
const EducationProgramsTitle = styled.p`
    color: #101010;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; 
`
const EducationProgramsSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;
`
const EducatuonProgramsSelectElemButton = styled.p`
    cursor: pointer;
    background-color: white;
    border: 1px solid #E6EAEE;
    color: #101010;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    padding: 12px 16px;
    margin-right: 16px;
    &:first-child{
        background-color: #0F3A9B;
        color: white;
    }
    &:last-child{
        margin-right: 0px;
    }
`

const ProgramsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 32px;
`

interface IProgramElemCard {
    link: string;
}
const ProgramElemCard = styled.div<IProgramElemCard>`
    background-image: url('./images/${props=>props.link}.jpg');
    width: 400px;
    height: 520px;
`
const ProgramCardHeader = styled.p`

`
const ProgramAbout = styled.div`

`
const ShowMoreProgramsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;
    justify-content: center;
`
const ShowMoreProgramsButton = styled.button`
    border: 1px solid rgba(15, 15, 15, 0.20);
    padding: 16px 32px;
    color: #101010;
    background: white;
    cursor: pointer;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`


const TeachersWrapper = styled.div`
    margin: 60px 100px;
`
const TeachersHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
const TeachersHeaderTextWrapper = styled.div`

`
const TeachersHeaderSliderNavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 34px;
`
const TeachersHeaderSliderLeftNavigateButton = styled.div`
    background: #F0F5FE;
    border-radius: 50%;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    cursor: pointer;
`
const TeachersHeaderSliderLeftNavigateButtonIcon = styled.img`

`
const TeachersHeaderSliderRightNavigateButton = styled.div`
    background: #F0F5FE;
    border-radius: 50%;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const TeachersHeaderSliderRightNavigateButtonIcon = styled.img`
    transform: rotate(180deg);
`   
const TeachersTitleText = styled.p`
    color: #101010;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 24px;
`
const TeachersSubtitleText = styled.p`
    color: #101010;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`
const TeachersCardList = styled.div`
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

interface ITeachersCardElem {
    img_link: string;
}

const TeachersCardElem = styled.div<ITeachersCardElem>`
    background-image: url('./images/${props=>props.img_link}.jpg');
    height: 520px;
    width: 290px;
    background-size: cover;
`


export default IndexPage;