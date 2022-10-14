<script></script>

<template>
  <footer class="c-footer">
    <div class="row ui-tabber">
      <div class="col">
        <a href="/" class="tab=link">
          <div class="tab-img">
            <i class="far fa-search"></i>
          </div>
          <div class="tab-title">搜尋資料</div>
        </a>
      </div>
      <div class="col">
        <a href="/" class="tab=link">
          <div class="tab-img">
            <i class="far fa-calendar"></i>
          </div>
          <div class="tab-title">日曆排程</div>
        </a>
      </div>
      <div class="col">
        <a href="/" class="tab=link">
          <div class="tab-img">
            <i class="fas fa-home-lg"></i>
          </div>
          <div class="tab-title">回首頁</div>
        </a>
      </div>
      <div class="col">
        <a href="/" class="tab=link">
          <div class="tab-img">
            <i class="far fa-question-circle"></i>
          </div>
          <div class="tab-title">使用教學</div>
        </a>
      </div>
      <div class="col">
        <a href="/" class="tab=link">
          <div class="tab-img">
            <i class="far fa-user"></i>
          </div>
          <div class="tab-title">會員專區</div>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
$primary-color: #8f63cf;
$footer-height: 3.3125rem;
.c-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
}
.c-footer {
  position: static;
}
.row {
  --bs-gutter-x: 0;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}
.row {
  --bs-gutter-x: 0;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  margin-left: 0;
  margin-right: 0;
}
.c-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
}

.ui-tabbar {
	--bs-gutter-x: 1rem;
	flex-wrap: nowrap;
	margin-left: 0;
	margin-right: 0;
    background-color: #f5f5f5;
	.col {
		position: relative;
		&:nth-child(3) {
			&:before {
				content: "";
				display: inline-block;
				position: absolute;
				left: 50%;
				top: -.75rem;
				width: 4rem;
				height: 4rem;
				background-color: $primary-color;
				border: .4375rem solid #f5f5f5;
				border-radius: 50%;
				// @include translate(-50%, 0);
			}
			.tab-link {
				display: inline-block;
				position: absolute;
				left: 50%;
				top: .125rem;
				// @include translate(-50%, 0);
			}
			.tab-img {
				color: white !important;
				font-size: 1.5625rem;
			}
			.tab-title {
				display: none;
			}
		}
	}
	.tab-link {
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: $footer-height;
		text-align: center;
		text-decoration: none;
	}
	.tab-img {
		margin-top: .3125rem;
		color: #9c9c9c;
		font-size: 1.375rem;
		line-height: 1;
	}
	.tab-title {
		margin-top: .1875rem;
		color: #909090;
		font-size: .8125rem;
		white-space: nowrap;
	}
	.active {
		.tab-img, .tab-title {
			color: $primary-color;
		}
	}
}

</style>

