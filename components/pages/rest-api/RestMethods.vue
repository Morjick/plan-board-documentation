<template>
  <div class="methods">
    <h1 class="text-h5 my-2 text-uppercase">{{ title }}</h1>
    <v-expansion-panels v-model="openMethod">
      <ui-method
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </v-expansion-panels>
  </div>
</template>

<script lang="ts" setup>
import type { IApiHTTPMethod } from '~/data/interfaces/http.infaces'

const props = defineProps({
  title: { type: String, default: '' },
  items: { type: Array as PropType<IApiHTTPMethod[]>, default: () => [] }
})

const router = useRouter()

const openMethod = ref()

watch(openMethod, () => {
  if (!props.items[openMethod.value]?.id) return router.push('/')

  router.push(`#${props.items[openMethod.value]?.id}`)
})
</script>

<style lang="scss" scoped>
.methods {
  margin-bottom: 20px;
}
</style>
