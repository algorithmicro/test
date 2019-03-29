import styled from 'styled-components';
import checkIfExists from '../../utils/checkIfExists';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Error = styled.p`
    display: ${props => (props.errorOnQuestion ? 'block' : 'none')};
    color: red;
    margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
    margin-bottom: 25px;
    resize: none;
    padding: 10px 5px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    border: ${props => (props.isGuessing ? '3px solid green' : '1px solid rgb(169, 169, 169);')};
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TextBlock = styled.p`
    font-size: 15px;
    margin-bottom: 10px;
    color: ${props => (props.isGuessingWord ? 'green' : 'initial')};
`;

export const LastQuestion = styled(TextBlock)`
    display: ${props => (checkIfExists(props.lastQuestion) ? 'block' : 'none')};
    margin-bottom: 0;
`;

export const Button = styled.button`
    border: none;
    background-color: ${props => (props.guess ? 'green' : 'purple')};
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    width: 49%;
`;
