<template>
    <div class="separator" v-bind:class="{ 'light': light }">
        <font-awesome-icon :icon="['fas', 'star']" />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    export default Vue.extend({
        props: {
            light: Boolean
        }
    });
</script>

<style lang="scss">
    .separator {
        text-align: center;
        margin-bottom: 1.5em;
        margin-top: 1.5em;
        position: relative;
        &::before, &::after {
            content: "";
            position: absolute;
            top: 50%;
            width: 25%;
            max-width: 150px;
            height: 3px;
            background-color: #212529;
        }
        &::before {
            left: 50%;
            transform: translate(-125%, -50%);
        }
        &::after {
            right: 50%;
            transform: translate(125%, -50%);
        }
        svg {
            font-size: 2em;
        }
        &.light {
            &::before, &::after {
                background-color: rgba(#fff, 0.8);
            }
        }
    }
</style>