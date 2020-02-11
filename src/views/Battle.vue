<template>
  <div class="home">
<Hero v-bind:imageUrl="'https://d1ryv5bogsxua4.cloudfront.net/images/ff/sharing/classes/bl-mage.png'"></Hero>
<button v-on:click="executeTurn">Do Something!</button>
<div  v-for="enemy in enemyList" :key="enemy.image">
    <Enemy v-bind:id = enemy.id v-bind:image="enemy.image" v-bind:att='30' v-bind:hitPoints='enemy.enemyHitPoints' v-bind:alive='true'></Enemy>
</div>
    <ul>
        
            <li v-on:click="selectAction($event)" id="attackId" >attack</li>
            <li v-on:click="selectAction($event)" id="defendId" >defend</li>
            <li v-on:click="selectAction($event)" id="spellId" >spell</li>
            <li v-on:click="selectAction($event)" id="itemId" >item</li>
    </ul>
    <ul >
        <li v-for="enemy in enemyList" :key="enemy.id">
            <span v-on:click="selectEnemy($event)" v-bind:id = enemy.id>
            {{enemy.name}} {{enemy.id}}  Hp: {{enemy.enemyHitPoints}}
            </span>
        </li>
    </ul>
    <ul v-if="showItemList">
        <li v-for="item in itemList" :key="item.itemName">
            {{item.itemName}}
            </li>
    </ul>
    <ul v-if="showSpellList">
        <li v-for="spell in spellList" :key="spell.spellId">
            {{spell.spellName}}
            </li>
    </ul>
    <p>{{battleText}}</p>
  <button v-on:click="executeTurn">Do Something!</button>
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
            {'image': 'https://d1ryv5bogsxua4.cloudfront.net/images/ff/sharing/monsters/imp.png','atk': 3, 'name': 'imp', 'enemyHitPoints': 25,'id': 0, 'alive': true},
            {'image': 'https://d1ryv5bogsxua4.cloudfront.net/images/ff/sharing/monsters/imp.png','atk': 3, 'name': 'imp', 'enemyHitPoints': 25,'id': 1, 'alive': true}, 
            {'image': 'https://d1ryv5bogsxua4.cloudfront.net/images/ff/sharing/monsters/imp.png','atk': 3, 'name': 'imp', 'enemyHitPoints': 25,'id': 2, 'alive': true},
            {'image': 'https://d1ryv5bogsxua4.cloudfront.net/images/ff/sharing/monsters/imp.png','atk': 3, 'name': 'imp', 'enemyHitPoints': 25,'id': 3, 'alive': true}
        ],       
        enemySelected: 0,
        actionSelected: 0,
        menuSelected:0,
        battleText: '',
        showSpellList: false,
        showItemList: false,
        showEnemyList:false,
        actionList: [
            {'actionName': 'attack', 'id': 'attackId'},
            {'actionName': 'defend', 'id': 'defendId'},
            {'actionName': 'spell', 'id': 'spellId'},
            {'actionName': 'item', 'id': 'itemId'},
        ],
        spellList: [
            {'spellName': 'fire', 'id': 'fireId'},
            {'spellName': 'blizzard', 'id': 'blizzardId'},
            {'spellName': 'thunder', 'id': 'thunderId'}
        ],
        itemList: [
            {'itemName': 'potion'},
            {'itemName': 'potion'},
            {'itemName': 'potion'}
        ]

        }     
    },
    mounted() {
        var battleStart = function(){
        this.battleText = 'A pack of monsters appeared!';
        }
        window.setTimeout(battleStart, 200);
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
        executeTurn: function(){
            var turnDefense = 1;
            if (this.actionList[this.actionSelected] == this.actionList[1]){
                turnDefense = 2;
                console.log(turnDefense);
            }
            if (this.actionList[this.actionSelected] == this.actionList[0]){
                console.log('attacking');
                if (this.enemyList[this.enemySelected].alive == true){
                    this.enemyList[this.enemySelected].enemyHitPoints = this.enemyList[this.enemySelected].enemyHitPoints - 15;
                    if (this.enemyList[this.enemySelected].enemyHitPoints <= 0){
                        this.removeEnemy(this.enemySelected);
                    }      
                }  
            }
            var i;
            var len = this.enemyList.length;
            for (i = 0;i < len; i++){
                if (this.enemyList[i].alive === true){
                    this.$store.commit('attacked', turnDefense);  
                }
            }       
        },
        removeEnemy: function(enemyId) {
            console.log('beforedeath')
            this.enemyList[this.enemySelected].alive = false;
            console.log('afterdeath')
            document.getElementById(enemyId).classList.add('dead');
            document.getElementById(enemyId).classList.add('dead');
            this.battleText = this.enemyList[this.enemySelected].name + ' died!'
        },
        selectAction: function(event) {
            if (event.target.id == 'attackId'){
                this.actionSelected = 0;
                console.log('attack');
            }
             if (event.target.id == 'defendId'){
                 this.actionSelected = 1;          
                 console.log('defend')
            } 
            if (event.target.id == 'spellId'){
                this.actionSelected = 2;
                this.showSpellList = true;
                this.showItemList = false;
                console.log('magic');
            }
            if (event.target.id == 'itemId'){
                this.actionSelected = 3;
                this.showItemList = true;
                this.showSpellList = false;
                console.log('item');
            }
        },
        selectEnemy: function(event) {
            if (this.enemyList[event.target.id].alive === true){
                console.log('this')
                this.enemySelected = event.target.id;
            }
        }
    }
    }
</script>
<style >
    body{
        color: white;
        font-family: 'Pixel Cyr Normal';
        list-style-type: none;
    }
    li{
        list-style-type: none;
    }
    img{
        width: 50px;
        height: auto;
    }
    .dead{
        visibility: hidden;
    }
</style>