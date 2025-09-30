import { createRouter, createWebHistory } from "vue-router";
import checkAdminLogin from "./checkAdminLogin";
import checkKhachHangLogin from "./checkKhachHangLogin";
import NotFound from "../layout/components/NotFound.vue";

const routes = [
  // ================= CLIENT =================
  {
    path: "/",
    component: () => import("../components/Client/TrangChu/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/khach-hang/dang-ky",
    component: () => import("../components/KhachHang/DangKi/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/khach-hang/dang-nhap",
    component: () => import("../components/KhachHang/DangNhap/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/khach-hang/reset-password",
    component: () => import("../components/KhachHang/QuenMatKhau/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/khach-hang/doi-mat-khau/:hash_reset",
    component: () => import("../components/KhachHang/DoiMatKhau/index.vue"),
    meta: { layout: "client" },
    props: true,
  },
  {
    path: "/kich-hoat/:id_khach_hang",
    component: () => import("../components/KhachHang/KichHoat/index.vue"),
    meta: { layout: "client" },
    props: true,
  },
  {
    path: "/chi-tiet-khoa-hoc/:id_khoa_hoc-:slug_khoa_hoc",
    component: () => import("../components/Client/KhoaHoc/index.vue"),
    meta: { layout: "client" },
    props: true,
  },
  {
    path: "/bai-viet",
    component: () => import("../components/Client/BaiViet/index.vue"),
    meta: { layout: "client" },
  },
  {
    path: "/trac-nghiem",
    component: () => import("../components/Client/TracNghiem/index.vue"),
    meta: { layout: "client" },
    beforeEnter: checkKhachHangLogin,
  },
  {
    path: "/danh-sach-khoa-hoc",
    component: () => import("../components/Client/DanhSachKhoaHoc/index.vue"),
    meta: { layout: "client" },
    beforeEnter: checkKhachHangLogin,
  },
  {
    path: "/tai-khoan",
    component: () => import("../components/KhachHang/TaiKhoan/index.vue"),
    meta: { layout: "client" },
    beforeEnter: checkKhachHangLogin,
  },
  {
    path: "/thanh-toan/:id_khoa_hoc",
    component: () => import("../components/Client/ThanhToanQR/index.vue"),
    meta: { layout: "client" },
    beforeEnter: checkKhachHangLogin,
    props: true,
  },

  // ================= ADMIN =================
  {
    path: "/admin/dash",
    component: () => import("../components/Admin/Dashboard/index.vue"),
    beforeEnter: checkAdminLogin,
    meta: { layout: "admin" },
  },
  {
    path: "/admin/loai-khoa-hoc",
    component: () => import("../components/Admin/LoaiKhoaHoc/index.vue"),
    beforeEnter: checkAdminLogin,
    meta: { layout: "admin" },
  },
  {
    path: "/admin/khach-hang",
    component: () => import("../components/Admin/KhachHang/index.vue"),
    beforeEnter: checkAdminLogin,
    meta: { layout: "admin" },
  },
  {
    path: "/admin/lich-su-giao-dich",
    component: () => import("../components/Admin/LichSuGiaoDich/index.vue"),
    beforeEnter: checkAdminLogin,
    meta: { layout: "admin" },
  },
  {
    path: "/admin/nhan-vien",
    component: () => import("../components/Admin/NhanVien/index.vue"),
    beforeEnter: checkAdminLogin,
    meta: { layout: "admin" },
  },
  {
    path: "/admin/bai-hoc",
    component: () => import("../components/Admin/BaiHoc/index.vue"),
    beforeEnter: checkAdminLogin,
    meta: { layout: "admin" },
  },
  {
    path: "/admin/bai-viet",
    component: () => import("../components/Admin/BaiViet/index.vue"),
    beforeEnter: checkAdminLogin,
    meta: { layout: "admin" },
  },
  {
    path: "/admin/trac-nghiem",
    component: () => import("../components/Admin/TracNghiem/index.vue"),
    beforeEnter: checkAdminLogin,
    meta: { layout: "admin" },
  },
  {
    path: "/admin/tai-khoan",
    component: () => import("../components/Admin/TaiKhoan/index.vue"),
    beforeEnter: checkAdminLogin,
    meta: { layout: "admin" },
  },
  {
    path: "/admin/dang-nhap",
    component: () => import("../components/Admin/DangNhap/index.vue"),
    meta: { layout: "admin" }, // hoặc để client nếu bạn muốn giao diện giống login thường
  },

  // ================= NOT FOUND =================
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { layout: "client" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
