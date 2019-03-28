import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 5px 0;
    border: 1px solid grey;
    border-radius: 5px;
    overflow-y: scroll;
    margin-top:20px;
`;

export const Item = styled.p`
    color: green;
    margin-bottom: 5px;
    &:nth-last-child(1) {
        margin-bottom: 0;
    }
    font-size:11px;
`;
