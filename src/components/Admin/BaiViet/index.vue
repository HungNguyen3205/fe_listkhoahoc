<template>
  <div class="row">
    <div class="col-lg-4 col-md-12">
      <div class="card shadow-sm border-0">
        <!-- Header -->
        <div
          class="card-header bg-primary text-white d-flex align-items-center"
        >
          <i class="fa-solid fa-plus-circle me-2"></i>
          <h5 class="mb-0">Thêm Mới Bài Viết</h5>
        </div>

        <!-- Body -->
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-heading me-1 text-primary"></i> Tiêu Đề
            </label>
            <input
              v-model="create.tieu_de"
              type="text"
              class="form-control"
              placeholder="Nhập tiêu đề bài viết..."
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-link me-1 text-secondary"></i> Slug Tiêu Đề
            </label>
            <input
              v-model="create.slug_tieu_de"
              type="text"
              class="form-control"
              placeholder="slug-tieu-de"
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
              <i class="fa-solid fa-align-left me-1 text-info"></i> Mô Tả Ngắn
            </label>
            <textarea
              v-model="create.mo_ta_ngan"
              rows="2"
              class="form-control"
              placeholder="Nhập mô tả ngắn..."
            ></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-file-lines me-1 text-warning"></i> Nội Dung
            </label>
            <ckeditor
              v-model="create.noi_dung"
              :editor="editor"
              :config="editorConfig"
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-toggle-on me-1 text-primary"></i> Tình Trạng
            </label>
            <select v-model="create.tinh_trang" class="form-select">
              <option value="1">✅ Hoạt Động</option>
              <option value="0">⏸️ Tạm Dừng</option>
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
      <i class="fa-solid fa-list me-2"></i>
      <h5 class="mb-0">Danh Sách Bài Viết</h5>
    </div>

    <!-- Body -->
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered table-hover table-striped align-middle">
          <thead class="table-light">
            <tr>
              <th colspan="100%">
                <div class="input-group w-100 shadow-sm">
                  <span class="input-group-text bg-white">
                    <i class="bx bx-search"></i>
                  </span>
                  <input
                    v-model="search.noi_dung"
                    v-on:keyup.enter="timKiem()"
                    type="text"
                    class="form-control"
                    placeholder="Tìm kiếm bài viết..."
                  />
                  <button
                    v-on:click="timKiem()"
                    class="btn btn-outline-primary"
                    type="button"
                  >
                    Tìm Kiếm
                  </button>
                </div>
              </th>
            </tr>
            <tr class="text-center">
              <th>#</th>
              <th>Tiêu Đề</th>
              <th>Slug Tiêu Đề</th>
              <th>Hình Ảnh</th>
              <th>Mô Tả Ngắn</th>
              <th>Nội Dung</th>
              <th>Tình Trạng</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(value, index) in list" :key="index">
              <tr :class="{ 'table-light': index % 2 === 0 }">
                <th class="text-center">{{ index + 1 }}</th>
                <td>{{ value.tieu_de }}</td>
                <td>{{ value.slug_tieu_de }}</td>
                <td class="text-center">
                  <img
                    :src="value.hinh_anh"
                    class="img-thumbnail"
                    style="max-width: 90px"
                    alt="Ảnh bài viết"
                  />
                </td>
                <td class="text-truncate" style="max-width: 150px">
                  {{ value.mo_ta_ngan }}
                </td>
                <td class="text-center">
                  <button
                    v-on:click="Object.assign(edit, value)"
                    data-bs-toggle="modal"
                    data-bs-target="#icon"
                    class="btn btn-sm btn-outline-info"
                  >
                    <i class="fa-solid fa-circle-info"></i>
                  </button>
                </td>
                <td class="text-center">
                  <span
                    v-if="value.tinh_trang == 1"
                    class="badge bg-success px-3 py-2"
                    style="font-size: 0.9rem"
                    @click="doiTrangThai(value)"
                  >
                    Hoạt Động
                  </span>
                  <span
                    v-else
                    class="badge bg-warning text-dark px-3 py-2"
                    style="font-size: 0.9rem"
                    @click="doiTrangThai(value)"
                  >
                    Tạm Dừng
                  </span>
                </td>
                <td class="text-center">
                  <button
                    v-on:click="Object.assign(edit, value)"
                    class="btn btn-sm btn-primary me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal"
                  >
                    <i class="fa-solid fa-pen-to-square"></i> Cập Nhật
                  </button>
                  <button
                    v-on:click="Object.assign(del, value)"
                    class="btn btn-sm btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    <i class="fa-solid fa-trash"></i> Xóa
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
          <h5 class="modal-title" id="exampleModalLabel">Xóa Bài Viết</h5>
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
                  Bạn chắc chắc xóa bài viết <b>{{ del.tieu_de }}</b> này chứ
                  !!!
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
            Cập Nhật Bài Viết
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
            <label class="mt-2">Tiêu Đề</label>
            <input
              v-model="edit.tieu_de"
              class="form-control mt-2"
              type="text"
            />
            <label class="mt-2">Slug Tiêu Đề</label>
            <input
              v-model="edit.slug_tieu_de"
              class="form-control mt-2"
              type="text"
            />
            <label class="mt-2">Hình Ảnh</label>
            <input
              v-model="edit.hinh_anh"
              class="form-control mt-2"
              type="text"
            />
            <label class="mt-2">Mô Tả Ngắn</label>
            <input
              v-model="edit.mo_ta_ngan"
              class="form-control mt-2"
              type="text"
            />
            <label class="mt-2">Nội Dung</label>
            <ckeditor
              v-model="edit.noi_dung"
              :editor="editor"
              :config="editorConfig"
            />
            <label class="mt-2">Tình Trạng</label>
            <select v-model="edit.tinh_trang" class="form-control mt-2">
              <option value="1">Hoạt Động</option>
              <option value="0">Tạm Dừng</option>
            </select>
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
  <!-- modal-icon -->
  <div
    class="modal fade"
    id="icon"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Nội Dung Bài Viết
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <span v-html="edit.noi_dung"></span>
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
      create: {
        tieu_de: "",
        slug_tieu_de: "",
        hinh_anh: "",
        mo_ta_ngan: "",
        noi_dung: "",
        tinh_trang: "",
      },
      del: {
        id: "",
        tieu_de: "",
      },
      edit: {
        tieu_de: "",
        slug_tieu_de: "",
        hinh_anh: "",
        mo_ta_ngan: "",
        noi_dung: "",
        tinh_trang: "",
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
    timKiem() {
      axios
        .post(
          "http://127.0.0.1:8000/api/admin/bai-viet/tim-kiem",
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
        .post("http://127.0.0.1:8000/api/admin/bai-viet/change-status", value, {
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
        .post("http://127.0.0.1:8000/api/admin/bai-viet/update", this.edit, {
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
        .post("http://127.0.0.1:8000/api/admin/bai-viet/delete", this.del, {
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
        .post("http://127.0.0.1:8000/api/admin/bai-viet/create", this.create, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_admin"),
          },
        })
        .then((res) => {
          if (res.data.status) {
            this.$toast.success(res.data.message);
            this.loadData();
            this.create = {
              tieu_de: "",
              slug_tieu_de: "",
              hinh_anh: "",
              mo_ta_ngan: "",
              noi_dung: "",
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
        .get("http://127.0.0.1:8000/api/admin/bai-viet/data", {
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
<style>
.ck-editor__editable {
  min-height: 300px;
}
</style>
