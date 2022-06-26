<script setup lang="ts">
import { provide } from 'vue';
import protagonistInfo from './protagonist';
import Card from './components/card/index.vue';
import * as provideKey from './provide-keys';
provide(provideKey.protagonist, protagonistInfo);
</script>

<template>
  <Card />
</template>

<style>
</style>
