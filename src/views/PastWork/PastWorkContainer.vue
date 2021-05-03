<template>
  <div class="threeContainer" ref="scene">
    <div class="threeContainer__mask"></div>
    <div
      class="threeContainer__arrow threeContainer__arrow--next"
      @click="changeSlideSmoothly(1)"
    >
      <font-awesome-icon icon="arrow-right" />
    </div>
    <div class="threeContainer__arrow threeContainer__arrow--prev">
      <font-awesome-icon icon="arrow-left" @click="changeSlideSmoothly(-1)" />
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
const SCROLLING_SPEED_SCALE = 5e-4;

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
      currentSlide: 0,
      isSmoothScrolling: false,
      tl: gsap.timeline(),
      isMobile: window.matchMedia("only screen and (max-width: 992px)").matches,
      clientY: 0,
    };
  },
  mounted() {
    this.initThree();
    this.initEventBinding();
    this.animate();
    this.raf();
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
            value: new THREE.Vector2(w, h),
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
    initEventBinding() {
      window.addEventListener("resize", this.resize);
      if (this.isMobile) {
        this.$refs.scene.addEventListener(
          "touchstart",
          this.onTouchStart,
          false
        );
        this.$refs.scene.addEventListener("touchend", this.onTouchEnd, false);
        this.$refs.scene.addEventListener("touchmove", this.onTouchMove, false);
      } else {
        this.$refs.scene.addEventListener("wheel", this.wheel);
      }
    },
    animate() {
      this.time = this.time + 0.005;
      this.material.uniforms.time.value = this.time;

      window.requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    raf() {
      let i = Math.round(this.position);

      // control max scrolling speed
      if (!this.isSmoothScrolling) {
        this.position += Math.min(this.speed, MAX_SCROLLING_SPEED);
        // damping
        this.speed *= 0.1;

        // restore force
        let dif = i - this.position;
        this.position += dif * 0.1;

        if (Math.abs(i - this.position) < 0.001) {
          this.position = i;
        }
      }

      let curslide =
        (Math.floor(this.position) - 1 + this.gallery.length) %
        this.gallery.length;

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
      if (!this.isSmoothScrolling) {
        this.changeSlide(event.deltaY);
      }
    },
    onTouchStart(event) {
      this.clientY = event.touches[0].clientY;
    },
    onTouchMove(event) {
      if (!this.isSmoothScrolling) {
        const offset = this.clientY - event.touches[0].clientY;
        this.changeSlide(offset);
      }
    },
    changeSlide(delta) {
      this.speed += delta * SCROLLING_SPEED_SCALE;

      if (Math.abs(this.speed) > 0.01) {
        const direction = Math.sign(this.speed);
        this.isSmoothScrolling = true;
        this.changeSlideSmoothly(direction);
      }
    },
    changeSlideSmoothly(direction) {
      const tween = gsap.to(this, {
        position: Math.round(this.position) + direction,
        duration: 1.2,
        onStart: () => {
          this.currentSlide = this.currentSlide + direction;
          if (this.currentSlide < 0) {
            this.currentSlide = this.currentSlide + this.gallery.length;
          }

          this.currentSlide = this.currentSlide % this.gallery.length;
        },
        onComplete: () => {
          this.isSmoothScrolling = false;
          this.speed = 0;
        },
      });

      this.tl.add(tween);
    },
  },
};
</script>

<style lang="scss">
.threeContainer {
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
    z-index: 1;

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
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>