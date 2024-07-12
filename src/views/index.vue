<template>
  <div>
    <adminList/>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {
    adminList: () => import("@/views/adminManage/adminList/index")
  },
  data() {
    return {
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
</style>
