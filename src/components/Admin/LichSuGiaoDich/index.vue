<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h4>LỊCH SỬ GIAO DỊCH</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="text-center">
                                <tr>
                                    <th>#</th>
                                    <th>Họ Tên Khách Hàng</th>
                                    <th>Email Khách Hàng</th>
                                    <th>Thời Gian</th>
                                    <th>Trạng Thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(value,index) in list" :key="index">
                                    <tr class="align-middle">
                                        <th class="text-center">{{ index + 1 }}</th>
                                        <td>{{ value.hoten_kh }}</td>
                                        <td>{{ value.email }}</td>
                                        <td class="text-center">{{ formatdate(value.ngay_mua) }}</td>
                                        <td class="text-center">
                                            <button v-if="value.is_thanh_toan == 0" class="btn btn-primary w-100">Đã thanh toán</button>
                                            <button v-else class="btn btn-danger w-100">Chưa thanh toán</button>
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
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            list:[]
        }
    },
    mounted() {
        this.loadData()
    },
    methods: {
        formatVND(number){
            return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatdate(thoi_gian) {
            const date = new Date(thoi_gian);
            return date.toLocaleDateString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        },
        loadData(){
            axios
            .get('http://127.0.0.1:8000/api/admin/lich-su-giao-dich', {
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
                .then((res) => {
                    this.list = res.data.data;
                })
        }
    },
}
</script>
<style>
    
</style>