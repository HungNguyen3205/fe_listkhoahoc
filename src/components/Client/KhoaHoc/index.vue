<template>
  <div class="row">
    <!-- LEFT -->
    <div class="col-lg-6">
      <div class="row">
        <div class="col-lg-12">
          <h1>{{ chi_tiet_khoa_hoc.ten_khoa_hoc }}</h1>
          <span>{{ chi_tiet_khoa_hoc.mo_ta_ngan }}</span>
        </div>

        <hr class="mt-3 mb-3" />

        <div class="col-lg-12">
          <h4>{{ $t("course_content") }}</h4>
          <b>10</b> {{ $t("chapters") }} - <b>20</b> {{ $t("lessons") }} -
          {{ $t("duration") }} <b>10h 29p</b>
        </div>

        <!-- ACCORDION -->
        <div class="col-lg-12 mt-3">
          <div class="accordion" id="accordionExample">
            
            <!-- Ví dụ Chương 1 -->
            <div class="d-flex justify-content-between align-items-center">
  <p>
    <i class="fa-solid fa-circle-play me-2"></i>
    1. {{ $t("intro_course") }}
  </p>
  <p>01:03</p>
</div>

<div class="d-flex justify-content-between align-items-center">
  <p>
    <i class="fa-solid fa-circle-play me-2"></i>
    2. {{ $t("install_dev_cpp") }}
  </p>
  <p>02:31</p>
</div>

<div class="d-flex justify-content-between align-items-center">
  <p>
    <i class="fa-solid fa-circle-play me-2"></i>
    3. {{ $t("guide_dev_cpp") }}
  </p>
  <p>03:33</p>
</div>

          </div>
        </div>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="col-lg-6">
      <iframe
        width="100%"
        height="515"
        style="border-radius: 20px"
        src="https://www.youtube.com/embed/Da1tpV9TMU0?si=gdWaKQGW9qqjySC2"
        frameborder="0"
        allowfullscreen
      ></iframe>

      <h4 v-if="chi_tiet_khoa_hoc.gia_goc == 0" class="text-danger mt-2 text-center">
        {{ $t("free") }}
      </h4>
      <h4 v-else class="text-danger mt-2 text-center">
        {{ formatVND(chi_tiet_khoa_hoc.gia_ban) }}
      </h4>

      <div class="text-center">
        <router-link
          :to="`/thanh-toan/${$route.params.id_khoa_hoc}`"
          class="btn btn-primary px-5 radius-30 mt-2"
        >
          {{ $t("register_course") }}
        </router-link>
      </div>

      <div class="d-flex justify-content-between mt-3">
        <p><i class="fa-solid fa-gauge-high"></i> {{ $t("level_basic") }}</p>
        <p><i class="fa-solid fa-film"></i> {{ $t("total_lessons", { num: 20 }) }}</p>
        <p><i class="fa-solid fa-clock"></i> {{ $t("total_time", { time: "10 giờ 29 phút" }) }}</p>
        <p><i class="fa-solid fa-battery-full"></i> {{ $t("study_anywhere") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['id_khoa_hoc', 'slug_khoa_hoc'],
    data() {
        return {
            id_khoa_hoc: this.$route.params.id_khoa_hoc,
            chi_tiet_khoa_hoc: {},
            user: {}
        }
    },
    mounted() {
        this.loadChiTietKhoaHoc()
    },
    methods: {
        // muaKhoaHoc(){
        //     var payload = {
        //         id_khoa_hoc : this.id_khoa_hoc,
        //         so_tien_mua : this.chi_tiet_khoa_hoc.gia_ban
        //     }
        //     axios
        //         .post("http://127.0.0.1:8000/api/home-page/mua-khoa-hoc/create", payload,{
        //             headers : {
        //                 Authorization: 'Bearer ' + localStorage.getItem("key_khach_hang")
        //             }
        //         })
        //         .then((res) => {
        //             if(res.data.status==1){
        //                 this.$toast.success(res.data.message)
        //                 this.$router.push('/danh-sach-khoa-hoc')
        //             }
        //             else if(res.data.status == 2){
        //                 this.$toast.warning(res.data.message);
        //                 this.$router.push('/tai-khoan')
        //             }
        //             else{
        //                 this.$toast.error(res.data.message);
        //             }
        //         }).catch((res) => {
        //             this.$toast.error('Vui lòng đăng nhập để mua khóa học');
        //         })
        // },
        formatVND(number) {
        const locale = this.$i18n.locale === 'en' ? 'en-US' : 'vi-VN';
        const currency = this.$i18n.locale === 'en' ? 'USD' : 'VND';

        return new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency,
        }).format(number);
        },
        loadChiTietKhoaHoc() {
            axios
                .get("http://127.0.0.1:8000/api/home-page/loai-khoa-hoc/chi-tiet/" + this.id_khoa_hoc)
                .then((res) => {
                    if (res.data.status == 1) {
                        this.chi_tiet_khoa_hoc = res.data.data;
                    }
                    else {
                        this.$toast.error(res.data.message);
                        this.$toast.push('/');
                    }
                });
        }
    },
}
</script>
<style></style>