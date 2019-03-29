import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 5px 10px;
    border: 1px solid grey;
    border-radius: 5px;
    overflow-y: scroll;
    margin-top:10px;
    
`;

export const Text = styled.p`
    margin-top:30px;
    font-size:15px;
`;

export const Item = styled.p`
    color: orange;
    margin-bottom: 5px;
    &:nth-last-child(1) {
        margin-bottom: 0;
    }
    font-size:11px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
