<template>
  <prism :language="language" class="prism">
    <slot></slot>
  </prism>
</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism-coy.css'

export default {
  name: 'Highlight',
  props: {
    language: {
      type: String,
      default: 'javascript'
    }
  },
  components: {
    Prism
  }
}
</script>

<style scoped>
.prism {
  font-size: 13px;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
}

.prism code {
  background-color: transparent;
  border-radius: 0;
  font-family: 'Courier New', Courier, monospace;
  height: 100%;
  padding: 10px;
  font-weight: 600;
}

.prism:before,
.prism :after {
  display: none;
}
</style>
