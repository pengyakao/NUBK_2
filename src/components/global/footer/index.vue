<script>
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t, locale } = useI18n();
    return { t,locale, };
  }
};
</script>

<template>
  <footer class="c-footer">
    <div class="row ui-tabbar">
      <div class="col">
        <a href="/caregiver" class="tab-link active"
          ><div class="tab-img"><i class="fa fa-search"></i></div>
          <div class="tab-title">{{ t("footer.search") }}</div></a
        >
      </div>
      <div class="col">
        <a href="/schedule" class="tab-link"
          ><div class="tab-img"><i class="far fa-calendar"></i></div>
          <div class="tab-title">{{ t("footer.calendar") }}</div></a
        >
      </div>
      <div class="col">
        <a href="/" class="tab-link"
          ><div class="tab-img"><i class="fas fa-home-lg"></i></div>
          <div class="tab-title">回首頁</div></a
        >
      </div>
      <div class="col">
        <a href="/help" class="tab-link"
          ><div class="tab-img"><i class="far fa-question-circle"></i></div>
          <div class="tab-title">{{ t("footer.help") }}</div></a
        >
      </div>
      <div class="col">
        <a href="/member" class="tab-link"
          ><div class="tab-img"><i class="far fa-user"></i></div>
          <div class="tab-title">{{ t("footer.member") }}</div></a
        >
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../../assets/layout.scss";

</style>
