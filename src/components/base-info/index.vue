<script setup lang="ts" >
import { inject } from 'vue';
import * as provideKey from '@/provide-keys';
import * as dateUtil from '@/utils/date';

const unknowInfoText = '暂未公开';

const baseInfo = inject(provideKey.protagonist)
const age = baseInfo?.birthYear ? dateUtil.getAge(baseInfo?.birthYear || 0) : unknowInfoText;

</script>
<template>
  <div>
    <div>{{ baseInfo?.name }}</div>
    <div>{{ age }}</div>
    <div>{{ baseInfo?.position }}</div>
    <div>{{ baseInfo?.email }}</div>
    <div>{{ baseInfo?.tel }}</div>
    <div>
      {{ baseInfo?.currentCompany }}
      <span>{{ baseInfo?.currentCompanyEN ? `(${baseInfo.currentCompanyEN})` : '' }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
div,
span,
p {
  border: 1px solid #ccc;
}
</style>