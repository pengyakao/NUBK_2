<script>
import { faL } from "@fortawesome/free-solid-svg-icons";
import CaregiverCard from "./components/CaregiverCard.vue";
import { useI18n } from "vue-i18n";


export default {
  setup() {
    const { t, locale } = useI18n();
    return { t,locale, };
  },
  components: {
    CaregiverCard,
  },
};
</script>

<template>
  <div class="caregiver">
    <header class="c-header">
      <nav class="navbar ui-navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="javascript:history.back();" class="nav-link"
              ><i class="fa fa-chevron-left"></i
            ></a>
          </li>
        </ul>
        <h1 class="navbar-brand">找看護</h1>
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
    <section class="c-main" style="padding-top: 48px; padding-bottom: 0px">
      <div class="ui-tab">
        <div class="row">
          <div class="col">
            <a href="javascript:void(0);"><i class="fa fa-search"></i>{{ t("search") }}</a>
          </div>
          <div class="col">
            <a href="javascript:void(0);"
              ><i class="fa fa-sort-amount-down"></i>{{ t("sort") }}</a
            >
          </div>
          <div class="col">
            <a href="javascript:void(0);"><i class="fa fa-filter"></i>{{ t("filter") }}</a>
          </div>
        </div>
      </div>
      <div class="caregiver-outer">
        <CaregiverCard
          title="張小姐"
          gender="F"
          age="58"
          height="163"
          weight="60"
          tenure="1~3年"
          :license="['護理相關證照', '良民證']"
          :text="['失智症(80小時)', '腦中風(24小時)', '食道癌(48小時)']"
          average="4.0"
          :favorite= true
          img="caregiver_01.jpg"
          link="#"
        />
        <CaregiverCard
          title="廖小姐"
          gender="F"
          age="35"
          height="162"
          weight="54"
          tenure="10年以上"
          :license="['護理相關證照', '照服員證照']"
          :text="['失智症(80小時)', '腦中風(24小時)', '食道癌(48小時)']"
          average="0.0"
          :favorite= false
          img="caregiver_02.jpg"
          link="#"
        />
        <CaregiverCard
          title="看先生"
          gender="M"
          age="35"
          height="172"
          weight="70"
          tenure="10年以上"
          :license="['照服員結業證書', '照顧服務員證照', '良民證']"
          :text="['失智症(80小時)', '腦中風(24小時)', '食道癌(48小時)']"
          average="3.6"
          :favorite="true"
          img="caregiver_03.jpg"
          link="#"
        />
        <CaregiverCard
          title="劉先生"
          gender="M"
          age="60"
          height="175"
          weight="75"
          tenure="10年以上"
          :license="['護理相關證照', '良民證']"
          :text="['失智症(80小時)', '腦中風(24小時)', '食道癌(48小時)']"
          average="0.0"
          :favorite="false"
          img="caregiver_04.jpg"
          link="#"
        />
        <CaregiverCard
          title="張小姐"
          gender="F"
          age="58"
          height="163"
          weight="60"
          tenure="1~3年"
          :license="['護理相關證照', '良民證']"
          :text="['失智症(80小時)', '腦中風(24小時)', '食道癌(48小時)']"
          average="4.0"
          :favorite="true"
          img="caregiver_01.jpg"
          link="#"
        />
        <CaregiverCard
          title="廖小姐"
          gender="F"
          age="35"
          height="162"
          weight="54"
          tenure="10年以上"
          :license="['護理相關證照', '照服員證照']"
          :text="['失智症(80小時)', '腦中風(24小時)', '食道癌(48小時)']"
          average="0.0"
          :favorite="false"
          img="caregiver_02.jpg"
          link="#"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/layout.scss";

.caregiver-outer {
    padding-bottom: 50px;
}
</style>
