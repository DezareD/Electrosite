import '../styles/bar.css'
import Icon from '../components/others/Icon'

function Bar() {
    return (
        <div className='bar-wrapper'>
            <div className='bar-section-left'>
                <p className="bar-title">ЭЛИТСТРОЙ<span className='bar-title-gray'>СЕРВИС</span></p>
            </div>
            <div className='bar-section-right'>
                <div>Павел</div>
                <div>Главная</div>
                <div>О нас</div>
                <div>Контакты</div>
                <div><Icon data="fa-solid fa-air-conditioner"/></div>
            </div>
        </div>
    )
}

export default Bar