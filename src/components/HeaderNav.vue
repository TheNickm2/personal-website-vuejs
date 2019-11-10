<template>
    <b-navbar toggleable="md" type="dark" fixed="top" class="bg-dark" v-bind:class="{ 'small-header': smallHeader }">
        <div class="container">
            <b-navbar-brand v-scroll-to="'#page-top'" href="#page-top"><img src="../assets/img/nickmykkanen.svg" alt="Nick Mykkanen Logo" class="img-fluid"></b-navbar-brand>
            <b-navbar-toggle target="primaryNavigation"></b-navbar-toggle>
            <b-collapse id="primaryNavigation" is-nav>
                <b-navbar-nav class="ml-auto" v-b-scrollspy>
                    <b-nav-item v-scroll-to="'#about'" href="#about">About</b-nav-item>
                    <b-nav-item v-scroll-to="'#experience'" href="#experience">Experience</b-nav-item>
                    <b-nav-item v-scroll-to="'#education'" href="#education">Education</b-nav-item>
                    <b-nav-item v-scroll-to="'#skills'" href="#skills">Skills</b-nav-item>
                    <b-nav-item v-scroll-to="'#interests'" href="#interests">Interests</b-nav-item>
                    <b-nav-item v-scroll-to="'#contact'" href="#contact">Contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script lang="ts">
    import Vue from 'vue';
    var VueScrollTo = require('vue-scrollto');
    Vue.use(VueScrollTo);
    export default Vue.extend({
        data () {
            return {
                smallHeader: false
            }
        },
        methods: {
            handleScroll (event: Event) {
                const headerElem = document.querySelector('.navbar.navbar-dark') as HTMLElement;
                if (headerElem) {
                    if (window.scrollY > headerElem.offsetHeight) {
                        this.smallHeader = true;
                    }
                    else {
                        this.smallHeader = false;
                    }
                }
            }
        },
        created: function () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed: function () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    });
</script>

<style lang="scss">
    .navbar {
        padding: {
            top: 1.5em !important;
            bottom: 1.5em !important;
        }
        transition: padding 0.25s ease-out;
        &.bg-dark {
            background-color: darken($primary, 25%) !important;
        }
        .navbar-brand {
            img {
                width: 200px;
                transition: width 0.25s ease-out;
            }
        }
        .navbar-nav {
            li {
                a {
                    font-size: 1.25rem;
                }
            }
        }
        &.small-header {
            padding: {
                top: 0.75em !important;
                bottom: 0.75em !important;
            }
            .navbar-brand {
                img {
                    width: 150px;
                }
            }
        }
    }
</style>