<template>
    <div class="topbar d-flex align-items-center">
        <nav class="navbar navbar-expand d-flex justify-content-between">
            <router-link to="/">
                <div class="topbar-logo-header d-flex align-items-center">
                    <img src="../../assets/images/logo_cua_du_an.png" class="logo-icon"
                        style="width: 50px; height: 50px;" alt="logo icon">
                </div>
            </router-link>
            <div>
                <h5><i class="fa fa-clock text-secondary me-2"></i>Đơn hàng sẽ bị hủy sau: <span class="text-danger">{{
                    formatTime(countdown) }}</span></h5>

            </div>
            <div class="user-box dropdown">
                <template v-if="user.check">
                    <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-circle-user fa-3x ms-2"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <router-link to="/tai-khoan">
                                <a class="dropdown-item" href="/tai-khoan"><i
                                        class="bx bx-user"></i><span>Profile</span></a>
                            </router-link>
                        </li>
                        <li><a v-on:click="logout()" class="dropdown-item" href="javascript:;"><i
                                    class='bx bx-log-out-circle'></i><span>Đăng Xuất</span></a>
                        </li>
                        <li><a v-on:click="logoutAll()" class="dropdown-item" href="javascript:;"><i
                                    class='bx bx-log-out-circle'></i><span>Đăng Xuất Tất Cả</span></a>
                        </li>
                    </ul>
                </template>
                <template v-else>
                    <router-link to="/khach-hang/dang-nhap">
                        <button type="button"
                            class="btn btn-outline-dark px-5 radius-30 me-2 d-flex align-items-center"><i
                                class="fa-regular fa-user me-2"></i>Đăng Nhập</button>
                    </router-link>
                    <router-link to="/khach-hang/dang-ky">
                        <button type="button" class="btn btn-dark px-5 radius-30 d-flex align-items-center"><i
                                class="fa-solid fa-arrow-right-to-bracket me-2"></i>Đăng Ký</button>
                    </router-link>
                </template>
            </div>
        </nav>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            user: {},
            countdown: 15 * 60, // 15 phút = 900 giây
            timerInterval: null,
        }
    },
    mounted() {
        this.user = {
            name: localStorage.getItem("name_kh"),
            email: localStorage.getItem("email_kh"),
            check: localStorage.getItem("check_kh")
        };
        // Bắt đầu đếm ngược
        this.startCountdown();
    },
    methods: {
        logout() {
            axios
                .get('http://localhost:8000/api/khach-hang/logout', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("key_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        localStorage.removeItem('key_khach_hang');
                        localStorage.removeItem("name_kh");
                        localStorage.removeItem("email_kh");
                        localStorage.removeItem("check_kh");
                        this.$toast.success(res.data.message);
                        this.$router.push('/')
                    } else {
                        this.$toast.error('Có lỗi xảy ra')
                    }
                })
        },
        logoutAll() {
            axios
                .get('http://localhost:8000/api/khach-hang/logout-all', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem("key_khach_hang")
                    }
                })
                .then((res) => {
                    if (res.data.status) {
                        localStorage.removeItem('key_khach_hang');
                        localStorage.removeItem("name_kh");
                        localStorage.removeItem("email_kh");
                        localStorage.removeItem("check_kh");
                        this.$toast.success(res.data.message);
                        this.$router.push('/')
                    } else {
                        this.$toast.error(res.data.message)
                    }
                })
                .catch((res) => {
                    this.$toast.error('Đã xảy ra lỗi')
                })
        },
        startCountdown() {
            this.timerInterval = setInterval(() => {
                if (this.countdown > 0) {
                    this.countdown--;
                } else {
                    clearInterval(this.timerInterval);
                    // TODO: Xử lý khi hết giờ
                    this.$toast.error("Đơn hàng đã bị huỷ do quá thời gian.");
                    this.$router.push('/'); // hoặc chuyển hướng đi đâu đó
                }
            }, 1000);
        },
        formatTime(seconds) {
            const m = Math.floor(seconds / 60).toString().padStart(2, '0');
            const s = (seconds % 60).toString().padStart(2, '0');
            return `00:${m}:${s}`;
        },
    },
    beforeUnmount() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    }
}
</script>
<style></style>