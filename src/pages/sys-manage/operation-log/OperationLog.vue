<template>
  <div id="operation-log">
    <div id="page-wrapper">
      <div id="page-inner">
        <div class="row operation-wrap">
          <div class="panel panel-primary no-border innerShadow2">
            <div class="panel-body">
              <div class="operation-top-wrap">
                <div class="col-md-3 operation-width3">
                  <div class="tableFliter">
                    <label class="operation-label">时间</label>
                    <el-date-picker
                      value-format="yyyy-MM-dd"
                      align="center"
                      v-model="value"
                      popper-class="date-pick"
                      type="daterange"
                      range-separator="——"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                    </el-date-picker>
                  </div>
                </div>

                <div class="col-md-4 operation-width4">
                  <div class="tableFliter">
                    <label class="operation-label">用户名</label>
                    <el-select popper-class="operation-input" v-model="userId" placeholder="全部">
                      <el-option value="">全部</el-option>
                      <el-option
                        v-for="(item,i) in userList"
                        :key="i"
                        :label="item.Name"
                        :value="item.User_Id"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="col-md-2 operation-width3">
                  <div class="ctrlBtnPanel" style="padding: 0; height: 44px">
                    <a class="darkBtnPrimary no-border operation-query-btn" style="cursor: pointer;margin-right: 20px;" @click="query">
                      <strong>查询</strong>
                    </a>
                    <a class="darkBtnPrimary no-border operation-query-btn" style="cursor: pointer;" @click="resetForm">
                      <strong>重置</strong>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 operation-width12" style="padding: 20px 0 0 0">
                <table class="table darkTable operation-table">
                  <thead>
                  <tr>
                    <th style="width: 25%">时间</th>
                    <td style="width: 25%">用户</td>
                    <td style="width: 50%">操作详情</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(item,i) in tableData" :key="i">
                    <td style="text-align: center">{{item.Insert_Time | transformDate}}</td>
                    <td>{{item.Name}}</td>
                    <td>{{item.Description}}</td>
                  </tr>
                  <!--<tr>-->
                    <!--<th>2018-09-13&nbsp;&nbsp;&nbsp;09&nbsp;:&nbsp;00&nbsp;:&nbsp;43</th>-->
                    <!--<td>18872672827</td>-->
                    <!--<td>开启服务器</td>-->
                  <!--</tr>-->
                  </tbody>
                </table>

                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10, 20, 30]"
                  :page-size="10"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="howMany">
                </el-pagination>

              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- /. PAGE INNER  -->
    </div>
  </div>
</template>

<script src="./OperationLog.js">

</script>

<style scoped lang="scss" src="./OperationLog.scss">

</style>
