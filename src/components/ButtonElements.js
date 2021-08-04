import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button =styled(Link)`

background: ${({primary}) => (primary?'#fade75':'#935d17')};


padding: ${({big})=>(big ?'14px 48px': '12px 30px' )};
color: #fff;
font-size: 16px;
outline: none;

cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover
{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary?'#fade75':'#935d17')};
}
`