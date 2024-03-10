<script>
import ComponentHome from "./components/home/home.vue";
import ComponentHeader from "./components/header.vue";
import ComponentFooter from "./components/footer.vue";

export default {
  components: {
    ComponentHome,
    ComponentHeader,
    ComponentFooter,
  },
};
</script>

<template>
  <div>
    <ComponentHeader />
    <ComponentHome />
    <ComponentFooter />
  </div>
</template>
