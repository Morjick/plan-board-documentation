<template>
  <div class="socket-workspaces">
    <v-divider class="my-4"></v-divider>
    <h1 class="text-h4 my-2">Socket Workspaces</h1>

    <v-expansion-panels v-model="openWorkspace">
      <v-expansion-panel
        v-for="workspace in workspaces"
        :key="workspace.id"
        :id="workspace.id"
      >
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col cols="3">
              <span>{{ workspace.name }}</span>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <p>{{ workspace.description }}</p>
        <ui-workspace
          :events="workspace.evetns"
          :actions="workspace.actions"
        />
      </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts" setup>
import type { ISocketWorkspace } from '~/data/interfaces/http.infaces'

const props = defineProps({
  workspaces: {
    type: Array as PropType<ISocketWorkspace[]>,
    default: () => []
  },
})

const router = useRouter()

const openWorkspace = ref()

watch(openWorkspace, () => {
  if (!props.workspaces[openWorkspace.value]?.id) return router.push('/')

  router.push(`#${props.workspaces[openWorkspace.value]?.id}`)
})
</script>

<style lang="scss">
// .socket-workspaces {}
</style>
