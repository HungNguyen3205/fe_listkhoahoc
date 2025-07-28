<template >
    <div class="comtainer">
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
            <div class="col">
                <div class="card radius-10 border-start border-0 border-3 border-info">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div>
                                <p class="mb-0 text-secondary">Bài học</p>
                                <h4 class="my-1 text-info">205</h4>
                                <p class="mb-0 font-13">+2.5% so với tuần trước</p>
                            </div>
                            <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto"><i
                                    class="bx bxs-cart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card radius-10 border-start border-0 border-3 border-danger">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div>
                                <p class="mb-0 text-secondary">Lịch sử giao dịch</p>
                                <h4 class="my-1 text-danger">25,245</h4>
                                <p class="mb-0 font-13">+5.4% so với tuần trước</p>
                            </div>
                            <div class="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto"><i
                                    class="bx bxs-wallet"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card radius-10 border-start border-0 border-3 border-success">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div>
                                <p class="mb-0 text-secondary">Trắc nghiệm</p>
                                <h4 class="my-1 text-success">56.6%</h4>
                                <p class="mb-0 font-13">-4.5% so với tuần trước</p>
                            </div>
                            <div class="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto"><i
                                    class="bx bxs-bar-chart-alt-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card radius-10 border-start border-0 border-3 border-warning">
                    <div class="card-body">
                        <div class="d-flex align-items-center">
                            <div>
                                <p class="mb-0 text-secondary">Khách hàng</p>
                                <h4 class="my-1 text-warning">8.4K</h4>
                                <p class="mb-0 font-13">+8.4% so với tuần trước</p>
                            </div>
                            <div class="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i
                                    class="bx bxs-group"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div class="row">
            <div class="card radius-10">
						<div class="card-header bg-transparent">
							<div class="d-flex align-items-center">
								<div >
									<h3 class="mb-0">Tổng Quan </h3>
								</div>
								<div class="dropdown ms-auto">
									<a class="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i class="bx bx-dots-horizontal-rounded font-22 text-option"></i>
									</a>
									<ul class="dropdown-menu">
										<li><a class="dropdown-item" href="javascript:;">Theo tuần</a>
										</li>
										<li><a class="dropdown-item" href="javascript:;">Theo tháng</a>
										</li>
                                        <li><a class="dropdown-item" href="javascript:;">Theo Năm</a>
										</li>
										
									</ul>
								</div>
							</div>
						   </div>
						 <div class="card-body">
								<div id="dashboard-map" style="height: 250px"></div>
								<hr>
								<div class="mb-4">
                                    <p class="mb-2"><i class="fa-solid fa-money-check-dollar"></i> Lịch sử giao dịch <span class="float-end">50%</span></p>
									<div class="progress" style="height: 5px;">
										<div class="progress-bar bg-gradient-bloody" role="progressbar" style="width: 50%"></div>
									</div>
								</div>
								
								<div class="mb-4">
								 <p class="mb-2"><i class="fa-solid fa-newspaper"></i> Bài viết <span class="float-end">65%</span></p>
								 <div class="progress" style="height: 5px;">
									 <div class="progress-bar bg-gradient-scooter" role="progressbar" style="width: 65%"></div>
								 </div>
								</div>
		   
								<div class="mb-4">
								 <p class="mb-2"><i class="fa-solid fa-person-chalkboard"></i> Bài học <span class="float-end">85%</span></p>
								 <div class="progress" style="height: 5px;">
									 <div class="progress-bar bg-gradient-blooker" role="progressbar" style="width: 85%"></div>
								   </div>
								</div>
		   
								<div class="mb-4">
								 <p class="mb-2"><i class="fa-solid fa-circle-check"></i>Trắc nghiệm <span class="float-end">75%</span></p>
								 <div class="progress" style="height: 5px;">
									 <div class="progress-bar bg-gradient-quepal" role="progressbar" style="width: 75%"></div>
								   </div>
								</div>

								<div class="mb-4">
								  <p class="mb-2"><i class="fa-solid fa-users-rectangle"></i> Khách hàng <span class="float-end">45%</span></p>
								  <div class="progress" style="height: 5px;">
									 <div class="progress-bar bg-gradient-cosmic" role="progressbar" style="width: 55%"></div>
								  </div>
								</div>

                                <div class="mb-0">
								  <p class="mb-2"><i class="fa-regular fa-clipboard"></i> Loại khóa học <span class="float-end">5%</span></p>
								  <div class="progress" style="height: 5px;">
									 <div class="progress-bar bg-gradient-bloody" role="progressbar" style="width: 95%"></div>
								  </div>
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
<style></style>