<template>
  <div class="d-flex admin-layout">
    <!-- Sidebar -->
    <div class="sidebar bg-white shadow-sm">
      <div class="sidebar-header d-flex align-items-center p-3">
        <img src="../../assets/images/logo_cua_du_an.png" class="logo-icon me-2" alt="logo" />
        <h4 class="logo-text mb-0">Ney</h4>
      </div>

      <ul class="nav flex-column sidebar-menu">
        <li class="nav-item">
          <router-link to="/admin/dash" class="nav-link">
            <i class="bx bx-home-circle me-2"></i> Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/loai-khoa-hoc" class="nav-link">
            <i class="fa-solid fa-bookmark me-2"></i> Loại Khóa Học
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/bai-viet" class="nav-link">
            <i class="fa-solid fa-newspaper me-2"></i> Bài Viết
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/khach-hang" class="nav-link">
            <i class="fa-solid fa-user-tie me-2"></i> Khách Hàng
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/nhan-vien" class="nav-link">
            <i class="fa-solid fa-user me-2"></i> Nhân Viên
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/bai-hoc" class="nav-link">
            <i class="fa-solid fa-book me-2"></i> Bài Học
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/trac-nghiem" class="nav-link">
            <i class="fa-solid fa-file-export me-2"></i> Trắc Nghiệm
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/lich-su-giao-dich" class="nav-link">
            <i class="fa-solid fa-clock-rotate-left me-2"></i> Lịch Sử Giao Dịch
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="admin-content flex-grow-1 p-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.admin-layout {
  min-height: 100vh;
}

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

.admin-content {
  flex: 1;
  background: #f8f9fa;
  overflow: auto;
}
</style>
