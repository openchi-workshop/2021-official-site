<template>
  <div class="threeContainer" ref="scene">
    <div class="threeContainer__mask"></div>
    <div
      class="threeContainer__arrow threeContainer__arrow--next"
      @click="changeToSlide(currentSlide + 1)"
    >
      <font-awesome-icon icon="arrow-right" />
    </div>
    <div class="threeContainer__arrow threeContainer__arrow--prev">
      <font-awesome-icon
        icon="arrow-left"
        @click="changeToSlide(currentSlide - 1)"
      />
    </div>
    <slot :displayIndex="currentSlide"></slot>
  </div>
</template>

<script>
import * as THREE from "three";
import { gsap } from "gsap";
import fragment from "../../assets/glsl/fragment.glsl";
import vertex from "../../assets/glsl/vertex.glsl";

const loader = new THREE.TextureLoader();
const MAX_SCROLLING_SPEED = 0.1;
const SCROLLING_SPEED_SCALE = 3e-3;

export default {
  data() {
    return {
      time: 0,
      camera: null,
      scene: null,
      renderer: null,
      material: null,
      plane: null,
      threeContainer: null,
      speed: 0,
      position: 1,
      gallery: [
        loader.load(require("@/assets/pastwork/team1.jpg")),
        loader.load(require("@/assets/pastwork/team2.jpg")),
        loader.load(require("@/assets/pastwork/team3.jpg")),
        loader.load(require("@/assets/pastwork/team4.jpg")),
        loader.load(require("@/assets/pastwork/team5.jpg")),
        loader.load(require("@/assets/pastwork/team6.jpg")),
        loader.load(require("@/assets/pastwork/team7.jpg")),
        loader.load(require("@/assets/pastwork/team8.jpg")),
      ],
      animationTween: null,
      currentSlide: 0,
      isScrolling: false,
    };
  },
  mounted() {
    this.initThree();
    this.animate();
    this.raf();
    window.addEventListener("wheel", this.wheel);
    window.addEventListener("resize", this.resize);
  },
  methods: {
    initThree() {
      let w = window.innerWidth;
      let h = window.innerHeight;
      this.scene = new THREE.Scene();
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(w, h);
      this.$refs.scene.appendChild(this.renderer.domElement);
      this.camera = new THREE.PerspectiveCamera(70, w / h, 0.001, 100);
      this.camera.position.set(0, 0, 1);
      this.material = new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        uniforms: {
          time: { type: "f", value: 0 },
          pixels: {
            type: "v2",
            value: new THREE.Vector2(window.innerWidth, window.innerHeight),
          },
          accel: { type: "v2", value: new THREE.Vector2(0.5, 2) },
          progress: { type: "f", value: 0 },
          uvRate1: {
            value: new THREE.Vector2(1, 1),
          },
          texture1: {
            value: loader.load(this.gallery[0]),
          },
          texture2: {
            value: loader.load(this.gallery[1]),
          },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
      });
      this.plane = new THREE.Mesh(
        new THREE.PlaneGeometry(w / h, 1, 1, 1),
        this.material
      );
      this.scene.add(this.plane);
      this.resize();
    },
    animate() {
      this.time = this.time + 0.005;
      this.material.uniforms.time.value = this.time;

      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    raf() {
      let i = Math.round(this.position);

      // control max scrolling speed
      this.position += Math.min(this.speed, MAX_SCROLLING_SPEED);

      // damping
      this.speed *= 0.6;

      // restore force
      let dif = i - this.position;
      this.position += dif * 0.1;

      if (Math.abs(i - this.position) < 0.001) {
        this.position = i;
        this.isScrolling = false;
      }

      let curslide =
        (Math.floor(this.position) - 1 + this.gallery.length) %
        this.gallery.length;

      this.currentSlide = curslide;

      let nextslide =
        (((Math.floor(this.position) + 1) % this.gallery.length) -
          1 +
          this.gallery.length) %
        this.gallery.length;

      this.material.uniforms.texture1.value = this.gallery[curslide];
      this.material.uniforms.texture2.value = this.gallery[nextslide];

      this.material.uniforms.progress.value = this.position;
      window.requestAnimationFrame(this.raf);
    },
    resize() {
      let w = window.innerWidth;
      let h = window.innerHeight;
      this.renderer.setSize(w, h);
      this.camera.aspect = w / h;

      // calculate scene
      let dist = this.camera.position.z - this.plane.position.z;
      let height = 1;
      this.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));

      this.camera.updateProjectionMatrix();
    },
    wheel(event) {
      this.isScrolling = true;
      this.speed += event.deltaY * SCROLLING_SPEED_SCALE;
    },
    changeToSlide(slideIndex) {
      const slideDef = slideIndex - this.currentSlide;
      gsap.to(this, {
        position: this.position + slideDef,
        duration: 0.7,
      });
    },
  },
};
</script>

<style lang="scss">
.threeContainer {
  position: relative;

  &__mask {
    position: absolute;
    background-color: rgba($color: #000000, $alpha: 0.5);
    width: 100%;
    height: 100%;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    margin: 0 20px;
    border-radius: 50%;
    border: none;
    font-size: 24px;
    color: #fff;
    transition: color 0.2s ease;

    &:hover {
      cursor: pointer;
      color: #c55656;
    }

    &--next {
      right: 0;
    }

    &--prev {
      left: 0;
    }
  }
}
</style>