<template>
  <prism
    :language="language"
    class="prism"
    :class="[
      { 'prism--fixed': fixed },
      { 'prism--bottom': bottom },
      { 'prism--left': left },
      { 'prism--right': right },
      { 'prism--top': top },
    ]"
  >
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
    },
    fixed: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Prism
  },
  computed: {
    visible () {
      return process.env.NODE_ENV === 'development'
    }
  }
}
</script>

<style scoped>
.prism {
  border: 1px solid #ccc;
  font-size: 13px;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
}

.prism code {
  background-color: transparent;
  border-radius: 0;
  height: 100%;
  padding: 10px;
  font-weight: 600;
}

.prism:before,
.prism :after {
  display: none;
}
</style>
