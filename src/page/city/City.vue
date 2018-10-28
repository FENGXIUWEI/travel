<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @letterChange="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '@/page/city/components/Header'
import CitySearch from '@/page/city/components/Search'
import CityList from '@/page/city/components/List'
import CityAlphabet from '@/page/city/components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    cityInfo () {
      axios.get('api/city.json').then(this.citySuccess)
    },
    citySuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted () {
    this.cityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
