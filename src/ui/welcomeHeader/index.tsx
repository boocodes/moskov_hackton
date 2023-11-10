import styled from "styled-components";
import {
    RegionPopup,
    HeaderSearchPopup
} from '../../';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props{


}


function WelcomeHeaderUI(props:Props){

    const navigate = useNavigate();
    const [changeRegionFlag, setChangeRegionFlag] = useState<boolean>(false);
    const [searchPopupFlag, setSearchPopupFlag] = useState<boolean>(false);

    return(
        <ExternalWrapper>
            {
                changeRegionFlag ? <RegionPopup changeRegionFlag={setChangeRegionFlag}/> : null
            }
            {
                searchPopupFlag ? <HeaderSearchPopup changeSearchFlag={setSearchPopupFlag}/> : null
            }
            <FirstLevelHeaderWrapper>
                <SovkomBankLogoWrapper>
                    <SovkomBankLogoImg src="./images/sovkombank_logo.png"/>
                    <SovkomBankUniverstityLabelLogo>Университет</SovkomBankUniverstityLabelLogo>
                </SovkomBankLogoWrapper>
                <HeaderFirstLevelLinksWrapper>
                    <PrivateClientsLink href="https://sovcombank.ru/">Частным клиентам</PrivateClientsLink>
                    <ForBusinessLink href="https://sovcombank.ru/business/krediti">Бизнесу</ForBusinessLink>
                    <CIBLink href="https://sovcombank.ru/corporate">CIB</CIBLink>
                    <AboutBankLink href="https://sovcombank.ru/about/info">О банке</AboutBankLink>
                    <HeaderFirstLevelLinksHorizontalLineSeporate></HeaderFirstLevelLinksHorizontalLineSeporate>
                    <HelpLink href="https://sovcombank.ru/help">Помощь</HelpLink>
                    <NewsLink href="https://sovcombank.ru/articles">Новости</NewsLink>
                    <OfficesAndBankomatsLinkWrapper href="https://sovcombank.ru/office">
                        <OfficesAndBankomatsLinkIcon src="./images/header_geo_icon.svg"/>
                        <OfficesAndBankomatsLink>Офисы и банкоматы</OfficesAndBankomatsLink>
                    </OfficesAndBankomatsLinkWrapper>
                    <HeaderFirstLevelLinksHorizontalLineSeporate></HeaderFirstLevelLinksHorizontalLineSeporate>
                    <PhoneNumberLink href="tel:88001000060">8 800 1000060</PhoneNumberLink>
                    <GeoCityLinkWrapper onClick={()=>setChangeRegionFlag(true)}>
                        <GeoCityLinkIcon src="./images/geo_city_icon.svg"/>
                        <GeoCityLinkText>Москва</GeoCityLinkText>
                    </GeoCityLinkWrapper>
                    <LanguageChangeButton>EN</LanguageChangeButton>
                    <SearchButton onClick={()=>setSearchPopupFlag(true)}>
                        <SearchButtonIcon src="./images/header_search_icon.svg"/>
                    </SearchButton>
                </HeaderFirstLevelLinksWrapper>
            </FirstLevelHeaderWrapper>
            <UnderFirstHeaderLine></UnderFirstHeaderLine>
            <SecondLevelHeaderWrapper>
                <SecondLevelHeaderWrapperMainLinksList>
                    <SecondLevelHeaderWrapperMainLinkElem href="https://sovcombank.ru/credits">Кредиты</SecondLevelHeaderWrapperMainLinkElem>
                    <SecondLevelHeaderWrapperMainLinkElem href="https://sovcombank.ru/cards">Ипотека</SecondLevelHeaderWrapperMainLinkElem>
                    <SecondLevelHeaderWrapperMainLinkElem href="https://sovcombank.ru/credits/ipoteka">Вклады</SecondLevelHeaderWrapperMainLinkElem>
                    <SecondLevelHeaderWrapperMainLinkElem href="https://sovcombank.ru/deposits">Инвестиции</SecondLevelHeaderWrapperMainLinkElem>
                    <SecondLevelHeaderWrapperMainLinkElem href="https://sovcombank.ru/investments">Страхование</SecondLevelHeaderWrapperMainLinkElem>
                    <SecondLevelHeaderWrapperMainLinkElem href="https://sovcombank.ru/solutions/insurance">Платежи</SecondLevelHeaderWrapperMainLinkElem>
                    <SecondLevelHeaderWrapperMainLinkElem href="https://sovcombank.ru/solutions">Сервисы</SecondLevelHeaderWrapperMainLinkElem>
                    <SecondLevelHeaderWrapperMainLinkElem href="https://sovcombank.ru/premium">Premium</SecondLevelHeaderWrapperMainLinkElem>
                    <SecondLevelHeaderWrapperMainLinkElem href="https://sovcombank.ru/currency">Обмен валют</SecondLevelHeaderWrapperMainLinkElem>
                </SecondLevelHeaderWrapperMainLinksList>
                <SecondLevelHeaderAcceptWrapper>
                    <BecomeClientButton>
                        <BecomeClientText>Стать клиентом</BecomeClientText>
                        <BecomeClientIcon src="./images/shevron_down_icon.svg"/>
                    </BecomeClientButton>
                    <HeaderFirstLevelLinksHorizontalLineSeporate></HeaderFirstLevelLinksHorizontalLineSeporate>
                    <LoginLink onClick={()=>navigate("./login")}>
                        <LoginText>Войти</LoginText>
                        <LoginIcon src="./images/header_login_icon.svg"/>
                    </LoginLink>
                </SecondLevelHeaderAcceptWrapper>
            </SecondLevelHeaderWrapper>
            <UnderSecondHeaderLine></UnderSecondHeaderLine>
            
        </ExternalWrapper>
    )

}

