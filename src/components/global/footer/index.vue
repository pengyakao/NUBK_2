<script></script>

<template>
  <div class="footer">
    <div class="row align-items-start">
      <div class="col">
          <router-link to="/search"
        ><img src="/icon/footer/search.svg" alt="搜尋資料" /><span
            >搜尋資料</span
          ></router-link>
        </div>
      
      <div class="col"><router-link to="/schedule"
        >
          <img src="/icon/footer/calendar.svg" alt="日曆排程" /><span
            >日曆排程</span
          ></router-link
      >
        </div>
      <div class="col"><router-link to="/"
        >
          <div id="home" routerLink="/">
            <img src="/icon/footer/home.svg" alt="首頁" />
          </div></router-link></div
      >
      <div class="col"><router-link to="/help"
        >
          <img src="/icon/footer/help-circle.svg" alt="使用教學" /><span
            >使用教學</span
          ></router-link
      >
        </div>
      <div class="col">
        <router-link to="/member">
          <img src="/icon/footer/user.svg" alt="會員專區" /><span>會員專區</span>
          </router-link>
        </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100vw;
  height: 53px;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0px;
  left: 0;
  text-align: center;
}
#home {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8f63cf;
  border-radius: 100px;
  bottom: 10px;
}
#home img {
  width: 28px;
  height: 28px;
}
.col {
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.col span {
  font-size: 13px;
  color: #909090;
  display: flex;
}
.col img {
  width: 22px;
  height: 22px;
}
a{
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
