<template>
  <b-navbar
    class="header"
    toggleable="lg"
    :variant="navbarVariant"
    :type="navbarType"
  >
    <b-navbar-brand to="/" class="header__brand">
      <img
        class="header__brand--logo"
        src="@/assets/homePage/mobius_light.png"
        alt="OpenHCI2021"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto header__link">
        <template v-for="link in links">
          <b-nav-item
            :to="link.href"
            :key="link.text"
            :disabled="link.disabled"
            class="header__link--text"
            ># {{ link.text }}
          </b-nav-item>
        </template>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  props: {
    navbarVariant: {
      type: String,
      default: "dark-gradient",
    },
    navbarType: {
      type: String,
      default: "dark",
    },
  },
  data() {
    return {
      links: [
        { text: "Home", href: "/", disabled: false },
        { text: "Registration", href: "/registration", disabled: false },
        { text: "Group", href: "/group", disabled: true },
        { text: "Previous Works", href: "/pastwork", disabled: false },
      ],
      isClicked: false,
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.header {
  width: 100%;
  position: relative;
  z-index: 1;

  &__brand {
    height: 52px;

    &--logo {
      height: 100%;
    }
  }

  &__link {
    &--text {
      margin-right: 16px;
      color: #fff;
    }

    &--blue {
      background-color: #0000ff;
    }
  }
}
</style>
