<template>
  <div class="wrapper">
    <!-- CAROUSEL -->
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide position-relative"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
        ></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img
            src="../../../assets/images/banner/4.png"
            class="d-block w-100"
            alt="banner"
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="../../../assets/images/banner/5.png"
            class="d-block w-100"
            alt="banner"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../../assets/images/banner/6.png"
            class="d-block w-100"
            alt="banner"
          />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon rounded-circle bg-dark"
          style="height: 50px; width: 50px; background-size: 60% 60%"
        ></span>
        <span class="visually-hidden">{{ $t("previous") }}</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon rounded-circle bg-dark"
          style="height: 50px; width: 50px; background-size: 60% 60%"
        ></span>
        <span class="visually-hidden">{{ $t("next") }}</span>
      </button>
    </div>

    <!-- MARQUEE -->
    <div class="container py-3">
      <div class="row mt-3">
        <div class="col-lg-12">
          <div class="alert alert-warning border-0 rounded-3 shadow-sm">
            <marquee>{{ $t("home_marquee") }}</marquee>
          </div>
        </div>
      </div>

      <!-- PRO COURSES -->
      <div class="row mt-3">
        <h2 class="text-center mt-3 fw-bold">
          {{ $t("pro_courses_title") }}
          <i class="fa-solid fa-star text-warning"></i>
        </h2>

        <template v-for="(value, index) in proCoursesLimit" :key="index">
          <div class="col-lg-3 d-flex mt-3">
            <div class="card w-100 h-100 border-0 shadow-sm rounded-3">
              <img
                :src="value.hinh_anh"
                class="card-img-top"
                alt="course"
                style="height: 200px; object-fit: cover"
              />
              <div class="card-body d-flex flex-column">
                <h4 class="card-title text-truncate">
                  {{ value.ten_khoa_hoc }}
                </h4>
                <p class="mb-0 mt-auto">
                  <span class="text-secondary text-decoration-line-through">{{
                    formatVND(value.gia_goc)
                  }}</span>
                  <b class="text-danger ms-2">{{ formatVND(value.gia_ban) }}</b>
                </p>
                <div
                  class="d-flex justify-content-between mt-2 text-muted small"
                >
                  <p class="mb-0">
                    <img
                      src="/src/assets/images/avatars/avatar-1.png"
                      style="height: 25px; border-radius: 50%"
                    />
                    {{ value.giao_vien }}
                  </p>
                  <p class="mb-0">
                    <i class="fa-solid fa-book-open me-1"></i>20
                    {{ $t("lessons") }}
                  </p>
                </div>
              </div>
              <div class="text-center mb-3 ">
                <router-link
                  :to="
                    `/chi-tiet-khoa-hoc/` + value.id + '-' + value.slug_khoa_hoc
                  "
                  class="btn btn-outline-warning rounded-pill px-4 "
                >
                  {{ $t("view_detail") }}
                </router-link>
              </div>
            </div>
          </div>
        </template>

        <span v-if="is_show_more_pro == 1"></span>
        <span v-else class="text-center">
          <button
            @click="is_show_more_pro = 1"
            class="btn btn-outline-warning w-50 rounded-pill px-4 mb-3 mt-3"
          >
            {{ $t("view_more") }}
          </button>
        </span>
      </div>

      <!-- FREE COURSES -->
      <div class="row mt-4">
        <h2 class="text-center mb-3 fw-bold">{{ $t("free_courses_title") }}</h2>
        <div class="col-lg-12">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            <template
              v-for="(value, index) in courses.filter(
                (item) => item.loai === 0
              )"
              :key="index"
            >
              <div class="col d-flex">
                <router-link
                  :to="
                    `/chi-tiet-khoa-hoc/` + value.id + '-' + value.slug_khoa_hoc
                  "
                  class="card w-100 border-0 shadow-sm rounded-3 text-decoration-none text-dark"
                >
                  <img
                    :src="value.hinh_anh"
                    style="height: 200px; object-fit: cover"
                  />
                  <div class="card-body">
                    <h4 class="text-truncate">{{ value.ten_khoa_hoc }}</h4>
                    <b v-if="value.gia_ban == 0" class="text-danger">{{
                      $t("free")
                    }}</b>
                    <div
                      class="d-flex justify-content-between text-muted small"
                    >
                      <p class="mt-3 mb-0 text-dark">
                        <img
                          src="/src/assets/images/avatars/avatar-1.png"
                          style="height: 25px; border-radius: 50%"
                        />
                        {{ value.giao_vien }}
                      </p>
                      <p class="mt-3 mb-0 text-dark">
                        <i class="fa-solid fa-book-open me-1"></i>12
                        {{ $t("lessons") }}
                      </p>
                    </div>
                  </div>
                </router-link>
              </div>
            </template>
          </div>
        </div>

        <span v-if="is_xem_them == 2"></span>
        <span v-else class="text-center">
          <button
            @click="is_xem_them = 2"
            class="btn btn-outline-warning w-50 rounded-pill px-4 mb-3 "
          >
            {{ $t("view_more") }}
          </button>
        </span>
      </div>

      <!-- WHY CHOOSE US -->
      <div class="card mt-4 border-0 shadow-sm rounded-3">
        <div class="mt-3 text-center">
          <h4 class="fw-bold">{{ $t("why_choose_us") }}</h4>
        </div>
        <div class="container">
          <div class="row mb-4 mt-5 text-center">
            <div class="col-lg-3">
              <i class="fa-solid fa-ranking-star fa-4x text-warning"></i>
              <p class="mt-2">{{ $t("reason_1") }}</p>
            </div>
            <div class="col-lg-3">
              <i class="fa-solid fa-money-check-dollar fa-4x text-success"></i>
              <p class="mt-2">{{ $t("reason_2") }}</p>
            </div>
            <div class="col-lg-3">
              <i class="fa-solid fa-comment-medical fa-4x text-primary"></i>
              <p class="mt-2">{{ $t("reason_3") }}</p>
            </div>
            <div class="col-lg-3">
              <i class="fa-solid fa-star fa-4x text-warning"></i>
              <p class="mt-2">{{ $t("reason_4") }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FEEDBACK -->
      <div class="row mt-3">
        <h2 class="text-center mt-3 mb-3 fw-bold">
          {{ $t("student_reviews") }}
        </h2>

        <template v-for="(value, index) in user" :key="index">
          <div class="col-lg-4">
            <div class="card border-0 shadow-sm rounded-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-3">
                    <img
                      src="/src/assets/images/avatars/avatar-10.png"
                      class="rounded-circle p-1 me-2"
                      style="width: 70px; height: 70px"
                    />
                  </div>
                  <div class="col-lg-9">
                    <p class="mb-0">{{ value.name }}</p>
                    <span>
                      <small>
                        <i
                          v-for="i in 5"
                          :key="i"
                          :class="getStarIcon(value.rate, i)"
                          style="font-size: 15px; color: gold"
                        ></i>
                      </small>
                    </span>
                  </div>
                </div>
                <p class="card-text" style="height: 40px">
                  {{ value.article }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      is_xem_them: 0,
      courses: [],
      your_course: [],
      user: [],
      pro: {},
      is_show_more_pro: false,
    };
  },
  mounted() {
    this.getDataCourse();
  },
  computed: {
      proCoursesLimit() {
        if (this.is_show_more_pro) {
          return this.courses.filter((item) => item.loai === 1); // hiện hết
        }
        return this.courses.filter((item) => item.loai === 1).slice(0, 4); // chỉ hiện 4
      },
    },
  methods: {
    getStarIcon(rate, index) {
      const rounded = Math.round(rate * 2) / 2; // làm tròn về 0.5

      if (rounded >= index) {
        return "fa-solid fa-star"; // sao đầy
      } else if (rounded + 0.5 === index) {
        return "fa-regular fa-star-half-stroke"; // sao nửa
      } else {
        return "fa-regular fa-star"; // sao rỗng
      }
    },
    formatVND(number) {
      return new Intl.NumberFormat("vi-VI", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    getDataCourse() {
      axios
        .get("http://127.0.0.1:8000/api/home-page/loai-khoa-hoc/data-open")
        .then((res) => {
          this.courses = res.data.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },
    
  },
};
</script>
<style></style>
