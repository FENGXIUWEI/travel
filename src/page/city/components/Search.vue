<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <div class="search-content" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCity">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-if="isShow">暂无数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  computed: {
    isShow () {
      return !this.list.length
    }
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCity (e) {
      this.$store.state.city = e.target.innerText
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      const result = []
      for (let i in this.cities) {
        this.cities[i].forEach((value) => {
          if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
            result.push(value)
          }
        })
      }
      this.list = result
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
