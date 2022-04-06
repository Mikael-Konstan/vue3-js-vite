<template>
  <div class="dashboard">
    <h1>build</h1>
    <div>
      <el-input
        v-model="rootPath"
        placeholder="Please input root path"
        clearable
        size="mini"
        style="width: 240px"
      >
      </el-input>
      <el-button
        type="primary"
        style="margin-left: 10px"
        @click="confirm()"
        size="mini"
        >Update Root Path</el-button
      >
      <el-button
        type="primary"
        style="margin-left: 10px"
        @click="build()"
        size="mini"
        >Build</el-button
      >
      <p style="min-height: 18px; margin-left: 30%; text-align: left">
        Root Path: {{ rootPathCur }}
      </p>
    </div>
    <el-tree
      :data="treeData"
      :props="defaultProps"
      show-checkbox
      ref="tree"
    ></el-tree>
  </div>
</template>
<script>
export default {
  name: "dashboard",
  data() {
    return {
      rootPath: "D:/work/20220331_test/asset/erp",
      rootPathCur: "",
      treeData: [],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  mounted() {
    console.log(window.electronAPI);
  },
  methods: {
    async confirm() {
      // console.log(rootPath.value);
      this.rootPathCur = this.rootPath;
      const filePath = await window.electronAPI.getDirectory(this.rootPathCur);
      //   console.log(filePath);
      let arr = [];
      this.getTreeData(filePath, arr);
      this.treeData = arr;
      // console.log(this.treeData);
    },
    build() {
      console.log("renderer process", "title");
      const checkedNodes = this.$refs.tree.getCheckedNodes();
      //   const checkedKeys = this.$refs.tree.getCheckedKeys();
      //   const PathList = toRaw(checkedNodes);
      const PathList = JSON.parse(JSON.stringify(checkedNodes));
      //   console.log(PathList);
      window.electronAPI.buildPath(PathList);
    },
    getTreeData(obj, arr) {
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] !== "string") {
          let item = {
            label: key,
            rootPath: obj.rootPath,
            children: [],
          };
          arr.push(item);
          this.getTreeData(obj[key], item.children);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  text-align: left;
}
</style>