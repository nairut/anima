<template>
  <div class="iphone-14-pro-max-2 screen">
    <div class="frame-10-2">
      <h1 class="title-2">{{ title }}</h1>
      <p class="address-2 valign-text-middle" v-html="address"></p>
      <group2 :className="group2Props.className" />
    </div>
    <div class="group-1-1">
      <div class="overlap-group-1">
        <img class="rectangle-5-1" :src="rectangle5" alt="Rectangle 5" /><img
          class="rectangle-2-1"
          :src="rectangle2"
          alt="Rectangle 2"
        /><img class="rectangle-3-1" :src="rectangle3" alt="Rectangle 3" /><vector1
          :src="vector1Props.src"
          :className="vector1Props.className"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Group2 from "./Group2";
import Vector1 from "./Vector1";
export default {
  name: "IPhone14ProMax2",
  components: {
    Group2,
    Vector1,
  },
  props: ["title", "address", "rectangle5", "rectangle2", "rectangle3", "group2Props", "vector1Props"],
};
</script>

<style>
.iphone-14-pro-max-2 {
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 23.7px;
  min-height: 640px;
  min-width: 360px;
  overflow: hidden;
  width: 100%;
}

.frame-10-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 59.17px;
  height: 336.33px;
  margin-left: 31px;
  margin-top: 53px;
  position: relative;
  width: 279.23px;
}

.title-2 {
  color: var(--black);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-l);
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-right: -8.62px;
  margin-top: -0.57px;
  position: relative;
  width: 287.85px;
}

.address-2 {
  color: var(--onyx);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xxs);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 24.1px;
  margin-right: -31.03px;
  position: relative;
  width: 310.26px;
}

.group-1-1 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  height: 227px;
  margin-right: 101.3px;
  min-width: 189.68px;
  padding: 0 0px;
}

.overlap-group-1 {
  height: 227px;
  position: relative;
  width: 190px;
}

.rectangle-5-1 {
  height: 212px;
  left: 15px;
  position: absolute;
  top: 0;
  width: 175px;
}

.rectangle-2-1 {
  height: 152px;
  left: 0;
  position: absolute;
  top: 75px;
  width: 15px;
}

.rectangle-3-1 {
  height: 15px;
  left: 0;
  position: absolute;
  top: 212px;
  width: 158px;
}
</style>
