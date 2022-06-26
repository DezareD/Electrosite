import '../styles/formcontact.css' 
import Container from './others/Container'

function FormContact() {
    return (
        <div className='form-outer'>
            <Container>
                <div className='form-inner-wrapper'>
                    <div className='form-text-left'>
                        <div className='form-text-outer'>
                            <p className='form-text-top'>Форма обратной связи. Мы свяжемся с вами.</p>
                            <p className='form-text-medium'>Ваш вопрос не останется без овтета.</p>
                            <p className='form-text-bottom'>Оставьте заявку и наш менеджер свяжется с вами в ближайщее время.</p>
                        </div>
                    </div>
                    <div className='form-form-outer'>
                        <div className='form-block'>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='form-blackbg-block' />
            <img className='form-image' alt="form-contact" src="https://s0.rbk.ru/v6_top_pics/media/img/5/42/756148486049425.jpg" />
        </div>
    )
}

export default FormContact