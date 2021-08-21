<template>
    <section class="skills" id="skills">
        <div class="container">
            <div class="section-title">
                <h2>
                    <span>My </span>
                    <span>Skills</span>
                </h2>
            </div>
            <div class="section-subtitle">
                <h5>
                    <span>Programming Languages </span>
                    <span>&amp; Tools</span>
                </h5>
            </div>
            <div class="skill-list">
                <ul>
                    <li v-b-tooltip.hover title="HTML5">
                        <font-awesome-icon :icon="['fab', 'html5']"/>
                    </li>
                    <li v-b-tooltip.hover title="CSS3">
                        <font-awesome-icon :icon="['fab', 'css3']"/>
                    </li>
                    <li v-b-tooltip.hover title="Sass">
                        <font-awesome-icon :icon="['fab', 'sass']"/>
                    </li>
                    <li v-b-tooltip.hover title="JavaScript and TypeScript">
                        <font-awesome-icon :icon="['fab', 'js']"/>
                    </li>
                    <li v-b-tooltip.hover title="WordPress">
                        <font-awesome-icon :icon="['fab', 'wordpress-simple']"/>
                    </li>
                    <li v-b-tooltip.hover title="React JS">
                        <font-awesome-icon :icon="['fab', 'react']"/>
                    </li>
                    <li v-b-tooltip.hover title="Vue JS">
                        <font-awesome-icon :icon="['fab', 'vuejs']"/>
                    </li>
                    <li v-b-tooltip.hover title="Node JS">
                        <font-awesome-icon :icon="['fab', 'node-js']"/>
                    </li>
                    <li v-b-tooltip.hover title="Python">
                        <font-awesome-icon :icon="['fab', 'python']"/>
                    </li>
                    <li v-b-tooltip.hover title="NPM">
                        <font-awesome-icon :icon="['fab', 'npm']"/>
                    </li>
                    <li v-b-tooltip.hover title="Yarn">
                        <font-awesome-icon :icon="['fab', 'yarn']"/>
                    </li>
                    <li v-b-tooltip.hover title="Git">
                        <font-awesome-icon :icon="['fab', 'git']"/>
                    </li>
                    <li v-b-tooltip.hover title="Jira">
                        <font-awesome-icon :icon="['fab', 'jira']"/>
                    </li>
                    <li v-b-tooltip.hover title="Adobe Creative Cloud">
                        <font-awesome-icon :icon="['fab', 'adobe']"/>
                    </li>
                    <li v-b-tooltip.hover title="Linux">
                        <font-awesome-icon :icon="['fab', 'linux']"/>
                    </li>
                </ul>
            </div>
            <div class="section-subtitle reverse">
                <span>Additional </span>
                <span>Skills</span>
            </div>
            <div class="additional-info">
                <ul>
                    <li>Responsive Web Design</li>
                    <li>Cross-Browser Testing &amp; Debugging</li>
                    <li>Agile Development &amp; Scrum</li>
                    <li>Cross Functional Teams</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="scss">
    .skills {
        .section-subtitle {
            text-transform: uppercase;
            &:not(.reverse) {
                span:first-of-type {
                    color: darken($primary, 10%);
                }
            }
            &.reverse {
                margin-top: 30px;
                span:last-of-type {
                    color: darken($primary, 10%);
                }
            }
        }
        .skill-list {
            ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
                li {
                    display: inline-block;
                    padding: 0.5rem;
                    svg {
                        font-size: 2.5rem;
                        opacity: 0.5;
                        transition: all 0.25s ease-out;
                    }
                    &:hover {
                        svg {
                            color: darken($primary, 10%);
                            opacity: 1;
                        }
                    }
                }
            }
        }
        .additional-info {
            ul {
                max-width: 20rem;
                text-align: left;
                margin: auto;
            }
        }
    }
</style>