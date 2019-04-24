<template>
  <div>
    <header class="header">
      <section class="header__content">
        <div class="header__content__top">
          <p class="headerWords">
            Hi, I'm Sam. I build accessible<br>
            websites and apps.
          </p>

          <img class="gravatar" src="https://www.gravatar.com/avatar/ae9d9a4d587dc7d70e9787e4fa9ec052" />
          <github style="margin-left: auto"></github>
        </div>

        <linkUnderline>
          <a class="color-white">Get in Touch</a>
        </linkUnderline>
      </section>
    </header>
    <div class="layout">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: "Futura","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: #575757;
}

button {
  font-family: "Futura","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}

h2 {
  font-size: 1rem;
  font-weight: normal;
}

.contentFont {
  font-family: -system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: .9rem;
}

.layout {
  display: flex;
}

.header {
  height: 222px;
  background: linear-gradient(180deg, rgba(30, 84, 128, 0.8) 0%, rgba(12, 36, 54, 0.8) 100%)
}

.header__content {
  margin-left: calc(var(--main-content-padding) + var(--side-bar-size));
  padding-top: 40px;
  max-width: var(--main-content-max-width);
}

.header__content__top {
  display: flex;
}

.gravatar {
  flex: 0 0 auto;
  width: 86px;
  height: 86px;
  border-radius: 50%;
  box-shadow: 0px 3px 10px rgba(2, 3, 4, 0.3);
  margin-left: 88px;
}

.nav__link {
  margin-left: 20px;
}

.headerWords {
  font-size: 24px;
  color: #fff;
  margin-top:0;
}

.button {
  appearance: none;
  height: 3.2rem;
  border-radius: 5px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  font-size: 24px;
  background-color: #F1F2F4;
  border: none;
  color: #575757;
}
</style>

<script>
import github from '~/assets/github.svg'
import linkUnderline from '~/components/link-underline'
export default {
  components: {
    github,
    linkUnderline,
  }
}
</script>
