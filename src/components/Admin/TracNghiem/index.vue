<template>
  <div class="row">
    <div class="col-lg-3 col-md-12">
      <div class="card shadow-sm border-0">
        <!-- Header -->
        <div
          class="card-header bg-primary text-white d-flex align-items-center"
        >
          <i class="fa-solid fa-question-circle me-2"></i>
          <h5 class="mb-0">Thêm Mới Trắc Nghiệm</h5>
        </div>

        <!-- Body -->
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-pen me-1 text-primary"></i> Tên Câu Hỏi
            </label>
            <input
              v-model="create.cau_hoi"
              type="text"
              class="form-control"
              placeholder="Nhập câu hỏi..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-circle-check me-1 text-success"></i> Đáp Án
              1
            </label>
            <input
              v-model="create.dap_an_1"
              type="text"
              class="form-control"
              placeholder="Nhập đáp án 1..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-circle-check me-1 text-success"></i> Đáp Án
              2
            </label>
            <input
              v-model="create.dap_an_2"
              type="text"
              class="form-control"
              placeholder="Nhập đáp án 2..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-circle-check me-1 text-success"></i> Đáp Án
              3
            </label>
            <input
              v-model="create.dap_an_3"
              type="text"
              class="form-control"
              placeholder="Nhập đáp án 3..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-circle-check me-1 text-success"></i> Đáp Án
              4
            </label>
            <input
              v-model="create.dap_an_4"
              type="text"
              class="form-control"
              placeholder="Nhập đáp án 4..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-check-double me-1 text-warning"></i> Chọn
              Đáp Án Đúng
            </label>
            <select v-model="create.dap_an_dung" class="form-select">
              <option value="1">Đáp Án 1</option>
              <option value="2">Đáp Án 2</option>
              <option value="3">Đáp Án 3</option>
              <option value="4">Đáp Án 4</option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-toggle-on me-1 text-danger"></i> Tình Trạng
            </label>
            <select v-model="create.tinh_trang" class="form-select">
              <option value="1">Hiển Thị</option>
              <option value="0">Tạm Tắt</option>
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
        <div
          class="card-header bg-primary text-white d-flex align-items-center"
        >
          <i class="fa-solid fa-list-check me-2"></i>
          <h5 class="mb-0">Danh Sách Trắc Nghiệm</h5>
        </div>

        <!-- Body -->
        <div class="card-body">
          <!-- Search -->
          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text bg-light">
                <i class="fa-solid fa-search"></i>
              </span>
              <input
                v-on:keyup.enter="timKiem()"
                v-model="search.noi_dung"
                type="text"
                class="form-control"
                placeholder="Tìm kiếm câu hỏi..."
              />
              <button v-on:click="timKiem()" class="btn btn-outline-primary">
                Tìm Kiếm
              </button>
            </div>
          </div>

          <!-- Table -->
          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead class="table-primary text-center">
                <tr>
                  <th>#</th>
                  <th>Tên Câu Hỏi</th>
                  <th>Đáp Án</th>
                  <th>Tình Trạng</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(v, k) in list" :key="k">
                  <tr>
                    <th class="text-center">{{ k + 1 }}</th>
                    <td class="fw-bold text-wrap">{{ v.cau_hoi }}</td>
                    <td>
                      <ul class="list-group list-group-flush">
                        <li
                          class="list-group-item d-flex justify-content-between"
                          :class="{
                            'bg-light fw-bold text-success': v.dap_an_dung == 1,
                          }"
                        >
                          <span
                            ><i class="fa-regular fa-circle me-2"></i> Đáp Án
                            1</span
                          >
                          <span>{{ v.dap_an_1 }}</span>
                        </li>
                        <li
                          class="list-group-item d-flex justify-content-between"
                          :class="{
                            'bg-light fw-bold text-success': v.dap_an_dung == 2,
                          }"
                        >
                          <span
                            ><i class="fa-regular fa-circle me-2"></i> Đáp Án
                            2</span
                          >
                          <span>{{ v.dap_an_2 }}</span>
                        </li>
                        <li
                          class="list-group-item d-flex justify-content-between"
                          :class="{
                            'bg-light fw-bold text-success': v.dap_an_dung == 3,
                          }"
                        >
                          <span
                            ><i class="fa-regular fa-circle me-2"></i> Đáp Án
                            3</span
                          >
                          <span>{{ v.dap_an_3 }}</span>
                        </li>
                        <li
                          class="list-group-item d-flex justify-content-between"
                          :class="{
                            'bg-light fw-bold text-success': v.dap_an_dung == 4,
                          }"
                        >
                          <span
                            ><i class="fa-regular fa-circle me-2"></i> Đáp Án
                            4</span
                          >
                          <span>{{ v.dap_an_4 }}</span>
                        </li>
                      </ul>
                    </td>
                    <td class="text-center">
                      <span
                        v-if="v.tinh_trang == 1"
                        class="badge bg-success p-2 w-75"
                      >
                        <i class="fa-solid fa-eye me-1"></i> Hiển Thị
                      </span>
                      <span v-else class="badge bg-warning text-dark p-2 w-75">
                        <i class="fa-solid fa-eye-slash me-1"></i> Tạm Tắt
                      </span>
                    </td>
                    <td class="text-center text-nowrap">
                      <button
                        v-on:click="Object.assign(edit, v)"
                        class="btn btn-sm btn-primary me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#capNhatModal"
                      >
                        <i class="fa-solid fa-pen-to-square me-1"></i> Cập Nhật
                      </button>
                      <button
                        v-on:click="Object.assign(del, v)"
                        class="btn btn-sm btn-danger"
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
  <!-- model Xóa -->
  <div
    class="modal fade"
    id="xoaModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Xóa Trắc Nghiệm
          </h1>
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
                  Bạn chắc chắc xóa câu hỏi <b>{{ del.cau_hoi }}</b> này chứ !!!
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
            Close
          </button>
          <button
            v-on:click="xoa()"
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="capNhatModal"
    tabindex="-1"
    aria-labelledby="capNhatModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content shadow-lg">
        <div class="modal-header text-white">
          <h5 class="modal-title fw-bold" id="capNhatModalLabel">
            Cập Nhật Trắc Nghiệm
          </h5>
          <button
            type="button"
            class="btn-close text-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-4">
          <form id="updateFormIphone">
            <div class="row">
              <div class="mb-2">
                <label class="mb-2">Tên Câu Hỏi</label>
                <input
                  v-model="edit.cau_hoi"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-2">
                <label class="mb-2">Đáp Án 1</label>
                <input
                  v-model="edit.dap_an_1"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-2">
                <label class="mb-2">Đáp Án 2</label>
                <input
                  v-model="edit.dap_an_2"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-2">
                <label class="mb-2">Đáp Án 3</label>
                <input
                  v-model="edit.dap_an_3"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-2">
                <label class="mb-2">Đáp Án 4</label>
                <input
                  v-model="edit.dap_an_4"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-2">
                <label class="mb-2">Chọn Đáp Án Đúng</label>
                <select v-model="edit.dap_an_dung" class="form-select">
                  <option value="1">Đáp Án 1</option>
                  <option value="2">Đáp Án 2</option>
                  <option value="3">Đáp Án 3</option>
                  <option value="4">Đáp Án 4</option>
                </select>
              </div>
              <div class="mb-2">
                <label class="mb-2">Tình Trạng</label>
                <select v-model="edit.tinh_trang" class="form-select">
                  <option value="0">Tạm Tắt</option>
                  <option value="1">Hiển Thị</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer bg-light">
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
            Lưu Thay Đổi
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
      create: {},
      del: {},
      edit: {},
      list: [],
      search: {},
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    timKiem() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/trac-nghiem/tim-kiem",
          this.search,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("key_admin"),
            },
          }
        )
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
        .post(
          "http://127.0.0.1:8000/api/admin/trac-nghiem/change-status",
          value,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("key_admin"),
            },
          }
        )
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
        .post("http://127.0.0.1:8000/api/admin/trac-nghiem/update", this.edit, {
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
        .post("http://127.0.0.1:8000/api/admin/trac-nghiem/delete", this.del, {
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
        .post(
          "http://127.0.0.1:8000/api/admin/trac-nghiem/create",
          this.create,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("key_admin"),
            },
          }
        )
        .then((res) => {
          if (res.data.status) {
            this.$toast.success(res.data.message);
            this.loadData();
            this.create = {};
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
        .get("http://127.0.0.1:8000/api/admin/trac-nghiem/data", {
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
