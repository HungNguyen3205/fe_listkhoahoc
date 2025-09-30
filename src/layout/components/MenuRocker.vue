<template>
	<div class="nav-container primary-menu">
		<div class="mobile-topbar-header">
			<div>
				<img src="../../assets/images/logo_cua_du_an.png" class="logo-icon" alt="logo icon">
			</div>
			<div>
				<h4 class="logo-text">Rukada</h4>
			</div>
			<div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
			</div>
		</div>
		<nav class="navbar navbar-expand-xl w-100">
			<ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
				
				<li class="nav-item dropdown">
					<a href="/admin/dash" class="nav-link">
						<div class="parent-icon"><i class="bx bx-home-circle"></i>
						</div>
						<div class="menu-title">Dashboard</div>
					</a>
				
				</li>

				<li class="nav-item">
					<router-link to="/admin/loai-khoa-hoc">
						<a class="nav-link" href="/admin/loai-khoa-hoc">
							<div class="parent-icon"><i class="fa-solid fa-bookmark"></i>
							</div>
							<div class="menu-title">Loại Khóa Học</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/bai-viet">
						<a class="nav-link" href="/admin/bai-viet">
							<div class="parent-icon"><i class="fa-solid fa-newspaper"></i>
							</div>
							<div class="menu-title">Bài Viết</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/khach-hang">
						<a class="nav-link" href="/admin/khach-hang">
							<div class="parent-icon"><i class="fa-solid fa-user-tie"></i>
							</div>
							<div class="menu-title">Khách Hàng</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/nhan-vien">
						<a class="nav-link" href="/admin/nhan-vien">
							<div class="parent-icon"><i class="fa-solid fa-user"></i>
							</div>
							<div class="menu-title">Nhân Viên</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/bai-hoc">
						<a class="nav-link" href="/admin/bai-hoc">
							<div class="parent-icon"><i class="fa-solid fa-book"></i>
							</div>
							<div class="menu-title">Bài Học</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/trac-nghiem">
						<a class="nav-link" href="/admin/trac-nghiem">
							<div class="parent-icon"><i class="fa-solid fa-file-export"></i>
							</div>
							<div class="menu-title">Trắc Nghiệm</div>
						</a>
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/admin/lich-su-giao-dich">
						<a class="nav-link" href="/admin/lich-su-giao-dich">
							<div class="parent-icon"><i class="fa-solid fa-clock-rotate-left"></i>
							</div>
							<div class="menu-title">Lịch Sử Giao Dịch</div>
						</a>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style scoped>
.sidebar {
  width: 240px;
  min-height: 100vh;
  background: #fff;
  border-right: 1px solid #eee;
}

.sidebar-header {
  border-bottom: 1px solid #eee;
}

.sidebar-menu .nav-link {
  padding: 12px 20px;
  color: #444;
  display: flex;
  align-items: center;
  font-weight: 500;
  transition: all 0.2s;
}

.sidebar-menu .nav-link:hover {
  background: #f1f5ff;
  color: #0d6efd;
}

.router-link-active {
  background: #e7f1ff;
  color: #0d6efd !important;
  font-weight: 600;
}
</style>