<template>
  <b-navbar class="header" toggleable="lg" variant="info">
    <b-navbar-brand href="/" class="header__brand">
      <img
        class="header__brand--logo"
        src="@/assets/mobius_light_1.png"
        alt="OpenHCI2021"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto header__link">
        <template v-for="link in links">
          <b-nav-item
            :to="link.href"
            :key="link"
            :disabled="link.disabled"
            class="header__link--text"
            ># {{ link.text }}
          </b-nav-item>
        </template>
        <b-nav-item to="" class="header__link--blue"
          >&lt; APPLY NOW &gt;</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: [
        { text: "Registration", href: "/registration", disabled: false },
        { text: "Blog", href: "/blog", disabled: true },
        { text: "Group", href: "/group", disabled: true },
        { text: "Works", href: "/pastwork", disabled: false },
      ],
    };
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.header {
  height: 80px;
  background: linear-gradient(to bottom, #000 50%, #0000ff);

  &__brand {
    height: 52px;

    &--logo {
      height: 100%;
    }
  }

  &__link {
    &--text {
      margin-right: 16px;
    }

    &--blue {
      background-color: #0000ff;
    }
  }
}

.nav-link {
  color: #fff !important;
  padding: 4px;
}

.nav-link:hover {
  color: #ffffff50 !important;
}
</style>
