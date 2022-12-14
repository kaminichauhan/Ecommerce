
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeroSection = ({myData}) => {

    const { name } = myData;
    return (
        <Wrapper>
            <div className='container'>
                <div className='herodata'>
                    <div className='hero-section-data'>
                        <p>Welcome to</p>
                        <h1>{name }</h1>
                        <p>Lorem ipsum dolor sit amet conselccteur adipiscing elit.Molestias
                            atque temporibus veniam doloribus libero ad error omins voluptates
                            animi! Suscipit sapiente.
                        </p>
                        <NavLink to="/products">
                            <Button >show now</Button>
                        </NavLink>
                    </div>
                    <div className='hero-section-image'>
                        <figure>
                            <img src="../shop.jpg" alt="hero-section" className='image-style' />
                        </figure>
                    </div>
                </div>
            </div>
        </Wrapper>
    );

};

const Wrapper = styled.section`
padding: 8rem 0;
    .herodata{
        display: grid;
        grid-template-columns: auto auto;
    }
 .hero-section-data {
    padding: 0 2rem;
    p{
        margin: 2rem 0;
    }
    h1{
        text-transform: capitalize;
        font-weight: bold;

    }
    .intro-data {
        margin-bottom: 0;
    }
}

@media (max-width:${({ theme })=>theme.media.mobile}) {
    .herodata{
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns:none;
        justify-content    : center;
        align-items: center;
}}
/* .hero-section-image{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
figure{
    position: relative;
}
&::after{
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81,56,238,0.4);
    position: absolute;
left: 50%;
top: -5rem;
z-index: -1;

}
.image-style{
    width: 100%;
    height: auto; */

.image-style{
    width: 50rem;
    border-radius: 1rem;
    box-shadow: 2px 2px 5px gray;
}
 

`;

export default HeroSection;
