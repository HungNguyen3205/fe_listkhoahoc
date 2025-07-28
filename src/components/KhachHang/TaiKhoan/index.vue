<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs nav-primary" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab"
                                aria-selected="true">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon"><i class="fa-solid fa-user font-18 me-1"></i>
                                    </div>
                                    <div class="tab-title">Profile</div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-bs-toggle="tab" href="#primarycontact" role="tab"
                                aria-selected="false" tabindex="-1">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon"><i class="fa-solid fa-lock font-18 me-1"></i>
                                    </div>
                                    <div class="tab-title">Đổi mật khẩu</div>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" data-bs-toggle="tab" href="#lichSuMuaHang" role="tab" aria-selected="false"
                                tabindex="-1">
                                <div class="d-flex align-items-center">
                                    <div class="tab-icon me-1"><i class="fa-solid fa-money-check-dollar"></i>
                                    </div>
                                    <div class="tab-title">Lịch Sử Mua Hàng</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content py-3">
                        <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                            <div class="row">
                                <div class="col-lg-4 d-flex">
                                    <div class="card flex-fill">
                                        <div class="card-body">
                                            <div class="d-flex flex-column align-items-center text-center">
                                                <img src="../../../assets/images/logo_cua_du_an.png"
                                                    style="width: 140px; height: 140px;" alt="Admin"
                                                    class="rounded-circle p-1 bg-primary">
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
                                            <div class="row mb-3">
                                                <div class="col-lg-3">
                                                    <h6 class="mb-0">Họ và Tên</h6>
                                                </div>
                                                <div class="col-lg-9 text-secondary">
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập họ và tên">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-lg-3">
                                                    <h6 class="mb-0">Email</h6>
                                                </div>
                                                <div class="col-lg-9 text-secondary">
                                                    <input type="text" class="form-control" placeholder="Nhập email">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-lg-3">
                                                    <h6 class="mb-0">Số Điện Thoại</h6>
                                                </div>
                                                <div class="col-lg-9 text-secondary">
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập số điện thoại">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <div class="col-lg-3">
                                                    <h6 class="mb-0">Địa Chỉ</h6>
                                                </div>
                                                <div class="col-lg-9 text-secondary">
                                                    <input type="text" class="form-control"
                                                        placeholder="Nhập số điện thoại">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-3"></div>
                                                <div class="col-lg-9 text-secondary">
                                                    <button type="button" class="btn btn-primary px-4">Lưu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="primarycontact" role="tabpanel">
                            <div class="col">
                                <h4>Thay đổi mật khẩu</h4>
                            </div>
                            <div class="col">Quản lý mật khẩu để bảo mật tài khoản</div>
                            <hr>
                            <div class="row mb-2">
                                <div class="col-lg-2">
                                    <label for="">Mật khẩu cũ</label>
                                </div>
                                <div class="col-lg-3">
                                    <input type="text" placeholder="Nhập mật khẩu cũ" class="form-control">
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-lg-2">
                                    <label for="">Mật khẩu mới</label>
                                </div>
                                <div class="col-lg-3">
                                    <input type="password" placeholder="Nhập mật khẩu mới" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-lg-2">
                                    <label for="">Nhập lại Mật khẩu mới </label>
                                </div>
                                <div class="col-lg-3">
                                    <input type="password" placeholder="Nhập lại mật khẩu mới" class="form-control">
                                </div>
                            </div>
                            <button class="btn btn-primary">Lưu</button>
                        </div>
                        <div class="tab-pane fade" id="lichSuMuaHang" role="tabpanel">
                            <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead class="text-center align-middle">
                            <tr>
                                <th>#</th>
                                <th>Tên Khóa Học</th>
                                <th>Ngày Mua</th>
                                <th>Gía Mua</th>
                                <th>Hình Ảnh</th>
                            </tr>
                        </thead>
                        <tbody class="align-middle">
                            <template v-for="(value, index) in list_danh_sach_da_mua" :key="index">
                                <tr>
                                    <th class="text-center">{{ index + 1 }}</th>
                                    <td>{{ value.ten_khoa_hoc }}</td>
                                    <td class="text-center">{{ formatdate(value.ngay_mua) }}</td>
                                    <td class="text-end">{{ formatVND(value.so_tien_mua) }}</td>
                                    <td class="text-center">
                                        <img :src="value.hinh_anh" style="width: 200px;">
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
        </div>
    </div>
    <!-- Modal nạp tiền -->
    <div class="modal fade" id="xacNhanNapTienModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xác Nhận Nạp Tiền</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="alert alert-success" role="alert">
                                        Bạn phải quét mã QR để thanh toán nạp tiền vào tài khoản
                                    </div>
                                    <img :src="link_qr" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
            so_tien_nap: 0,
            link_qr: '',
            user: {},
            lich_su_nap: [],
            list_thanh_toan: [],
            list_danh_sach_da_mua: []
        }
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
                        Authorization: 'Bearer ' + localStorage.getItem("key_khach_hang")
                    }
                })
                .then((res) => {
                    this.user = res.data.data
                })
        },
        
        formatdate(thoi_gian) {
            const date = new Date(thoi_gian);
            return date.toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        },
        formatVND(number) {
            return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
        },
        loadDanhSachKhoaHoc() {
            axios
                .get("http://127.0.0.1:8000/api/loai-khoa-hoc/danh-sach-khoa-hoc", {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("key_khach_hang")
                    }
                })
                .then((res) => {
                    this.list_danh_sach_da_mua = res.data.data
                });
        }
    },
}
</script>
<style></style>