<template>
  <div>
    <header class="header">
      <div class="header__left">
        <g-image src="~/assets/greyHeadshot.jpg" class="gravatar" width="118px"/>
      </div>
      <section class="header__content">
        <div class="header__content__top">
          <p class="headerWords">
            Hi, I'm Sam. I build <ChangingWords></ChangingWords><br>
            websites and apps.
          </p>
          <div class="accountLinks">
            <a
              href="https://codepen.io/Samic8/"
              target="_blank"
              class="accountLinks__link"
              title="Link to My Codepen">
              <codepen></codepen>
            </a>
            <a
              href="https://github.com/samic8"
              target="_blank"
              class="accountLinks__link"
              title="Link to My Github">
              <github></github>
            </a>
            <a
              href="https://gitlab.com/samic8"
              target="_blank"
              class="accountLinks__link"
              title="Link to My GitLab">
              <gitlab></gitlab>
            </a>
          </div>
        </div>
        <g-link
          v-bind:to="getMainLink()"
          class="link color-white">
          {{getMainLinkTitle()}}
        </g-link>
      </section>
    </header>
    <div >
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

.header {
  position: relative;
  display: flex;
  padding: 2rem 0 3rem var(--sidebar-padding);
  background: linear-gradient(222.03deg, rgba(102, 55, 151, 0.8) -16.2%, rgba(31, 74, 107, 0.8) 92.84%);
  
  @include mobileBreakpoint {
    height: auto;
    padding: 1.5rem 0;
  }
}

.header__left {
  width: calc(var(--sidebar-size) - var(--sidebar-padding));
  @include midBreakpoint {
    width: auto;
  }
  @include mobileBreakpoint {
    padding-left: var(--sidebar-padding);
  }
}

.header__content {
  flex: 1 1 auto;
  --margin-left: var(--main-content-padding);
  position: relative;
  margin-left: var(--margin-left);
  margin-right: var(--main-content-padding);
  max-width: var(--main-content-max-width);

  @include midBreakpoint {
    --margin-left: var(--sidebar-padding);
  }
}

.header__content__top {
  display: flex;
}

.gravatar {
  --margin-left: 88px;
  left: var(--sidebar-padding);
  flex: 0 0 auto;
  width: 118px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(2, 3, 4, 0.3);
  transition: .2s box-shadow ease-out, .2s transform ease-out;

  @media screen and (max-width: 480px) {
    width: 70px;
  }
}

.accountLinks {
  z-index: 1;
  align-self: flex-start;
  display: flex;
  margin-left: auto;

  @include mobileBreakpoint {
    position: absolute;
    top: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
}

.accountLinks__link {
  color: var(--color-white);
  display: flex;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  &:hover, &:focus {
    outline: 0;
    transition: .2s color ease-in-out;
    color: var(--color-blue-grey);
    background-color: white;
  }

  &:not(:last-child) {
    margin-right: .65rem;
  }
}

.nav__link {
  margin-left: 20px;
}

.headerWords {
  font-size: var(--header-words-font-size);
  color: #fff;
  margin-top:0;

  @include mobileBreakpoint {
    font-size: 1rem;
  }
}

.hexagonGrid {
  overflow: visible;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}


.hexagon {

}

.foo {
	opacity: 0;
	@keyframes foo {
		0% {
			opacity: 0;
		}
		20% {
			opacity: .1;
		}
		40% {
			opacity: .17;
		}
		60% {
			opacity: .10;
		}
		80% {
			opacity: .05;
		}
		100% {
			opacity: 0;
		}
	}
	animation: foo ease 20s infinite;
}
.bar {
	opacity: 0;
	@keyframes bar {
		0% {
			opacity: 0;
		}
		60% {
			opacity: .05;
		}
		100% {
			opacity: 0;
		}
	}
	animation: bar ease-out 20s infinite;
}
.bin {
	opacity: 0;
	@keyframes bin {
		0% {
			opacity: 0;
		}
		60% {
			opacity: .05;
		}
		100% {
			opacity: 0;
		}
	}
	animation: bin ease-in 20s infinite;
}
.faa {
	opacity: 0;
	@keyframes faa {
		0% {
			opacity: 0;
		}
		60% {
			opacity: .01;
		}
		100% {
			opacity: 0;
		}
	}
	animation: faa ease 20s infinite;
}
</style>

<script>
import github from '~/assets/github.svg'
import gitlab from '~/assets/gitlab.svg'
import codepen from '~/assets/codepen.svg'
import ChangingWords from '~/components/ChangingWords.vue'
import { select } from 'd3-selection';
import { hexbin } from 'd3-hexbin';

export default {
  props: {
    page: String,
  },
  components: {
    github,
    gitlab,
    codepen,
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
        contact: 'Back to Homepage',
        home: 'Get in Touch',
      };

      return titles[this.page];
    },
  },
  mounted: () => {
    let width = window.innerWidth,
    height = document.querySelector('header').clientHeight,
    hexRadius = 50,
    MapRows = Math.ceil(height / hexRadius),
    MapColumns = Math.ceil(width / hexRadius),
    lastClass;

    //Calculate the center positions of each hexagon 
    var points = [];
    for (var i = 0; i < MapRows; i++) {
        for (var j = 0; j < MapColumns; j++) {
            points.push([hexRadius * j * 1.75, hexRadius * i * 1.5]);
        }
    }

    //Create SVG element
    var svg = select("header").append("svg")
        .attr('class', 'hexagonGrid')
        .attr("width", width)
        .attr("height", height)
        .append("g");

    //Set the hexagon radius
    var hexbinGen = hexbin().radius(hexRadius);

    //Draw the hexagons
    svg.append("g")
        .selectAll(".hexagon")
        .data(hexbinGen(points))
        .enter().append("path")
        .attr("class", () => "hexagon " + getRandomClass())
      .style("animation-delay", () => Math.floor(Math.random() * 10) + "s")
        .attr("d", function (d) {
            return "M" + d.x + "," + d.y + hexbinGen.hexagon();
        })

    function getRandomClass() {
      const classes = {
        0: 'foo',
        1: 'bar',
        2: 'bin',
        3: 'faa',
      };
      
      const className = classes[Math.floor(Math.random() * 3)];
      if (lastClass === className) return getRandomClass();
      lastClass = className;
      return className;
    }

  },
}
</script>
