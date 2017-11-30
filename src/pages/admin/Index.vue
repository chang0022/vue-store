<template>
  <div class="admin-new">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <ul class="nav flex-column">
                  <li class="nav-item"><router-link to="/admin" class="nav-link active">View Products</router-link></li>
                  <li class="nav-item"><router-link to="/admin/new" class="nav-link">New Products</router-link></li>
              </ul>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <router-view></router-view>
          </div>
        </div>
      </div>
  </div>
</template>
