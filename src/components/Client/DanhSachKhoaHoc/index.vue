<template>
    <div class="wrapper">
        <div class="card">
            <div class="card-header mt-2">
                <h4>Danh Sách Khóa Học Đã Mua</h4>
            </div>
            <div class="card-body">
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
                            <template v-for="(value, index) in list" :key="index">
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
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            list: []
        }
    },
    mounted() {
        this.loadDanhSachKhoaHoc()
    },
    methods: {
        formatdate(thoi_gian) {
            const date = new Date(thoi_gian);
            return date.toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        },
        formatVND(number) {
        const locale = this.$i18n.locale === 'en' ? 'en-US' : 'vi-VN';
        const currency = this.$i18n.locale === 'en' ? 'USD' : 'VND';

        return new Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency,
        }).format(number);
        },
      //  loadDanhSachKhoaHoc() {
        //    axios
          //      .get("http://127.0.0.1:8000/api/loai-khoa-hoc/danh-sach-khoa-hoc", {
            //        headers: {
              //          Authorization: 'Bearer ' + localStorage.getItem("key_khach_hang")
                //    }
           //     })
            //    .then((res) => {
             //       this.list = res.data.data
              //  });
      //  }
        

      loadDanhSachKhoaHoc() {
            // Kiểm tra nếu có dữ liệu trong localStorage
            const cachedData = localStorage.getItem('danhSachKhoaHoc');
            if (cachedData) {
                this.list = JSON.parse(cachedData);
            } else {
                // Nếu không, gọi API để lấy dữ liệu
                axios
                    .get("http://127.0.0.1:8000/api/loai-khoa-hoc/danh-sach-khoa-hoc", {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem("key_khach_hang")
                        }
                    })
                    .then((res) => {
                        this.list = res.data.data;
                        // Lưu dữ liệu vào localStorage
                        localStorage.setItem('danhSachKhoaHoc', JSON.stringify(this.list));
                    });
            }
        }
    },
}
</script>
<style></style>