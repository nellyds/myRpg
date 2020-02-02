<template>
<div>
<p> Current {{ hitPoints}} </p>
<img :src="imageUrl" />

      </div>
</template>
<script>
export default {
    name: 'Hero',
    
    props: {
        imageUrl: {
            type: String
        },
        points: {
            type: Number
        },
        alive: {
            type: Boolean
        }
    },
    computed: {
        hitPoints() {
            return this.$store.state.hitPoints
        }
    },
    methods: {

    }

}
</script>
<style scoped>
img{
    width: 10%;
    height: auto;
}
</style>