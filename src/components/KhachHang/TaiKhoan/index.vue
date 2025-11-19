<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs nav-primary" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                data-bs-toggle="tab"
                href="#primaryhome"
                role="tab"
                aria-selected="true"
              >
                <div class="d-flex align-items-center">
                  <div class="tab-icon">
                    <i class="fa-solid fa-user font-18 me-1"></i>
                  </div>
                  <div class="tab-title">{{ $t("tab_profile") }}</div>
                </div>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                href="#primarycontact"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                <div class="d-flex align-items-center">
                  <div class="tab-icon">
                    <i class="fa-solid fa-lock font-18 me-1"></i>
                  </div>
                  <div class="tab-title">{{ $t("tab_change_password") }}</div>
                </div>
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                href="#lichSuMuaHang"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                <div class="d-flex align-items-center">
                  <div class="tab-icon me-1">
                    <i class="fa-solid fa-money-check-dollar"></i>
                  </div>
                  <div class="tab-title">{{ $t("tab_purchase_history") }}</div>
                </div>
              </a>
            </li>

            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                data-bs-toggle="tab"
                href="#tabLanguage"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                <div class="d-flex align-items-center">
                  <div class="tab-icon me-1">
                    <i class="fa-solid fa-earth-asia fa-fw"></i>
                  </div>
                  <div class="tab-title">{{ $t("tab_language") }}</div>
                </div>
              </a>
            </li>
          </ul>
          <div class="tab-content py-3">
            <div
              class="tab-pane fade show active"
              id="primaryhome"
              role="tabpanel"
            >
              <div class="row">
                <div class="col-lg-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div
                        class="d-flex flex-column align-items-center text-center"
                      >
                        <img
                          src="../../../assets/images/logo_cua_du_an.png"
                          style="width: 140px; height: 140px"
                          alt="Admin"
                          class="rounded-circle p-1 bg-primary"
                        />
                        <div class="mt-3">
                          <h4>{{ user.ho_va_ten }}</h4>
                          <p class="text-secondary mb-1">{{ user.email }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-8 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <!-- Họ và Tên -->
                      <div class="row mb-3">
                        <div class="col-lg-3">
                          <h6 class="mb-0">
                            {{ $t("profile_fullname_label") }}
                          </h6>
                        </div>
                        <div class="col-lg-9 text-secondary">
                          <input
                            type="text"
                            class="form-control"
                            :placeholder="$t('profile_fullname_placeholder')"
                          />
                        </div>
                      </div>

                      <!-- Email -->
                      <div class="row mb-3">
                        <div class="col-lg-3">
                          <h6 class="mb-0">{{ $t("profile_email_label") }}</h6>
                        </div>
                        <div class="col-lg-9 text-secondary">
                          <input
                            type="text"
                            class="form-control"
                            :placeholder="$t('profile_email_placeholder')"
                          />
                        </div>
                      </div>

                      <!-- Số điện thoại -->
                      <div class="row mb-3">
                        <div class="col-lg-3">
                          <h6 class="mb-0">{{ $t("profile_phone_label") }}</h6>
                        </div>
                        <div class="col-lg-9 text-secondary">
                          <input
                            type="text"
                            class="form-control"
                            :placeholder="$t('profile_phone_placeholder')"
                          />
                        </div>
                      </div>

                      <!-- Địa chỉ -->
                      <div class="row mb-3">
                        <div class="col-lg-3">
                          <h6 class="mb-0">
                            {{ $t("profile_address_label") }}
                          </h6>
                        </div>
                        <div class="col-lg-9 text-secondary">
                          <input
                            type="text"
                            class="form-control"
                            :placeholder="$t('profile_address_placeholder')"
                          />
                        </div>
                      </div>

                      <!-- Nút Lưu -->
                      <div class="row">
                        <div class="col-lg-3"></div>
                        <div class="col-lg-9 text-secondary">
                          <button type="button" class="btn btn-primary px-4">
                            {{ $t("btn_save") }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-pane fade" id="primarycontact" role="tabpanel">
              <div class="col">
                <h4>{{ $t("change_password_title") }}</h4>
              </div>
              <div class="col">
                {{ $t("change_password_subtitle") }}
              </div>
              <hr />

              <div class="row mb-2">
                <div class="col-lg-2">
                  <label for="oldPassword">{{
                    $t("old_password_label")
                  }}</label>
                </div>
                <div class="col-lg-3">
                  <input
                    id="oldPassword"
                    type="password"
                    :placeholder="$t('old_password_placeholder')"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-lg-2">
                  <label for="newPassword">{{
                    $t("new_password_label")
                  }}</label>
                </div>
                <div class="col-lg-3">
                  <input
                    id="newPassword"
                    type="password"
                    :placeholder="$t('new_password_placeholder')"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-lg-2">
                  <label for="confirmPassword">{{
                    $t("confirm_password_label")
                  }}</label>
                </div>
                <div class="col-lg-3">
                  <input
                    id="confirmPassword"
                    type="password"
                    :placeholder="$t('confirm_password_placeholder')"
                    class="form-control"
                  />
                </div>
              </div>

              <button class="btn btn-primary">
                {{ $t("btn_save") }}
              </button>
            </div>

            <div class="tab-pane fade" id="lichSuMuaHang" role="tabpanel">
              <div class="table-responsive">
                <table class="table table-bordered table-hover">
                  <thead class="text-center align-middle">
                    <tr>
                      <th>#</th>
                      <th>{{ $t("table_course_name") }}</th>
                      <th>{{ $t("table_purchase_date") }}</th>
                      <th>{{ $t("table_price") }}</th>
                      <th>{{ $t("table_image") }}</th>
                    </tr>
                  </thead>

                  <tbody class="align-middle">
                    <template
                      v-for="(value, index) in list_danh_sach_da_mua"
                      :key="index"
                    >
                      <tr>
                        <th class="text-center">{{ index + 1 }}</th>
                        <td>{{ value.ten_khoa_hoc }}</td>
                        <td class="text-center">
                          {{ formatdate(value.ngay_mua) }}
                        </td>
                        <td class="text-end">
                          {{ formatVND(value.so_tien_mua) }}
                        </td>
                        <td class="text-center">
                          <img :src="value.hinh_anh" style="width: 200px" />
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane fade" id="tabLanguage" role="tabpanel">
              <div class="card">
                <div class="card-body">
                  <h5 class="mb-3">
                    <i class="fa-solid fa-earth-asia me-2"></i>
                    {{ $t("language_display_title") }}
                  </h5>

                  <ul class="list-group">
                    <!-- 🇻🇳 Tiếng Việt -->
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <span class="fs-4 me-2">🇻🇳</span>
                        <div>
                          <div class="fw-semibold">
                            {{ $t("language_vi_title") }}
                          </div>
                          <small class="text-muted">{{
                            $t("language_vi_desc")
                          }}</small>
                        </div>
                      </div>
                      <button
                        class="btn btn-sm"
                        :class="
                          $i18n.locale === 'vi'
                            ? 'btn-success'
                            : 'btn-outline-primary'
                        "
                        @click="changeLang('vi')"
                      >
                        <span v-if="$i18n.locale === 'vi'">{{
                          $t("btn_current")
                        }}</span>
                        <span v-else>{{ $t("btn_select") }}</span>
                      </button>
                    </li>

                    <!-- 🇺🇸 English -->
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <span class="fs-4 me-2">🇺🇸</span>
                        <div>
                          <div class="fw-semibold">
                            {{ $t("language_en_title") }}
                          </div>
                          <small class="text-muted">{{
                            $t("language_en_desc")
                          }}</small>
                        </div>
                      </div>
                      <button
                        class="btn btn-sm"
                        :class="
                          $i18n.locale === 'en'
                            ? 'btn-success'
                            : 'btn-outline-primary'
                        "
                        @click="changeLang('en')"
                      >
                        <span v-if="$i18n.locale === 'en'">{{
                          $t("btn_current")
                        }}</span>
                        <span v-else>{{ $t("btn_select") }}</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal nạp tiền -->
  <div
    class="modal fade"
    id="xacNhanNapTienModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            {{ $t("modal_deposit_title") }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="alert alert-success" role="alert">
                    {{ $t("modal_deposit_alert") }}
                  </div>
                  <img :src="link_qr" class="img-fluid" />
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
            {{ $t("btn_close") }}
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
      so_tien_nap: 0,
      link_qr: "",
      user: {},
      lich_su_nap: [],
      list_thanh_toan: [],
      list_danh_sach_da_mua: [],
    };
  },
  mounted() {
    this.layThongTinNguoiDung();
    this.loadDanhSachKhoaHoc();
  },
  methods: {
    layThongTinNguoiDung() {
      axios
        .get("http://127.0.0.1:8000/api/khach-hang/thong-tin", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_khach_hang"),
          },
        })
        .then((res) => {
          this.user = res.data.data;
        });
    },

    formatdate(thoi_gian) {
      const date = new Date(thoi_gian);
      return date.toLocaleDateString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    },
    formatVND(number) {
      const locale = this.$i18n.locale === 'en' ? 'en-US' : 'vi-VN';
      const currency = this.$i18n.locale === 'en' ? 'USD' : 'VND';

      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
      }).format(number);
    },
    loadDanhSachKhoaHoc() {
      axios
        .get("http://127.0.0.1:8000/api/loai-khoa-hoc/danh-sach-khoa-hoc", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("key_khach_hang"),
          },
        })
        .then((res) => {
          this.list_danh_sach_da_mua = res.data.data;
        });
    },
    changeLang(lang) {
      this.$i18n.locale = lang; // đổi ngôn ngữ toàn site
      localStorage.setItem("lang", lang); // lưu lại để F5 không bị mất
    },
  },
};
</script>
<style></style>
