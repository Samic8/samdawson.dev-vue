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
      title: this.$page.blogPost.title
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

<style>
  /* .header {
    margin-bottom: 70px;
  } */

  .article {
    margin-top: 15px;
    margin: 15px auto;
    max-width: 60rem;
    padding: 0 2rem;
  }

  .article h1 {
    font-size: 40px;
  }

  .article h4 {
    margin-bottom: .2rem;
  }

  .article img {
    max-width: 100%;
    border-radius: 5px;
    margin-bottom: 3rem;
  }

  .article pre {
    margin-bottom: 3rem;
  }

  .article a {
    color: #4dba87;
    text-decoration: underline;
  }

  .article a:hover {
    text-decoration: none;
  }

  .article ol, .article ul {
    list-style-position: outside;
  }

  .article ul {
    list-style: disc;
    padding-left: 20px;
  }

  .article .content p:first-child {
    margin-top: 15px;
  }

  .article .content p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.5;
  }
</style>