<template>
	<div class="bg-white border-bottom">
		<nav class="navbar navbar-expand-xl container">
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#clientMainNav" aria-controls="clientMainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
			<div class="collapse navbar-collapse" id="clientMainNav">
				<ul class="navbar-nav me-auto mb-2 mb-xl-0 gap-1">
					<li class="nav-item">
						<router-link to="/" class="nav-link d-flex align-items-center">
							<i class='bx bx-home-circle me-2'></i>
							<span>Trang chủ</span>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/bai-viet" class="nav-link d-flex align-items-center">
							<i class="fa-solid fa-newspaper me-2"></i>
							<span>Bài viết</span>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/trac-nghiem" class="nav-link d-flex align-items-center">
							<i class="fa-solid fa-list-check me-2"></i>
							<span>Trắc nghiệm</span>
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/danh-sach-khoa-hoc" class="nav-link d-flex align-items-center">
							<i class="fa-solid fa-warehouse me-2"></i>
							<span>Khóa học của tôi</span>
						</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>