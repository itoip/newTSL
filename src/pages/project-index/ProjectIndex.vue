<template>
  <div id="project-index">

    <!-- element -->
    <div id="left-side" class="innerShadow">
      <div style="height: 30px; padding: 12px 15px; width: 170px;">
        <img src="../../assets/img/terminus_logo.png" style="height: 24px;">
      </div>

      <el-row class="tac custom-element-nav" >
        <el-col :span="12">
          <router-link to="/index"><a class="active-menu" id="pro-index"><i class="el-icon-info"></i>首页</a>
          </router-link>
          <el-menu
            unique-opened
            :default-openeds="defaultOpeneds"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#191a2d"
            text-color="#fff"
            active-text-color="#fff"
          >
            <el-submenu popper-class="submenus" :index="item.Project_Code" v-for="(item, index) in projectList" :key="index">
              <template slot="title">
                <router-link :to="'/project-index/' + item.Project_Code" tag="span"><span class="project-title">{{item.Project_Name}}</span></router-link>
              </template>
              <el-menu-item-group>
                <el-submenu :index="item.Project_Code + '-1'">
                  <template slot="title">实时监控</template>
                  <el-submenu :index="item.Project_Code + '-1-1'">
                    <template slot="title">服务器</template>
                    <router-link :to="'/project-index/' + item.Project_Code + '/server/' + serverItem.Server_Code" v-for="(serverItem, serverIndex) in item.serverList" :key="serverIndex">
                      <el-menu-item :index="item.Project_Code + '-1-1-1'">{{serverItem.Name}}</el-menu-item>
                    </router-link>
                    <!--<router-link :to="'/project-index/' + item.Project_Code +'/tendency'">-->
                      <!--<el-menu-item :index="item.Project_Code + '-1-1-2'">走势图</el-menu-item>-->
                    <!--</router-link>-->

                  </el-submenu>
                  <router-link :to="'/project-index/' + item.Project_Code + '/application'">
                    <el-menu-item :index="item.Project_Code + '-1-2'">应用服务</el-menu-item>
                  </router-link>

                  <el-submenu :index="item.Project_Code + '-1-3'">
                    <template slot="title">数据库</template>
                    <router-link :to="'/project-index/' + item.Project_Code + '/database/' + dataBaseItem.DB_Code" v-for="(dataBaseItem, dataBaseIndex) in item.databaseList" :key="dataBaseIndex">
                      <el-menu-item :index="item.Project_Code + '-1-3-1'">{{dataBaseItem.DB_Name}}</el-menu-item>
                    </router-link>
                  </el-submenu>

                  <!--<router-link :to="'/project-index/'+ item.Project_Code +'/database'  ">-->
                    <!--<el-menu-item :index="item.Project_Code + '-1-5'">数据库</el-menu-item>-->
                  <!--</router-link>-->
                  <router-link :to="'/project-index/' + item.Project_Code +'/smartdevice'  ">
                    <el-menu-item :index="item.Project_Code + '-1-4'">智能设备</el-menu-item>
                  </router-link>

                </el-submenu>
                <el-submenu :index="item.Project_Code + '-2'">
                  <template slot="title">预警管理</template>
                  <router-link :to="'/project-index/' + item.Project_Code + '/warningevent/'  ">
                    <el-menu-item :index="item.Project_Code + '-2-1'">预警事件</el-menu-item>
                  </router-link>
                  <router-link :to="'/project-index/' + item.Project_Code + '/warninglog/' ">
                    <el-menu-item :index="item.Project_Code + '-2-2'">预警日志</el-menu-item>
                  </router-link>
                </el-submenu>
                <el-submenu :index="item.Project_Code + '-3'">
                  <template slot="title">服务日志</template>
                  <router-link :to="'/project-index/' + item.Project_Code + '/errorlog/' ">
                    <el-menu-item :index="item.Project_Code + '-3-1'">错误日志</el-menu-item>
                  </router-link>
                  <router-link :to="'/project-index/' + item.Project_Code + '/slowlog/' ">
                    <el-menu-item :index="item.Project_Code + '-3-2'">慢日志</el-menu-item>
                  </router-link>
                </el-submenu>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>

    <div id="right-side" v-if="projectList.length > 0">
      <v-head></v-head>
      <router-view></router-view>
    </div>

  </div>
</template>

<script src="./ProjectIndex.js">

</script>

<style scoped lang="scss" src="./ProjectIndex.scss">

</style>
