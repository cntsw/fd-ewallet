<template>
  <tabbar >
  <tabbar-item selected link="/car">
    <img slot="icon" src="../assets/icons/car-sport.svg">
    <span slot="label">购车</span>
  </tabbar-item>
  <tabbar-item link="/wallet">
    <img slot="icon" src="../assets/icons/wallet.svg">
    <span slot="label">钱包</span>
  </tabbar-item>
  <tabbar-item  link="/loan">
    <img slot="icon" src="../assets/icons/loan.svg">
    <span slot="label">信贷</span>
  </tabbar-item>
  <tabbar-item link="/user">
    <img  slot="icon" src="../assets/icons/person.svg"> 
    <span slot="label">我的</span>
  </tabbar-item>
</tabbar>
</template>
<script>
import { mapGetters } from 'vuex'
import { Badge } from 'vux'
import { Tabbar,Icon,TabbarItem ,XHeader,Loading,ViewBox} from 'vux'

export default {
  components: {
    Badge,
    Tabbar,
    TabbarItem,
    XHeader,
    Loading,
    ViewBox,
    Icon
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      'cartProductNum': 'cart/cartProductNum'
    })
  },
  mounted () {
  },
  methods: {
    selectedActive (reg) {
      return reg.test(this.$route.path)
    },
    indexChange (val) {
      this.$store.commit('SET_STATE', {target: 'tabBarActive', data: val})
    }
  }
}
</script>
