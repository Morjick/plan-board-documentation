<template>
  <div class="ui-param">
    <div class="ui-param__name border-sm rounded-lg pa-1 ma-1">
      {{ param.name }} <span v-if="param.required">*</span>
    </div>
    <span>:</span>
    <!-- <span class="ui-param__value border-sm rounded-lg py-1 px-2 ma-1">{{ param.value }}</span> -->
     <ui-entity-param
      :type="param.type || 'string'"
      :value="param.value"
     />
  </div>
</template>

<script lang="ts" setup>
import type { IHTTPParams } from '~/data/interfaces/http.infaces'

defineProps({
  param: {
    type: Object as PropType<IHTTPParams>,
    default: () => {},
  },
})
</script>

<style lang="scss">
.ui-param {
  display: flex;
  align-items: center;

  &__name {
    display: block;
    position: relative;

    width: 150px;

    span {
      color: #EF5350;
    }
  }
}
</style>
