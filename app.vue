<template>
  <div>
    <v-app class="pa-6">
      <h1 class="text-h3">Plan Board Open API</h1>
      <p class="text-h6">API metods for Plan Board <span><v-chip class="mx-2">Veriosn {{ version }}</v-chip></span></p>

      <div v-if="restApiMethods.length">
        <v-divider class="my-4"></v-divider>
        <h1 class="text-h4 my-2">Rest API methods</h1>
        <rest-methods
          v-for="item in restApiMethods"
          :title="item[0].section"
          :items="item"
        />
      </div>

      <socket-workspaces :workspaces="workspaces" />

      <rest-responses :responses="responses"/>

      <rest-entityies v-if="restApiEntities.length" :items="restApiEntities" />

      <rest-types :items="restTypes" />
    </v-app>
  </div>
</template>

<script lang="ts" setup>
import type { IApiHTTPMethod, IEntity, ISocketWorkspace, IUnionType } from './data/interfaces/http.infaces'
import RestMethods from './components/pages/rest-api/RestMethods.vue'
import RestResponses from './components/pages/rest-api/RestResponses.vue'
import RestEntityies from './components/pages/rest-api/RestEntityies.vue'
import SocketWorkspaces from './components/pages/socket-api/SocketWorkspaces.vue'
import RestTypes from './components/pages/rest-api/RestTypes.vue'
import { REPONSES } from './temp/api.doc'

const theme = useTheme()
const route = useRoute()

const methods: Ref<IApiHTTPMethod[]> = ref([])
const workspaces: Ref<ISocketWorkspace[]> = ref([])
const entities: Ref<IEntity[]> = ref([])
const restTypes: Ref<IUnionType[]> = ref([])
const version: Ref<string> = ref('0.0')
const responses = REPONSES

const restApiEntities = computed((): IEntity[] => entities.value)
const restApiMethods = computed((): IApiHTTPMethod[][] => {
  const metodSections: string[] = []

  methods.value.forEach((el) => {
    const methodIndex = metodSections.findIndex((sections) => sections == el.section)
    
    if (methodIndex < 0) {
      metodSections.push(el.section)
    }
  })

  return metodSections.map((section) => methods.value.filter(el => el.section == section))
})

useSeoMeta({
  title: 'Plan Board Open API'
})

const getDocumentation = async () => {
  const response = await useApi('app/get-docs')

  const body = response.body

  methods.value = body.methods
  entities.value = body.entities
  workspaces.value = body.namespaces
  restTypes.value = body.types
  version.value = response.version || '0.0'
}

onMounted(() => {
  theme.global.name.value = 'dark'
  getDocumentation()

  const currentID = route.hash.replace('#', '')
  if (!currentID) return

  setTimeout(() => {
    const element = document.getElementById(currentID)
    element?.scrollIntoView({ behavior: 'smooth' }) 
  }, 1000)
})
</script>
