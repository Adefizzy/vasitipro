import  React , {useState} from 'react';
import styled from 'styled-components';
import {Row, Col, Input, Radio} from 'antd';
import { getCenter } from '../utils/getCenter';
import { device } from '../globalAccets/breakingPoints';
import { theme } from '../globalAccets/theme';
import { fontFamily } from '../globalAccets/fontFamily';
import { FiPaperclip } from 'react-icons/fi';
import { UseDataContext } from '../DataContext';
import { useHistory } from 'react-router-dom';

const { TextArea } = Input;

export const DataForm = (props) => {
    const {dataBase, setDataBase} = UseDataContext();
    const [personType, setPersonType] = useState('');
    const [name, setName] = useState({firstname:'', lastname: ''});
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const history = useHistory()

    

    const onRadioChange = (e) => {
        setPersonType(e.target.value);
    }

    const handleNameChange = (e, nameType) => {
        console.log(e.target.value)
        console.log(name);
        if(nameType === 'firstname'){
            setName(prevState => {
                prevState.firstname = e.target.value;
                return prevState;
            })
        }else if(nameType === 'lastname'){
            setName(prevState => {
                prevState.lastname = e.target.value;
                return prevState;
            })
        }
    }

    const handledescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('clicked')
        let userData = {};

        userData.name = `${name.firstname} ${name.lastname}`;
        userData.location = location;
        userData.type = personType;
        userData.description = description;

        setDataBase(prevState => {
            return [...prevState, userData];
        });
        setPersonType('')
        setName({firstname:'', lastname: ''})
        setDescription('')
        setLocation('')

        history.push('/')
    }
    return (
        <Row>
            <Col sm={{span: 24}} style={{backgroundColor: '#dddddd', minHeight: '100vh' , display: 'grid', placeItems: 'center'}}>
                <StyledForm>
                    <h1>Share your amazing story!</h1>
                    <StyledInputWidhLabel>
                        <p>Upload your Picture</p>
                        <StyledUpload> 
                            <p>Choose Image</p>
                            <FiPaperclip/>
                        </StyledUpload>
                    </StyledInputWidhLabel>
                    <StyledNameInput>
                    <StyledInputWidhLabel>
                        <p>First Name</p>
                        <div>
                            <StyledInput onChange={(e) => handleNameChange(e, 'firstname')} bordered={false}/>
                        </div>
                    </StyledInputWidhLabel>
                    <StyledInputWidhLabel>
                        <p>Last Name</p>
                        <div>
                            <StyledInput onChange={(e) => handleNameChange(e, 'lastname')}  bordered={false}/>
                        </div>
                    </StyledInputWidhLabel>
                    </StyledNameInput>

                    <StyledInputWidhLabel>
                    <p>Share your story</p>
                        <div>
                            <StyledTextArea onChange={handledescriptionChange}   rows={6} bordered={false}/>
                        </div>
                    </StyledInputWidhLabel>
                    <StyledRadioComponent>
                        <p>What did you interact with Vasiti as?</p>
                    <Radio.Group onChange={onRadioChange} value={personType}>
                        <Radio value='customer'>Customer</Radio>
                        <Radio value='vendor'>Vendor</Radio>
                    </Radio.Group>
                    </StyledRadioComponent>
                    <StyledInputWidhLabel>
                        <p>City or Higher Institution (for Students)</p>
                        <div>
                            <StyledInput onChange={handleLocationChange}  bordered={false}/>
                        </div>
                    </StyledInputWidhLabel>
                    <ButtonDiv>
                        <StyledButton type='submit' onClick={handleSubmit}>Share your story!</StyledButton>
                    </ButtonDiv>
                    
                </StyledForm>


            </Col>
        </Row>
    );
};

const StyledForm = styled.div`
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    padding: 32px;


    & h1{
        font-family: ${fontFamily.inter};
        font-weight: 700;
        font-size: 28px;
        width: 80%;
        margin-left:auto;
        margin-right:auto;
    }

    @media ${device.laptop}{
        width: 50%;
    }
`
const StyledInputWidhLabel = styled.div`
    height: fit-content;
   & p{
       font-family: ${fontFamily.roboto};
       color: #676767;
       font-size: 14px;
       margin-bottom: 13px;
   }

   & > div{
    border: 1px solid #EAEAEA;
    overflow: hidden;
    border-radius: 8px;
   }

   @media ${device.laptop}{
       
        & p{
            font-size: 1.1vw;
        }
   }
`

const StyledUpload = styled.div`
        padding: 0px 32px;
        ${getCenter({justifyContent: 'space-between'})};
        & p{
            font-size: 16px;
            font-family: ${fontFamily.roboto};
            font-weight: 400;
        }

        @media ${device.laptop}{
    
       & p{
           font-size: 1.3vw;
       
       }
  
    }
`

const StyledInput = styled(Input)`
    border: none; 
    width: 100%;
    padding: 20px 32px;
    &:focus{
        outline: none;
    }
`

const StyledNameInput = styled.div`
    ${getCenter({justifyContent: 'space-between'})};

    & >div{
        flex-basis: 45%;
    }
`

const StyledTextArea = styled(TextArea)`
    border: none; 
    width: 100%;
    padding: 20px 32px;
    &:focus{
        outline: none;
    }
`

const StyledRadioComponent = styled.div`
    color: ${theme.black};
    ${getCenter({justifyContent: 'space-between'})};
`

const StyledButton = styled.button`
    background-color: ${theme.primaryColor};
    border: none;
    box-shadow: 2px 8px 30px rgba(230, 83, 0, 0.18);
    border-radius: 8px;
    color: #fff;
    font-size: 20px;
    font-family: ${fontFamily.inter};
    font-weight: 600;
    padding: 19px 40px;
    margin-left: auto;
`

const ButtonDiv = styled.div`
    width: 100%;
    ${getCenter({alignItems: 'flex-end'})};
    margin-top: 30px;
`