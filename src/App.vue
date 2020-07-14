<template>
  <div id="app">
    <h1>JWT Decode Token</h1>

    <button v-if="decodeToken" type="button" @click="handleCopy">Copy</button>

    <form class="form" @submit.prevent="handleSubmitForm">
      <textarea v-model="token" cols="30" rows="10" placeholder="Paste token here..."></textarea>
      <button type="submit">Decode token</button>
    </form>

    <Highlight class="highlight__wrapper">{{ decodeToken }}</Highlight>
  </div>
</template>

<script>
import jwt from 'utils/jwt'
import Highlight from 'components/Highlight'

export default {
  name: 'app',
  components: {
    Highlight
  },
  data () {
    return {
      token: null,
      decodeToken: null
    }
  },
  methods: {
    handleSubmitForm () {
      if (!this.token) {
        alert('Insert a valid token')
        this.decodeToken = null
        return
      }

      if (/^{.+?}$/.test(this.token)) {
        const obj = JSON.parse(this.token)
        this.decodeToken = jwt.decode(obj.content)
        return
      }

      this.decodeToken = jwt.decode(this.token)
    },

    async handleCopy (item) {
      try {
        await navigator.clipboard.writeText(JSON.stringify(this.decodeToken))
      } catch (err) {
        console.log('ERROR', err)
      }
    }
  }
}
</script>

<style>
* {
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  outline: none;
}

html, body, #app {
  height: calc(100% - 15px);
}

h1 {
  background: #41a1b9;
  color: #fff;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  font-size: 20px;
  z-index: 10;
  padding: 10px;
}

/* #app {
  text-align: center;
  color: #2c3e50;
  max-width: 600px;
  margin: 60px auto;
} */

button[type="button"] {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 11;
  top: 60px;
  right: 30px;
  padding: 6px;
  font-weight: 600;
  font-size: 12px;
}

.form,
.highlight__wrapper {
  bottom: 0;
  position: fixed;
  top: 44px;
  width: 50%;
}

.form {
  left: 0;
  right: 0;
}

textarea,
button[type="submit"] {
  display: block;
  padding: 12px;
  width: 100%;
  border: 0;
}

textarea {
  position: absolute;
  bottom: 46px;
  left: 0;
  right: 0;
  top: 0;
  resize: none;
  height: 100%;
}

button[type="submit"] {
  background-color: #ccc;
  /* color: #fff; */
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  font-weight: 600;
}

.highlight__wrapper {
  left: 50%;
  right: 0;
}
</style>
