<template>
    <div id="app">
        <HeaderNav/>
        <Hero/>
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Interests/>
        <Contact/>
        <Footer/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    // Import individual section components
    import HeaderNav from './components/HeaderNav.vue';
    import Hero from './components/Hero.vue';
    import About from './components/About.vue';
    import Experience from './components/Experience.vue';
    import Education from './components/Education.vue';
    import Skills from './components/Skills.vue';
    import Interests from './components/Interests.vue';
    import Contact from './components/Contact.vue';
    import Footer from './components/Footer.vue';

    export default Vue.extend({
        name: "app",
        components: {
            HeaderNav,
            Hero,
            About,
            Experience,
            Education,
            Skills,
            Interests,
            Contact,
            Footer
        }
    });
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500|Ubuntu+Condensed&display=swap');
</style>
