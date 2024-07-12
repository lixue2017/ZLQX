<template>
  <div class="sidebar-logo-container">
		<slot />
    <transition name="sidebarLogoFade">
      <div class="logo-title">汽车**平台</div>
      <!-- <router-link
        v-if="collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/"
      >
        <img v-if="logo" :src="logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">{{ title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link> -->
      <!-- <router-link key="expand" class="sidebar-logo-link" to="/">
        <img :src="logo" class="sidebar-logo" />
      </router-link> -->
    </transition>
  </div>
</template>

<script>
import logoImg from "@/assets/logo/logo.svg";

export default {
  name: "SidebarLogo",
  props: {
    // collapse: {
    //   type: Boolean,
    //   required: true,
    // },
  },
  data() {
    return {
      title: "堡森三通",
      logo: logoImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  // position: relative;
	position: fixed;
	z-index: 1001;
  width: 260px;
  height: 60px;
  line-height: 60px;
  background: #fff;
  text-align: center;
  overflow: hidden;

  .logo-title {
    font-family: MFBenHeiNoncommercial, MFBenHeiNoncommercial;
    font-weight: bold;
    font-size: 23px;
    color: #0D6BE9;
    padding-left: 17px;
    line-height: 60px;
    text-align: left;
  }

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      height: 36px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
