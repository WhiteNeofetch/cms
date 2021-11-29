<template>
  <div id="app">
    <header class="header">
      <p class="logo">Logo</p>
      <nav class="header__nav nav">
        <ul class="nav__item nav_item">
          <li>
            <a class="nav_item__link nav_item__link--active" href="#"
              >Новости</a
            >
          </li>
          <li><a class="nav_item__link" href="#">Контакты</a></li>
        </ul>
        <div class="nav__item">
          <a href="#"
            ><svg
              class="profile"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7013 22.4015V23.5H18.1011V22.4015C18.1011 17.7058 14.2946 13.9009 9.60063 13.9009C4.90499 13.9009 1.1001 17.7058 1.1001 22.4015V23.5H0.5V22.4015C0.5 18.5563 2.88767 15.2734 6.26068 13.9427L7.23841 13.557L6.32228 13.0418C4.27925 11.8929 2.90016 9.70838 2.90016 7.20047C2.90016 3.50035 5.90051 0.5 9.60063 0.5C13.3007 0.5 16.3011 3.50035 16.3011 7.20047C16.3011 9.708 14.9207 11.8912 12.8771 13.042L11.9617 13.5574L12.939 13.9428C16.3136 15.2735 18.7013 18.5563 18.7013 22.4015ZM15.701 7.20047C15.701 3.83133 12.9698 1.1001 9.60063 1.1001C6.23148 1.1001 3.50026 3.83133 3.50026 7.20047C3.50026 10.5696 6.23148 13.3008 9.60063 13.3008C12.9698 13.3008 15.701 10.5696 15.701 7.20047Z"
                fill="#333333"
                stroke="#333333"
              /></svg
          ></a>
          <a href="#"
            ><svg
              class="search"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0911 20.2211C6.04556 20.2211 1.96106 16.127 1.96106 11.0911C1.96106 6.04553 6.04556 1.96105 11.0911 1.96105C16.1367 1.96105 20.2212 6.04553 20.2212 11.0911C20.2212 16.127 16.1367 20.2211 11.0911 20.2211ZM24.863 24.1901L18.5489 17.8762C20.1827 16.079 21.1822 13.7051 21.1822 11.0911C21.1822 5.51695 16.6653 1 11.0911 1C5.51698 1 1 5.51695 1 11.0911C1 16.6652 5.51698 21.1821 11.0911 21.1821C13.7052 21.1821 16.0791 20.173 17.8762 18.5489L24.1904 24.8631C24.373 25.0457 24.6804 25.0457 24.863 24.8631C25.0457 24.6708 25.0457 24.3727 24.863 24.1901Z"
                fill="#333333"
                stroke="#333333"
                stroke-width="0.5"
              />
            </svg>
          </a>
        </div>
      </nav>
      <svg
        width="31"
        height="22"
        viewBox="0 0 31 22"
        fill="none"
        class="burger"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.0185547"
          y1="1"
          x2="30.0186"
          y2="1"
          stroke="#050505"
          stroke-width="2"
        />
        <line y1="11" x2="30" y2="11" stroke="#050505" stroke-width="2" />
        <line y1="21" x2="30" y2="21" stroke="#050505" stroke-width="2" />
      </svg>
    </header>
    <hr class="header_line" />
    <Nuxt />
    <footer class="footer">
      <div class="footer__copyright footer_copyright">
        <p class="footer_copyright__logo">Logo</p>
        <p class="footer_copyright__copyright">copyright © 2020 | NBC NEWS</p>
      </div>
      <div class="footer__confidentiality footer_confidentiality">
        <p class="footer_confidentiality__item">
          <a href="#">Privacy Policy</a>
        </p>
        <p class="footer_confidentiality__item">
          <a href="#">Do not sell personal info</a>
        </p>
        <p class="footer_confidentiality__item">
          <a href="#">Terms of Service</a>
        </p>
        <p class="footer_confidentiality__item"><a href="#">spb-site.ru</a></p>
      </div>
      <div class="footer__soc footer_soc">
        <div class="footer_soc__links footer_soc_links">
          <p class="footer_soc_links__item"><a href="#">About</a></p>
          <p class="footer_soc_links__item"><a href="#">Contact</a></p>
          <p class="footer_soc_links__item mr-0"><a href="#">Careers</a></p>
          <p class="footer_soc_links__item"><a href="#">Coupons</a></p>
        </div>
        <div class="soc">
          <a href="#">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.9997 27.9999C27.9997 12.5609 15.4389 0 0.00012207 0V5.33297C12.4989 5.33297 22.6668 15.5009 22.6668 27.9999H27.9997ZM0.000366211 24C0.000366211 26.209 1.79134 28 4.0003 28C6.20927 28 8.00024 26.209 8.00024 24C8.00024 21.791 6.20927 20 4.0003 20C1.79134 20 0.000366211 21.791 0.000366211 24ZM0 9.33301C10.2928 9.33301 18.6667 17.707 18.6667 27.9999H13.3338C13.3338 20.6479 7.35188 14.667 0 14.667V9.33301Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="30"
              height="25"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5297 7.0987L14.5926 8.13676L13.5434 8.00965C9.72425 7.5224 6.38776 5.86997 3.55488 3.09474L2.16992 1.71772L1.81318 2.7346C1.05775 5.00139 1.54039 7.39529 3.11421 9.00534C3.95358 9.89511 3.76472 10.0222 2.31681 9.4926C1.81318 9.32312 1.37251 9.19601 1.33055 9.25956C1.18366 9.40786 1.68728 11.3357 2.08598 12.0983C2.63157 13.1576 3.74374 14.1957 4.96082 14.81L5.98905 15.2973L4.77197 15.3185C3.59685 15.3185 3.55488 15.3396 3.68078 15.7845C4.10047 17.1615 5.75823 18.6233 7.60484 19.2589L8.90587 19.7037L7.77272 20.3817C6.09398 21.3562 4.12145 21.907 2.14893 21.9493C1.20464 21.9705 0.428223 22.0553 0.428223 22.1188C0.428223 22.3307 2.9883 23.517 4.47819 23.9831C8.94784 25.3601 14.2569 24.7669 18.2439 22.4154C21.0767 20.7418 23.9096 17.4158 25.2316 14.1957C25.9451 12.4797 26.6586 9.3443 26.6586 7.84017C26.6586 6.86566 26.7215 6.73855 27.8966 5.57338C28.5891 4.89546 29.2396 4.15399 29.3655 3.94214C29.5754 3.53963 29.5544 3.53963 28.4842 3.89977C26.7005 4.53532 26.4487 4.45058 27.3301 3.49726C27.9806 2.81934 28.757 1.59061 28.757 1.23047C28.757 1.16691 28.4422 1.27284 28.0855 1.4635C27.7078 1.67535 26.8684 1.99313 26.2389 2.18379L25.1057 2.54394L24.0775 1.84483C23.5109 1.4635 22.7135 1.0398 22.2938 0.912694C21.2236 0.616105 19.5869 0.658475 18.6216 0.997434C15.9986 1.95076 14.3408 4.40821 14.5297 7.0987Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="29"
              height="26"
              viewBox="0 0 29 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3269 13.1505C28.3269 11.4793 26.9754 10.152 25.3284 10.152C24.5504 10.151 23.8021 10.4504 23.2395 10.9878C21.175 9.51294 18.3484 8.55464 15.2026 8.43175L16.5787 1.99243L21.0518 2.95074C21.1013 4.08137 22.0349 4.99088 23.1904 4.99088C24.37 4.99088 25.3284 4.03257 25.3284 2.85233C25.3284 1.67273 24.3701 0.714264 23.1904 0.714264C22.3548 0.714264 21.6171 1.20582 21.2731 1.91867L16.2841 0.861794C16.1366 0.836991 15.9891 0.861794 15.8907 0.93556C15.7678 1.00932 15.6942 1.13205 15.6698 1.27958L14.1456 8.45607C10.9506 8.55464 8.07493 9.51294 5.98599 11.0124C5.42334 10.475 4.67492 10.1757 3.89688 10.1768C2.22557 10.1768 0.898438 11.5283 0.898438 13.1753C0.898438 14.404 1.63561 15.4361 2.66816 15.9035C2.61802 16.204 2.59334 16.5082 2.59439 16.8128C2.59439 21.433 7.977 25.1937 14.6128 25.1937C21.2488 25.1937 26.6314 21.4578 26.6314 16.8128C26.6312 16.5082 26.6065 16.2041 26.5576 15.9035C27.5897 15.4361 28.3269 14.3792 28.3269 13.1505ZM7.7309 15.2885C7.7309 14.1089 8.68921 13.1505 9.86945 13.1505C11.0491 13.1505 12.0075 14.1088 12.0075 15.2885C12.0075 16.4683 11.0492 17.4271 9.86945 17.4271C8.68937 17.4512 7.7309 16.4683 7.7309 15.2885ZM19.7004 20.966C18.2257 22.4409 15.4238 22.5393 14.6128 22.5393C13.7772 22.5393 10.9754 22.4161 9.52495 20.966C9.30413 20.7449 9.30413 20.4007 9.52495 20.1796C9.74624 19.9588 10.0903 19.9588 10.3116 20.1796C11.2457 21.1137 13.2119 21.433 14.6128 21.433C16.0139 21.433 18.0044 21.1136 18.9137 20.1796C19.135 19.9588 19.4791 19.9588 19.7004 20.1796C19.8969 20.4007 19.8969 20.7449 19.7004 20.966ZM19.3069 17.4514C18.1271 17.4514 17.1688 16.4931 17.1688 15.3133C17.1688 14.1336 18.1271 13.1753 19.3069 13.1753C20.487 13.1753 21.4453 14.1336 21.4453 15.3133C21.4453 16.4681 20.487 17.4514 19.3069 17.4514Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4691 0C6.89535 0 0.754883 6.17754 0.754883 13.797C0.754883 20.6824 5.7693 26.3894 12.3267 27.4284V17.7861H8.84297V13.797H12.3267V10.7572C12.3267 7.29659 14.3745 5.38827 17.5057 5.38827C19.0062 5.38827 20.578 5.65734 20.578 5.65734V9.05036H18.8444C17.1436 9.05036 16.6115 10.1156 16.6115 11.207V13.7942H20.4121L19.8045 17.7834H16.6115V27.4257C23.1689 26.3922 28.1833 20.6838 28.1833 13.797C28.1833 6.17754 22.0428 0 14.4691 0Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MevnHeader from "../components/layouts/Header.vue";
