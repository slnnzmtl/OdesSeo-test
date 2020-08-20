export default {
  name: 'user-form',
  data() {
    return {
      name: false,
      position: false,
      email: false,
      phone: false,
    }
  },
  methods: {
    save(user) {
      if (!this.validEmail(user.email)) {
        this.email = true
      } else {
        this.email = false
      }
      if (!this.validName(user.name)) {
        this.name = true
      } else {
        this.name = false
      }
      if (!this.validPosition(user.position)) {
        this.position = true
      } else {
        this.position = false
      }
      if (!this.validPhone(user.phone)) {
        this.phone = true
      } else {
        this.phone = false
      }
      if (!this.email && !this.name && !this.position && !this.phone) {
        if (this.$store.getters.editableUser == null){
          this.$store.dispatch('addUser')
        } else {
          this.$store.dispatch('saveList')
        }
        this.$store.dispatch('resetCurrentUser')
      }
    },
    validEmail(email) {
      var reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
      return reg.test(email)
    },
    validName(name) {
      var reg = /^[а-яa-zА-ЯA-Z-]{0,}\s[а-яa-zА-ЯA-Z-]{1,}$/
      return reg.test(name)
    },
    validPosition(position) {
        if (position) {
          var reg = /^.{5,}$/
        return reg.test(position)
      } else {
        return false
      }
    },
    validPhone(phone) {
      var reg = /^\+?\d{10,13}$/
        return reg.test(phone)
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  }
}
