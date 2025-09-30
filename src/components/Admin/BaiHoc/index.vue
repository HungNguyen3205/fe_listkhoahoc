<template>
  <div class="row">
    <div class="col-lg-3 col-md-12">
      <div class="card shadow-sm border-0">
        <!-- Header -->
        <div
          class="card-header bg-primary text-white d-flex align-items-center"
        >
          <i class="fa-solid fa-book-open me-2"></i>
          <h5 class="mb-0">Thêm Mới Bài Học</h5>
        </div>

        <!-- Body -->
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-graduation-cap me-1 text-primary"></i> Chọn
              Khóa Học
            </label>
            <select v-model="create.id_khoa_hoc" class="form-select">
              <template v-for="(value, index) in list_khoa_hoc" :key="index">
                <option :value="value.id">{{ value.ten_khoa_hoc }}</option>
              </template>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-heading me-1 text-success"></i> Tiêu Đề
            </label>
            <input
              v-model="create.tieu_de"
              type="text"
              class="form-control"
              placeholder="Nhập tiêu đề bài học..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-list-ol me-1 text-warning"></i> Bài Học Số
            </label>
            <input
              v-model="create.bai_hoc_so"
              type="text"
              class="form-control"
              placeholder="Ví dụ: 1, 2, 3..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-link me-1 text-info"></i> Link Bài Học
            </label>
            <input
              v-model="create.link_bai_hoc"
              type="text"
              class="form-control"
              placeholder="https://..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-coins me-1 text-danger"></i> Thu Phí
            </label>
            <select v-model="create.is_thu_phi" class="form-select">
              <option value="1">Miễn Phí</option>
              <option value="0">Có Phí</option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-toggle-on me-1 text-primary"></i> Tình Trạng
            </label>
            <select v-model="create.tinh_trang" class="form-select">
              <option value="1">Hiển Thị</option>
              <option value="0">Tạm Dừng</option>
            </select>
          </div>
        </div>

        <!-- Footer -->
        <div class="card-footer text-end bg-light">
          <button v-on:click="themMoi()" class="btn btn-success px-4">
            <i class="fa-solid fa-save me-2"></i> Thêm Mới
          </button>
        </div>
      </div>
    </div>

    <div class="col-lg-9 col-md-12">
  <div class="card shadow-sm border-0">
    <!-- Header -->
    <div class="card-header bg-primary text-white d-flex align-items-center">
      <i class="fa-solid fa-list me-2"></i>
      <h5 class="mb-0">Danh Sách Bài Học</h5>
    </div>

    <!-- Body -->
    <div class="card-body">
      <!-- Search -->
      <div class="input-group mb-3 shadow-sm">
        <span class="input-group-text bg-white">
          <i class="bx bx-search"></i>
        </span>
        <input
          v-on:keyup.enter="timKiem()"
          v-model="search.noi_dung"
          type="text"
          class="form-control"
          placeholder="Tìm kiếm bài học..."
        />
        <button
          v-on:click="timKiem()"
          class="btn btn-outline-primary"
          type="button"
        >
          <i class="fa-solid fa-magnifying-glass me-1"></i> Tìm Kiếm
        </button>
      </div>

      <!-- Table -->
      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle text-center">
          <thead class="table-primary">
            <tr>
              <th>#</th>
              <th>Tên Loại Khóa Học</th>
              <th>Bài Học</th>
              <th>Tiêu Đề</th>
              <th>Thu Phí</th>
              <th>Tình Trạng</th>
              <th>Link Video</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(value, index) in list" :key="index">
              <tr>
                <td>{{ index + 1 }}</td>
                <td>{{ value.id_khoa_hoc }}</td>
                <td>{{ value.bai_hoc_so }}</td>
                <td class="text-start fw-semibold">{{ value.tieu_de }}</td>
                
                <!-- Thu phí -->
                <td>
                  <span
                    v-if="value.is_thu_phi == 1"
                    class="badge bg-info p-2 w-75"
                  >
                    <i class="fa-solid fa-gift me-1">Miễn Phí</i> 
                  </span>
                  <span
                    v-else
                    class="badge bg-warning text-dark p-2 w-75"
                  >
                    <i class="fa-solid fa-coins me-1">Có Phí</i> 
                  </span>
                </td>

                <!-- Tình trạng -->
                <td>
                  <button
                    v-on:click="doiTrangThai(value)"
                    v-if="value.tinh_trang == 0"
                    class="btn btn-sm btn-danger w-100"
                  >
                    <i class="fa-solid fa-ban me-1"></i> Tạm Dừng
                  </button>
                  <button
                    v-on:click="doiTrangThai(value)"
                    v-else
                    class="btn btn-sm btn-success w-100"
                  >
                    <i class="fa-solid fa-eye me-1"></i> Hiển Thị
                  </button>
                </td>

                <!-- Video -->
                <td>
                  <div class="ratio ratio-16x9">
                    <iframe
                      :src="value.link_bai_hoc"
                      title="YouTube video player"
                      allowfullscreen
                    ></iframe>
                  </div>
                </td>

                <!-- Action -->
                <td>
                  <button
                    v-on:click="Object.assign(edit, value)"
                    class="btn btn-sm btn-primary me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal"
                  >
                    <i class="fa-solid fa-pen-to-square me-1"></i> Cập Nhật
                  </button>
                  <button
                    v-on:click="Object.assign(del, value)"
                    class="btn btn-sm btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
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
  <!-- Modal xoá-->
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Xóa Bài Học</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div
            class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2"
          >
            <div class="d-flex align-items-center">
              <div class="font-35 text-white">
                <i class="bx bxs-message-square-x"></i>
              </div>
              <div class="ms-1">
                <h6 class="mb-1 text-white">
                  Bạn chắc chắc xóa Bài Học <b>{{ del.tieu_de }}</b> này chứ !!!
                </h6>
                <div class="text-white text-nowrap">
                  <b>LƯU Ý !!!</b> Điều này không thể khôi phục khi ấn xác nhận
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Đóng
          </button>
          <button
            v-on:click="xoa()"
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal cập nhật-->
  <div
    class="modal fade"
    id="updateModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Cập Nhật Bài Học
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card-body">
            <div class="mb-2">
              <label>Chọn ID Khóa Học</label>
              <select v-model="edit.id_khoa_hoc" class="form-control">
                <template v-for="(value, index) in list_khoa_hoc" :key="index">
                  <option v-bind:value="value.id">
                    {{ value.ten_khoa_hoc }}
                  </option>
                </template>
              </select>
            </div>
            <div class="mb-2">
              <label> Tiêu Đề</label>
              <input
                v-model="edit.tieu_de"
                type="text"
                class="form-control mt-2"
              />
            </div>
            <div class="mb-2">
              <label>Bài Học Số</label>
              <input
                v-model="edit.bai_hoc_so"
                type="text"
                class="form-control mt-2"
              />
            </div>
            <label class="mb-2 mt-2">Link Bài Học</label>
            <input
              v-model="edit.link_bai_hoc"
              type="text"
              class="form-control"
            />
            <div class="mb-2">
              <label class="mb-2 mt-2">Thu Phí</label>
              <select v-model="edit.is_thu_phi" class="form-control">
                <option value="1">Miễn Phí</option>
                <option value="0">Có Phí</option>
              </select>
            </div>
            <div class="mb-2">
              <label class="mb-2 mt-2">Tình Trạng</label>
              <select v-model="edit.tinh_trang" class="form-control">
                <option value="1">Hiển Thị</option>
                <option value="0">Tạm Dừng</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Đóng
          </button>
          <button
            v-on:click="capNhat()"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Cập Nhật
          </button>
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
      create: {
        id_khoa_hoc: "",
        tieu_de: "",
        bai_hoc_so: "",
        link_bai_hoc: "",
        is_thu_phi: "",
        tinh_trang: "",
      },
      del: {
        id: "",
        tieu_de: "",
      },
      edit: {
        id_khoa_hoc: "",
        tieu_de: "",
        bai_hoc_so: "",
        link_bai_hoc: "",
        is_thu_phi: "",
        tinh_trang: "",
      },
      list: [],
      list_khoa_hoc: [],
      search: {},
    };
  },
  mounted() {
    this.loadData();
    this.loadDataLKH();
  },
  methods: {
    timKiem() {
      axios
        .post("http://127.0.0.1:8000/api/admin/bai-hoc/tim-kiem", this.search, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          this.list = res.data.data;
        })
        .catch((res) => {
          const list = Object.values(res.response.data.errors);
          list.forEach((v, i) => {
            this.$toast.error(v[0]);
          });
        });
    },
    doiTrangThai(value) {
      axios
        .post("http://127.0.0.1:8000/api/admin/bai-hoc/change-status", value, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
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
        });
    },
    capNhat() {
      axios
        .post("http://127.0.0.1:8000/api/admin/bai-hoc/update", this.edit, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
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
        });
    },
    xoa() {
      axios
        .post("http://127.0.0.1:8000/api/admin/bai-hoc/delete", this.del, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
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
        });
    },
    themMoi() {
      axios
        .post("http://127.0.0.1:8000/api/admin/bai-hoc/create", this.create, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          if (res.data.status) {
            this.$toast.success(res.data.message);
            this.loadData();
            this.create = {
              id_khoa_hoc: "",
              tieu_de: "",
              bai_hoc_so: "",
              link_bai_hoc: "",
              is_thu_phi: "",
              tinh_trang: "",
            };
          }
        })
        .catch((res) => {
          const list = Object.values(res.response.data.errors);
          list.forEach((v, i) => {
            this.$toast.error(v[0]);
          });
        });
    },
    loadData() {
      axios
        .get("http://127.0.0.1:8000/api/admin/bai-hoc/data", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          this.list = res.data.data;
        });
    },

    loadDataLKH() {
      axios
        .get("http://127.0.0.1:8000/api/admin/loai-khoa-hoc/data", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          console.log(res);
          this.list_khoa_hoc = res.data.data1;
        });
    },
  },
};
</script>
<style></style>
