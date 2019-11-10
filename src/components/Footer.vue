<template>
    <footer class="bg-dark">
        <div class="copyright text-center">
            &copy; {{year}} Nick Mykkanen. <a href="https://gitlab.com/nickmykkanen/personal-website" target="_blank" rel="noreferrer">Fork me on <font-awesome-icon :icon="['fab', 'gitlab']"/> GitLab</a>
        </div>
    </footer>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        data () {
            return {
                year: ""
            }
        },
        mounted () {
            const year = new Date().getFullYear();
            if (year > 2019) {
                this.year = `2019 - ${year}`;
            }
            else {
                this.year = "2019";
            }
        }
    });
</script>

<style lang="scss">
    footer {
        padding: 1rem;
        .copyright {
            color: darken(#fff, 25%);
        }
        a {
            color: #fff;
            &:hover {
                color: #fff;
            }
        }
    }
</style>