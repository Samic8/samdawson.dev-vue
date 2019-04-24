<template>
  <Layout>
    <section class="sidebar">
      <h1>Tech</h1>
    </section>
    <article class="mainContent">
      <h1>Projects</h1>
      <ul class="projects">
        <li
          class="project"
          v-for="project in $page.allProject.edges"
          v-bind:key="project.id"
          v-bind:class="{'project--expanded': $data.expandedProjectIds.includes(project.node.id)}"
          v-on:click="setExpanded(project.node.id)"
          >
          <div class="project__group">
            <h2>{{project.node.name}}</h2>
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
              {{project.node.description}}
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
              <linkUnderline>
                <a v-bind:href="project.node.link">See Project...</a>
              </linkUnderline>
            </div>
          </section>
        </li>
      </ul>
    </article>
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
      }
    }
  }
}
</page-query>

<script>
import linkUnderline from '~/components/link-underline.vue';

const store = {
  debug: true,
  state: {
    expandedProjectIds: [],
  },
  setExpanded (projectId) {
    this.state.expandedProjectIds.push(projectId);
  },
}

export default {
  components: {
    linkUnderline
  },
  data: () => store.state,
  metaInfo: {
    title: ''
  },
  methods: {
    setExpanded: store.setExpanded.bind(store),
  }
}
</script>

<style>
:root {
  --project-unexpanded-height: 57px;
  --projects-grid-gap: 18px;
  --color-project-shadow: rgba(87, 87, 87, 0.22);
}

.sidebar {
  box-sizing: border-box;
  width: var(--side-bar-size);
  border-right: 1px solid #F1F2F4;
  padding: 0 50px;
}

.mainContent {
  flex: 1 1 auto;
  padding-left: var(--main-content-padding);
  max-width: var(--main-content-max-width);
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: dense;
  grid-gap: var(--projects-grid-gap);
  list-style-type: none;
  padding: 0;
}

.project {
  background-color: #F1F2F4;
  border-radius: 1px;
  padding: 0 20px;
  cursor: pointer;
  height: var(--project-unexpanded-height);
  transition: .2s box-shadow, .2s transform, .2s height ease-out;
}

.project:not(.project--expanded):hover {
  transform: translate(-.1rem, -.2rem);
  box-shadow: 1px 2px 4px var(--color-project-shadow);
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

.vue {
  color: #47B784;
}

.react {
  color: #67DAF9;
}
</style>
