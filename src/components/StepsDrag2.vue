<template>
  <div>
    <el-steps class="stepsList" :active="active" finish-status="success" align-center>
      <el-step v-for="item in list" :title="item.title" :description="item.description"></el-step>
      <!--<el-step title="步骤 2"></el-step>-->
      <!--<el-step title="步骤 3"></el-step>-->
    </el-steps>
  </div>
</template>

<script>
  import Sortable from 'sortablejs'

  export default {
    name: 'StepsDrag2',
    data() {
      return {
        active: 0,
        list: [
          {title: "注册", description: 'ajskdhkjashdkjasd'},
          {title: "登录", description: 'ewhrbkerbqewrewqrqwre'},
          {title: "发帖", description: 'xcovibjcovbjoicvb'}
        ]
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
        let el = document.querySelectorAll('.stepsList')[0]
        console.log(el)
        const _this = this
        Sortable.create(el, {
          onEnd: (evt) => {
            var itemEl = evt.item;  // dragged HTMLElement
            evt.to;    // target list
            evt.from;  // previous list
            evt.oldIndex;  // element's old index within old parent
            evt.newIndex;  // element's new index within new parent
            // const tempIndex = _this.list.splice(evt.oldIndex, 1)[0]
            // _this.list.splice(evt.newIndex, 0, tempIndex)
            debugger
          }
        })
      }
    },
  }
</script>

<style scoped>

</style>
