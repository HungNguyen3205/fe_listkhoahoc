<template>
    <div class="row">
  <div class="col-lg-12">
    <div class="card shadow-sm border-0">
      <!-- Header -->
      <div class="card-header bg-primary text-white d-flex align-items-center">
        <i class="fa-solid fa-users me-2"></i>
        <h5 class="mb-0">Danh Sách Khách Hàng</h5>
      </div>

      <!-- Body -->
      <div class="card-body">
        <!-- Search -->
        <div class="input-group mb-3 shadow-sm">
          <span class="input-group-text bg-light"><i class="bx bx-search"></i></span>
          <input
            v-on:keyup.enter="timKiem()"
            v-model="search.noi_dung"
            type="text"
            class="form-control"
            placeholder="Tìm kiếm khách hàng..."
          />
          <button v-on:click="timKiem()" class="btn btn-outline-primary">
            <i class="fa-solid fa-magnifying-glass me-1"></i> Tìm Kiếm
          </button>
        </div>

        <!-- Table -->
        <div class="table-responsive">
          <table class="table table-hover table-striped align-middle text-center">
            <thead class="table-primary">
              <tr>
                <th>#</th>
                <th>Họ Và Tên</th>
                <th>Email</th>
                <th>Số Điện Thoại</th>
                <th>Ngày Sinh</th>
                <th>Trạng Thái</th>
                <th>Kích Hoạt</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(v, k) in list" :key="k">
                <tr>
                  <td>{{ k + 1 }}</td>
                  <td class="fw-semibold text-start">
                    <i class="fa-solid fa-user text-primary me-2"></i>{{ v.ho_va_ten }}
                  </td>
                  <td>{{ v.email }}</td>
                  <td>{{ v.so_dien_thoai }}</td>
                  <td>{{ v.ngay_sinh }}</td>
                  <td>
                    <button
                      v-if="v.is_block == 0"
                      v-on:click="doiTrangThai(v)"
                      class="btn btn-success btn-sm px-3"
                    >
                      <i class="fa-solid fa-check-circle me-1"></i> Hoạt Động
                    </button>
                    <button
                      v-else
                      v-on:click="doiTrangThai(v)"
                      class="btn btn-danger btn-sm px-3"
                    >
                      <i class="fa-solid fa-lock me-1"></i> Đã Khóa
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-primary btn-sm px-3">
                      <i class="fa-solid fa-bolt me-1"></i> Đã Kích Hoạt
                    </button>
                  </td>
                  <td>
                    <button
                      v-on:click="Object.assign(edit, v)"
                      class="btn btn-warning btn-sm me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#capNhatModal"
                    >
                      <i class="fa-solid fa-pen-to-square me-1"></i> Cập Nhật
                    </button>
                    <button
                      v-on:click="Object.assign(del, v)"
                      class="btn btn-danger btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#xoaModal"
                    >
                      <i class="fa-solid fa-trash me-1"></i> Xóa
                    </button>
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

    <!-- Modal lịch sử -->
  
    <div class="modal fade" id="capNhatModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Cập Nhật Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Họ và Tên</label>
                        <input v-model="edit.ho_va_ten" type="text" class="form-control">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Email</label>
                        <input v-model="edit.email" type="email" class="form-control">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Số Điện Thoại</label>
                        <input v-model="edit.so_dien_thoai" type="text" class="form-control">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Ngày Sinh</label>
                        <input v-model="edit.ngay_sinh" type="date" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="capNhat()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác
                        Nhận</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="xoaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xóa Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                            </div>
                            <div class="ms-1">
                                <h6 class="mb-1 text-white">Bạn chắc chắc xóa tài khoản khách hàng <b>{{ del.ho_va_ten
                                        }}</b> này chứ
                                    !!!</h6>
                                <div class="text-white text-nowrap"><b>LƯU Ý !!!</b> Điều này không thể khôi
                                    phục
                                    khi ấn xác nhận
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button v-on:click="xoa()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios';


export default {
    data() {
        return {
            del: {
                'ho_va_ten': "",

            },
            edit: {
                'ho_va_ten': "",
                'email': "",
                'so_dien_thoai': "",
                'ngay_sinh': "",
                'password': "",
            },
            list: [],
            search: {},
            list_giao_dich: []
        }
    },

    mounted() {
        this.loadData()
    },
    methods: {
      
        formatdate(thoi_gian) {
            const date = new Date(thoi_gian);
            return date.toLocaleString();
        },
        formatVND(number) {
        const locale = this.$i18n.locale === 'en' ? 'en-US' : 'vi-VN';
        const currency = this.$i18n.locale === 'en' ? 'USD' : 'VND';

        return new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency,
        }).format(number);
        },
        
        timKiem() {
            axios
                .post("http://127.0.0.1:8000/api/admin/khach-hang/tim-kiem", this.search, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    this.list = res.data.data
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },
        doiTrangThai(value) {
            axios
                .post("http://127.0.0.1:8000/api/admin/khach-hang/change-status", value, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        this.$toast.success(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },
        loadData() {
            axios
                .get('http://127.0.0.1:8000/api/admin/khach-hang/data', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    this.list = res.data.data;
                })
        },
        xoa() {
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/delete', this.del, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        this.$toast.success(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },
        capNhat() {
            axios
                .post('http://127.0.0.1:8000/api/admin/khach-hang/update', this.edit, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        this.$toast.success(res.data.message);
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        },
    }
}
</script>
<style></style>
