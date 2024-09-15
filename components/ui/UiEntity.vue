<template>
  <v-expansion-panel
    :class="{ 'active-accordion': isEntityInSearchParam }"
  >
    <v-expansion-panel-title expand-icon="mdi-menu-down">
      <span>{{ item.name }}</span>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <div
        v-for="param in item.params"
        :key="param.name"
        style="display: flex; align-items: center"
      >
        <span style="width: 150px;" class="border-sm rounded-lg pa-1 ma-1">{{ param.name }}</span>
        <span>:</span>
        <ui-entity-param
          :value="param.value"
          :type="param.type"
        />
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
import type { IEntity } from '~/data/interfaces/http.infaces'

const props = defineProps({
  item: {
    type: Object as PropType<IEntity>,
    default: () => { }
  },
})

const route = useRoute()
const router = useRouter()

const isEntityInSearchParam = computed(() => route.hash.split('#').join('') == props.item.name)

watch(isEntityInSearchParam, ()=> {
  setTimeout(() => router.push('/'), 1500)
})
</script>

<style lang="scss">
// .ui-entity {}
.active-accordion {
  background: #424242;
}
</style>
