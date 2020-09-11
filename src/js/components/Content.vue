<template>
    <div>
        <staticGallery/>
        <sliderBlock/>
        <mapBlock/>
        <textBlock/>
    </div>
</template>

<script>
import staticGallery from './staticGallery.vue'
import sliderBlock from './sliderBlock.vue'
import mapBlock from './mapBlock.vue'
import textBlock from './textBlock.vue'
export default {
    components: {
        mapBlock,
        textBlock,
        sliderBlock,
        staticGallery
    }
}
</script>

<style>

</style>