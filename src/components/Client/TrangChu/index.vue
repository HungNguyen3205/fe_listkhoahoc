<template>
    <div class="wrapper">
        <div id="carouselExampleDark" class="carousel carousel-dark slide position-relative">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="../../../assets/images/banner/4.png" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="../../../assets/images/banner/5.png" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../../assets/images/banner/6.png" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon rounded-circle bg-dark"
                    style="height: 50px; width: 50px; background-size: 60% 60%;" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                data-bs-slide="next">
                <span class="carousel-control-next-icon rounded-circle bg-dark"
                    style="height: 50px; width: 50px; background-size: 60% 60%;" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="container py-3">
            <div class="row mt-3">
                <div class="col-lg-12">
                    <div class="alert alert-warning border-0 rounded-3 shadow-sm" role="alert">
                        <marquee behavior="" direction="">Với niềm đam mê với lâp trình và mong muốn trở thành một
                            <b> Developer</b>
                            tài giỏi. Chúng tôi sẽ giúp các bạn
                            thực hiện ước mơ đó thành sự thật một cách dễ dàng với những khóa học chất lượng được xem
                            xét kĩ
                            lưỡng. Chúng tôi mong rằng sẽ gặp bạn
                            trên đấu trường công nghệ với tư cách là một <b> Developer</b> thực thụ !!!
                        </marquee>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <h2 class="text-center mt-3 fw-bold">Khóa học PRO <i class="fa-solid fa-star text-warning"></i></h2>
                <template v-for="(value, index) in courses.filter(item => item.loai === 1)" :key="index">
                    <div class="col-lg-3 d-flex mt-3">
                        <div class="card w-100 h-100 border-0 shadow-sm hover-shadow rounded-3">
                            <img v-bind:src="value.hinh_anh" class="card-img-top" alt="..." style="height: 200px; object-fit: cover;">
                            <div class="card-body d-flex flex-column">
                                <h4 class="card-title text-truncate">{{ value.ten_khoa_hoc }}</h4>
                                <div class="clearfix mt-auto">
                                    <p class="mb-0 float-start"><span
                                            class="me-2 text-decoration-line-through text-secondary">{{
                                                formatVND(value.gia_goc) }}</span><b class="text-danger">{{
                                                formatVND(value.gia_ban)
                                            }}</b>
                                    </p>
                                </div>
                                <div class=" d-flex justify-content-between mt-2 text-muted small">
                                    <p class="mb-0"><img src="/src/assets/images/avatars/avatar-1.png"
                                            style="height: 25px;border-radius: 50%;" alt=""> {{ value.giao_vien }}</p>
                                    <p class="mb-0"><i class="fa-solid fa-book-open me-1"></i>20 bài</p>
                                </div>
                            </div>
                            <div class="text-center mb-3">
                                <router-link :to="`/chi-tiet-khoa-hoc/` + value.id + '-' + value.slug_khoa_hoc"
                                    class="btn btn-outline-warning text-nowrap rounded-pill px-4">Xem chi tiết</router-link>
                            </div>
                        </div>
                    </div>
                </template>
                <span v-if="is_xem_them == 1">

                </span>
                <span v-else class="text-center">
                    <button v-on:click="is_xem_them = 1" class="btn btn-outline-warning w-50 rounded-pill px-4 mb-3">Xem
                        thêm</button>

                </span>
            </div>
            <div class="row mt-4 ">
                <h2 class="text-center mb-3 fw-bold">Khóa học Miễn Phí</h2>
                <div class="col-lg-12">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 product-grid">
                        <template v-for="(value, index) in courses.filter(item => item.loai === 0)" :key="index">
                            <div class="col d-flex">
                                <router-link :to="`/chi-tiet-khoa-hoc/` + value.id + '-' + value.slug_khoa_hoc" class="card w-100 border-0 shadow-sm rounded-3 text-decoration-none text-dark">
                                    <img v-bind:src="value.hinh_anh" style="height: 200px; object-fit: cover;" alt="">
                                    <div class="card-body">
                                        <h4 class="text-truncate">{{ value.ten_khoa_hoc }}</h4>
                                        <b v-if="value.gia_ban == 0" class="text-danger">Miễn phí</b>
                                        <div class=" d-flex justify-content-between text-muted small">
                                            <p class="mt-3 mb-0 text-dark"><img src="/src/assets/images/avatars/avatar-1.png"
                                                    style="height: 25px;border-radius: 50%;" alt=""> {{
                                                        value.giao_vien
                                                    }}
                                            </p>
                                            <div>
                                                <p class="mt-3 mb-0 text-dark"><i class="fa-solid fa-book-open me-1"></i>12
                                                    bài
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>

                        </template>
                    </div>
                </div>
                <span v-if="is_xem_them == 2"></span>

                <span v-else class="text-center">
                    <button v-on:click="is_xem_them = 2" class="btn btn-outline-warning w-50 rounded-pill px-4 mb-3">Xem
                        thêm</button>
                </span>
            </div>
            <div class="card mt-4 border-0 shadow-sm rounded-3">
                <div class=" mt-3">
                    <div class=" text-center mt-3">
                        <h4 class="fw-bold"> Tại sao chọn chúng tôi</h4>
                    </div>
                    <div class="container">
                        <div class="row mb-4 mt-5">
                            <div class="col-lg-3 text-center ">
                                <i class="fa-solid fa-ranking-star fa-4x text-warning"></i>
                                <p class="text-center mt-2">Cam kết học phí hợp lý với chính sách hoàn tiền nếu tìm thấy
                                    khóa học
                                    tương đương có giá thấp hơn</p>
                            </div>
                            <div class="col-lg-3 text-center ">
                                <i class="fa-solid fa-money-check-dollar fa-4x text-success"></i>
                                <p class="text-center mt-2">Thanh toán an toàn tuyệt đối, bảo mật theo tiêu chuẩn quốc
                                    tế</p>
                            </div>
                            <div class="col-lg-3 text-center ">
                                <i class="fa-solid fa-comment-medical fa-4x text-primary"></i>
                                <p class="text-center mt-2">Hỗ trợ học viên 24/7 bởi đội ngũ tư vấn nhiệt tình và chuyên
                                    môn cao</p>
                            </div>
                            <div class="col-lg-3 text-center  ">
                                <i class="fa-solid fa-star fa-4x text-warning"></i>
                                <p class="text-center mt-2">Hơn 100,000 học viên tin tưởng, với đánh giá thực từ người
                                    học trên toàn
                                    quốc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <h2 class="text-center mt-3 mb-3 fw-bold">Đánh giá từ học viên</h2>
                <template v-for="(value, index) in user" :key="index">
                    <div class="col-lg-4">
                        <div class="card border-0 shadow-sm rounded-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <img src="/src//assets/images/avatars/avatar-10.png" alt=""
                                            class="rounded-circle p-1 me-2" style="width: 70px; height: 70px;">
                                    </div>
                                    <div class="col-lg-9">
                                        <div>
                                            <p class="mb-0">{{ value.name }}</p>
                                            <span><small><i v-for="i in 5" :key="i" :class="getStarIcon(value.rate, i)"
                                                        style="font-size: 15px; color: gold;"></i></small></span>
                                        </div>
                                    </div>
                                </div>
                                <p class="card-text" style="width: 100%; height: 40px;">{{ value.article }}</p><br>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            is_xem_them: 0,
            courses: [],
            your_course: [],
            user: [],
            pro: {},
        }
    },
    mounted() {
        this.getDataCourse();
    },
    methods: {
        getStarIcon(rate, index) {
            const rounded = Math.round(rate * 2) / 2; // làm tròn về 0.5

            if (rounded >= index) {
                return 'fa-solid fa-star'; // sao đầy
            } else if (rounded + 0.5 === index) {
                return 'fa-regular fa-star-half-stroke'; // sao nửa
            } else {
                return 'fa-regular fa-star'; // sao rỗng
            }
        },
        formatVND(number) {
            return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number,)
        },
        getDataCourse() {
            axios
                .get("http://127.0.0.1:8000/api/home-page/loai-khoa-hoc/data-open")
                .then((res) => {
                    this.courses = res.data.data;
                })
                .catch((res) => {
                    console.log(res);
                })
        },
    },

}
</script>
<style></style>