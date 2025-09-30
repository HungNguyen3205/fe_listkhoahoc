<template>
  <div class="row">
    <div class="col-lg-4 col-md-12">
      <div class="card shadow-sm border-0">
        <!-- Header -->
        <div
          class="card-header bg-primary text-white d-flex align-items-center"
        >
          <i class="fa-solid fa-plus-circle me-2"></i>
          <h5 class="mb-0">Thêm Mới Loại Khóa Học</h5>
        </div>

        <!-- Body -->
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-book me-1 text-primary"></i> Tên Loại Khóa
              Học
            </label>
            <input
              v-model="create.ten_khoa_hoc"
              type="text"
              class="form-control"
              placeholder="Nhập tên loại khóa học..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-link me-1 text-secondary"></i> Slug Khóa Học
            </label>
            <input
              v-model="create.slug_khoa_hoc"
              type="text"
              class="form-control"
              placeholder="slug-khoa-hoc"
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-image me-1 text-success"></i> Hình Ảnh
            </label>
            <input
              v-model="create.hinh_anh"
              type="text"
              class="form-control"
              placeholder="URL hình ảnh..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-user-tie me-1 text-warning"></i> Tên Giáo
              Viên
            </label>
            <input
              v-model="create.giao_vien"
              type="text"
              class="form-control"
              placeholder="Nhập tên giáo viên..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-crown me-1 text-danger"></i> Bản Nâng Cấp
            </label>
            <select v-model="create.loai" class="form-select">
              <option value="1">Pro</option>
              <option value="0">Miễn Phí</option>
            </select>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label fw-bold">
                <i class="fa-solid fa-dollar-sign me-1 text-success"></i> Giá
                Bán
              </label>
              <input
                v-model="create.gia_ban"
                type="number"
                class="form-control"
                placeholder="Nhập giá bán..."
              />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label fw-bold">
                <i class="fa-solid fa-tags me-1 text-danger"></i> Giá Gốc
              </label>
              <input
                v-model="create.gia_goc"
                type="number"
                class="form-control"
                placeholder="Nhập giá gốc..."
              />
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-align-left me-1 text-info"></i> Mô Tả Ngắn
            </label>
            <ckeditor
              v-model="create.mo_ta_ngan"
              :editor="editor"
              :config="editorConfig"
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-toggle-on me-1 text-primary"></i> Tình Trạng
            </label>
            <select v-model="create.tinh_trang" class="form-select">
              <option value="1">Hiển Thị</option>
              <option value="0">Tạm Ngưng</option>
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
    <div class="col-lg-8 col-md-12">
  <div class="card shadow-sm border-0">
    <!-- Header -->
    <div class="card-header bg-primary text-white d-flex align-items-center">
      <i class="fa-solid fa-list-alt me-2"></i>
      <h5 class="mb-0">Danh Sách Loại Khóa Học</h5>
    </div>

    <!-- Body -->
    <div class="card-body">
      <!-- Search box -->
      <div class="input-group mb-3">
        <span class="input-group-text bg-white border-end-0">
          <i class="fa-solid fa-search text-secondary"></i>
        </span>
        <input
          v-on:keyup.enter="timKiem()"
          v-model="search.noi_dung"
          type="text"
          class="form-control border-start-0"
          placeholder="Tìm kiếm khóa học..."
        />
        <button v-on:click="timKiem()" class="btn btn-outline-primary">
          <i class="fa-solid fa-magnifying-glass me-1"></i> Tìm Kiếm
        </button>
      </div>

      <!-- Table -->
      <div class="table-responsive">
        <table class="table table-hover align-middle table-custom">
          <thead class="table-light">
            <tr>
              <th class="text-center">#</th>
              <th class="text-center">Tên Khóa Học</th>
              <th class="text-center">Slug</th>
              <th class="text-center">Hình Ảnh</th>
              <th class="text-center">Mô Tả</th>
              <th class="text-center">Tình Trạng</th>
              <th class="text-center">Giá Bán</th>
              <th class="text-center">Giá Gốc</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(value, index) in list" :key="index">
              <tr>
                <td class="text-center fw-bold">{{ index + 1 }}</td>
                <td>{{ value.ten_khoa_hoc }}</td>
                <td class="text-muted">{{ value.slug_khoa_hoc }}</td>
                <td class="text-center">
                  <img
                    :src="value.hinh_anh"
                    alt="Ảnh khóa học"
                    class="img-thumbnail"
                    style="width: 60px; height: 60px; object-fit: cover"
                  />
                </td>
                <td class="text-center">
                  <button
                    v-on:click="Object.assign(del, value)"
                    class="btn btn-sm btn-outline-info"
                    data-bs-toggle="modal"
                    data-bs-target="#moTaModal"
                  >
                    <i class="fa-solid fa-circle-info"></i>
                  </button>
                </td>
                <td class="text-center">
                  <button
                    v-on:click="doiTrangThai(value)"
                    v-if="value.tinh_trang == 1"
                    class="btn btn-sm btn-success"
                  >
                    <i class="fa-solid fa-eye me-1"></i> Hiển Thị
                  </button>
                  <button
                    v-on:click="doiTrangThai(value)"
                    v-else
                    class="btn btn-sm btn-warning"
                  >
                    <i class="fa-solid fa-eye-slash me-1"></i> Tạm Ngưng
                  </button>
                </td>
                <td class="text-end text-success fw-bold">
                  {{ formatVND(value.gia_ban) }}
                </td>
                <td class="text-end text-decoration-line-through text-muted">
                  {{ formatVND(value.gia_goc) }}
                </td>
                <td class="text-center">
                  <button
                    v-on:click="Object.assign(edit, value)"
                    class="btn btn-sm btn-primary me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal"
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    v-on:click="Object.assign(del, value)"
                    class="btn btn-sm btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    <i class="fa-solid fa-trash"></i>
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
            Cập Nhật Loại Khóa Học
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
              <label> Tên Loại Khóa Học</label>
              <input
                v-model="edit.ten_khoa_hoc"
                type="text"
                class="form-control mt-2"
              />
            </div>
            <div class="mb-2">
              <label> Slug Loại Khóa Học </label>
              <input
                v-model="edit.slug_khoa_hoc"
                type="text"
                class="form-control mt-2"
              />
            </div>
            <div class="mb-2">
              <label> Hình Ảnh </label>
              <input
                v-model="edit.hinh_anh"
                type="text"
                class="form-control mt-2"
              />
            </div>
            <div class="mb-2">
              <label> Mô Tả Ngắn </label>
              <ckeditor
                v-model="edit.mo_ta_ngan"
                :editor="editor"
                :config="editorConfig"
              />
            </div>
            <div class="mb-2">
              <label class="mb-2">Gía Bán</label>
              <input
                v-model="edit.gia_ban"
                type="text"
                class="form-control mb-2"
              />
              <label class="mb-2">Gía Gốc</label>
              <input
                v-model="edit.gia_goc"
                type="text"
                class="form-control mb-2"
              />
            </div>
            <div class="mb-2">
              <label> Tình Trạng</label>
              <select v-model="edit.tinh_trang" class="form-control mt-2">
                <option value="1">Hiển Thị</option>
                <option value="0">Tạm Ngưng</option>
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
          <h5 class="modal-title" id="exampleModalLabel">Xóa Loại Khóa Học</h5>
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
                  Bạn chắc chắc xóa Loại Khóa Học
                  <b>{{ del.ten_khoa_hoc }}</b> này chứ !!!
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
  <!-- Modal mô tả ngắn-->
  <div
    class="modal fade"
    id="moTaModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Mô Tả Ngắn Loại Khóa Học
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <span v-html="del.mo_ta_ngan"></span>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  Heading,
  BlockQuote,
  Font,
  Link,
  List,
  Alignment,
  Highlight,
  Image,
  FileRepository,
} from "ckeditor5";
import { Ckeditor } from "@ckeditor/ckeditor5-vue";
import "ckeditor5/ckeditor5.css";

