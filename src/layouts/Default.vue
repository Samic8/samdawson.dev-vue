<template>
  <div>
    <header class="header">
      <section class="header__content">
        <div class="header__content__top">
          <p class="headerWords">
            Hi, I'm Sam. I build <ChangingWords></ChangingWords><br>
            websites and apps.
          </p>
          <img class="gravatar" src="https://www.gravatar.com/avatar/ae9d9a4d587dc7d70e9787e4fa9ec052" />
          <a
            href="https://github.com/samic8"
            style="margin-left: auto"
            target="_blank"
            class="githubLink"
            title="Link to My Github">
            <github></github>
          </a>
        </div>
        <g-link
          v-bind:to="getMainLink()"
          class="link color-white">
          {{getMainLinkTitle()}}
        </g-link>
      </section>
    </header>
    <div class="layout">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/assets/mixins.scss';

.contentFont {
  font-family: -system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: .9rem;
  font-weight: normal;
}

.layout {
  --template-columns: minmax(200px, var(--sidebar-size)) 1fr;
  display: grid;
  grid-template-columns: var(--template-columns);
  grid-auto-flow: dense;
  padding-bottom: 1.5rem;

  @include mobileBreakpoint {
    --template-columns: 1fr;
  }
}

.header {
  padding: 2rem 0 3rem;
  background: linear-gradient(180deg, rgba(30, 84, 128, 0.8) 0%, rgba(12, 36, 54, 0.8) 100%);
  
  @include mobileBreakpoint {
    height: auto;
    padding: 1.5rem 0;
  }
}

.header__content {
  --margin-left: calc(var(--main-content-padding) + var(--sidebar-size));
  position: relative;
  margin-left: var(--margin-left);
  margin-right: var(--main-content-padding);

  @include midBreakpoint {
    --margin-left: var(--sidebar-padding);
  }
}

.header__content__top {
  display: flex;
}

.gravatar {
  --margin-left: 88px;
  flex: 0 0 auto;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0px 3px 10px rgba(2, 3, 4, 0.3);
  transition: .2s box-shadow ease-out, .2s transform ease-out;
  margin-left: var(--margin-left);

  @include mobileBreakpoint {
    --margin-left: auto;
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 480px) {
    --margin-left: auto;
    position: absolute;
    right: 0;
    top: 2.5rem;
    width: 40px;
    height: 40px;
    box-shadow: none;
  }
}

.githubLink {
  align-self: flex-start;
  display: flex;
  color: var(--color-white);

  &:hover, &:focus {
    outline: 0;
    transition: .2s color ease-in-out;
    color: var(--color-alias-interaction);
  }

  @include mobileBreakpoint {
    position: absolute;
    top: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
}

.nav__link {
  margin-left: 20px;
}

.headerWords {
  font-size: var(--header-words-font-size);
  color: #fff;
  margin-top:0;
}
</style>

<script>
import github from '~/assets/github.svg'
import ChangingWords from '~/components/ChangingWords.vue'
export default {
  props: {
    page: String,
  },
  components: {
    github,
    ChangingWords,
  },
  methods: {
    getMainLink() {
      const links = {
        contact: '/',
        home: '/contact',
      };

      return links[this.page];
    },
    getMainLinkTitle() {
      const titles = {
        contact: 'Back to Projects',
        home: 'Get in Touch',
      };

      return titles[this.page];
    },
  }
}
</script>
