<template>
  <div>
    <!-- Navbar STart -->
    <header
      id="topnav"
      class="defaultscroll sticky"
    >
    <div class="container">
      <!-- Logo container-->
      <div>
        <Link class="logo" :href="route('home')" v-if="navLight !== true">
          <img src="/images/logo-dark.png" height="55" alt="" />
        </Link>
        <Link class="logo" :href="route('home')" v-else>
          <img src="/images/logo-dark-short.png" class="l-dark sm" height="55" alt="" />
          <img src="/images/logo-dark.png" class="l-dark lg" height="55" alt="" />
          <img
            src="/images/logo-light.png"
            class="l-light"
            height="55" 
            alt=""
          />
        </Link>
    </div>
    <div class="buy-button" v-if="isIcons !== true">
      <a
        href="https://api.whatsapp.com/send?phone=5804149774393&text=hola,%20quiero%20reservar%20un%20viaje%20a"
        target="_blank"
        style="
          background-color: #25D366;
          color: #fff;
        "
        class="btn mt-4"
        ><i class="fab fa-whatsapp"></i> Reserva tu viaje</a
      >
    </div>
    <ul class="buy-button list-inline mb-0" v-if="isIcons === true">
          <li class="list-inline-item mb-0 developer-icon">
            <b-dropdown
              right
              variant="link"
              toggle-class="text-decoration-none p-0 pr-2"
              menu-class="dd-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 py-0"
            >
              <template #button-content>
                <i class="mdi mdi-magnify h4 text-muted"></i>
              </template>
              <div style="width: 300px">
                <form>
                  <input
                    type="text"
                    id="text"
                    name="name"
                    class="form-control border bg-white"
                    placeholder="Search..."
                  />
                </form>
              </div>
            </b-dropdown>
          </li>
          <li class="list-inline-item mb-0 pr-2">
            <a href="#" class="btn btn-icon btn-soft-primary"
              ><i class="mdi mdi-github mdi-18px icons"></i
            ></a>
          </li>
          <li class="list-inline-item mb-0 pr-2">
            <a href="#" class="btn btn-icon btn-soft-primary"
              ><i class="mdi mdi-stack-overflow mdi-18px icons"></i
            ></a>
          </li>
          <li class="list-inline-item mb-0">
            <a
              href="javascript:void(0)"
              class="btn btn-icon btn-soft-primary"
              data-toggle="modal"
              data-target="#productview"
              ><i class="mdi mdi-account-outline mdi-18px icons"></i
            ></a>
          </li>
        </ul>
        <!--end login button-->
        <!--end login button-->
        <!-- End Logo container-->
         <div class="menu-extras">
          <div class="menu-item">
            <!-- Mobile menu toggle-->
            <a
              class="navbar-toggle"
              @click="toggleMenu()"
              :class="{ open: isCondensed === true }"
            >
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </div>
        </div>
        <div id="navigation">
          <!-- Navigation Menu-->
          <ul
            class="navigation-menu"
            :class="{ 'nav-light': navLight === true }"
          >
            <li class="has-submenu">
              <Link :href="route('home')" class="side-nav-link-ref">Inicio</Link>
            </li>
            <li class="has-submenu">
              <Link :href="route('about.us')" class="side-nav-link-ref">Nuestra Empresa</Link
              >
            </li>
            <li class="has-submenu">
              <Link :href="route('contact')" class="side-nav-link-ref">Contacto</Link>
            </li>
            <li class="has-submenu" hidden>
              <Link :href="route('login')">Acceder</Link>
            </li>
          </ul>
          <!--end navigation menu-->
          <div class="buy-menu-btn d-none">
            <a 
              href="https://api.whatsapp.com/send?phone=5804149774393&text=hola,%20quiero%20reservar%20un%20viaje%20a"
              target="_blank"
              class="btn btn-primary"
              ><i class="fab fa-whatsapp"></i> Reserva tu viaje</a>
          </div>
          <!--end login button-->
        </div>
  </div>
  <!--end container-->
  </header>
  <!--end header-->
  <!-- Navbar End -->
  </div>
</template>
<script>
/**
 * Navbar component
 */

import { Head, Link } from '@inertiajs/inertia-vue3';
//Import Data

export default {
  data() {
    return {
      isCondensed: false,
    };
  },
  props: {
    isWhiteNavbar: {
      type: Boolean,
    },
    navLight: {
      type: Boolean,
    },
    isIcons: {
      type: Boolean,
    },
  },

  mounted: () => {
    window.onscroll = function () {
      onwindowScroll();
    };

    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("topnav").classList.add("nav-sticky");
      } else {
        document.getElementById("topnav").classList.remove("nav-sticky");
      }

      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }

    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("actives");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("actives");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("actives");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("actives");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("actives");
            }
          }
        }
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      this.isCondensed = !this.isCondensed;
      if (this.isCondensed) {
        document.getElementById("navigation").style.display = "block";
      } else document.getElementById("navigation").style.display = "none";
    },

    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling.nextSibling;

      if (nextEl && !nextEl.classList.contains("open")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("open");
        }
        nextEl.classList.add("open");
      } else if (nextEl) {
        nextEl.classList.remove("open");
      }
      return false;
    },
    logout(){
          this.$inertia.post(route('logout'), {
        _token: this.$page.props.csrf_token,
      })
    },
  },
  components: {
    Head,
    Link,
  },
};
</script>
<style scope>
  @media (max-width: 767px){
      #topnav .logo .lg{
        display: none !important;
      }
    }
@media (min-width: 992px){
  #topnav .navigation-menu.nav-light>li>a {
    color: #fff !important;
  }
}
.sm{
  display: none !important;
}
#topnav.nav-sticky .navigation-menu.nav-light>li>a {
    color: #3c4858 !important;
}
.btn-secondary{
      background-color: #fff !important;
      color: #3c4858 !important;
}
.btn-group .dropdown-toggle:after{
  color: #3c4858 !important;
}
#topnav .buy-button{
  line-height: 30px;
}
.avatar.avatar-md-sm{
  height: 40px;
  width: 40px;
}
.logo{
  padding: 10px 0 6px !important;
}
</style>