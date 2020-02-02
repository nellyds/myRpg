<template>
  <div class="home">
<Hero v-bind:imageUrl="'https://d1ryv5bogsxua4.cloudfront.net/images/ff/sharing/classes/bl-mage.png'"></Hero>
<button v-on:click="executeTurn">Do Something!</button>
<div  v-for="enemy in enemyList" :key="enemy.image">
    <Enemy v-bind:id = enemy+enemy.id v-bind:image="enemy.image" v-bind:att='30' v-bind:hitPoints='enemy.enemyHitPoints' v-bind:alive='true'></Enemy>
</div>

  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Enemy from "@/components/Enemy.vue";

export default {
    name: "Battle",
    components: {
        Hero,
        Enemy
    },
    data() {
        return {
        enemyList: [
            {'image': 'https://d1ryv5bogsxua4.cloudfront.net/images/ff/sharing/monsters/imp.png','atk': 3, 'enemyHitPoints': 25,'id': 0},
            {'image': 'https://d1ryv5bogsxua4.cloudfront.net/images/ff/sharing/monsters/imp.png','atk': 3, 'enemyHitPoints': 25,'id': 1}, 
            {'image': 'https://d1ryv5bogsxua4.cloudfront.net/images/ff/sharing/monsters/imp.png','atk': 3, 'enemyHitPoints': 25,'id': 2},
            {'image': 'https://d1ryv5bogsxua4.cloudfront.net/images/ff/sharing/monsters/imp.png','atk': 3, 'enemyHitPoints': 25,'id': 3}
        ],       
        selectedEnemy: 0,
        actionSelected: 0,
        actionMenu: ['attack', 'defend', 'spell']
        }     
    },
    mounted: {
        
    },
    computed: {
        hitPoints() {
            return this.$store.state.hitPoints;
        },
        attackPoints() {
            return this.$store.state.playerAtk
        }
    },
    methods: {
        attacked: function(enemyList) {
            this.$store.commit('change', enemyList[0].atk);
        },
        executeTurn: function(enemyList, selectedEnemy){
            this.$store.commit('change')
            window.alert(this.enemyList[0].enemyHitPoints)
            this.enemyList[0].enemyHitPoints = this.enemyList[0].enemyHitPoints - 15;
            window.alert(this.enemyList[0].enemyHitPoints)
            if (this.enemyList[selectedEnemy].enemyHitPoints <= 0){
                document.getElementById('selectedEnemy').remove();
            }

        }
}}
</script>
<style >
    body{
        color: white;
        font-family: 'Pixel Cyr Normal';

    }

</style>