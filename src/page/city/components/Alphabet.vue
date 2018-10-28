<template>
  <ul class="list" >
    <li class="item" v-for="item of letters" :key="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLettersClick">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  update () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLettersClick (e) {
      this.$emit('letterChange', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      const touchY = e.touches[0].clientY - 79
      const index = Math.floor((touchY - this.startY) / 20)
      if (index >= 0 && index < this.letters.length) {
        this.$emit('letterChange', this.letters[index])
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
      cursor:pointer
</style>
