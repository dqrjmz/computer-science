<template>
  jmz
  <!-- <img alt="Vue logo" src="./assets/logo.png"  /> -->
  <transition name="fade" appear>
    <HelloWorld  msg="App" />
  </transition>
  <teleport to="#con">
    <div>teleport</div>
  </teleport>
  <!-- <input v-model="num" v-if="fadeShow" /> -->
  <div @click="clickHandle">点击</div>
  {{ reactiveState.name }}{{testComputed}}
  <comp1 :msg="fadeShow"></comp1>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { ref, onMounted, reactive,h } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Comp1:{
      props:{
        msg:Boolean
      },
      render(){
        console.log('comp1 render');
        return h('div');
      }
    }
  },
  computed:{
    testComputed(){
      return this.reactiveState.name;
    }
  },
  watch:{
    ['reactiveState.name'](){
      return 'hhh';
    }
  },
  setup() {
    const fadeShow = ref(true);
    const reactiveState = reactive({
      name: "Boswell",
    });
    function clickHandle() {
      fadeShow.value = !fadeShow.value;
    }

    onMounted(() => {
      // console.log("onMounted");
    });

    return {
      clickHandle,
      fadeShow,
      reactiveState,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 1000ms;
  transition-timing-function: ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
