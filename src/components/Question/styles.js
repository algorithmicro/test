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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

export const TextBlock = styled.p`
    font-size: 15px;
    margin-bottom: 10px;
    display: ${props => (checkIfExists(props.lastQuestion) ? 'block' : 'none')};
`;

export const Button = styled.button`
    border: none;
    background-color: purple;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
`;
