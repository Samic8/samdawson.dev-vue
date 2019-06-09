<template>
  <Layout v-bind:page="'contact'">
    <Sidebar></Sidebar>
      <div
        class="article"
        v-bind:class="{
          'blogPostThemeLight': $data.state.styling === $data.state.stylings.Light,
          'blogPostThemeDark': $data.state.styling === $data.state.stylings.Dark,
        }">
          <div class="content" v-html="$page.blogPost.content" />
          <button
            class="toggleStyleButton"
            v-on:click="toggleStyling()"
            v-bind:title="`Toggle to ${getOppositeMode()} Mode`">
            <moon v-if="$data.state.styling === $data.state.stylings.Light"></moon>
            <sun v-if="$data.state.styling === $data.state.stylings.Dark"></sun>
          </button>
      </div>
  </Layout>
</template>

<script>
import '~/assets/themes/prism-tomorrow.scss';
import '~/assets/themes/prism.scss';
import moon from '~/assets/moon.svg';
import sun from '~/assets/sun.svg';

const stylings = {
  Light: 'Light',
  Dark: 'Dark',
};

const store = {
  debug: true,
  state: {
    styling: stylings.Light,
    stylings,
  },
  toggleStyling() {
      this.setTheme(this.getOppositeMode());
  },
  getOppositeMode() {
    switch (this.state.styling) {
      case stylings.Light:
        return stylings.Dark;
      case stylings.Dark:
        return stylings.Light;
    }
  },
  setTheme(theme) {
    this.state.styling = theme;
    switch (this.state.styling) {
      case stylings.Light:
        document.body.style.setProperty('--blog-post-background-color', 'var(--color-white)')
        break;
      case stylings.Dark:
        document.body.style.setProperty('--blog-post-background-color', 'var(--color-blue-grey)')
        break;
    }
  }
}

export default {
  components: {
    moon,
    sun,
  },
  data: () => ({
    state: store.state
  }),
  metaInfo () {
    return {
      title: this.$page.blogPost.title,
      // TODO remove no index?
      meta: [{ name: 'robots', content: 'noindex'}],
    }
  },
  methods: { toggleStyling: store.toggleStyling.bind(store), getOppositeMode: store.getOppositeMode.bind(store) },
  beforeMount() {
    store.setTheme(stylings.Light);
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
    }
  }
</page-query>

<style lang="scss">
  :root {
    --blog-post-background-color: var(--color-white);
  }

  body {
    background-color: var(--blog-post-background-color);
  }

  .article {
    margin-top: 15px;
    margin: 1rem 0 0 var(--main-content-padding);
    max-width: 60rem;

    h4 {
      margin-bottom: .2rem;
    }

    img {
      max-width: 100%;
      border-radius: 5px;
      margin-top: 1em;
    }

    pre {
      margin-bottom: 1rem;
    }

    a {
      color: #4dba87;
      text-decoration: underline;
    }

    a:hover {
      text-decoration: none;
    }

    ol, ul {
      list-style-position: outside;
    }

    ul {
      list-style: disc;
      padding-left: 20px;
    }

    .content {
      margin-bottom: 8rem;
    }

    .content p:first-child {
      margin-top: 15px;
    }

    .content p {
      margin-top: 0;
      margin-bottom: 10px;
      line-height: 1.5;
    }
  }

  .blogPostThemeDark {
    color: var(--color-white);
  }

  .blogPostThemeLight {
    pre[class*="language-"] {
      color: var(--color-alias-font);
    }
  }

  .toggleStyleButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    appearance: none;
    border-radius: 50%;
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    padding: 0;
    outline: none;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  }
</style>