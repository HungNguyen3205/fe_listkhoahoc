<template>

	<div class="topbar d-flex align-items-center">
		<nav class="navbar navbar-expand">
			<div class="topbar-logo-header d-flex align-items-center">
					<img src="../../assets/images/logo_cua_du_an.png" class="logo-icon"
						style="width: 50px; height: 50px;" alt="logo icon">
					<h4 class="mt-3 ms-2">Ney</h4>
				</div>
			<div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
			<div class="search-bar flex-grow-1">
				<div class="position-relative search-bar-box input-group w-100">
					<input type="text" class="form-control search-control border border-1 border-secondary radius-30"
						placeholder="Search..."> <span
						class="position-absolute top-50 search-show translate-middle-y"><i
							class='bx bx-search'></i></span>
					<span class="position-absolute top-50 search-close translate-middle-y"><i
							class='bx bx-x'></i></span>
					<button class="btn btn-outline-secondary radius-30" type="button" id="button-addon2">Tìm
						Kiếm</button>
				</div>
			</div>
		
			<div class="user-box dropdown">
				<a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
					role="button" data-bs-toggle="dropdown" aria-expanded="false">
					<img src="../../assets/images/logo_cua_du_an.png" class="user-img" alt="user avatar">
					<div class="user-info ps-3">
						<p class="user-name mb-0">Ney</p>
						<p class="designattion mb-0">Admin</p>
					</div>
				</a>
			
			</div>
		</nav>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	data() {
		return {
			admin: {}
		}
	},
	methods: {
		logout(){
			axios
			.get('http://localhost:8000/api/admin/logout', {
                    headers : {
                        Authorization: 'Bearer ' + localStorage.getItem("key_admin")
                    }
                })
				.then((res)=>{
					if(res.data.status){
						localStorage.removeItem('key_admin');
						this.$toast.success(res.data.message);
						this.$router.push('/admin/dang-nhap')
					}else{
						this.$toast.error('Có lỗi xảy ra')
					}
				})
		}
	},
}
</script>
<style></style>