<template>
  <div v-if="!isEntity" class="ui-response">
    {
    <div
      v-for="(value, key) in item"
      :key="value"
      class="ui-response__item"
    >
      <span v-if="typeof key == 'string'">{{ key }}</span>
      <span v-else>{{ value.name }}</span>
      <span>:</span>
      <span v-if="getIsBasicDataType(value)">{{ value }}</span>
      <ui-response
        v-else
        :item="value"
      />
    </div>
    }
  </div>
  <div
    v-else
    class="ui-response"
    style="padding: 0;"
  >
    <span
      @click="pushToEntity"
      style="color: #9575CD; cursor: pointer;"
    >{{ item.value }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

const router = useRouter()

const getIsBasicDataType = (value: any) => {
  if (typeof value == 'object' || Array.isArray(value)) return false
  return true
}

const isEntity = computed(() => {
  if (props.item.value && props.item.type) return true
  return false
})

const pushToEntity = () => {
  router.push(`/#${props.item.type}`)

  const element = document.getElementById(props.item.type)
  element?.scrollIntoView({ behavior: 'smooth' }) 

  setTimeout(() => {
    router.push('/')
  }, 1500)
}
</script>

<style lang="scss">
.ui-response {

  padding: 5px;

  border-radius: 5px;
  background: rgb(18, 18, 18);

  &__item {
    display: flex;

    gap: 10px;
    padding-left: 10px;
  }
}
</style>
