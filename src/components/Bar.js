import '../styles/bar.css' 
import Icon from '../components/others/Icon'
import { ReactComponent as LogoSite } from '../imgs/Logo.svg';

function Bar() {
    return (
        <div className='bar-wrapper'>
            <div className='bar-section-left'>
                <LogoSite className='bar-logo'></LogoSite>
                <p className="bar-title">ЭЛИТСТРОЙ<span className='bar-title-gray'>СЕРВИС</span></p>
            </div>
            <div className='bar-section-right'>
                <div className='bar-item-userblock'>
                    <div className='bar-item-username'>Павел</div>
                    <div className='bar-item-usericon'><Icon data="far fa-user" /></div>
                </div>
                <div className='bar-item-url'>Главная</div>
                <div className='bar-item-url'>О нас</div>
                <div className='bar-item-url'>Контакты</div>
                <div className='bar-itemicon-wrapper'>
                    <Icon className='bar-itemicon secondary' data="fa-regular fa-envelope-dot"/>
                    <Icon className='bar-itemicon primary' data="fa-regular fa-phone"/>
                </div>
            </div>
        </div>
    )
}

export default Bar