<template>
    <div class="experience-item">
        <h3 class="item-title">{{experienceTitle}}</h3>
        <h4 class="item-subtitle">{{experienceSubtitle}}</h4>
        <p class="item-description">{{description}}</p>
        <div class="item-dates">
            <span class="start">{{startDate}}</span>
            <span> - </span>
            <span class="end">{{endDate}}</span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        experienceTitle: String,
        experienceSubtitle: String,
        description: String,
        startDate: String,
        endDate: String
    }
});
</script>

<style lang="scss">
    @import '../../assets/scss/variables';
    @import '../../../node_modules/bootstrap/scss/bootstrap.scss';
    .experience-item {
        padding: 2.5em;
        border-bottom: 1px solid $gray-400;
        text-align: center;
        &:last-of-type {
            border-bottom: 0;
        }
        .item-title {
            text-transform: uppercase;
        }
        .item-subtitle {
            color: $primary;
            text-transform: uppercase;
        }
        .item-dates {
            text-transform: uppercase;
            span:not(.start):not(.end) {
                color: $secondary;
            }
            .end {
                color: $primary;
            }
        }
    }
</style>