<template>
  <div>
    <h1 style="text-align: center">stepsDrag</h1>
    <el-tabs class='tabs_sort' v-model="activeName2" type="card" editable @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
  import Sortable from 'sortablejs'

  export default {
    name: 'StepsDrag',
    data() {
      return {
        activeName2: 'first'
      }
    },
    mounted() {
      this.bindDrag()
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      bindDrag() {
        let el = document.querySelectorAll('.tabs_sort .el-tabs__nav')[0]
        console.log(el)
        const _this = this
        Sortable.create(el, {
          onEnd: (evt) => {
            var itemEl = evt.item;  // dragged HTMLElement
            evt.to;    // target list
            evt.from;  // previous list
            evt.oldIndex;  // element's old index within old parent
            evt.newIndex;  // element's new index within new parent
            // debugger
          }
        })
      }
    }
  }

</script>

<style scoped>

</style>
