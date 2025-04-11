<template>
  <div class="brand-team-inner-bg">
    <div class="brand-team-deco-1">
      <img src="/src/assets/img/brand/team/team-inner/team-inner-deco-1@2x.webp" alt="" />
    </div>
    <div class="brand-team-deco-4">
      <img src="/src/assets/img/brand/team/team-inner/team-inner-deco-4@2x.webp" alt="" />
    </div>
    <div class="brand-team-squre-1">
      <div class="brand-team-squre-1-1">
        <img src="/src/assets/img/brand/team/team-inner/team-inner-squre-1@2x.webp" alt="" />
      </div>
      <div class="brand-team-squre-1-2">
        <img src="/src/assets/img/brand/team/team-inner/team-inner-squre-2@2x.webp" alt="" />
      </div>
    </div>
    <div class="brand-team-squre-2">
      <div class="brand-team-squre-2-1">
        <img src="/src/assets/img/brand/team/team-inner/team-inner-squre-3@2x.webp" alt="" />
      </div>
      <div class="brand-team-squre-2-2">
        <img src="/src/assets/img/brand/team/team-inner/team-inner-squre-4@2x.webp" alt="" />
      </div>
    </div>
    <div class="brand-team-left-bottom">
      <img
        src="/src/assets/img/brand/team/team-inner/brand-team-inner-left-bottom@2x.webp"
        alt=""
      />
    </div>
    <div class="brand-team-top-deco">
      <img src="/src/assets/img/brand/team/team-inner/team-inner-deco-98@2x.webp" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.brand-team-inner-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  .brand-team-deco-1 {
    position: absolute;
    left: 0;
    top: 0;
    width: 10.75%;
  }
  .brand-team-deco-4 {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 16.25%;
  }
  .brand-team-squre-1 {
    position: absolute;
    left: 21%;
    top: 12%;
    pointer-events: none;
    .brand-team-squre-1-1 {
      position: absolute;
      width: 18%;
      left: -9%;
      top: 48%;
      @media screen and (max-width: 1400px) {
        width: 10%;
        left: -5%;
        top: 31%;
      }
    }
    .brand-team-squre-1-2 {
      width: 50%;
      @media screen and (max-width: 1400px) {
        width: 35%;
      }
    }
  }
  .brand-team-squre-2 {
    position: absolute;
    display: flex;
    right: 7%;
    top: 30%;
    pointer-events: none;
    .brand-team-squre-2-1 {
      width: 18%;
      left: -9%;
      top: 48%;
      @media screen and (max-width: 1400px) {
        width: 10%;
      }
    }
    .brand-team-squre-2-2 {
      width: 31.75%;
      margin-top: 35%;
      margin-left: -1%;
      @media screen and (max-width: 1400px) {
        width: 19.75%;
        margin-top: 15%;
      }
    }
  }
  .brand-team-left-bottom {
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 15%;
  }
  .brand-team-top-deco {
    display: none;
    position: absolute;
    top: 0;
    left: 45%;
    width: 17%;
  }
}
</style>
