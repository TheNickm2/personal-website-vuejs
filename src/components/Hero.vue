<template>
    <section class="hero" id="hero">
        <div class="container">
            <div class="photo">
                <img src="../assets/img/nick-compressed.jpg" alt="Nick Mykkanen">
            </div>
            <div class="name">
                <h1>
                    <span>Nick </span>
                    <span>Mykkanen</span>
                </h1>
            </div>
            <Separator :light="true"></Separator>
            <div class="title">
                <h2>Website Developer</h2>
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
    .hero {
        background-color: #343a40;
        color: rgba(#fff, 0.8);
        padding-top: calc(3em + 197px);
        .photo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 3px solid #fff;
            overflow: hidden;
            margin: auto;
            img {
                width: 100%;
            }
        }
        .name {
            padding-top: 1.5em;
            padding-bottom: 1.5em;
            h1 {
                margin: 0;
                text-transform: uppercase;
                text-align: center;
                span {
                    &:last-of-type {
                        color: lighten($primary, 10%);
                    }
                }
            }
        }
        .separator {
            margin-top: 0;
        }
        .title {
            h2 {
                text-align: center;
            }
        }
    }
</style>