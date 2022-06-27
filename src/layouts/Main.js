import { Navigation, Pagination } from 'swiper';
import Container from "../components/others/Container";
import Bar from '../components/Bar'
import { Swiper, SwiperSlide } from 'swiper/react';
import InfoBlock from '../components/others/InfoBlock'

import Gallery from '../components/Gallery'
import TextSep from '../components/others/TextSep'

import HeaderText from '../components/others/HeaderText'
import Icon from '../components/others/Icon'

import Chart from '../components/Chart'

import FormContact from '../components/FormContact'

import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/main.css'

function Main() {
    return (
        <div>
            <div class="header finisher-header" style={{ width: '100%' }}>
            <Bar></Bar>
            <Container>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={2.2}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="slider-slide">
                            <p>Hello world!</p>
                            <div className="slider-image-black" />
                            <img src='https://s0.rbk.ru/v6_top_pics/media/img/5/42/756148486049425.jpg' alt="slide 1"></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-slide">
                            <p>Hello world!</p>
                            <div className="slider-image-black" />
                            <img src='https://s0.rbk.ru/v6_top_pics/media/img/5/42/756148486049425.jpg' alt="slide 1"></img>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-slide">
                            <p>Hello world!</p>
                            <div className="slider-image-black" />
                            <img src='https://s0.rbk.ru/v6_top_pics/media/img/5/42/756148486049425.jpg' alt="slide 1"></img>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <HeaderText>Монолитные работы</HeaderText>

                <div className='outer-infoblocks'>
                        <div class="infoblock">
                            <Icon data="fa-duotone fa-ribbon"></Icon>
                            <p>Ленточный фундамент</p>
                        </div>
                    <div class="infoblock">
                        <Icon data="fa-duotone fa-ribbon"></Icon>
                        <p>Ленточный фундамент</p>
                    </div>
                    <div class="infoblock">
                        <Icon data="fa-duotone fa-ribbon"></Icon>
                        <p>Ленточный фундамент</p>
                    </div>
                    <div class="infoblock">
                        <Icon data="fa-duotone fa-ribbon"></Icon>
                        <p>Ленточный фундамент</p>
                    </div>
                    <div class="infoblock">
                        <Icon data="fa-duotone fa-ribbon"></Icon>
                        <p>Ленточный фундамент</p>
                    </div>
                </div>

                <HeaderText>Галлерея</HeaderText>
                <Gallery></Gallery>
                <p className='gallery-info'>Ещё <span>123</span> изоображения...</p>
                <HeaderText>Почему монолитные работы это выгодно?</HeaderText>
                <div className='infoblock-outer'>
                    <InfoBlock></InfoBlock>
                    <div className='text-sep-outer-block'>
                        <TextSep>Гораздо чаще застройщики прибегают к монолитно-каркасному строительству. Это означает, что монолитным будет только скелет дома – несущие колонны и перекрытия. Все остальные элементы: межкомнатные, межквартирные стены и фасад возведут из других материалов, например, кирпича, газобетона, пеноблоков, газосиликата и т.д. Самый популярный на сегодняшний день вариант – монолитно-кирпичная технология. Такие дома хороши не только тем, что квартиры в них стоят дешевле, чем в цельных монолитных. К преимуществам относится более высокая теплоизоляция за счет свойств кирпича. Также по кирпичным стенам звук проходит хуже, чем по бетону. Но зато такой дом возводится чуть дольше полностью монолитного.</TextSep>
                        <TextSep>Гораздо чаще застройщики прибегают к монолитно-каркасному строительству. Это означает, что монолитным будет только скелет дома – несущие колонны и перекрытия. Все остальные элементы: межкомнатные, межквартирные стены и фасад возведут из других материалов, например, кирпича, газобетона, пеноблоков, газосиликата и т.д. Самый популярный на сегодняшний день вариант – монолитно-кирпичная технология. Такие дома хороши не только тем, что квартиры в них стоят дешевле, чем в цельных монолитных. К преимуществам относится более высокая теплоизоляция за счет свойств кирпича. Также по кирпичным стенам звук проходит хуже, чем по бетону. Но зато такой дом возводится чуть дольше полностью монолитного.</TextSep>               
                    </div>
                </div>

                <HeaderText>Почему именно мы?</HeaderText>
                <div className='infoblock-outer'>
                    <div style={{flex: 1}}>
                        <Chart></Chart>
                    </div>
                    <div style={{flex: 1}} className='text-sep-outer-block'>
                        <TextSep>Гораздо чаще застройщики прибегают к монолитно-каркасному строительству. Это означает, что монолитным будет только скелет дома – несущие колонны и перекрытия. Все остальные элементы: межкомнатные, межквартирные стены и фасад возведут из других материалов, например, кирпича, газобетона, пеноблоков, газосиликата и т.д. Самый популярный на сегодняшний день вариант – монолитно-кирпичная технология. Такие дома хороши не только тем, что квартиры в них стоят дешевле, чем в цельных монолитных. К преимуществам относится более высокая теплоизоляция за счет свойств кирпича. Также по кирпичным стенам звук проходит хуже, чем по бетону. Но зато такой дом возводится чуть дольше полностью монолитного.</TextSep>
                    </div>
                </div>

                <div className='infoblock-outer'>
                    <div style={{flex: 1}}>
                        <Chart></Chart>
                    </div>
                    <div style={{flex: 1}} className='text-sep-outer-block'>
                        <TextSep>Гораздо чаще застройщики прибегают к монолитно-каркасному строительству. Это означает, что монолитным будет только скелет дома – несущие колонны и перекрытия. Все остальные элементы: межкомнатные, межквартирные стены и фасад возведут из других материалов, например, кирпича, газобетона, пеноблоков, газосиликата и т.д. Самый популярный на сегодняшний день вариант – монолитно-кирпичная технология. Такие дома хороши не только тем, что квартиры в них стоят дешевле, чем в цельных монолитных. К преимуществам относится более высокая теплоизоляция за счет свойств кирпича. Также по кирпичным стенам звук проходит хуже, чем по бетону. Но зато такой дом возводится чуть дольше полностью монолитного.</TextSep>
                    </div>
                </div>

                <div className='infoblock-outer'>
                    <div style={{flex: 1}}>
                        <Chart></Chart>
                    </div>
                    <div style={{flex: 1}} className='text-sep-outer-block'>
                        <TextSep>Гораздо чаще застройщики прибегают к монолитно-каркасному строительству. Это означает, что монолитным будет только скелет дома – несущие колонны и перекрытия. Все остальные элементы: межкомнатные, межквартирные стены и фасад возведут из других материалов, например, кирпича, газобетона, пеноблоков, газосиликата и т.д. Самый популярный на сегодняшний день вариант – монолитно-кирпичная технология. Такие дома хороши не только тем, что квартиры в них стоят дешевле, чем в цельных монолитных. К преимуществам относится более высокая теплоизоляция за счет свойств кирпича. Также по кирпичным стенам звук проходит хуже, чем по бетону. Но зато такой дом возводится чуть дольше полностью монолитного.</TextSep>
                    </div>
                </div>

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

export default Main;