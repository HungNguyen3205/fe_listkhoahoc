<template>
  <div class="topbar border-bottom bg-white">
    <nav class="navbar navbar-expand align-items-center container">
      <router-link
        to="/"
        class="text-decoration-none d-flex align-items-center"
      >
        <img
          src="../../assets/images/logo_cua_du_an.png"
          class="logo-icon"
          style="width: 44px; height: 44px"
          alt="logo"
        />
        <h4 class="ms-2 mb-0 text-dark">Ney</h4>
      </router-link>
      <div class="ms-3 d-none d-md-block flex-grow-1">
  <div class="input-group">
    <span class="input-group-text bg-light border-0">
      <i class="bx bx-search"></i>
    </span>
    <input
      type="text"
      class="form-control bg-light border-0"
      :placeholder="$t('navbar_search_placeholder')"
    />
    <button class="btn btn-outline-secondary" type="button">
      {{ $t('navbar_search_button') }}
    </button>
  </div>
</div>

<div class="ms-auto d-flex align-items-center">
  <template v-if="user.check">
    <div class="dropdown">
      <a
        class="d-flex align-items-center nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fa-solid fa-circle-user fa-2x"></i>
        <div class="user-info ps-2 text-start">
          <p class="user-name mb-0 fw-semibold">{{ user.name }}</p>
          <p class="designattion mb-0 small text-muted">
            {{ user.email }}
          </p>
        </div>
      </a>
      <ul class="dropdown-menu dropdown-menu-end">
        <li>
          <router-link to="/tai-khoan" class="dropdown-item">
            <i class="bx bx-user me-2"></i>
            <span>{{ $t('navbar_profile') }}</span>
          </router-link>
        </li>

        <li>
          <a
            v-on:click="logout()"
            class="dropdown-item"
            href="javascript:;"
          >
            <i class="bx bx-log-out-circle me-2"></i>
            <span>{{ $t('navbar_logout') }}</span>
          </a>
        </li>
        <li>
          <a
            v-on:click="logoutAll()"
            class="dropdown-item"
            href="javascript:;"
          >
            <i class="bx bx-log-out-circle me-2"></i>
            <span>{{ $t('navbar_logout_all') }}</span>
          </a>
        </li>
      </ul>
    </div>
  </template>

  <template v-else>
    <router-link
      to="/khach-hang/dang-nhap"
      class="btn btn-outline-dark me-2 d-flex align-items-center"
    >
      <i class="fa-regular fa-user me-2"></i>
      {{ $t('navbar_login') }}
    </router-link>
    <router-link
      to="/khach-hang/dang-ky"
      class="btn btn-dark d-flex align-items-center"
    >
      <i class="fa-solid fa-arrow-right-to-bracket me-2"></i>
      {{ $t('navbar_register') }}
    </router-link>
  </template>
</div>

      
    </nav>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.user = {
      name: localStorage.getItem("name_kh"),
      email: localStorage.getItem("email_kh"),
      check: localStorage.getItem("check_kh"),
    };
  },
  methods: {
    logout() {
      axios
        .get("http://localhost:8000/api/khach-hang/logout", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_khach_hang"),
          },
        })
        .then((res) => {
          if (res.data.status) {
            localStorage.removeItem("key_khach_hang");
            localStorage.removeItem("name_kh");
            localStorage.removeItem("email_kh");
            localStorage.removeItem("check_kh");
            this.$toast.success(res.data.message);
            this.$router.push("/");
          } else {
            this.$toast.error("Có lỗi xảy ra");
          }
        });
    },
    logoutAll() {
      axios
        .get("http://localhost:8000/api/khach-hang/logout-all", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_khach_hang"),
          },
        })
        .then((res) => {
          if (res.data.status) {
            localStorage.removeItem("key_khach_hang");
            localStorage.removeItem("name_kh");
            localStorage.removeItem("email_kh");
            localStorage.removeItem("check_kh");
            this.$toast.success(res.data.message);
            this.$router.push("/");
          } else {
            this.$toast.error(res.data.message);
          }
        })
        .catch((res) => {
          this.$toast.error("Đã xảy ra lỗi");
        });
    },
  },
};
</script>
<style></style>