import { relationMixin } from "@/mixins/relation.mixin";
export default {
  name: "App",
  components: {
    MevnHeader,
  },
  data: () => ({}),
  async mounted() {
    await this.fetchCategories();
    await this.fetchProducs();
  },
  methods: {
    ...mapActions({
      fetchCategories: "categories/fetchAll",
      fetchProducs: "products/fetchAll",
    }),
  },
  computed: {
    ...mapGetters({
      categories: "categories/items",
      products: "products/items",
    }),
  },
};
</script>

<style lang="scss">
// $dark: #303846;
body,
html {
  padding: 0;
  margin: 0;
  // background-color: $dark;
  // text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}
a {
  text-decoration: none;
}
.header {
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fdfdfd;
}
.nav {
  display: flex;
  align-items: center;
}
.nav_item li {
  margin-right: 51px;
}
.nav__item li:last-child {
  margin-right: 40px;
}
.search {
  margin-left: 40.8px;
}
li {
  list-style-type: none;
}
.nav__item {
  display: flex;
  color: #333333;
}
.nav_item__link {
  font-family: nunitoSansSemiBold;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
}

.nav_item__link--active::before {
  content: " ";
  background: red;
  width: 5px;
  border-radius: 100px;
  // margin: auto 0 auto 0;
  // align-items: center;
  vertical-align: middle;
  margin-right: 3px;
  // justify-content: center;
  display: inline-block;
  height: 5px;
}
.nav_links__item {
  text-decoration: none;
}
#nav {
  padding: 30px;
}

