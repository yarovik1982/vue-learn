<script setup>
import { inject, ref } from 'vue';
import TextGradient from '../components/TextGradient.vue';
import PrintEffect from '../components/PrintEffect.vue';
const headerHeight = inject('headerHeight')
const preferences = ref([
    {label:"Практический подход", content:"Наши курсы разработаны с акцентом на практику. Вы не просто изучаете теорию — вы создаете реальные проекты, которые можно добавить в портфолио."},
    {label:"Опытные преподаватели", content:"Каждый курс ведут эксперты с многолетним опытом работы в IT-индустрии. Они знают, как помочь вам достичь успеха."},
    {label:"Гибкость обучения", content:" Учитесь в удобное для вас время, где бы вы ни находились. Все материалы доступны онлайн 24/7."},
    {label:"Поддержка на каждом этапе", content:"Мы предоставляем персональную поддержку через чаты, форумы и регулярные консультации с менторами."},
])
</script>
<template>
    <div class="page">
       <section id="offert" class="full">
           <div class="container">
            <PrintEffect
                :size="'calc(10vw / 2)'"
                :text="'Учитесь создавать будущее вместе с нами'"
            />
            <!-- <TextGradient text="Учитесь создавать будущее вместе с нами" :classFs="'fs-xxx'" /> -->
            <div class="offer">
                <div class="offer-text">
                    <!-- <h1>Учитесь создавать будущее вместе с нами</h1> -->
                    <h3 class="fs-md">
                        <strong style="color:#00bb0c;">Превратите свои идеи в реальные проекты</strong> — станьте
                        профессиональным веб-разработчиком уже сегодня!
                    </h3>
                    <p>
                        <!-- Современный мир цифровых технологий предлагает безграничные возможности для тех, кто готов
                        учиться и развиваться.  -->
                        Наша платформа предоставляет доступ к комплексным курсам веб-разработки,
                        которые помогут вам освоить все необходимые навыки — от базовых концепций до создания сложных
                        веб-приложений.
                    </p>
                    <button id="getStarted" class="getStarted" style="margin-bottom: 0; text-shadow:initial;">
                        <TextGradient text="get started" />
                    </button>
                </div>
            </div>
        </div>
       </section>
       <section id="preferense" >
        <TextGradient 
            text="Почему выбирают нас?"
            :classFs="'fs-xxx'" 
        />
        <div class="container">
            <div class="preferenses">
                <div class="preferenses__item"
                    v-for="(item,index) in preferences"
                    :key="index"
                >
                    <h3 class="preferenses__label">{{ item.label }}</h3>
                    <div class="preferenses__text">{{ item.content }}</div>
                </div>
            </div>
        </div>
       </section>
       <section id="benefits" class="benefits">
        <div class="container">
            <TextGradient
            text="Что вы получите после прохождения курсов?"
            :classFs="'fs-xxx'" 
            />
            <ul class="benefits__list">
                <li>✅ <p>Основы программирования: Изучите HTML, CSS, JavaScript и другие базовые технологии.</p></li>
                <li>✅ <p>Профессиональные навыки: Погрузитесь в фреймворки (React, Vue.js) и инструменты (Git, Webpack).</p></li>
                <li>✅ <p>Работа с серверами: Освойте backend-разработку с Node.js, PHP или Python.</p></li>
                <li>✅ <p>Портфолио: Создайте собственные проекты, которые покажут ваш уровень работодателям.</p></li>
                <li>✅ <p>Карьера в IT: Получите помощь в составлении резюме и подготовке к собеседованиям.</p></li>
            </ul>
        </div>
       </section>
       <section id="consultation" class="consultation">
        <div class="container">
            <div class="banner">
                <TextGradient
                    text="Начните свой путь уже сегодня!"
                    :classFs="'fs-md'"
                />
                <div class="banner__content">
                    <div class="banner__text">
                    <div>
                        <button class="fs-xxx" tabindex="-1">👉</button>
                        <p class="fs-sm">
                        Не важно, являетесь ли вы новичком или хотите углубить свои знания — у нас есть курсы для любого уровня подготовки. 
                    </p>
                    </div>
                    <div>
                        <button class="fs-xxx" tabindex="-1">👉</button>
                        <p class="fs-sm">
                         Запишитесь на бесплатный пробный урок прямо сейчас!
                    </p>
                    </div>
                    <div>
                        <button class="fs-xxx" tabindex="-1">👉</button>
                        <p class="fs-sm">
                        Узнайте больше о наших курсах и выберите направление, которое подходит именно вам. Ваше будущее начинается здесь!
                    </p>
                    </div>
                </div>
                <!-- <button class="banner_btn">Получить консультацию</button> -->
                </div>
            </div>
        </div>
       </section>
       
    </div>


