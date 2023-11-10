import styled from "styled-components";
import {
    LKHeader
}   from '../';


interface Props{

}


function PersonalCabinetPage(props:Props){
    return(
        <>
            <ExternalWrapper>
                <LKHeader/>
                <PersonalCoursesWrapper>
                    <PersonalCoursesTitle>Ваши курсы</PersonalCoursesTitle>
                </PersonalCoursesWrapper>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`
    
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

export default PersonalCabinetPage;