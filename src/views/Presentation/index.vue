<template>
  <iframe
    width="100%"
    heigth="100vh"
    frameborder="0"
    :src="link[`team${$route.params.id}`]"
  ></iframe>
</template>

<script>
export default {
  data() {
    return {
      link: {
        team1:
          "https://drive.google.com/file/d/11g2lYzzNvfCr2nPwrEk7dptEiWaCacJ1/preview",
        team3:
          "https://drive.google.com/file/d/1L9k2NFHztRZQEy1m5T3Cbfew4FMh-KEs/preview",
      },
    };
  },
};
</script>

<style>
iframe {
  display: block; /* iframes are inline by default */
  background: #000;
  border: none; /* Reset default border */
  height: 100vh; /* Viewport-relative units */
  width: 100vw;
}
</style>
