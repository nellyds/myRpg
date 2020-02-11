<template>
<div>
<div></div>
<img :src="image" />
      </div>

</template>
<script>
export default {
    name: 'Enemy',
    methods: {

    },
    props: {
        image: {
            type: String
        },
        hitPoints: {
            type: Number
        },
        atk: {
            type: Number
        },
        alive: {
            type: Boolean
        }
    }

}
</script>
<style scoped>
img{
    width: 5;
    height: auto;;
}
</style>