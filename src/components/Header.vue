<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe63f;</span>
    </div>
    <div class="header-middle">
      <span class="iconfont">&#xe65a;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      北京
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
.header
  height:.86rem
  line-height:.86rem
  background-color:#00bcd4
  display:flex
  color:white
  .header-left
    width:.64rem
    border:1px sold red
    float:left
    text-align:center
  .header-middle
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right
    float:right
    min-width:1.04rem
    text-align:center
</style>
