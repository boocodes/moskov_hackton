import styled from "styled-components";


interface Props{
    changeSearchFlag: (flag: boolean)=> void;
}



function HeaderSearchPopup(props:Props){
    return(
        <ExternalWrapper>
            <CloseButton onClick={()=>{props.changeSearchFlag(false)}}>
                <CloseIcon src="./images/close_icon.svg"/>
            </CloseButton>
            <SearchHeader>
                <SearchForm>
                    <SearchInput type="text"/>
                    <SearchButton value=" " type="submit"/>
                </SearchForm>
            </SearchHeader>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 10;
    font-family: 'Roboto';
    background-color: white;
`

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 50px;
    top: 20px;

`
const CloseIcon = styled.img`
    width: 30px;
`


const SearchHeader = styled.div`
    padding: 50px 0px 40px 200px;
`
const SearchForm = styled.form`
    display: flex;
    align-items: center;
`
const SearchInput = styled.input`
    font-size: 18px;
    outline: none;
    padding: 5px 15px 5px 5px;
    margin-right: 30px;
    width: 400px;
`
const SearchButton = styled.input`
    background-image: url('./images/header_search_icon.svg');
    width: 30px;
    height: 30px;
    background-size: 100%;
    border: none;
    cursor: pointer;
    background-color: white;
    background-repeat: no-repeat;
    
`
const CitiesList = styled.div`
    padding: 0px 0px 40px 200px;
`
const CityElem = styled.p`
    margin-bottom: 10px;
    cursor: pointer;
`


export default HeaderSearchPopup;