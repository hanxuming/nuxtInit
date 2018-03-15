<template>
  <div class="indexWrap">
    首页
  </div>
</template>

<script>
import { Tests } from '../assets/service/getData.js';
export default {
  components: {
    
  },
  mounted () {
      Tests().then(res => {
        console.log(JSON.stringify(res));
      })
  }
}
</script>

<style lang="less">
  
</style>
