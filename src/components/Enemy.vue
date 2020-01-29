<template>
<div>

<img :src="imageUrl" />
      </div>
</template>
<script>
export default {
    name: 'Enemy',
    
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
    }

}
</script>