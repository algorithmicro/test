import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.p`
    font-size: 15px;
    margin-top: 38px;
    margin-bottom: 6px;
    color: ${props => (props.error ? 'red' : 'initial')};
`;

export const Input = styled.input`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    padding: 10px 5px;
    margin-bottom: 20px;
    border-color: ${props => (props.error ? 'red' : 'initial')};
`;
