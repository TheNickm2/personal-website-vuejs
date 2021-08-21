<template>
    <section class="experience" id="experience">
        <div class="container">
            <div class="section-title">
                <h2>
                    <span>My </span>
                    <span>Experience</span>
                </h2>
            </div>
            <Separator/>
            <div class="experience-items">
                <ExperienceItem
                    experienceTitle="Senior Web Developer"
                    experienceSubtitle="Fasetto"
                    description="Working on corporate websites as changes and updates are required. Redesigning websites to align with corporate branding. Working on front-end interface of Fasetto's primary (web-based) software products using various technologies."
                    startDate="May 2019"
                    endDate="August 2021"
                />
                <ExperienceItem
                    experienceTitle="Senior Web Developer"
                    experienceSubtitle="ARI Network Services"
                    description="Continuing to work with the Website R&amp;D team as a lead developer. Lead the team with ideas and execute on those ideas in a timely fashion. Continue providing new features and functionality for websites using the proprietary platform and ensure that sites are using modern technologies and design practices."
                    startDate="March 2019"
                    endDate="May 2019"
                />
                <ExperienceItem
                    experienceTitle="Website Developer"
                    experienceSubtitle="ARI Network Services"
                    description="Building out client websites on a proprietary web platform, per specifications provided by a Website Implementation Specialist. A few months after starting this position, moved to the Website Research &amp; Development team. On this team, researched new features and functionality that can be brought to the proprietary platform by the website development team."
                    startDate="October 2017"
                    endDate="February 2018"
                />
                <ExperienceItem
                    experienceTitle="Website Implementation Specialist"
                    experienceSubtitle="ARI Network Services"
                    description="Work with clients to determine their needs and requirements for a new website. Communicate those needs to the design and development teams effectively in order to receive the best possible outcome for the client. Assist client with any changes necessary on their new website. Teach clients how to use a proprietary CMS system that is included with their website. Update domain DNS settings as needed to put the client website live upon project completion."
                    startDate = "May 2016"
                    endDate = "December 2017"
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
