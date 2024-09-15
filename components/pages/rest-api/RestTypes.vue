<template>
  <div class="rest-types">
    <v-divider class="my-4"></v-divider>
    <h1 class="text-h4 my-2">Union Types</h1>

    <v-expansion-panels v-model="openWorkspace">
      <v-expansion-panel
        v-for="item in items"
        :key="item.name"
        :id="item.name"
        :class="{ 'active-accordion': route.hash.split('#').join('') == item.name }"
      >
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col cols="3">
              <span>{{ item.name }}</span>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <p>{{ item.description }}</p>

        <div style="display: flex; gap: 5px;">
          <span>Значения: </span>
          <div
            v-for="(value, index) in item.values"
            :key="value"
          >
            <span>"{{ value }}"</span>
            <span
              v-if="index !== item.values.length - 1"
              style="margin-left: 5px;"
            >|</span>
          </div>
        </div>
      </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts" setup>
import type { IUnionType } from '~/data/interfaces/http.infaces'


const props = defineProps({
  items: {
    type: Array as PropType<IUnionType[]>,
    default: () => []
  },
})

const route = useRoute()
const router = useRouter()

const openWorkspace = ref()

watch(openWorkspace, () => {
  if (!props.items[openWorkspace.value]?.name) return router.push('/')

  router.push(`#${props.items[openWorkspace.value]?.name}`)
})
</script>

<style lang="scss">
// .rest-types- {}
</style>
