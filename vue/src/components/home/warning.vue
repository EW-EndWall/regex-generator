<script>
export default {
  name: "Input",
  props: {
    text: String,
  },
};
</script>

<template>
  <div>
    <div class="bg-slate-200 dark:bg-slate-800 p-1 rounded-md">
      <h1
        class="font-mono font-thin text-xs bg-slate-500 dark:bg-slate-600 py-1 px-2 rounded-md"
      >
        Warning
      </h1>
      <span class="mx-3 text-xs">{{ text }}</span>
    </div>
  </div>
</template>
