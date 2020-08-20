import Item from '@/components/users-list/item/item.vue'
export default {
  components: {
    Item
  },
  mounted() {
      this.$store.dispatch('getLocalUsers')
  },
  computed: {
    getLocalUsers() {
      return this.$store.getters.localUsers
    }
  }
}
