<template>
    <div class="row">
  <div class="col-lg-12">
    <div class="card shadow-sm border-0">
      <!-- Header -->
      <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 class="mb-0"><i class="fa-solid fa-users me-2"></i> DANH SÁCH NHÂN VIÊN</h5>
        <button
          type="button"
          class="btn btn-light text-primary fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="fa-solid fa-plus-circle me-1"></i> Thêm Mới
        </button>
      </div>

      <!-- Body -->
      <div class="card-body table-responsive">
        <!-- Search -->
        <div class="input-group mb-3 shadow-sm">
          <span class="input-group-text bg-light"><i class="bx bx-search"></i></span>
          <input
            v-on:keyup.enter="timKiem()"
            v-model="search.noi_dung"
            type="text"
            class="form-control"
            placeholder="Tìm kiếm nhân viên..."
          />
          <button v-on:click="timKiem()" class="btn btn-outline-primary">
            <i class="fa-solid fa-magnifying-glass me-1"></i> Tìm Kiếm
          </button>
        </div>

        <!-- Table -->
        <table class="table table-hover table-striped align-middle">
          <thead class="table-primary text-center">
            <tr>
              <th>#</th>
              <th>Họ Và Tên</th>
              <th>Email</th>
              <th>Số Điện Thoại</th>
              <th>Địa Chỉ</th>
              <th>Tình Trạng</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(v, k) in list" :key="k">
              <tr>
                <td class="text-center fw-bold">{{ k + 1 }}</td>
                <td><i class="fa-solid fa-user text-primary me-2"></i>{{ v.ho_va_ten }}</td>
                <td>{{ v.email }}</td>
                <td class="text-center">{{ v.so_dien_thoai }}</td>
                <td>{{ v.dia_chi }}</td>
                <td class="text-center">
                  <button
                    v-if="v.tinh_trang == 1"
                    v-on:click="doiTrangThai(v)"
                    class="btn btn-success btn-sm px-3"
                  >
                    <i class="fa-solid fa-check-circle me-1"></i> Hoạt Động
                  </button>
                  <button
                    v-else
                    v-on:click="doiTrangThai(v)"
                    class="btn btn-warning btn-sm px-3"
                  >
                    <i class="fa-solid fa-power-off me-1"></i> Tắt
                  </button>
                </td>
                <td class="text-center">
                  <button
                    class="btn btn-warning btn-sm me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#capnhatDM"
                    v-on:click="Object.assign(edit, v)"
                  >
                    <i class="fa-solid fa-pen-to-square me-1"></i> Cập nhật
                  </button>
                  <button
                    class="btn btn-danger btn-sm"
                    data-bs-toggle="modal"
                    v-on:click="Object.assign(del, v)"
                    data-bs-target="#delModal"
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

<!-- Modal Thêm Mới -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content shadow-lg">
      <div class="modal-header bg-primary text-white">
        <h5 class="modal-title"><i class="fa-solid fa-plus-circle me-2"></i> Thêm Mới Nhân Viên</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <div class="mb-2">
          <label class="form-label fw-bold">Họ Và Tên</label>
          <input v-model="create.ho_va_ten" type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold">Email</label>
          <input v-model="create.email" type="email" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold">Số Điện Thoại</label>
          <input v-model="create.so_dien_thoai" type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold">Password</label>
          <input v-model="create.password" type="password" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold">Địa Chỉ</label>
          <input v-model="create.dia_chi" type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold">Tình Trạng</label>
          <select v-model="create.tinh_trang" class="form-select">
            <option value="1">Hoạt Động</option>
            <option value="0">Tạm Dừng</option>
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button v-on:click="themMoi()" class="btn btn-success px-3" data-bs-dismiss="modal">
          <i class="fa-solid fa-save me-1"></i> Thêm Mới
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Xóa -->
<div class="modal fade" id="delModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content shadow-lg">
      <div class="modal-header bg-danger text-white">
        <h5 class="modal-title"><i class="fa-solid fa-trash me-2"></i> Xóa Nhân Viên</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <div class="alert alert-danger" role="alert">
          Bạn có chắc muốn xóa nhân viên <b class="text-danger">{{ del.ho_va_ten }}</b> này không?
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button class="btn btn-danger" data-bs-dismiss="modal" v-on:click="xoa()">
          <i class="fa-solid fa-trash me-1"></i> Xác nhận
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Cập nhật -->
<div class="modal fade" id="capnhatDM" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content shadow-lg">
      <div class="modal-header bg-warning text-white">
        <h5 class="modal-title"><i class="fa-solid fa-pen-to-square me-2"></i> Cập Nhật Nhân Viên</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <div class="mb-2">
          <label class="form-label fw-bold">Họ Và Tên</label>
          <input v-model="edit.ho_va_ten" type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold">Email</label>
          <input v-model="edit.email" type="email" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold">Số Điện Thoại</label>
          <input v-model="edit.so_dien_thoai" type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold">Địa Chỉ</label>
          <input v-model="edit.dia_chi" type="text" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold">Tình Trạng</label>
          <select v-model="edit.tinh_trang" class="form-select">
            <option value="1">Hoạt Động</option>
            <option value="0">Tạm Dừng</option>
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        <button class="btn btn-warning text-white" data-bs-dismiss="modal" v-on:click="capNhat()">
          <i class="fa-solid fa-save me-1"></i> Cập nhật
        </button>
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
            create: { 'ho_va_ten': '', 'email': '', 'so_dien_thoai': '', 'password': '', 'dia_chi': '', 'tinh_trang': ''},
            edit: {},
            del: {},
            list: [],
            search: {}
        }

    },
    mounted() {
    //    this.loadData();

   // Kiểm tra dữ liệu cache từ sessionStorage
        const cachedData = sessionStorage.getItem('nhanVienData');
        if (cachedData) {
            this.list = JSON.parse(cachedData);  // Lấy dữ liệu từ sessionStorage nếu có
        } else {
            this.loadData();  // Nếu không có dữ liệu trong sessionStorage, gọi API để lấy dữ liệu
        }

    },
    methods: {
        timKiem() {
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/tim-kiem', this.search, {
                    headers : {
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
        loadData() {
            axios
                .get('http://127.0.0.1:8000/api/admin/nhan-vien/data' , {
                    headers: {
                         Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                }
                }) 
                .then((res) => {
                    this.list = res.data.data;
                })
        },
        themMoi() {
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/create', this.create, {
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
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
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/update', this.edit, {
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                    };
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })

        },
        xoa() {
            axios
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/delete', this.del, {
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                    };
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
                .post('http://127.0.0.1:8000/api/admin/nhan-vien/change-status', value, {
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        this.$toast.success(res.data.message);
                        this.loadData();
                    }
                })
                .catch((res) => {
                    const list = Object.values(res.response.data.errors);
                    list.forEach((v, i) => {
                        this.$toast.error(v[0]);
                    });
                })
        }
    }
}
</script>
<style></style>
