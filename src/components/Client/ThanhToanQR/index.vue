<template>
  <div v-if="isLoading">
    <a href="/loading"></a>
  </div>
  <div v-else>
    <div class="row text-center" v-if="hienThiQR">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <h4 class="mt-4 mb-0">Quét mã QR để thanh toán</h4>
            <p class="mt-2 mb-0">
              Mở app ngân hàng và quét mã QR. Đảm bảo nội dung chuyển khoản là
              <b>{{ noi_dung_chuyen_khoan }}</b
              >.
            </p>
            <img
              v-if="link_qr"
              :src="link_qr"
              alt="QR Thanh toán"
              class="img-fluid my-3"
            />
            <p>
              <b class="text-danger">Lưu ý</b>: Nếu đơn hàng của bạn không tự
              động kích hoạt sau 5 phút, vui lòng liên hệ để được hỗ trợ.
            </p>
          </div>
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
            id_khoa_hoc: this.$route.params.id_khoa_hoc,
            link_qr: "",
            noi_dung_chuyen_khoan: "",
            hienThiQR: false,
            isLoading: true,
        };
    },
    mounted() {
        this.muaKhoaHoc();
        setTimeout(() => {
            this.isLoading = false;
        }, 2000); // giả lập load
    },

// cachs 2
data() {
        return {
            list: [],
        };
    },
    mounted() {
        axios.get('/api/data').then(response => {
            this.list = response.data;
        });
    },
};



methods: {
    muaKhoaHoc() {
        axios
            .post(`http://127.0.0.1:8000/api/thanh-toan/${this.id_khoa_hoc}`, {}, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem("key_khach_hang")
                }
            })
            .then((res) => {
                const status = res.data.status;
                if (status === 1 || status === 2) {
                    this.$toast.success(res.data.message);
                    this.noi_dung_chuyen_khoan = res.data.noi_dung_chuyen_tien;
                    const so_tien = res.data.gia_ban;
                    this.link_qr = `https://img.vietqr.io/image/BIDV-5704726312-compact2.png?amount=${so_tien}&addInfo=${this.noi_dung_chuyen_khoan}&accountName=Khánh Huyền&style=4`;
                    this.hienThiQR = true;
                } else {
                    this.$toast.error(res.data.message);
                    this.hienThiQR = false;
                }
            });
    }; // ✅ đóng ngoặc function trước khi khai báo cái khác

    formatVND(number) {
    const locale = this.$i18n.locale === 'en' ? 'en-US' : 'vi-VN';
    const currency = this.$i18n.locale === 'en' ? 'USD' : 'VND';

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(number);
  }
}
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
