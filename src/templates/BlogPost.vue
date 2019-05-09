<template>
    <div class="article">
        <div class="content" v-html="$page.blogPost.content" />
    </div>
</template>

<script>
import 'prismjs/themes/prism.css'

export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title,
      // TODO remove no index?
      meta: { name: 'robots', content: 'noindex'},
    }
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
  .article {
    margin-top: 15px;
    margin: 1rem auto;
    max-width: 60rem;
    padding: 0 1rem;

    h1 {
      font-size: 40px;
    }

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

    pre[class*="language-"] {
      color: var(--color-alias-font);
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

    .content p:first-child {
      margin-top: 15px;
    }

    .content p {
      margin-top: 0;
      margin-bottom: 10px;
      line-height: 1.5;
    }
  }
</style>