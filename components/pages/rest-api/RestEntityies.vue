<template>
  <div class="rest-entityies">
    <v-divider class="my-4"></v-divider>
    <h1 class="text-h4 my-2">Entities</h1>

    <v-expansion-panels>
      <ui-entity
        v-for="item in items"
        :key="item.name"
        :item="item"
        :id="item.name"
      />
    </v-expansion-panels>
  </div>
</template>

<script lang="ts" setup>
import type { IEntity } from '~/data/interfaces/http.infaces'

defineProps({
  items: {
    type: Array as PropType<IEntity[]>,
    default: () => []
  },
})
</script>

<style lang="scss">
// .rest-entityies {}
</style>
