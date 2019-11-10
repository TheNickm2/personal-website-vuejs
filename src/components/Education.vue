<template>
    <section class="education" id="education">
        <div class="container">
            <div class="section-title">
                <h2>
                    <span>My </span>
                    <span>Education</span>
                </h2>
            </div>
            <Separator/>
            <div class="education-items">
                <ExperienceItem
                    experienceTitle="Lake Superior College"
                    experienceSubtitle="Duluth, Minnesota"
                    description="Associate of Science Degree in Computer and Web Programming"
                    startDate="2015"
                    endDate="2017"
                />
                <ExperienceItem
                    experienceTitle="Cloquet Senior High School"
                    experienceSubtitle="Cloquet, Minnestoa"
                    description="High School Diploma Received with Honors"
                    startDate="Graduated"
                    endDate="2014"
                />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Separator from './utilities/Separator.vue';
    import ExperienceItem from './utilities/ExperienceItem.vue';
    export default Vue.extend({
        components: {
            Separator,
            ExperienceItem
        }
    });
</script>

<style lang="scss">

</style>