<template>
  <v-expansion-panel :id="item.id">
    <v-expansion-panel-title>
      <template v-slot:default="{ expanded }">
        <v-row no-gutters>
          <v-col cols="1">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 5px;">
              <v-chip
                variant="outlined"
                clas="green-darken-1"
                :color="getMethodColor(item.method)"
              >{{ item.method }}</v-chip>
              <span style="color: #F57C00;" v-if="item.requiredAuth">auth*</span>
            </div>
          </v-col>
          <v-col class="d-flex justify-start" cols="14">
            <span class="text-subtitle-1 mx-5">{{ fullpath }}</span>
          </v-col>
          <v-col class="d-flex justify-end mx-3" cols="1">
            <v-btn @click.stop.prevent="copyPath"><nuxt-icon name="empty-docs" /></v-btn>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <div v-if="item.description">
        <span class="text-h6">Описание: </span>
        <span class="text-subtitle-1">{{ item.description }}:</span>
        <v-divider class="my-2" inset></v-divider>
      </div>
      <div v-if="item.params?.length">
        <span class="text-h6">Параметры:</span>
        <v-divider class="my-2" inset></v-divider>
        <ui-param
          v-for="param in item.params"
          :key="param.name"
          :param="param"
        />
        <v-divider class="my-2" inset></v-divider>
      </div>
      <div v-if="!item.params?.length">Метод не предусматривает передаваемых параметров</div>
      <div v-if="item.responses?.length">
        <span class="text-h6">Возможные ответы:</span>
        <rest-responses
          :responses="item.responses"
          :show-title="false"
        />
      </div>
      <div v-if="!item.responses?.length">Метод не предусматривает ответ</div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts" setup>
import type { IApiHTTPMethod, THTTPMethod } from '~/data/interfaces/http.infaces'
import RestResponses from '../pages/rest-api/RestResponses.vue'

const props = defineProps({
  item: {
    type: Object as PropType<IApiHTTPMethod>,
    default: () => {},
  },
})

const fullpath = computed(() => `${props.item.section}/${props.item.path}`)

const getMethodColor = (type: THTTPMethod) => {
  if (type == 'POST') return 'green-lighten-1'
  if (type == 'GET') return 'blue-lighten-1'
  if (type == 'PUT') return 'deep-purple-lighten-2'
  if (type == 'DELETE') return 'red-darken-1'
  if (type == 'PATCH') return 'teal-darken-1'
}

const copyPath = () => {
  navigator.clipboard.writeText(fullpath.value)
}
</script>

<style lang="scss">
// .ui-method {}
</style>
