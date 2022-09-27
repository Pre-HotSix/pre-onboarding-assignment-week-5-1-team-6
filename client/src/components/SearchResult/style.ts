import styled from "styled-components";

export const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 15px;
`;

export const RowText = styled.span`
font-size: 14px;
margin-left: 10px;
`;

export const RecommendTitle = styled.div`
font-size: ${({ theme }) => theme.fontSize.X_SMALL};
color: ${({ theme }) => theme.colors.GRAY};
margin-bottom: 10px;
`;