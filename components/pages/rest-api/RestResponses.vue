<template>
  <div class="rest-responses">
    <v-divider
      v-if="showTitle"
      class="my-4"
    ></v-divider>

    <h1
      v-if="showTitle"
      class="text-h4 my-2"
    >Reponses example</h1>

    <v-expansion-panels>
      <v-expansion-panel
        v-for="item in responses"
        :item="item.status"
      >
        <v-expansion-panel-title expand-icon="mdi-menu-down">
          <span>{{ item.status }}</span>
          <span class="mx-2"></span>
          <span>{{ item.exception.type }}</span>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
           <ui-response :item="item" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts" setup>
import type { IHTTPResponses } from '~/data/interfaces/http.infaces'

defineProps({
  responses: {
    type: Array as PropType<IHTTPResponses[]>,
    default: () => []
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
})
</script>

<style lang="scss">
// .rest-responses {}
</style>
