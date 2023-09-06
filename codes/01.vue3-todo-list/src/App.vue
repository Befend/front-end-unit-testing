<script setup lang="ts">
import TodoList from "./components/TodoList.vue"
</script>

<template>
	<div>
		<TodoList :id="Date.now()"></TodoList>
	</div>
</template>

<style scoped></style>