</template>
<style scoped>
.page {
    overflow-y: auto;
    /* scroll-snap-type: y mandatory;
    scroll-behavior: smooth; */
}
.full{
    min-height: 100vh;
    padding: 2rem 0;
}
section:not(:first-child){
    margin-bottom: 80px;
}
.preferenses{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    padding: 2rem 0;
}
.preferenses__item {
    width: 100%;
    min-height: 300px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* display: grid;
    place-items: center; */
    box-shadow: 0 0px 10px 2px blue;
    transition: box-shadow 0.2s linear;
    cursor: crosshair;
    border-radius: 1rem;
    /* animation: pulse 1s infinite; */
    animation-name: pulse;
    /* animation-delay: 1s; */
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.preferenses__item:nth-child(2){
    animation-name: pulse2;
    animation-delay: 1s;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.preferenses__item:nth-child(3){
    animation-name: pulse3;
    animation-delay: 2s;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.preferenses__item:nth-child(4){
    animation-name: pulse3;
    animation-delay: 3s;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes pulse{
    0%{
        box-shadow: 0 0px 10px 2px blue;
    }
    50%{
        box-shadow: 0 10px 40px 2px blue;
    }
    100%{
        box-shadow: 0 0px 10px 2px blue;
    }
}
@keyframes pulse2{
    0%{
        box-shadow: 0 0px 10px 2px blue;
    }
    50%{
        box-shadow: 0 10px 40px 2px blue;
    }
    100%{
        box-shadow: 0 0px 10px 2px blue;
    }
}
@keyframes pulse3{
    0%{
        box-shadow: 0 0px 10px 2px blue;
    }
    50%{
        box-shadow: 0 10px 40px 2px blue;
    }
    100%{
        box-shadow: 0 0px 10px 2px blue;
    }
}
@keyframes pulse4{
    0%{
        box-shadow: 0 0px 10px 2px blue;
    }
    50%{
        box-shadow: 0 10px 40px 2px blue;
    }
    100%{
        box-shadow: 0 0px 10px 2px blue;
    }
}
.preferenses__label{
    text-align: center;
    flex: 1;
}
.preferenses__text{
    flex:1 ;
    text-align: justify;
}
.offer{
    background-image: url(../assets/images/image.png), url(../assets/images/smoke_1.png); 
    background-size: 20em 18em;
    background-repeat: no-repeat;
    background-position: right center;
    padding: 1.5rem 0;
}
.offer-text {
    width: 50%;
}

.offer-text * {
    margin-bottom: 1rem;
    text-shadow: 2px 2px 1px black;
    letter-spacing: 1.25px;
    /* font-size: clamp(0.75rem, 0.7rem + 0.25vw, 1rem); */
}

.getStarted {
    width: 290px;
    background-color: black;
    border-radius: 0.5rem;
    border: 0;
    padding: 0 3em;
}
.benefits__list{
    margin: 0 auto;
    width: fit-content;
}
.benefits__list li{
    display: flex;
    align-items: center;
    margin-bottom: 1em;
}
.benefits__list li p{
    margin-left: 1em;
}
.banner{
    padding: 2rem 1em;
    box-shadow: 0 0 10px 2px blue;
    border-radius: 1rem;
}
.banner__content {
    display: flex;
    align-items: center;
}
.banner__text div{
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 1em;
}
.banner__text div button{
    margin-right: 1em;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
button.fs-xxx{
    transition: transform 0.2s linear;
}
button.fs-xxx:hover{
    transform: scale(1.2);
}
@media(max-width:577px) {
    .offer{
        background-position: center;
    }
    .offer-text {
        /* font-size: clamp(0.875rem, 0.85rem + 0.125vw, 1rem); */
        width: 100%;
    }
}
@media(max-width:321px){
    .preferenses__item{
        width: 290px;
    }
}
</style>