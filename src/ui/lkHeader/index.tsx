import styled from "styled-components";
import {useState} from 'react';

interface Props{


}



function LKHeader(props:Props){


    const [userWrapperFlag, setUserWrapperFlag] = useState(false);


    return(
        <>
            <ExternalWrapper>
                <LogoWrapper>
                    <SovkomBankLogoImg src="./images/sovkombank_logo.png"/>
                    <SovkomBankUniversityLogoText>Университет</SovkomBankUniversityLogoText>
                </LogoWrapper>
                <LinksWrapper>
                    <LinkElem href="./courses">Мои курсы</LinkElem>
                    <LinkElem href="./progress">Прогресс</LinkElem>
                    <LinkElem href="./schudle">Расписание</LinkElem>
                    <UserWrapper onClick={()=>setUserWrapperFlag(!userWrapperFlag)}>
                        <UserAvatar src="./images/useravatar.jpg"/>
                        <UserDataWrapper>
                            <UserName>Евдокимов Руслан</UserName>
                            <UserGroup>37491-ЭБ-4</UserGroup>
                        </UserDataWrapper>
                        {userWrapperFlag ? 
                            <RotatedUserShowMoreIcon src="./images/shevron_down_icon.svg"/>
                            :
                            <UserShowMoreIcon src="./images/shevron_down_icon.svg"/>
                        }
                        
                        
                    </UserWrapper>
                </LinksWrapper>
                {
                   userWrapperFlag ? 
                    <AdditionalPopup>


                    </AdditionalPopup>
                    :
                    null 
                }
            </ExternalWrapper>
        </>
    )
}

const ExternalWrapper = styled.div`
    display: flex;
    font-family: 'Roboto';
    align-items: center;
    padding: 20px 100px;
    border-bottom: 1px solid #EAECEE;
    justify-content: space-between;
`

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`   
const SovkomBankLogoImg = styled.img`

`
const SovkomBankUniversityLogoText = styled.p`
    text-transform: uppercase;
    background: linear-gradient(93.72deg, #FF4B5F 0.12%, #8B4375 100.37%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 21px;
    padding-bottom: 2px;
    margin-left: 10px;
`   

const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
`
const LinkElem = styled.a`
    text-decoration: none;
    color: #5A6E85;
    &:hover{
        color: #101010;
    }
    margin-right: 20px;
    
`
const UserWrapper = styled.div`
    border: 1px solid #F0F5FE;
    display: flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 5px;
    cursor: pointer;
`
const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
`
const UserDataWrapper = styled.div`
    margin-left: 10px;
    margin-right: 10px;
`
const UserName = styled.p`
    color: #101010;
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 600;
`
const UserGroup = styled.p`
    color: #5A6E85;
    font-size: 14px;
`

const UserShowMoreIcon = styled.img`

`
const RotatedUserShowMoreIcon = styled.img`
    transform: rotate(180deg);
`

const AdditionalPopup = styled.div`
    position: absolute;
    width: 400px;
    height: 200px;
    background-color: white;
    border: 1px solid #EAECEE;
    right: 100px;
    top: 100px;
`


export default LKHeader;