export default {
  components: {
    Ckeditor,
  },
  data() {
    return {
      edit: {
        ten_khoa_hoc: "",
        slug_khoa_hoc: "",
        hinh_anh: "",
        mo_ta_ngan: "",
        tinh_trang: "",
        gia_ban: "",
        gia_goc: "",
        giao_vien: "",
        loai: "",
      },
      del: {
        ten_khoa_hoc: "",
      },
      create: {
        ten_khoa_hoc: "",
        slug_khoa_hoc: "",
        hinh_anh: "",
        mo_ta_ngan: "",
        tinh_trang: "",
        gia_ban: "",
        gia_goc: "",
        giao_vien: "",
        loai: "",
      },
      list: [],
      search: {},
      editor: ClassicEditor,
      editorConfig: {
        plugins: [
          Bold,
          Essentials,
          Italic,
          Mention,
          Paragraph,
          Undo,
          Heading,
          BlockQuote,
          Font,
          Link,
          List,
          Alignment,
          Highlight,
          Image,
          FileRepository,
        ],
        toolbar: [
          "heading",
          "|",
          "undo",
          "redo",
          "|",
          "bold",
          "italic",
          "fontSize",
          "fontFamily",
          "fontColor",
          "highlight",
          "|",
          "link",
          "bulletedList",
          "numberedList",
          "blockQuote",
          "|",
          "Alignment",
        ],
      },
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
    timKiem() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/loai-khoa-hoc/tim-kiem",
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
          "http://127.0.0.1:8000/api/admin/loai-khoa-hoc/change-status",
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
        .post(
          "http://127.0.0.1:8000/api/admin/loai-khoa-hoc/update",
          this.edit,
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
    xoa() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/loai-khoa-hoc/delete",
          this.del,
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
    themMoi() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/loai-khoa-hoc/create",
          this.create,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("key_admin"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.loadData();
          this.create = {
            ten_khoa_hoc: "",
            slug_khoa_hoc: "",
            hinh_anh: "",
            mo_ta_ngan: "",
            tinh_trang: "",
            gia_ban: "",
            gia_goc: "",
          };
          this.$toast.success(res.data.message);
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
        .get("http://127.0.0.1:8000/api/admin/loai-khoa-hoc/data", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          console.log(res);
          this.list = res.data.data1;
        });
    },
  },
};
</script>
<style>
.ck-editor__editable {
  min-height: 300px;
}
.table-custom tbody tr:nth-of-type(odd) {
  background-color: #eaf6ff; /* xanh nhạt */
}

.table-custom tbody tr:nth-of-type(even) {
  background-color: #ffffff; /* trắng */
}

</style>
