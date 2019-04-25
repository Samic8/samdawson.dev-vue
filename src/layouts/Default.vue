<template>
  <div>
    <header class="header">
      <section class="header__content">
        <div class="header__content__top">
          <p class="headerWords">
            Hi, I'm Sam. I build accessible<br>
            websites and apps.
          </p>
          <g-link to="/" class="gravatarLink">
            <img class="gravatar" src="https://www.gravatar.com/avatar/ae9d9a4d587dc7d70e9787e4fa9ec052" />
          </g-link>
          <a
            href="https://github.com/samic8"
            style="margin-left: auto"
            target="_blank"
            class="githubLink">
            <github></github>
          </a>
        </div>

        <LinkUnderline>
          <g-link
            to="/contact"
            class="color-white">
            Get in Touch
          </g-link>
        </LinkUnderline>
      </section>
    </header>
    <div class="layout">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/mixins.scss';

body {
  font-family: "Futura","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: var(--color-alias-font);
}

button {
  font-family: "Futura","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  appearance: none;
  height: 3.2rem;
  border-radius: 5px;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  font-size: 24px;
  background-color: #F1F2F4;
  border: none;
  color: var(--color-alias-font);
  cursor: pointer;
}

button:hover, button:focus {
  background-color: var(--color-alias-interaction);
  color: var(--color-white);
}

h2 {
  margin: var(--h2-margin) 0;
  font-size: 1rem;
  font-weight: normal;
}

a {
  text-decoration: none;
  color: var(--color-alias-font);
}

.contentFont {
  font-family: -system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: .9rem;
}

.layout {
  --template-columns: minmax(200px, var(--sidebar-size)) minmax(min-content, var(--main-content-max-width));
  display: grid;
  grid-template-columns: var(--template-columns);
  grid-auto-flow: dense;

  @include mobileBreakpoint {
    --template-columns: 1fr;
  }
}

.header {
  height: 222px;
  background: linear-gradient(180deg, rgba(30, 84, 128, 0.8) 0%, rgba(12, 36, 54, 0.8) 100%)
}

.header__content {
  --margin-left: calc(var(--main-content-padding) + var(--sidebar-size));
  --margin-right: var(--main-content-padding); 
  position: relative;
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  padding-top: 40px;
  max-width: var(--main-content-max-width);

  @include midBreakpoint {
    --margin-left: var(--sidebar-padding);
    --margin-right: 0;
  }
}

.header__content__top {
  display: flex;
}

.gravatarLink {
  --margin-left: 88px;
  margin-left: var(--margin-left);
  display: flex;

  @include mobileBreakpoint {
    --margin-left: auto;
    margin-right: var(--sidebar-padding);
  }

  @media screen and (max-width: 470px) {
    position: absolute;
    right: 2rem;
    bottom: 0;
  }
}

.gravatar {
  flex: 0 0 auto;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0px 3px 10px rgba(2, 3, 4, 0.3);
  transition: .2s box-shadow ease-out, .2s transform ease-out;

  @include mobileBreakpoint {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 470px) {
    width: 20px;
    height: 20px;
    box-shadow: none;
  }
}

.gravatar:hover {
  box-shadow: 1px 3px 10px rgba(2, 3, 4, 0.3);
  transform: translate(-.1rem, -.2rem);
}

.githubLink {
  display: flex;

  @include mobileBreakpoint {
    position: absolute;
    right: var(--sidebar-padding);
    bottom: 0;
  }
}

.nav__link {
  margin-left: 20px;
}

.headerWords {
  font-size: 1.5rem;
  color: #fff;
  margin-top:0;

  @include mobileBreakpoint {
    font-size: 1.4rem;
  }
}
</style>

<script>
import github from '~/assets/github.svg'
export default {
  components: {
    github,
  }
}
</script>
