<template>
    <section class="about" id="about">
        <div class="container">
            <div class="section-title">
                <h2>
                    <span>About </span>
                    <span>Me</span>
                </h2>
            </div>
            <Separator/>
            <div class="about-content">
                <p>I'm a website developer in Duluth, Minnesota. I use modern technologies and frameworks to create functional interfaces, designed with the user in mind.</p>
            </div>
            <div class="social-icons">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/nick-mykkanen/" v-b-tooltip title="LinkedIn" target="_blank" rel="noreferrer">
                            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                        </a>
                    </li>
                    <li>
                        <a href="https://gitlab.com/nickmykkanen" v-b-tooltip title="GitLab" target="_blank" rel="noreferrer">
                            <font-awesome-icon :icon="['fab', 'gitlab']"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/TheNickm2" v-b-tooltip title="GitHub" target="_blank" rel="noreferrer">
                            <font-awesome-icon :icon="['fab', 'github']"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://my.indeed.com/p/nicholasm-csaviyi" v-b-tooltip title="Resume (Indeed)" target="_blank" rel="noreferrer">
                            <font-awesome-icon :icon="['fas', 'address-card']"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:nick@nickm.dev" v-b-tooltip title="Email">
                            <font-awesome-icon :icon="['fas', 'envelope']"/>
                        </a>
                    </li>
                    <li>
                        <a href="tel:(218) 451-2008" v-b-tooltip title="Phone">
                            <font-awesome-icon :icon="['fas', 'phone']"></font-awesome-icon>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Separator from './utilities/Separator.vue';
export default Vue.extend({
    components: {
        Separator
    }
});
</script>

<style lang="scss">
    .about {
        .contact-info {
            text-align: center;
            font-size: 1.5em;
        }
        .about-content {
            p {
                font-size: 1.2em;
                text-align: center;
            }
        }
        .social-icons {
            text-align: center;
            font-size: 2rem;
            ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
                li {
                    display: inline-block;
                    padding: {
                        left: 0.5em;
                        right: 0.5em;;
                    }
                }
            }
        }
    }
</style>