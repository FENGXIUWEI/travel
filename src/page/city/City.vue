<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
  </div>
</template>

<script>
import CityHeader from '@/page/city/components/Header'
import CitySearch from '@/page/city/components/Search'
import CityList from '@/page/city/components/List'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {}
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
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  mounted () {
    this.cityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
