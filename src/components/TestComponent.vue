<script setup>
import { useState } from '../utils/useState';

const [value, setValue] = useState(0);

const increment = () => {
  setValue((prev) => prev + 1);
};
</script>

<template>
  <div>
    <h1 id="introduction" tabindex="-1">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Введение</font>
      </font><a class="header-anchor" href="#introduction"
        aria-label="Постоянная ссылка на &quot;Введение {#introduction}&quot;">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">​</font>
        </font>
      </a>
    </h1>
    <div class="info custom-block">
      <p class="custom-block-title">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Вы читаете документацию по Vue 3!</font>
        </font>
      </p>
      <ul>
        <li>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Поддержка Vue 2 закончилась </font>
          </font><strong>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">31 декабря 2023 г.</font>
            </font>
          </strong>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;"> Узнайте больше о </font>
          </font><a href="https://v2.vuejs.org/eol/" target="_blank" rel="noreferrer">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Vue 2 EOL</font>
            </font>
          </a>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;"> .</font>
          </font>
        </li>
        <li>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Переходите с Vue 2? Ознакомьтесь с </font>
          </font><a href="https://v3-migration.vuejs.org/" target="_blank" rel="noreferrer">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Руководством по миграции</font>
            </font>
          </a>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;"> .</font>
          </font>
        </li>
      </ul>
    </div>
    <div class="vue-mastery-link"><a href="https://www.vuemastery.com/courses/" target="_blank">
        <div class="banner-wrapper"><img class="banner" alt="Баннер Vue Mastery" width="96px" height="56px"
            src="https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vuemastery-graphical-link-96x56.png">
        </div>
        <p class="description">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Изучите Vue с помощью видеоуроков на </font>
          </font><span>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">VueMastery.com</font>
            </font>
          </span>
        </p>
        <div class="logo-wrapper"><img alt="Логотип Vue Mastery" width="25px"
            src="https://storage.googleapis.com/vue-mastery.appspot.com/flamelink/media/vue-mastery-logo.png"></div>
      </a></div>
    <h2 id="what-is-vue" tabindex="-1">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Что такое Vue?</font>
      </font><a class="header-anchor" href="#what-is-vue"
        aria-label="Постоянная ссылка на &quot;Что такое Vue? {#what-is-vue}&quot;">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">​</font>
        </font>
      </a>
    </h2>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Vue (произносится /vjuː/, как и </font>
      </font><strong>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">view</font>
        </font>
      </strong>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> ) — это JavaScript-фреймворк для создания пользовательских интерфейсов.
          Он строится на основе стандартных HTML, CSS и JavaScript и предоставляет декларативную, компонентную модель
          программирования, которая помогает вам эффективно разрабатывать пользовательские интерфейсы любой сложности.
        </font>
      </font>
    </p>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Вот минимальный пример:</font>
      </font>
    </p>
    <div class="options-api">
      <div class="language-js"><button title="Скопировать код" class="copy"></button><span class="lang">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">js</font>
          </font>
        </span>
        <pre class="shiki github-dark vp-code"
          tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> 'vue'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">'#app'</span><span style="color:#E1E4E8;">)</span></span></code></pre>
      </div>
    </div>
    <div class="composition-api">
      <div class="language-js"><button title="Скопировать код" class="copy"></button><span class="lang">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">js</font>
          </font>
        </span>
        <pre class="shiki github-dark vp-code"
          tabindex="0"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp, ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> 'vue'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#B392F0;">  setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count: </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">'#app'</span><span style="color:#E1E4E8;">)</span></span></code></pre>
      </div>
    </div>
    <div class="language-template"><button title="Скопировать код" class="copy"></button><span class="lang">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">шаблон</font>
        </font>
      </span>
      <pre class="shiki github-dark vp-code"
        tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#B392F0;"> id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">"app"</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">"</span><span style="color:#E1E4E8;">count</span><span style="color:#F97583;">++</span><span style="color:#9ECBFF;">"</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Count is: {{ count }}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre>
    </div>
    <p><strong>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Результат</font>
        </font>
      </strong></p>
    <div class="demo"><button>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Количество: 0</font>
        </font>
      </button></div>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Приведенный выше пример демонстрирует две основные функции Vue:</font>
      </font>
    </p>
    <ul>
      <li>
        <p><strong>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Декларативный рендеринг</font>
            </font>
          </strong>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;"> : Vue расширяет стандартный HTML с помощью синтаксиса шаблона,
              который позволяет нам декларативно описывать вывод HTML на основе состояния JavaScript.</font>
          </font>
        </p>
      </li>
      <li>
        <p><strong>
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Реактивность</font>
            </font>
          </strong>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;"> : Vue автоматически отслеживает изменения состояния JavaScript и
              эффективно обновляет DOM при возникновении изменений.</font>
          </font>
        </p>
      </li>
    </ul>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">У вас уже могут быть вопросы — не волнуйтесь. Мы рассмотрим каждую
          маленькую деталь в остальной части документации. А пока, пожалуйста, читайте дальше, чтобы иметь общее
          представление о том, что предлагает Vue.</font>
      </font>
    </p>
    <div class="tip custom-block">
      <p class="custom-block-title">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Предпосылки</font>
        </font>
      </p>
      <p>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Остальная часть документации предполагает базовые знания HTML, CSS и
            JavaScript. Если вы новичок в разработке frontend, то, возможно, не стоит сразу переходить к фреймворку в
            качестве первого шага — освойте основы, а затем возвращайтесь! При необходимости вы можете проверить свой
            уровень знаний с помощью этих обзоров </font>
        </font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"
          target="_blank" rel="noreferrer">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">JavaScript</font>
          </font>
        </a>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"> , </font>
        </font><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" target="_blank"
          rel="noreferrer">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">HTML</font>
          </font>
        </a>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"> и </font>
        </font><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps" target="_blank"
          rel="noreferrer">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">CSS</font>
          </font>
        </a>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"> . Предыдущий опыт работы с другими фреймворками полезен, но не
            обязателен.</font>
        </font>
      </p>
    </div>
    <h2 id="the-progressive-framework" tabindex="-1">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Прогрессивная структура</font>
      </font><a class="header-anchor" href="#the-progressive-framework"
        aria-label="Постоянная ссылка на &quot;The Progressive Framework {#the-progressive-framework}&quot;">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"></font>
        </font>
      </a>
    </h2>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Vue — это фреймворк и экосистема, охватывающие большинство общих функций,
          необходимых для разработки интерфейса. Но веб чрезвычайно разнообразен — то, что мы создаем в вебе, может
          кардинально отличаться по форме и масштабу. Учитывая это, Vue разработан таким образом, чтобы быть гибким и
          постепенно адаптируемым. В зависимости от вашего варианта использования, Vue можно использовать по-разному:
        </font>
      </font>
    </p>
    <ul>
      <li>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Улучшение статического HTML без этапа сборки</font>
        </font>
      </li>
      <li>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Встраивание в качестве веб-компонентов на любую страницу</font>
        </font>
      </li>
      <li>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Одностраничное приложение (SPA)</font>
        </font>
      </li>
      <li>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Полный стек / Рендеринг на стороне сервера (SSR)</font>
        </font>
      </li>
      <li>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Jamstack / Генерация статического сайта (SSG)</font>
        </font>
      </li>
      <li>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Ориентация на настольные компьютеры, мобильные устройства, WebGL и даже
            терминалы</font>
        </font>
      </li>
    </ul>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Если эти концепции кажутся вам пугающими, не волнуйтесь! Учебник и
          руководство требуют только базовых знаний HTML и JavaScript, и вы сможете понять их, даже не будучи экспертом
          в какой-либо из этих областей.</font>
      </font>
    </p>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Если вы опытный разработчик, интересующийся тем, как лучше интегрировать
          Vue в свой стек, или вам интересно, что означают эти термины, мы обсудим их более подробно в </font>
      </font><a href="/guide/extras/ways-of-using-vue.html">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">статье «Способы использования Vue»</font>
        </font>
      </a>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> .</font>
      </font>
    </p>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Несмотря на гибкость, основные знания о том, как работает Vue, являются
          общими для всех этих вариантов использования. Даже если вы сейчас новичок, знания, полученные по ходу дела,
          останутся полезными по мере того, как вы будете расти, чтобы решать более амбициозные цели в будущем. Если вы
          ветеран, вы можете выбрать оптимальный способ использования Vue на основе проблем, которые вы пытаетесь
          решить, сохраняя при этом ту же производительность. Вот почему мы называем Vue «Прогрессивным фреймворком»:
          это фреймворк, который может расти вместе с вами и адаптироваться к вашим потребностям.</font>
      </font>
    </p>
    <h2 id="single-file-components" tabindex="-1">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Компоненты с одним файлом</font>
      </font><a class="header-anchor" href="#single-file-components"
        aria-label="Постоянная ссылка на &quot;Компоненты с одним файлом {#single-file-components}&quot;">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"></font>
        </font>
      </a>
    </h2>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">В большинстве проектов Vue с поддержкой инструмента сборки мы создаем
          компоненты Vue, используя формат файла, похожий на HTML, называемый </font>
      </font><strong>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Single-File Component</font>
        </font>
      </strong>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> (также известный как </font>
      </font><code>*.vue</code>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">файлы, сокращенно </font>
      </font><strong>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">SFC</font>
        </font>
      </strong>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> ). Vue SFC, как следует из названия, инкапсулирует логику компонента
          (JavaScript), шаблон (HTML) и стили (CSS) в одном файле. Вот предыдущий пример, написанный в формате SFC:
        </font>
      </font>
    </p>
    <div class="options-api">
      <div class="language-vue"><button title="Скопировать код" class="copy"></button><span class="lang">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">вид</font>
          </font>
        </span>
        <pre class="shiki github-dark vp-code"
          tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">"count++"</span><span style="color:#E1E4E8;">&gt;Count is: {{ count }}&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#B392F0;"> scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  font-weight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">bold</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre>
      </div>
    </div>
    <div class="composition-api">
      <div class="language-vue"><button title="Скопировать код" class="copy"></button><span class="lang">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">вид</font>
          </font>
        </span>
        <pre class="shiki github-dark vp-code"
          tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> 'vue'</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">"count++"</span><span style="color:#E1E4E8;">&gt;Count is: {{ count }}&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#B392F0;"> scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  font-weight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">bold</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre>
      </div>
    </div>
    <p>SFC is a defining feature of Vue and is the recommended way to author Vue components <strong>if</strong> your use
      case warrants a build setup. You can learn more about the <a href="/guide/scaling-up/sfc.html">how and why of
        SFC</a> in its dedicated section - but for now, just know that Vue will handle all the build tools setup for
      you.</p>
    <h2 id="api-styles" tabindex="-1">API Styles <a class="header-anchor" href="#api-styles"
        aria-label="Постоянная ссылка на &quot;Стили API {#api-styles}&quot;">​</a></h2>
    <p>Vue components can be authored in two different API styles: <strong>Options API</strong> and <strong>Composition
        API</strong>.</p>
    <h3 id="options-api" tabindex="-1">Options API <a class="header-anchor" href="#options-api"
        aria-label="Постоянная ссылка на &quot;API опций {#options-api}&quot;">​</a></h3>
    <p>With Options API, we define a component's logic using an object of options such as <code>data</code>,
      <code>methods</code>, and <code>mounted</code>. Properties defined by options are exposed on <code>this</code>
      inside functions, which points to the component instance:</p>
    <div class="language-vue"><button title="Скопировать код" class="copy"></button><span class="lang">vue</span>
      <pre class="shiki github-dark vp-code"
        tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#F97583;"> default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">  // Properties returned from data() become reactive state</span></span>
