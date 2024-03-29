<template>
  <Layout v-bind:page="'home'">
    <div class="layout">
      <Sidebar>
        <h1>Tech</h1>
        <ul class="techList">
          <li
            v-for="tech in $data.techs"
            v-bind:key="tech"
            class="techList__tech"
            style="margin-bottom: .2rem">
            {{tech}}
          </li>
        </ul>
      </sidebar>
      <MainContent>
        <h1>Posts</h1>
        <ul>
          <li
            v-for="post in $page.allBlogPost.edges"
            v-bind:key="post.id"
            >
            <g-link v-bind:to="post.node.slug" class="link">{{post.node.title}}</g-link>
          </li>
        </ul>
        <h1>Projects</h1>
        <ul class="projects">
          <li
            tabindex="0"
            class="project"
            v-for="project in $page.allProject.edges"
            v-bind:key="project.id"
            v-bind:class="{'project--expanded': $data.expandedProjectIds.includes(project.node.id)}"
            v-on:click="setExpanded(project.node.id)"
            @keypress.13="setExpanded(project.node.id)"
            >
            <div class="project__group">
              <b>{{project.node.name}}</b>
              <div class="project__highlight">
                {{project.node.mainTech}}
                <div
                  class="techSquare"
                  style="margin-left:9px"
                  v-bind:class="project.node.mainTech">
                </div>
              </div>
            </div>
            <section v-if="$data.expandedProjectIds.includes(project.node.id)">
              <div
                class="contentFont">
                {{project.node.description}}.
              </div>
              <h2 style="margin-bottom: .3rem">All Tech</h2>
              <span
                v-for="tech in project.node.otherTechs.split(' ')"
                v-bind:key="tech"
                class="contentFont">
                {{tech}}
                <span v-if="!project.node.otherTechs.endsWith(tech)">&bull;</span>
              </span>
              <div class="flex justify-content-flex-end marg-auto-top" style="margin-top: .3rem">
                <a v-bind:href="project.node.link" target="_blank" class="link">See Project...</a>
              </div>
            </section>
          </li>
        </ul>
      </MainContent>
    </div>
  </Layout>
</template>

<page-query>
query {
  allProject {
    edges {
      node {
        id
        content
        name
        mainTech
        otherTechs
        description
        link
      }
    }
  }
  allBlogPost {
    edges {
      node {
        id
        title
        slug
      }
    }
  } 
}
</page-query>

<script>
const store = {
  debug: true,
  state: {
    expandedProjectIds: [],
    techs: [
      'CSS & HTML',
      'Sass',
      'ES6+ JS',
      'AngularJs',
      'React',
      'Redux',
      'Elm',
      'Vue',
      'Node',
      'GraphQL',
      'Gatsby',
      'Gridsome',
      'Webpack',
      'Figma',
      'D3',
      ].sort(),
  },
  setExpanded (projectId) {
    this.state.expandedProjectIds.push(projectId);
  },
}

export default {
  data: () => store.state,
  metaInfo: {
    title: 'Projects'
  },
  methods: {
    setExpanded: store.setExpanded.bind(store),
  }
}
</script>

<style lang="scss">
@import '~/assets/variables.scss';
@import '~/assets/mixins.scss';

:root {
  --project-unexpanded-height: 57px;
  --projects-grid-gap: #{$project-grid-gap};
  --color-project-shadow: rgba(87, 87, 87, 0.22);
}

.layout {
  --template-columns: minmax(200px, var(--sidebar-size)) 1fr;
  display: grid;
  grid-template-columns: var(--template-columns);
  grid-auto-flow: dense;
  padding-bottom: 1.5rem;

  @include midBreakpoint {
    --template-columns: 1fr;
  }
}

.techList {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.projects {
  --template-columns: repeat(auto-fill, #{$project-width});
  display: grid;
  grid-template-columns: var(--template-columns);
  grid-auto-flow: dense;
  grid-gap: var(--projects-grid-gap);
  list-style-type: none;
  padding: 0;

  @include mobileBreakpoint() {
    --template-columns: 1fr;
  }
}

.project {
  background-color: var(--color-light-blue-grey);
  border-radius: 1px;
  padding: 0 20px;
  cursor: pointer;
  height: var(--project-unexpanded-height);
  transition: .2s box-shadow, .2s transform, .2s height ease-out;
  overflow: hidden;

  h2 {
    margin: var(--h2-margin) 0;
    font-size: 1rem;
    font-weight: bold;
  }

  &:hover, &:focus {
    outline: none;
  }
}

.project:not(.project--expanded) {
  &:hover, &:focus {
    transform: translate(-.1rem, -.2rem);
    box-shadow: 1px 2px 4px var(--color-project-shadow);
  }
}

.project--expanded {
  display: flex;
  flex-direction: column;
  grid-row: span 4;
  height: calc(4 * (var(--project-unexpanded-height) + var(--projects-grid-gap)) - var(--projects-grid-gap));
  cursor: default;
  box-shadow: 0px 2px 4px var(--color-project-shadow);
}

.project__group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--project-unexpanded-height);
  box-sizing: border-box;
}

.project__highlight {
  display: flex;
  align-items: center;
  font-size: .8rem
}

.home-links a {
  margin-right: 1rem;
}

.techSquare {
  width: 18px;
  height: 18px;
  background-color: currentColor;
}

.techList__tech {
  @include midBreakpoint {
    display: inline;
    &:not(:last-child)::after {
      content: '•';
    }
  }
}

.vue {
  color: #47B784;
}

.react {
  color: #67DAF9;
}

.elm {
  color: #55ACC5;
}
</style>
