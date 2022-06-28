import Container from "../components/others/Container";
import Bar from '../components/Bar'
import HeaderText from '../components/others/HeaderText'
import FormContact from '../components/FormContact'
import '../styles/main.css'

function About() {
    return (
        <div>
            <div class="header finisher-header" style={{ width: '100%' }}>
                <Bar></Bar>
                <Container>
                    <p>HELLO, ABOUT!</p>
                    <HeaderText>Мы свяжемся с вами</HeaderText>
                </Container>
            </div>
            <FormContact />
            <div className='footer-outer'>
                <Container>
                    <div className='footer-outer'>
                        <p>ЭЛЕКТРОСТРОЙ</p>
                        <p>2022г.</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default About;