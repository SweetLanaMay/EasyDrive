import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
row-gap: 50px;
column-gap: 29px;
justify-content: center;
align-items: center;
margin-bottom: 100px;
`;

export const CarCardWrapper = styled.li`
position: relative;
display: flex;
flex-direction: column;
`;

export const HeartButton = styled.button`
position: absolute;
top: 14px;
right: 14px;
background: none;
border: none;

`;

export const CarPhoto = styled.img`
width: 274px;
height: 268px;
border-radius: 14px;
background: #F3F3F2;
margin-bottom: 14px;
object-fit: cover;
`;

export const CarInfoWrapper = styled.div`
display: flex;
justify-content: space-between;
// gap: 87px;
`;

export const CarTitle = styled.p`
display: flex;
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 24px;
margin-bottom: 8px;
`;

export const CarModel = styled.span`
color: #3470FF;
font-size: 16px;
font-weight: 500;
line-height: 24px;
`;

export const CarPrice = styled.p`
color: #121417;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
`;

export const Description = styled.div`
max-width: 270px;
color: rgba(18, 20, 23, 0.50);
font-size: 12px;
line-height: 18px;
margin-bottom: 35px;
`;

export const LearnMoreButton = styled.button`
display: flex;
width: 274px;
height: 44px;
padding: 12px 99px;
justify-content: center;
align-items: center;
border: none;
border-radius: 12px;
color: white;
background: #3470FF;
font-weight: 600;
line-height: 20px; 

&:hover {
background: #0B44CD;
}
`;
