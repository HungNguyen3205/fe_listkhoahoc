<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card shadow-sm border-0">
        <!-- Header -->
        <div
          class="card-header bg-primary text-white d-flex align-items-center"
        >
          <i class="fa-solid fa-clock-rotate-left me-2"></i>
          <h5 class="mb-0">Lịch Sử Giao Dịch</h5>
        </div>

        <!-- Body -->
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead class="table-primary text-center">
                <tr>
                  <th>#</th>
                  <th>Họ Tên Khách Hàng</th>
                  <th>Email Khách Hàng</th>
                  <th>Thời Gian</th>
                  <th>Trạng Thái</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(value, index) in list" :key="index">
                  <tr>
                    <th class="text-center">{{ index + 1 }}</th>
                    <td class="fw-semibold">{{ value.hoten_kh }}</td>
                    <td class="text-muted">{{ value.email }}</td>
                    <td class="text-center">
                      <i
                        class="fa-regular fa-calendar-days me-1 text-primary"
                      ></i>
                      {{ formatdate(value.ngay_mua) }}
                    </td>
                    <td class="text-center">
                      <span
                        v-if="value.is_thanh_toan == 0"
                        class="badge bg-success p-2"
                      >
                        <i class="fa-solid fa-circle-check me-1"></i> Đã thanh
                        toán
                      </span>
                      <span v-else class="badge bg-danger p-2">
                        <i class="fa-solid fa-circle-xmark me-1"></i> Chưa thanh
                        toán
                      </span>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    formatVND(number) {
      return new Intl.NumberFormat("vi-VI", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    formatdate(thoi_gian) {
      const date = new Date(thoi_gian);
      return date.toLocaleDateString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    },
    loadData() {
      axios
        .get("http://127.0.0.1:8000/api/admin/lich-su-giao-dich", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          this.list = res.data.data;
        });
    },
  },
};
</script>
<style></style>
