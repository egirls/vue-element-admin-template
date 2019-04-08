<template>
  <div>
    <el-form ref="form" :model="form" label-width="40px" :span="8" :xs="10" :sm="10" :md="6" :lg="6" :xl="6" :offset="2">
      <el-col>
        <el-form-item label="账号">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters([

    ])
  },
  methods: {
    onSubmit() {
      const userName = this.form.name
      const userPassword = this.form.password

      if (userName.length === 0 || userPassword.length === 0) {
        console.log('用户名或密码为空')
      } else {
        localStorage.setItem('userName', userName)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
.el-form {
  margin-top: 5%;
}
</style>
