export default {
  props: [
    'obj',
    'idx'
  ],
  methods: {
    remove() {
      this.$store.dispatch('deleteUser', this.idx)
    },
    edit() {
      this.$store.dispatch('editUser', {
        obj: this.obj,
        idx: +this.idx
      })
    }
  }
}