.burger {
  display: none;
}

.header_line {
  height: 3px;
  border: 0;
  background: #c31815;
  max-width: 1344px;
  position: absolute;
}

.footer {
  height: 250px;
  padding: 80px 392px 54px 395px;
  display: flex;
  justify-content: space-between;
  background-color: #0e1e32;
}
.footer_copyright__logo {
  font-family: nunitoSansSemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #ffffff;
}
.footer_copyright__copyright {
  font-family: poppinsRegular;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #ffffff;
  opacity: 0.5;
  margin-top: 46px;
}
.footer_confidentiality__item a {
  font-family: poppinsMedium;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 31px;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.footer_soc_links {
  display: flex;
}

.footer_soc_links__item {
  margin-right: 43px;
}

.footer_soc_links__item:last-child {
  margin-right: 0;
}

.footer_soc_links__item a {
  font-family: poppinsMedium;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 31px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
}
.soc {
  display: flex;
  justify-content: flex-end;
  margin-top: 26px;
}
.soc a {
  margin-right: 51.43px;
}
.soc a:last-child {
  margin-right: 0;
}

@media screen and (max-width: 1440px) {
  .footer {
    padding: 80px 250px 54px 250px;
  }

  .header_line {
    max-width: 1020px;
  }
}
@media screen and (max-width: 768px) {
  .header {
    justify-content: space-between;
    padding: 0 16px 0 15px;
  }
  .footer {
    height: 263px;
    padding: 25px 43px 30px 44px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .footer_copyright__logo {
    font-family: nunitoSansSemiBold;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
    text-align: center;
  }
  .footer_copyright__copyright {
    font-family: poppinsRegular;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 0.02em;
    color: #ffffff;
    opacity: 0.5;
    margin-top: 46px;
  }
  .footer_confidentiality__item a {
    font-family: poppinsMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 31px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  .footer_soc {
    margin-left: auto;
    margin-right: auto;
    margin-top: 18px;
  }

  .footer_soc_links {
    display: flex;
  }

  .footer_soc_links__item {
    margin-right: 43px;
  }

  .footer_soc_links__item:last-child {
    margin-right: 0;
  }

  .footer_soc_links__item a {
    font-family: poppinsMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 31px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
  .soc {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }
  .soc a {
    margin-right: 51.43px;
  }
  .soc a:last-child {
    margin-right: 0;
  }
}
@media screen and (max-width: 360px) {
  .header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fdfdfd;
  }
  .nav {
    display: none;
    align-items: center;
  }
  .nav_item li {
    margin-right: 51px;
  }
  .nav__item li:last-child {
    margin-right: 40px;
  }
  .search {
    margin-left: 40.8px;
  }
  li {
    list-style-type: none;
  }
  .nav__item {
    display: flex;
    color: #333333;
  }
  .nav_item__link {
    font-family: nunitoSansSemiBold;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #333333;
  }
  .nav_links__item {
    text-decoration: none;
  }
  #nav {
    padding: 30px;
  }

  .burger {
    display: block;
  }

  .footer {
    height: 414px;
    padding: 16px 57px;
    display: flex;
    justify-content: center;
    // flex-direction: column;
  }
  .footer_copyright__logo {
    font-family: nunitoSansSemiBold;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    color: #ffffff;
  }
  .footer_copyright__copyright {
    font-family: poppinsRegular;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 0.02em;
    color: #ffffff;
    opacity: 0.5;
    margin-top: 11px;
  }
  .footer_confidentiality__item {
    display: flex;
    justify-content: center;
  }

  .footer_soc_links {
    flex-wrap: wrap;
    justify-content: center;
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }

  .mr-0 {
    margin-right: 0 !important;
  }

  .footer_soc_links__item {
    margin-right: 43px;
  }

  .footer_soc_links__item:last-child {
    margin-right: 0;
  }

  .footer_soc_links__item a {
    font-family: poppinsMedium;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 31px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  .soc a {
    margin-right: 51.43px;
  }
  .soc a:last-child {
    margin-right: 0;
  }
}
</style>
