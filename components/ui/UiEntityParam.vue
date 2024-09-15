<template>
  <div class="ui-entity-param">
    <span style="width: 200px;" class="border-sm rounded-lg pa-1 ma-1">
      <!-- <nuxt-link
        v-if="checkType(value)"
        :to="`#${type}`"
      >{{ value }}</nuxt-link> -->
      <span
        v-if="checkType(value)"
        @click="pushToEntity"
        style="color: #9575CD; cursor: pointer;"
      >{{ value }}</span>
      <span v-else>{{ value }}</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'string'
  },
  value: {
    type: String,
    default: 'string'
  }
})

const router = useRouter()

const pushToEntity = () => {
  router.push(`/#${props.type}`)

  const element = document.getElementById(props.type)
  element?.scrollIntoView({ behavior: 'smooth' }) 

  setTimeout(() => {
    router.push('/')
  }, 1500)
}
</script>

<style lang="scss">
// .ui-entity-param {}
</style>
