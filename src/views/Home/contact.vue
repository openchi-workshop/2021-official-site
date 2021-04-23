<template>
    <div id="contact">
        <b-row col="4" class="contact_all">
            <b-col>
                <div class="contact__section">
                    <Title text="OPENHCI'21" class="contact__section__title" />
                        <StyledSubtitle text="About" class="contact__section__subtitle" />
                        <StyledSubtitle text="Intro &amp; Goals" class="contact__section__subtitle" />
                        <StyledSubtitle text="Program" class="contact__section__subtitle" />
                        <StyledSubtitle text="Keynote Speaker" class="contact__section__subtitle" />
                        <StyledSubtitle text="Blog" class="contact__section__subtitle" />
                </div>
            </b-col>
            <b-col>
                <div class="contact__section">
                    <Title text="REGISTRATION" class="contact__section__title" />
                        <StyledSubtitle text="Registration" class="contact__section__subtitle" />
                        <StyledSubtitle text="Admission List" class="contact__section__subtitle" />
                </div>
            </b-col>
            <b-col>
                <div class="contact__section">
                    <Title text="GROUP" class="contact__section__title" />
                        <StyledSubtitle text="Crew" class="contact__section__subtitle" />
                        <StyledSubtitle text="Organizers" class="contact__section__subtitle" />
                        <StyledSubtitle text="Co-organizers" class="contact__section__subtitle" />
                        <StyledSubtitle text="Sponsers" class="contact__section__subtitle" />
                </div>
            </b-col>
            <b-col>
                <div class="contact__section">
                    <Title text="WORKS" class="contact__section__title" />
                        <StyledSubtitle text="2021" class="contact__section__subtitle" />
                        <StyledSubtitle text="2019" class="contact__section__subtitle" />
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
// @ is an alias to /src
import Title from "@/components/ui_contact/Title";
import Subtitle from "@/components/ui_contact/Subtitle";

export default {
  name: "contact",
  components: {
    Title,
    Subtitle,
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    #contact{
        background: #1c1c24;
    }
    .contact__section{
        &__title{
            
        }
        &__subtitle{
            
        }

    }

</style>
