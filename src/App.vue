<template>
  <div id="app">
    <h1>JWT Decode Token</h1>

    <button v-if="!decodeToken" type="button" class="btn btn__copy" @click="handleCopy">Copy</button>

    <form class="form" @submit.prevent="handleSubmitForm">
      <textarea v-model="token" cols="30" rows="10" placeholder="Paste token here..."></textarea>
      <button type="submit" class="btn btn__submit">Decode token</button>
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
  box-sizing: border-box;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  outline: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body,
#app {
  height: calc(100% - 15px);
}

h1 {
  background: #41a1b9;
  color: #fff;
  font-size: 20px;
  left: 0;
  padding: 10px;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 10;
}

.btn {
  background-color: #eee;
  border: none;
  border: 1px solid #ccc;
  color: #333;
  cursor: pointer;
  font-weight: 600;
  transition: background-color .26s;
}

.btn:hover {
  background-color: #e4e4e4;
}

.btn__copy {
  background-color: #eee;
  border-color: #aaa;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  position: absolute;
  right: 10px;
  top: 60px;
  z-index: 11;
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
.btn__submit {
  display: block;
  padding: 12px;
  width: 100%;
}

textarea {
  border: none;
  bottom: 46px;
  height: 100%;
  left: 0;
  position: absolute;
  resize: none;
  right: 0;
  top: 0;
}

.btn__submit {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
}

.highlight__wrapper {
  left: 50%;
  right: 0;
}
</style>