<span class="line"><span style="color:#6A737D;">  // and will be exposed on `this`.</span></span>
<span class="line"><span style="color:#B392F0;">  data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#F97583;">    return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // Methods are functions that mutate state and trigger updates.</span></span>
<span class="line"><span style="color:#6A737D;">  // They can be bound as event handlers in templates.</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#B392F0;">    increment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#79B8FF;">      this</span><span style="color:#E1E4E8;">.count</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">  // Lifecycle hooks are called at different stages</span></span>
<span class="line"><span style="color:#6A737D;">  // of a component's lifecycle.</span></span>
<span class="line"><span style="color:#6A737D;">  // This function will be called when the component is mounted.</span></span>
<span class="line"><span style="color:#B392F0;">  mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">`The initial count is ${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">count</span><span style="color:#9ECBFF;">}.`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">"increment"</span><span style="color:#E1E4E8;">&gt;Count is: {{ count }}&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre>
    </div>
    <p><a
        href="https://play.vuejs.org/#eNptkMFqxCAQhl9lkB522ZL0HNKlpa/Qo4e1ZpLIGhUdl5bgu9es2eSyIMio833zO7NP56pbRNawNkivHJ25wV9nPUGHvYiaYOYGoK7Bo5CkbgiBBOFy2AkSh2N5APmeojePCkDaaKiBt1KnZUuv3Ky0PppMsyYAjYJgigu0oEGYDsirYUAP0WULhqVrQhptF5qHQhnpcUJD+wyQaSpUd/Xp9NysVY/yT2qE0dprIS/vsds5Mg9mNVbaDofL94jZpUgJXUKBCvAy76ZUXY53CTd5tfX2k7kgnJzOCXIF0P5EImvgQ2olr++cbRE4O3+t6JxvXj0ptXVpye1tvbFY+ge/NJZt"
        target="_blank" rel="noreferrer">Try it in the Playground</a></p>
    <h3 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api"
        aria-label="Постоянная ссылка на &quot;Composition API {#composition-api}&quot;">​</a></h3>
    <p>With Composition API, we define a component's logic using imported API functions. In SFCs, Composition API is
      typically used with <a href="/api/sfc-script-setup.html"><code>&lt;script setup&gt;</code></a>. The
      <code>setup</code> attribute is a hint that makes Vue perform compile-time transforms that allow us to use
      Composition API with less boilerplate. For example, imports and top-level variables / functions declared in
      <code>&lt;script setup&gt;</code> are directly usable in the template.</p>
    <p>Here is the same component, with the exact same template, but using Composition API and
      <code>&lt;script setup&gt;</code> instead:</p>
    <div class="language-vue"><button title="Скопировать код" class="copy"></button><span class="lang">vue</span>
      <pre class="shiki github-dark vp-code"
        tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#B392F0;"> setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, onMounted } </span><span style="color:#F97583;">from</span><span style="color:#9ECBFF;"> 'vue'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// reactive state</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> count</span><span style="color:#F97583;"> =</span><span style="color:#B392F0;"> ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// functions that mutate state and trigger updates</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> increment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  count.value</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// lifecycle hooks</span></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">`The initial count is ${</span><span style="color:#E1E4E8;">count</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}.`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#B392F0;"> @click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">"increment"</span><span style="color:#E1E4E8;">&gt;Count is: {{ count }}&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre>
    </div>
    <p><a
        href="https://play.vuejs.org/#eNpNkMFqwzAQRH9lMYU4pNg9Bye09NxbjzrEVda2iLwS0spQjP69a+yYHnRYad7MaOfiw/tqSliciybqYDxDRE7+qsiM3gWGGQJ2r+DoyyVivEOGLrgRDkIdFCmqa1G0ms2EELllVKQdRQa9AHBZ+PLtuEm7RCKVd+ChZRjTQqwctHQHDqbvMUDyd7mKip4AGNIBRyQujzArgtW/mlqb8HRSlLcEazrUv9oiDM49xGGvXgp5uT5his5iZV1f3r4HFHvDprVbaxPhZf4XkKub/CDLaep1T7IhGRhHb6WoTADNT2KWpu/aGv24qGKvrIrr5+Z7hnneQnJu6hURvKl3ryL/ARrVkuI="
        target="_blank" rel="noreferrer">Try it in the Playground</a></p>
    <h3 id="which-to-choose" tabindex="-1">Which to Choose? <a class="header-anchor" href="#which-to-choose"
        aria-label="Постоянная ссылка на &quot;Что выбрать? {#which-to-choose}&quot;">​</a></h3>
    <p>Both API styles are fully capable of covering common use cases. They are different interfaces powered by the
      exact same underlying system. In fact, the Options API is implemented on top of the Composition API! The
      fundamental concepts and knowledge about Vue are shared across the two styles.</p>
    <p>The Options API is centered around the concept of a "component instance" (<code>this</code> as seen in the
      example), which typically aligns better with a class-based mental model for users coming from OOP language
      backgrounds. It is also more beginner-friendly by abstracting away the reactivity details and enforcing code
      organization via option groups.</p>
    <p>The Composition API is centered around declaring reactive state variables directly in a function scope and
      composing state from multiple functions together to handle complexity. It is more free-form and requires an
      understanding of how reactivity works in Vue to be used effectively. In return, its flexibility enables more
      powerful patterns for organizing and reusing logic.</p>
    <p>You can learn more about the comparison between the two styles and the potential benefits of Composition API in
      the <a href="/guide/extras/composition-api-faq.html">Composition API FAQ</a>.</p>
    <p>If you are new to Vue, here's our general recommendation:</p>
    <ul>
      <li>
        <p>For learning purposes, go with the style that looks easier to understand to you. Again, most of the core
          concepts are shared between the two styles. You can always pick up the other style later.</p>
      </li>
      <li>
        <p>For production use:</p>
        <ul>
          <li>
            <p>Go with Options API if you are not using build tools, or plan to use Vue primarily in low-complexity
              scenarios, e.g. progressive enhancement.</p>
          </li>
          <li>
            <p>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Если вы планируете создавать полноценные приложения с помощью
                  Vue, выбирайте Composition API + Single-File Components.</font>
              </font>
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Вам не обязательно придерживаться только одного стиля на этапе обучения.
          Остальная часть документации будет содержать примеры кода в обоих стилях, где это применимо, и вы сможете
          переключаться между ними в любое время с помощью </font>
      </font><strong>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">переключателей API Preference</font>
        </font>
      </strong>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> в верхней части левой боковой панели.</font>
      </font>
    </p>
    <h2 id="still-got-questions" tabindex="-1">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Остались вопросы?</font>
      </font><a class="header-anchor" href="#still-got-questions"
        aria-label="Постоянная ссылка на &quot;Все еще есть вопросы? {#still-got-questions}&quot;">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">​</font>
        </font>
      </a>
    </h2>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Ознакомьтесь с нашими </font>
      </font><a href="/about/faq.html">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">часто задаваемыми вопросами</font>
        </font>
      </a>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> .</font>
      </font>
    </p>
    <h2 id="pick-your-learning-path" tabindex="-1">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Выберите свой путь обучения</font>
      </font><a class="header-anchor" href="#pick-your-learning-path"
        aria-label="Постоянная ссылка на &quot;Выберите свой путь обучения {#pick-your-learning-path}&quot;">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">​</font>
        </font>
      </a>
    </h2>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">У разных разработчиков разные стили обучения. Выбирайте путь обучения,
          который соответствует вашим предпочтениям, хотя мы рекомендуем пройти весь контент, если это возможно!</font>
      </font>
    </p>
    <div class="vt-box-container next-steps"><a class="vt-box" href="/tutorial/">
        <p class="next-steps-link">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Попробуйте обучающую программу</font>
          </font>
        </p>
        <p class="next-steps-caption">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Для тех, кто предпочитает изучать материал на практике.</font>
          </font>
        </p>
      </a><a class="vt-box" href="/guide/quick-start.html">
        <p class="next-steps-link">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Прочитать руководство</font>
          </font>
        </p>
        <p class="next-steps-caption">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">В руководстве подробно описаны все аспекты фреймворка.</font>
          </font>
        </p>
      </a><a class="vt-box" href="/examples/">
        <p class="next-steps-link">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Посмотрите примеры</font>
          </font>
        </p>
        <p class="next-steps-caption">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Изучите примеры основных функций и распространенных задач
              пользовательского интерфейса.</font>
          </font>
        </p>
      </a></div>
  </div>
</template>

<style scoped></style>