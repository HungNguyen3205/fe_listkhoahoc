<template>
  <div class="row">
    <!-- FORM THÊM MỚI -->
    <div class="col-lg-4 col-md-12">
      <div class="card shadow-sm border-0">
        <!-- Header -->
        <div class="card-header bg-primary text-white d-flex align-items-center">
          <i class="fa-solid fa-plus-circle me-2"></i>
          <h5 class="mb-0">{{ $t('course_type_add_title') }}</h5>
        </div>

        <!-- Body -->
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-book me-1 text-primary"></i>
              {{ $t('course_type_name_label') }}
            </label>
            <input
              v-model="create.ten_khoa_hoc"
              type="text"
              class="form-control"
              :placeholder="$t('course_type_name_placeholder')"
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-link me-1 text-secondary"></i>
              {{ $t('course_type_slug_label') }}
            </label>
            <input
              v-model="create.slug_khoa_hoc"
              type="text"
              class="form-control"
              :placeholder="$t('course_type_slug_placeholder')"
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-image me-1 text-success"></i>
              {{ $t('course_type_image_label') }}
            </label>
            <input
              v-model="create.hinh_anh"
              type="text"
              class="form-control"
              :placeholder="$t('course_type_image_placeholder')"
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-user-tie me-1 text-warning"></i>
              {{ $t('course_type_teacher_label') }}
            </label>
            <input
              v-model="create.giao_vien"
              type="text"
              class="form-control"
              :placeholder="$t('course_type_teacher_placeholder')"
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-crown me-1 text-danger"></i>
              {{ $t('course_type_plan_label') }}
            </label>
            <select v-model="create.loai" class="form-select">
              <option value="1">{{ $t('course_type_plan_pro') }}</option>
              <option value="0">{{ $t('course_type_plan_free') }}</option>
            </select>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label fw-bold">
                <i class="fa-solid fa-dollar-sign me-1 text-success"></i>
                {{ $t('course_type_price_label') }}
              </label>
              <input
                v-model="create.gia_ban"
                type="number"
                class="form-control"
                :placeholder="$t('course_type_price_placeholder')"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label fw-bold">
                <i class="fa-solid fa-tags me-1 text-danger"></i>
                {{ $t('course_type_original_price_label') }}
              </label>
              <input
                v-model="create.gia_goc"
                type="number"
                class="form-control"
                :placeholder="$t('course_type_original_price_placeholder')"
              />
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-align-left me-1 text-info"></i>
              {{ $t('course_type_short_desc_label') }}
            </label>
            <ckeditor
              v-model="create.mo_ta_ngan"
              :editor="editor"
              :config="editorConfig"
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-bold">
              <i class="fa-solid fa-toggle-on me-1 text-primary"></i>
              {{ $t('course_type_status_label') }}
            </label>
            <select v-model="create.tinh_trang" class="form-select">
              <option value="1">{{ $t('status_active') }}</option>
              <option value="0">{{ $t('status_inactive') }}</option>
            </select>
          </div>
        </div>

        <!-- Footer -->
        <div class="card-footer text-end bg-light">
          <button v-on:click="themMoi()" class="btn btn-success px-4">
            <i class="fa-solid fa-save me-2"></i>
            {{ $t('course_type_add_button') }}
          </button>
        </div>
      </div>
    </div>

    <!-- DANH SÁCH -->
    <div class="col-lg-8 col-md-12">
      <div class="card shadow-sm border-0">
        <!-- Header -->
        <div class="card-header bg-primary text-white d-flex align-items-center">
          <i class="fa-solid fa-list-alt me-2"></i>
          <h5 class="mb-0">{{ $t('course_type_list_title') }}</h5>
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
              :placeholder="$t('search_course_placeholder')"
            />
            <button v-on:click="timKiem()" class="btn btn-outline-primary">
              <i class="fa-solid fa-magnifying-glass me-1"></i>
              {{ $t('btn_search') }}
            </button>
          </div>

          <!-- Table -->
          <div class="table-responsive">
            <table class="table table-hover align-middle table-custom">
              <thead class="table-light">
                <tr>
                  <th class="text-center">#</th>
                  <th class="text-center">{{ $t('table_course_name') }}</th>
                  <th class="text-center">{{ $t('table_slug') }}</th>
                  <th class="text-center">{{ $t('table_image') }}</th>
                  <th class="text-center">{{ $t('table_short_desc') }}</th>
                  <th class="text-center">{{ $t('table_status') }}</th>
                  <th class="text-center">{{ $t('table_price') }}</th>
                  <th class="text-center">{{ $t('table_original_price') }}</th>
                  <th class="text-center">{{ $t('table_actions') }}</th>
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
                        :alt="$t('course_image_alt')"
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
                        <i class="fa-solid fa-eye me-1"></i>
                        {{ $t('status_active') }}
                      </button>
                      <button
                        v-on:click="doiTrangThai(value)"
                        v-else
                        class="btn btn-sm btn-warning"
                      >
                        <i class="fa-solid fa-eye-slash me-1"></i>
                        {{ $t('status_inactive') }}
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
            {{ $t('course_type_update_title') }}
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
              <label>{{ $t('course_type_name_label') }}</label>
              <input
                v-model="edit.ten_khoa_hoc"
                type="text"
                class="form-control mt-2"
              />
            </div>
            <div class="mb-2">
              <label>{{ $t('course_type_slug_label') }}</label>
              <input
                v-model="edit.slug_khoa_hoc"
                type="text"
                class="form-control mt-2"
              />
            </div>
            <div class="mb-2">
              <label>{{ $t('course_type_image_label') }}</label>
              <input
                v-model="edit.hinh_anh"
                type="text"
                class="form-control mt-2"
              />
            </div>
            <div class="mb-2">
              <label>{{ $t('course_type_short_desc_label') }}</label>
              <ckeditor
                v-model="edit.mo_ta_ngan"
                :editor="editor"
                :config="editorConfig"
              />
            </div>
            <div class="mb-2">
              <label class="mb-2">{{ $t('course_type_price_label') }}</label>
              <input
                v-model="edit.gia_ban"
                type="text"
                class="form-control mb-2"
              />
              <label class="mb-2">{{ $t('course_type_original_price_label') }}</label>
              <input
                v-model="edit.gia_goc"
                type="text"
                class="form-control mb-2"
              />
            </div>
            <div class="mb-2">
              <label>{{ $t('course_type_status_label') }}</label>
              <select v-model="edit.tinh_trang" class="form-control mt-2">
                <option value="1">{{ $t('status_active') }}</option>
                <option value="0">{{ $t('status_inactive') }}</option>
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
            {{ $t('btn_close') }}
          </button>
          <button
            v-on:click="capNhat()"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            {{ $t('btn_update') }}
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
          <h5 class="modal-title" id="exampleModalLabel">
            {{ $t('course_type_delete_title') }}
          </h5>
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
                <h6
                  class="mb-1 text-white"
                  v-html="$t('course_type_delete_confirm', { name: del.ten_khoa_hoc })"
                ></h6>
                <div class="text-white text-nowrap">
                  {{ $t('course_type_delete_note') }}
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
            {{ $t('btn_close') }}
          </button>
          <button
            v-on:click="xoa()"
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            {{ $t('btn_delete') }}
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
            {{ $t('course_type_short_desc_modal_title') }}
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
            {{ $t('btn_close') }}
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
