import Container from "../components/others/Container";
import Bar from '../components/Bar'
import HeaderText from '../components/others/HeaderText'
import FormContact from '../components/FormContact'
import StageBlock from '../components/others/StageBlock'
import '../styles/main.css'
import '../styles/contacts.css'
import Icon from "../components/others/Icon";

import AnimatedText from '../components/others/AnimatedText';

function Contacts() {
    return (
        <div>
            <div class="header finisher-header" style={{ width: '100%' }}>
                <Bar></Bar>
                <Container>
                    <HeaderText>Контакты</HeaderText>
                    <br />
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-city'></Icon>  Москва</b></p>
                    </AnimatedText>
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-city'></Icon>  Москва</b></p>
                    </AnimatedText>
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-city'></Icon>  Москва</b></p>
                    </AnimatedText>
                    <br /><br /><br />
                    <AnimatedText changeX={-200} duration={0.4}>
                        <p className="information-text-contacts"><b><Icon data='far fa-city'></Icon>  Москва</b></p>
                    </AnimatedText>
                    <br />
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

export default Contacts;