<template>
  <div class="ui-workspace">
    <v-divider class="my-2" inset></v-divider>
    <h1 class="text-h6 my-2">Events</h1>

    <v-expansion-panels>
      <v-expansion-panel
        v-for="event in events"
        :key="event.name"
        :title="event.name"
      >
        <v-expansion-panel-text>
          <p class="my-2">{{ event.description }}</p>
          <ui-response :item="event.body"/>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-divider class="my-2" inset></v-divider>
    <h1 class="text-h6 my-2">Actions</h1>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="action in actions"
        :key="action.message"
        :title="action.message"
      >
        <v-expansion-panel-text>
          <p class="my-2">{{ action.description }}</p>
          <ui-response
            v-for="param in action.params"
            :key="param.name"
            :item="param"
          />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts" setup>
import type { IAction, ISocketEvent } from '~/data/interfaces/http.infaces'

defineProps({
  events: {
    type: Array as PropType<ISocketEvent[]>,
    default: () => []
  },
  actions: {
    type: Array as PropType<IAction[]>,
    default: () => []
  },
})
</script>

<style lang="scss">
// .ui-workspace {}
</style>
