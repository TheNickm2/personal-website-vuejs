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
        computed: {
            year: function () {
                const year = new Date().getFullYear();
                if (year > 2019) {
                    return `2019 - ${year}`;
                }
                else {
                    return "2019";
                }
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