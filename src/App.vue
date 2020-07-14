<template>
  <div id="app">
    <h1>JWT Decode Token</h1>
    <form @submit.prevent="handleSubmitForm">
      <textarea v-model="token" cols="30" rows="10" placeholder="Paste token here..."></textarea>
      <button type="submit">Decode token</button>
    </form>
  </div>
</template>

<script>
import jwt from './utils/jwt'

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNqUWNtu2zgQ_ZVCz0HRpts2ztNS1MRmI4laXpyqi4JwE2NhIE6C2AZ2t-i_75CSbJGilOyLL-cc3obDmSF_JrvDj-QyWd-tn9_uHg__rn6fzVZPT29vH7fJWfLjsNs8rHe75PJncr_-a3X7j96tn9ldcnnx7uLDh_OzBHVPq4fNGiV_np9_nl18P0vuHm8P2_XDvjxsf6yfk8uHw_39WfKw2q7bkd64kbD_zY7cbTcPm93-ebV_ROn--bA-S9bb1eZ-fFa3h93-cUvvV5utHTZRWqTcKPKVISlgrnMiur9qwURWEaFqcwMpJXluKhAFk5LxEvnluf8_Kqp4ZWYz21vz4_svnMRxeMFzMBnkoMBQUlLITcYk5bpUdj6WnYM6YiatDeVFRcrasKxTVFwqQwUQ7CRs3ee4MLrKoiqtxiiSFaxkUgmiuOjAtkP8ypgKQAF_aLCDcl05C3hrXBAxh5TQ65BoV9V-s8xUgn8Bqkyhc8Ua1UgbFFNcJoVSgZDjIiiqnNcAQ0nXuGfUjnNLpERkvZ8DVdezmWKMwGX4JmtF3VIHrRUroOI5ozXufEWkPPY3JT39fK2qbwJKB606x7YfKEYXsf7diY5LvGHf0DgjsKkWvART6iLtbZJ1biLrkn7hqbmGuo8PfcWhzX5GoJ7vpDq_5ngMiWInF4xLT7sa012xEk8lIznl5RWbxyQsi6OGUHeQ5Ag91WN_PzSakYyNMTk_UXG0ALTzcHIu5lxZR7rh4YK7AeOoga_YmxohAxuczkw7ts_HIlznLTEsMnbkwAWwSaGEK-abv89HQkYo4Tdl3C7Tp9pTVFBmrJzHOXck3OcEvwTBruqoID524xRgpC4KIuohhf7S7YypSF3g-kwBasGzaa0EsWTUhngKrPJNe1IPXZFZ-5VIaRlYO-dzVgYA195q0FGDRg7BoAlLBjfOBpMz8-URozQCARiGKchI25d7j_TaBvUIFPHnYQawqIArXWYyArW7FqFMimn4OkPXjXDWXSNraFm0QDCtBpGDaVnUxWcVw6NHZkBikM6QeI0mYrCh9PUasySYxoiCiDgWhwJqfKRAMTVOuw0RxhafmA3lBDU-g0ARncHJm8NOTiVBHG2LkBEyVnZMSEb8pK01IlBbfsSZEkNLlBmWCyeql7-6EyhjyphThJxLKWjpORf1i7ph6sHTrA2W_03Il0AEXficv5AWCy3YwC4jODsz8EcYlMAOPcbuOIp3gC9aKhtwPEFoMge2IcPDtCRziM7HSwi8suWaxJSkFv79ZUHKOXSpys9UnSAoFRvYt1kfGysW3T3hK1B9OjNes6naLBQetzwlii6a-9WL2okuBZRc9UqBlgx9oLvyBWWtg0NP9kBnCUIVW4YT9eodkFjS3ACWnAVAQVg-Lh2UJ74kuqB4jdpQgmisKbGSqL_5E_TqCIc0ebmxpimvfHmQ6Tusn68d1mbb-K06JA2Vy0DQ3IRJxYzi1-BPcBhsAziIto4NoqO9t0d8X598BkqS5oBNjkZfnnvvE4MW9uaSZdiiF6UU7_UgR1r5dV9ANjdJv9cxKZN2ziNss6ARcuQ61Kgit5UBYZc-vtgMbOCI2ttRsWcVPwi0GYL5_UZuMwF8nNeI-V44dfr1lb-vHdoxKJZNgS7KljAlQX9j_gDDcteiElR4aR2EAf1iyTEhiQVLHdYX7TtcJ-gqKCMXAL1XLc3Mqb5o9hOhBcZEkxG5SHkTehFz146mXRcShheIjFPtKnqjxYtjv-rS9X82vHEXE76CTHU_-iTZrTjDzFCbnBXoh9_Pkv0_T_YJ1yZ8-3i72ieX7z_Ofvv84d37i0_2NXeH7Gz2Jj1PkV___dTyH99_vvj06z8AAAD__w.tK3ixpAZZKgZjR1gpSeEzohelHpCgtLS9ygyqb5kMpzxFo_d9PkUdQWxcl-6Xk8S6hGOvUOlSPwhfwtiuv_2NA'
      token: '{"valid":true,"content":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNqUWNtu2zgQ_ZVCz0HRpts2ztNS1MRmI4laXpyqi4JwE2NhIE6C2AZ2t-i_75CSbJGilOyLL-cc3obDmSF_JrvDj-QyWd-tn9_uHg__rn6fzVZPT29vH7fJWfLjsNs8rHe75PJncr_-a3X7j96tn9ldcnnx7uLDh_OzBHVPq4fNGiV_np9_nl18P0vuHm8P2_XDvjxsf6yfk8uHw_39WfKw2q7bkd64kbD_zY7cbTcPm93-ebV_ROn--bA-S9bb1eZ-fFa3h93-cUvvV5utHTZRWqTcKPKVISlgrnMiur9qwURWEaFqcwMpJXluKhAFk5LxEvnluf8_Kqp4ZWYz21vz4_svnMRxeMFzMBnkoMBQUlLITcYk5bpUdj6WnYM6YiatDeVFRcrasKxTVFwqQwUQ7CRs3ee4MLrKoiqtxiiSFaxkUgmiuOjAtkP8ypgKQAF_aLCDcl05C3hrXBAxh5TQ65BoV9V-s8xUgn8Bqkyhc8Ua1UgbFFNcJoVSgZDjIiiqnNcAQ0nXuGfUjnNLpERkvZ8DVdezmWKMwGX4JmtF3VIHrRUroOI5ozXufEWkPPY3JT39fK2qbwJKB606x7YfKEYXsf7diY5LvGHf0DgjsKkWvART6iLtbZJ1biLrkn7hqbmGuo8PfcWhzX5GoJ7vpDq_5ngMiWInF4xLT7sa012xEk8lIznl5RWbxyQsi6OGUHeQ5Ag91WN_PzSakYyNMTk_UXG0ALTzcHIu5lxZR7rh4YK7AeOoga_YmxohAxuczkw7ts_HIlznLTEsMnbkwAWwSaGEK-abv89HQkYo4Tdl3C7Tp9pTVFBmrJzHOXck3OcEvwTBruqoID524xRgpC4KIuohhf7S7YypSF3g-kwBasGzaa0EsWTUhngKrPJNe1IPXZFZ-5VIaRlYO-dzVgYA195q0FGDRg7BoAlLBjfOBpMz8-URozQCARiGKchI25d7j_TaBvUIFPHnYQawqIArXWYyArW7FqFMimn4OkPXjXDWXSNraFm0QDCtBpGDaVnUxWcVw6NHZkBikM6QeI0mYrCh9PUasySYxoiCiDgWhwJqfKRAMTVOuw0RxhafmA3lBDU-g0ARncHJm8NOTiVBHG2LkBEyVnZMSEb8pK01IlBbfsSZEkNLlBmWCyeql7-6EyhjyphThJxLKWjpORf1i7ph6sHTrA2W_03Il0AEXficv5AWCy3YwC4jODsz8EcYlMAOPcbuOIp3gC9aKhtwPEFoMge2IcPDtCRziM7HSwi8suWaxJSkFv79ZUHKOXSpys9UnSAoFRvYt1kfGysW3T3hK1B9OjNes6naLBQetzwlii6a-9WL2okuBZRc9UqBlgx9oLvyBWWtg0NP9kBnCUIVW4YT9eodkFjS3ACWnAVAQVg-Lh2UJ74kuqB4jdpQgmisKbGSqL_5E_TqCIc0ebmxpimvfHmQ6Tusn68d1mbb-K06JA2Vy0DQ3IRJxYzi1-BPcBhsAziIto4NoqO9t0d8X598BkqS5oBNjkZfnnvvE4MW9uaSZdiiF6UU7_UgR1r5dV9ANjdJv9cxKZN2ziNss6ARcuQ61Kgit5UBYZc-vtgMbOCI2ttRsWcVPwi0GYL5_UZuMwF8nNeI-V44dfr1lb-vHdoxKJZNgS7KljAlQX9j_gDDcteiElR4aR2EAf1iyTEhiQVLHdYX7TtcJ-gqKCMXAL1XLc3Mqb5o9hOhBcZEkxG5SHkTehFz146mXRcShheIjFPtKnqjxYtjv-rS9X82vHEXE76CTHU_-iTZrTjDzFCbnBXoh9_Pkv0_T_YJ1yZ8-3i72ieX7z_Ofvv84d37i0_2NXeH7Gz2Jj1PkV___dTyH99_vvj06z8AAAD__w.tK3ixpAZZKgZjR1gpSeEzohelHpCgtLS9ygyqb5kMpzxFo_d9PkUdQWxcl-6Xk8S6hGOvUOlSPwhfwtiuv_2NA","code":"200","status":"OK","timestamp":"2020-07-14T12:36:26.347Z"}'
    }
  },
  methods: {
    handleSubmitForm () {
      let decodeToken = null

      if (!this.token) {
        alert('Insert a valid token')
        return
      }

      if (/^{.+?}$/.test(this.token)) {
        const obj = JSON.parse(this.token)
        decodeToken = jwt.decode(obj.content)
      } else {
        decodeToken = jwt.decode(this.token)
      }

      console.log(decodeToken)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  text-align: center;
  color: #2c3e50;
  max-width: 600px;
  margin: 60px auto;
}

h1 {
  margin-bottom: 15px;
}

textarea,
button {
  display: block;
  padding: 12px;
  width: 100%;
}

textarea {
  margin-bottom: 10px;
}

button {

}
</style>
