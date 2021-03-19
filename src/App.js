import React from 'react';

import './style/normalize.css'
import './style/style.css';

import './animation.js';



import './image/ap.jpg';
import Clock from './image/Clock.jpg';



export default function App() {
  return (
    <>
  
  <header>
        <nav>
        <h1>COURSEWAY</h1>
            <ul>
                <li>головна</li>
                <li>курси</li>
                <li>блог</li>
                <li>про проект</li>
                <li>реєстрація</li>
            </ul>
        </nav>

        <form action="#" method="post" classNameName="menu" id='form'>
            <h1> БЕЗКОШНОВНІ ОНЛАЙН-КУРСИ</h1>
            <h2>ВІД ВИКЛАДАЧІВ ПРОВІДНИХ УНІВЕРСИТЕТІВ СВІТУ</h2>
            <div classNameName="data">
                <p><input type='text' name='userEmail'  placeholder='Email:'  className="form_input _req _email" id="forEmail" /></p>
                <p><input type="password" name="password"  placeholder="Password:"/></p>
                <button className="knopka">РОЗПОЧАТИ!</button>
            </div>
        </form>
  </header>
      
  <main>
        <div className="whyWe">
            <div>
                <section>
                    <img src={Clock} alt="#"/>
                    <span>Будь-коли</span>
                    <p>Навчайтесь у зручний для Вас час. Відеолекції,<br/> тести та форум доступні цілодобово</p>
                </section>

                <section>
                    <img src={require("./image/Globe.jpg").default} alt="#"/>
                    <span>Будь-де</span>
                    <p>Проходьте курси, не виходячи з дому чи в<br/> дорозі. Все, що Вам знадобиться, -це доступ<br/> до інтернету.</p>
                </section>
            </div>
            <div>
                <span>ПЕРЕВАГИ</span>
                <img src={require("./image/Lyre Filled.jpg").default} alt="#"/>
            </div>
            <div>
                <section>
                    <img src={require("./image/iPhone.jpg").default} alt="#"/>
                    <span>Будь-який пристрій</span>
                    <p>Навчайтесь на комп’ютері, планшеті чи<br/> телефоні: сайт підлаштується під ваш<br/> пристрій.</p>
                </section>
                <section>
                    <img src={require("./image/Man.jpg").default} alt="#"/>
                    <span>Будь-хто</span>
                    <p>Наші курси абсолютно безкоштовні – захмарні<br/> ціни більше ніколи не стануть на заваді<br/> найкращій освіті.</p>
                </section>
            </div>
        </div>

        <div className="course">
            <h1>Доступні курси</h1>
            <p>Запишіться прямо зараз на безкоштовні курси</p>
            <div className="content" >
                <section>
                    <img src={require("./image/logo1.jpg").default} alt=""/>
                    <h1>Основи<br/> програмування</h1>
                    <p>After the first 50 completed <br/> projects to make a mistake with the deadlines almost unreal.</p>
                    <a href="#">Read more ...</a>
                    <button>ЗАРЕЄСТРУВАТИСЬ НА КУРС!</button>
                </section>

                <section>
                    <img src={require("./image/logo2.jpg").default} alt=""/>
                    <h1>Розробка та  аналіз алгоритмів<br/></h1>
                    <p>After the first 50 completed <br/> projects to make a mistake with the deadlines almost unreal.</p>
                    <a href="#">Read more ...</a>
                    <button>ЗАРЕЄСТРУВАТИСЬ НА КУРС!</button>
                </section>
            </div>
            <div className="content">
                <section>
                    <img src={require("./image/logo3.jpg").default} alt=""/>
                    <h1>Історія <br/> України </h1>
                    <p>After the first 50 completed <br/> projects to make a mistake with the deadlines almost unreal.</p>
                    <a href="#">Read more ...</a>
                    <button>ЗАРЕЄСТРУВАТИСЬ НА КУРС!</button>
                </section>
                <section>
                    <img src={require("./image/logo4.jpg").default} alt=""/>
                    <h1>Економіка <br/> для всіх</h1>
                    <p>After the first 50 completed <br/> projects to make a mistake with the deadlines almost unreal.</p>
                    <a href="#">Read more ...</a>
                    <button>ЗАРЕЄСТРУВАТИСЬ НА КУРС!</button>
                </section>
            </div>
        </div>

<div className="block_slider">
    <h1>ПАРТНЕРИ - ОСВІТНІ ЗАКЛАДИ</h1>
        <div className="slider">
            <div className="slider_item">
                <img src={require("./image/cambridge.jpg").default} alt="#"/>
                <p>Cambridge</p>
            </div>
            <div className="slider_item">
                <img src={require("./image/harvard.jpg").default} alt="#"/>
                <p>harvard</p>
            </div>
            <div className="slider_item">
                <img src={require("./image/crest_logo.jpg").default} alt="#"/>
                <p>mit</p>
            </div>
            <div className="slider_item">
                <img src={require("./image/ucla_logo.jpg").default} alt="#"/>
                <p>ucla</p>
            </div>
            <div className="slider_item" style={{visibility:'hidden', position:'absolute'}}>
                <img src={require("./image/ucla_logo.jpg").default} alt="#"/>
                <p>Cambridge</p>
            </div>
        </div>
</div>


        <div className="education">
            <section>
                <h1>СЕРТИФІКАТ ВІД ГАРВАРДУ</h1>
                <p>Lorem Ipsum is simply dummy text of <br/> the printing and typesettin Lorem ipsum dolor sit amet<br/>  consectetur adipisicing elit. Sed, doloremque. <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>отримати!</button>
            </section>
        </div>
    </main>   

    <footer>
        <div className="creator">
            <h1>розробники</h1>
            <div className="person">
                <section>
                    <img src={require("./image/team1.jpg").default} alt=""/>
                    <span>Daniel Raynolds</span>
                    <p>After the first 50 completed <br/> projects to make a mistake with<br/> the deadline almost unreal.<br/> After the first hundred projects to break the promises already <br/>impossiblie.</p>
                    <article> 
                        <img src={require("./image/facebook.jpg").default} alt=""/> <img src={require("./image/twitter.jpg").default} alt=""/> <img src={require("./image/plus.jpg").default} alt=""/>
                    </article>
                </section>
                <section>
                    <img src={require("./image/team2.jpg").default} alt=""/>
                    <span>Nick Parson</span>
                    <p>After the first 50 completed <br/> projects to make a mistake with<br/> the deadline almost unreal.<br/> After the first hundred projects to break the promises already <br/>impossiblie.</p>
                    <article> 
                        <img src={require("./image/facebook.jpg").default} alt=""/> <img src={require("./image/twitter.jpg").default} alt=""/> <img src={require("./image/plus.jpg").default} alt=""/>
                    </article>
                </section>
                <section>
                    <img src={require("./image/team3.jpg").default} alt=""/>
                    <span>William Stanley</span>
                    <p>After the first 50 completed <br/> projects to make a mistake with<br/> the deadline almost unreal.<br/> After the first hundred projects to break the promises already <br/>impossiblie.</p>
                    <article> 
                        <img src={require("./image/facebook.jpg").default} alt=""/> <img src={require("./image/twitter.jpg").default} alt=""/> <img src={require("./image/plus.jpg").default} alt=""/>
                    </article>
                </section>
                <section>
                    <img src={require("./image/team4.jpg").default} alt=""/>
                    <span>Sarah Noel</span>
                    <p>After the first 50 completed <br/> projects to make a mistake with<br/> the deadline almost unreal.<br/> After the first hundred projects to break the promises already <br/>impossiblie.</p>
                    <article> 
                    <img src={require("./image/facebook.jpg").default} alt=""/> <img src={require("./image/twitter.jpg").default} alt=""/> <img src={require("./image/plus.jpg").default} alt=""/>
                    </article>
                </section>
            </div>
        </div>

        <div className="register">
            <form action="#" method="post" className="formFooter">
                <div className="dataRegist">
                    <h1>ЗАРЕЄСТРУЙСЯ ЗАРАЗ</h1>
                    <h2>Та отримай задоволення від навчання</h2>
                    <p><input type="text" name="userName"  placeholder="Name:" className="form_input _req" id="forName"  /></p>
                    <p><input type="text" name="userEmail"  placeholder="Email:" className='form_input _req _email' id='forEmail' /></p>
                    <button>Submit!</button>
                </div>
            </form>
        </div>

        <div className="love">
            <p>Made with love by <span>Alex Kuzmenko</span> </p>
            <p>Ispired by <span>PROMETHEUS</span></p>
            <article> 
                <img src={require("./image/facebookCopy.png").default} alt=""/> <img src={require("./image/twitter_copy.png").default} alt=""/> <img src={require("./image/google-plusCopy.png").default} alt=""/>
            </article>
            <article> 
                <img src={require("./image/facebookCopy2.png").default} alt=""/> <img src={require("./image/twitterCopy1.png").default} alt=""/> <img src={require("./image/google-plusCopy2.png").default} alt=""/>
            </article>
        </div>
    </footer>

  </>
    
  
  );

  }
