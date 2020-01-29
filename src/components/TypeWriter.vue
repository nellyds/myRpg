<template>
<div>
    <div class="alphaContainer">
    <p>output: {{output}}</p>
        <div class="alphaRow">
            <span class="letterHolder"><span class="selectedLetter" id="a">a</span></span>
            <span class="letterHolder"><span id="b">b</span></span>
            <span class="letterHolder"><span id="c">c</span></span>
            <span class="letterHolder"><span id="d">d</span></span>
            <span class="letterHolder"><span id="e">e</span></span>
        </div>
        <div class="alphaRow">
            <span class="letterHolder"><span id="f">f</span></span>
            <span class="letterHolder"><span id="g">g</span></span>
            <span class="letterHolder"><span id="h">h</span></span>
            <span class="letterHolder"><span id="i">i</span></span>
            <span class="letterHolder"><span id="j">j</span></span>
        </div>
        <div class="alphaRow">
            <span class="letterHolder"><span id="k">k</span></span>
            <span class="letterHolder"><span id="l">l</span></span>
            <span class="letterHolder"><span id="m">m</span></span>
            <span class="letterHolder"><span id="n">n</span></span>
            <span class="letterHolder"><span id="o">o</span></span>
        </div>
        <div class="alphaRow">
            <span class="letterHolder"><span id="p">p</span></span>
            <span class="letterHolder"><span id="q">q</span></span>
            <span class="letterHolder"><span id="r">r</span></span>
            <span class="letterHolder"><span id="s">s</span></span>
            <span class="letterHolder"><span id="t">t</span></span>
        </div>
        <div class="alphaRow">
            <span class="letterHolder"><span id="u">u</span></span>
            <span class="letterHolder"><span id="v">v</span></span>
            <span class="letterHolder"><span id="w">w</span></span>
            <span class="letterHolder"><span id="x">x</span></span>
            <span class="letterHolder"><span id="y">y</span></span>
        </div>
        <div class="alphaRow">
            <span class="letterHolder"><span id="z">z</span></span>
            <span class="letterHolder"><span id=".">.</span></span>
            <span class="letterHolder"><span id="?">?</span></span>
            <span class="letterHolder"><span id=" ">' '</span></span>
            <span class="letterHolder"><span id="@">@</span></span>
        </div>
    </div>

  <button v-on:click="indexUp">index +</button>
  <button v-on:click="indexDown">index -</button>
    <button v-on:click="rowUp"> row + </button>
    <button v-on:click="rowDown"> row -</button>
    <button v-on:click="add"> add</button>
      </div>

      
</template>
<script>
export default {
    name: 'TypeWriter',
      data () {
    return {
     output :"",
     targetIndex: 0,
     targetRow: 0,
    abc: [
    ['a','b','c','d','e'],
    ['f','g','h','i','j'],
    ['k','l','m','n','o'],
    ['p','q','r','s','t'],
    ['u','v','w','x','y'],
    ['z','.','?',' ','@']
    ] 
    }
  },methods:{
        indexUp: function(){
            if (this.targetIndex <4){
                document.getElementById(this.abc[this.targetRow][this.targetIndex]).classList.remove("selectedLetter");
                this.targetIndex +=1;
                document.getElementById(this.abc[this.targetRow][this.targetIndex]).classList.add("selectedLetter");
            }
    },
        indexDown: function(){
            if (this.targetIndex >0){
                document.getElementById(this.abc[this.targetRow][this.targetIndex]).classList.remove("selectedLetter");
                this.targetIndex -=1;
                document.getElementById(this.abc[this.targetRow][this.targetIndex]).classList.add("selectedLetter");
            }
    },
        rowUp: function(){
            if (this.targetRow <5){
                document.getElementById(this.abc[this.targetRow][this.targetIndex]).classList.remove("selectedLetter");
                this.targetRow +=1;
                document.getElementById(this.abc[this.targetRow][this.targetIndex]).classList.add("selectedLetter");
        }
    },
        rowDown: function(){
        if (this.targetRow >0){
            document.getElementById(this.abc[this.targetRow][this.targetIndex]).classList.remove("selectedLetter");
            this.targetRow -=1;
            document.getElementById(this.abc[this.targetRow][this.targetIndex]).classList.add("selectedLetter");
        }
    },
    add: function(){
        this.output += this.abc[this.targetRow][this.targetIndex];
    }
  }

}
</script>
<style scoped>
    .alphaContainer{
        margin: auto;
    }
    .alphaRow{
        margin: auto;
        font-size: 1.2em;
        width: 40em;
        padding: 5px;
    }
    .selectedLetter{
        padding: 2px;
        border: 2px solid black;
    }
    .letterHolder{
        padding: 5px;
    }

</style>