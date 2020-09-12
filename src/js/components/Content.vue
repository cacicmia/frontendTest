<template>
    <div>
        <HeroSlider/>
        <StaticGallery/>
        <SliderBlock/>
        <MapBlock/>
        <TextBlock/>
    </div>
</template>

<script>
import HeroSlider from './HeroSlider.vue'
import StaticGallery from './StaticGallery.vue'
import SliderBlock from './SliderBlock.vue'
import MapBlock from './MapBlock.vue'
import TextBlock from './TextBlock.vue'
export default {
    components: {
        HeroSlider,
        MapBlock,
        TextBlock,
        SliderBlock,
        StaticGallery
    }
}
</script>

<style>

</style>