const ExternalWrapper = styled.div`
    
    
`
const FirstLevelHeaderWrapper = styled.div`
    display: flex;
    margin: 30px 100px;
    align-items: center;
    justify-content: space-between;
    background-color: white;
`
const SovkomBankLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
`
const SovkomBankLogoImg = styled.img`

`

const UnderFirstHeaderLine = styled.div`
    background-color: #EAECEE;
    height: 1px;
`

const SovkomBankUniverstityLabelLogo = styled.p`
    border-radius: 6px;
    background: linear-gradient(94deg, #FF4B5F 0.12%, #8B4375 100.37%);
    color: white;
    font-family: 'Roboto';
    padding: 4px 6px;
    user-select: none;
    margin-left: 15px;
`
const HeaderFirstLevelLinksWrapper = styled.div`
    display: flex;
    align-items: center;
`
const PrivateClientsLink = styled.a`
    color: #5A6E85;
    text-decoration: none;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 14px;
`
const ForBusinessLink = styled.a`
    color: #5A6E85;
    text-decoration: none;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 14px;
`
const CIBLink = styled.a`
    color: #5A6E85;
    text-decoration: none;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 14px;
`

const AboutBankLink = styled.a`
    color: #5A6E85;
    text-decoration: none;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 14px;
`
const HeaderFirstLevelLinksHorizontalLineSeporate = styled.div`
    height: 26px;
    width: 1px;
    background-color: #E1E5E9;
    margin-right: 14px;
`
const HeaderFirstLevelAdditionlLinksWrapper = styled.div`
    display: flex;
    align-items: center;
`

const HelpLink = styled.a`
    color: #5A6E85;
    text-decoration: none;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 14px;
`
const NewsLink = styled.a`
    color: #5A6E85;
    text-decoration: none;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 14px;
`


const OfficesAndBankomatsLinkWrapper = styled.a`
    display: flex;
    align-items: center;
    color: #5A6E85;
    text-decoration: none;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 14px;
`
const OfficesAndBankomatsLinkIcon = styled.img`
    margin-right: 5px;
`
const OfficesAndBankomatsLink = styled.p`

`

const PhoneNumberLink = styled.a`
    color: #5A6E85;
    text-decoration: none;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 40px;
`

const GeoCityLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    color: #5A6E85;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 14px;
`

const GeoCityLinkIcon = styled.img`
    margin-right: 5px;
`
const GeoCityLinkText = styled.p`
    padding-bottom: 2px;
`

const LanguageChangeButton = styled.p`
    color: #5A6E85;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`

const SearchButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 14px;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`
const SearchButtonIcon = styled.img`

`


const SecondLevelHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    justify-content: space-between;
    margin: 30px 100px;
`

const SecondLevelHeaderWrapperMainLinksList = styled.div`
    display: flex;
    align-items: center;
`
const SecondLevelHeaderWrapperMainLinkElem = styled.a`
    display: flex;
    align-items: center;
    color: #101010;
    text-decoration: none;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 14px;
`

const SecondLevelHeaderAcceptWrapper = styled.div`
    display: flex;
    align-items: center;
`


const BecomeClientButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #0F3A9B;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 14px;
`
const BecomeClientText = styled.p`
    margin-right: 5px;
`
const BecomeClientIcon = styled.img`

`

const LoginLink = styled.a`
    color: #0F3A9B;
    text-decoration: none;
    &:hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    
    display: flex;
    cursor: pointer;
    align-items: center;
`
const LoginText = styled.p`
    padding-bottom: 2px;
    margin-right: 5px;
`
const LoginIcon = styled.img`
    
`

const UnderSecondHeaderLine = styled.div`
    background-color: #EAECEE;
    height: 1px;
`


export default WelcomeHeaderUI;