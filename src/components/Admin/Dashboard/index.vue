<template>
  <div class="container py-4">
    <!-- Row thống kê -->
    <div class="row g-4 mb-4">
      <!-- Bài học -->
      <div class="col-md-3">
        <div class="card rounded-4 shadow-lg border-0 bg-primary bg-gradient text-white h-100 transition hover-transform">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <p class="mb-1 text-white-50">Bài học</p>
              <h3 class="fw-bold">205</h3>
              <small>+2.5% so với tuần trước</small>
            </div>
            <i class="bx bxs-book fs-1"></i>
          </div>
        </div>
      </div>

      <!-- Lịch sử giao dịch -->
      <div class="col-md-3">
        <div class="card rounded-4 shadow-lg border-0 bg-danger bg-gradient text-white h-100 transition hover-transform">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <p class="mb-1 text-white-50">Lịch sử GD</p>
              <h3 class="fw-bold">25,245</h3>
              <small>+5.4% so với tuần trước</small>
            </div>
            <i class="bx bxs-wallet fs-1"></i>
          </div>
        </div>
      </div>

      <!-- Trắc nghiệm -->
      <div class="col-md-3">
        <div class="card rounded-4 shadow-lg border-0 bg-success bg-gradient text-white h-100 transition hover-transform">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <p class="mb-1 text-white-50">Trắc nghiệm</p>
              <h3 class="fw-bold">56.6%</h3>
              <small>-4.5% so với tuần trước</small>
            </div>
            <i class="bx bxs-bar-chart-alt-2 fs-1"></i>
          </div>
        </div>
      </div>

      <!-- Khách hàng -->
      <div class="col-md-3">
        <div class="card rounded-4 shadow-lg border-0 bg-warning bg-gradient text-white h-100 transition hover-transform">
          <div class="card-body d-flex justify-content-between align-items-center">
            <div>
              <p class="mb-1 text-dark">Khách hàng</p>
              <h3 class="fw-bold">8.4K</h3>
              <small class="text-dark">+8.4% so với tuần trước</small>
            </div>
            <i class="bx bxs-group fs-1"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Tổng quan -->
    <div class="card rounded-4 shadow-lg border-0">
      <div class="card-header bg-white border-0 d-flex justify-content-between align-items-center">
        <h4 class="fw-bold mb-0">Tổng Quan</h4>
        <div class="dropdown">
          <a class="btn btn-sm btn-outline-secondary dropdown-toggle" href="#" data-bs-toggle="dropdown">
            Lọc
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Theo tuần</a></li>
            <li><a class="dropdown-item" href="#">Theo tháng</a></li>
            <li><a class="dropdown-item" href="#">Theo năm</a></li>
          </ul>
        </div>
      </div>
      <div class="card-body">
        <!-- Progress items -->
        <div class="mb-3">
          <p class="mb-1"><i class="fa-solid fa-money-check-dollar"></i> Lịch sử GD <span class="float-end">50%</span></p>
          <div class="progress" style="height: 6px;">
            <div class="progress-bar bg-danger" style="width: 50%"></div>
          </div>
        </div>

        <div class="mb-3">
          <p class="mb-1"><i class="fa-solid fa-newspaper"></i> Bài viết <span class="float-end">65%</span></p>
          <div class="progress" style="height: 6px;">
            <div class="progress-bar bg-info" style="width: 65%"></div>
          </div>
        </div>

        <div class="mb-3">
          <p class="mb-1"><i class="fa-solid fa-person-chalkboard"></i> Bài học <span class="float-end">85%</span></p>
          <div class="progress" style="height: 6px;">
            <div class="progress-bar bg-primary" style="width: 85%"></div>
          </div>
        </div>

        <div class="mb-3">
          <p class="mb-1"><i class="fa-solid fa-circle-check"></i> Trắc nghiệm <span class="float-end">75%</span></p>
          <div class="progress" style="height: 6px;">
            <div class="progress-bar bg-success" style="width: 75%"></div>
          </div>
        </div>

        <div class="mb-3">
          <p class="mb-1"><i class="fa-solid fa-users-rectangle"></i> Khách hàng <span class="float-end">45%</span></p>
          <div class="progress" style="height: 6px;">
            <div class="progress-bar bg-warning" style="width: 45%"></div>
          </div>
        </div>

        <div>
          <p class="mb-1"><i class="fa-regular fa-clipboard"></i> Loại khóa học <span class="float-end">95%</span></p>
          <div class="progress" style="height: 6px;">
            <div class="progress-bar bg-dark" style="width: 95%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style>
.hover-transform:hover {
  transform: scale(1.03);
  transition: transform 0.2s ease-in-out;
}
</style>