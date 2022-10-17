<script>
import MenuBox from "./components/MenuBox.vue";
import Slider from "./components/Slider.vue";
import { useI18n } from "vue-i18n";


export default {
  setup() {
    const { t, locale } = useI18n();
    return { t,locale, };
  },
  components: {
    MenuBox,
    Slider,
  },
};
</script>

<template>
  <!-- header -->
  <header class="c-header c-header-2">
    <nav class="navbar ui-navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="javascript:void(0);" class="nav-link"></a>
        </li>
      </ul>
      <h1 class="navbar-brand"><img src="logo.png" /></h1>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="javascript:void(0);" class="nav-link"></a>
        </li>
      </ul>
      <nav>
        <select v-model="locale">
          <option>en-US</option>
          <option>zh-TW</option>
        </select>
      </nav>
    </nav>
  </header>
  <!-- content -->
  <section
    class="c-main c-main-2"
    style="padding-top: 53px; padding-bottom: 0px"
  >
  
    <div class="index-block minHeight-outer">
      <Slider />
      <div class="menu-outer">
        <div class="row">
          <div class="col">
            <a href="#" class="menu-link">
              <div class="menu-subtitle">{{ t("fillIn") }}</div>
              <div class="menu-title">{{ t("memberProfile") }}</div>
            </a>
          </div>
          <div class="col">
            <a href="#" class="menu-link">
              <div class="menu-subtitle">{{ t("add") }}</div>
              <div class="menu-title">{{ t("patient") }}</div>
            </a>
          </div>
          <div class="col">
            <a href="#" class="menu-link">
              <div class="menu-subtitle">{{ t("add") }}</div>
              <div class="menu-title">{{ t("serviceRequirement") }}</div>
            </a>
          </div>
        </div>
      </div>
      <div class="menu-outer-2">
        <div class="row">
          <div class="col-3">
            <MenuBox
              color1="#70BDF9"
              color2="#5685F3"
              icon="fa fa-user-nurse"
              title="找看護"
              href="/caregiver"
            />
          </div>
          <div class="col-3">
            <MenuBox
              color1="#F6DC4F"
              color2="#EEAF3B"
              icon="fas fa-hard-hat"
              title="找移工"
              href="#"
            />
          </div>
          <div class="col-3">
            <MenuBox
              color1="#7DE2C5"
              color2="#56B899"
              icon="fa fa-file-alt"
              title="工單管理"
              href="#"
            />
          </div>
          <div class="col-3">
            <MenuBox
              color1="#F197CA"
              color2="#E93E8E"
              icon="fa fa-dollar-sign"
              title="收費方式"
              href="#"
            />
          </div>
          <div class="col-3">
            <MenuBox
              color1="#F1A064"
              color2="#E9703E"
              icon="fas fa-hand-paper"
              title="推薦人"
              href="#"
            />
          </div>
          <div class="col-3">
            <MenuBox
              color1="#79D4DE"
              color2="#5AB4BC"
              icon="fas fa-laptop"
              title="課程專區"
              href="#"
            />
          </div>
          <div class="col-3">
            <MenuBox
              color1="#F08E9D"
              color2="#EA4857"
              icon="fas fa-headphones"
              title="客服專區"
              href="#"
            />
          </div>
          <div class="col-3">
            <MenuBox
              color1="#CA8ADB"
              color2="#B863CF"
              icon="fas fa-question"
              title="常見問題"
              href="#"
            />
          </div>
        </div>
      </div>
      <div class="menu-outer-3">
        <div class="row">
          <div class="col-12">
            <a href="#" class="menu-link">
              <div class="menu-title">長照2.0</div>
            </a>
          </div>
          <div class="col-12">
            <a href="#" class="menu-link">
              <div class="menu-title">醫院</div>
            </a>
          </div>
          <div class="col-12">
            <a href="#" class="menu-link">
              <div class="menu-title">復康巴士</div>
            </a>
          </div>
          <div class="col-12">
            <a href="#" class="menu-link">
              <div class="menu-title">安養中心</div>
            </a>
          </div>
          <div class="col-12">
            <a href="#" class="menu-link">
              <div class="menu-title">藥局</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../../assets/layout.scss";
</style>
