webpackJsonp([15],{DWFF:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{val:"",total:600,tableData:[{classificationCode:"ZZLC-SD",procedureClassification:"种植(水稻)...",activityName:"移栽前秧苗的管理作业",activityDetails:"秧苗叶龄已达到中苗标准,做好插秧前的...",date:"2022-03-20 14:30:00",procedureCode:"ZZLC-11-SD-37"},{classificationCode:"ZZLC-SD",procedureClassification:"种植(水稻)...",activityName:"移栽前秧苗的管理作业",activityDetails:"秧苗叶龄已达到中苗标准,做好插秧前的...",date:"2022-03-20 14:30:00",procedureCode:"ZZLC-11-SD-37"},{classificationCode:"ZZLC-SD",procedureClassification:"种植(水稻)...",activityName:"移栽前秧苗的管理作业",activityDetails:"秧苗叶龄已达到中苗标准,做好插秧前的...",date:"2022-03-20 14:30:00",procedureCode:"ZZLC-11-SD-37"},{classificationCode:"ZZLC-SD",procedureClassification:"种植(水稻)...",activityName:"移栽前秧苗的管理作业",activityDetails:"秧苗叶龄已达到中苗标准,做好插秧前的...",date:"2022-03-20 14:30:00",procedureCode:"ZZLC-11-SD-37"},{classificationCode:"ZZLC-SD",procedureClassification:"种植(水稻)...",activityName:"移栽前秧苗的管理作业",activityDetails:"秧苗叶龄已达到中苗标准,做好插秧前的...",date:"2022-03-20 14:30:00",procedureCode:"ZZLC-11-SD-37"},{classificationCode:"ZZLC-SD",procedureClassification:"种植(水稻)...",activityName:"移栽前秧苗的管理作业",activityDetails:"秧苗叶龄已达到中苗标准,做好插秧前的...",date:"2022-03-20 14:30:00",procedureCode:"ZZLC-11-SD-37"},{classificationCode:"ZZLC-SD",procedureClassification:"种植(水稻)...",activityName:"移栽前秧苗的管理作业",activityDetails:"秧苗叶龄已达到中苗标准,做好插秧前的...",date:"2022-03-20 14:30:00",procedureCode:"ZZLC-11-SD-37"},{classificationCode:"ZZLC-SD",procedureClassification:"种植(水稻)...",activityName:"移栽前秧苗的管理作业",activityDetails:"秧苗叶龄已达到中苗标准,做好插秧前的...",date:"2022-03-20 14:30:00",procedureCode:"ZZLC-11-SD-37"}],dialogVisible:!1,input:"",currentPage1:5,formInline:{user:"",region:""}}},methods:{handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},rowDel:function(t,e,i){var a=this;i.target.blur(),this.$confirm("确定要删除当前行吗？","删除",{comfirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){return a.tableData.splice(e.id,1),a.$message.success("删除成功"),!1})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex"},[i("div",[i("div",{staticClass:"title"},[i("span",{staticClass:"argActiveManage"},[t._v(" 农事活动管理 ")]),t._v(" "),i("div",{staticStyle:{display:"flex","align-items":"center"}},[i("div",[i("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入你需要搜索的指导"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),t._v(" "),i("el-button",{staticStyle:{"margin-left":"10px",height:"36px"}},[t._v("新建指导")])],1)]),t._v(" "),i("div",{staticStyle:{backgroud:"#fff",padding:"20px","border-radius":"10px",background:"#fff",overflow:"hidden"}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","default-sort":{prop:"date",order:"descending"}}},[i("el-table-column",{attrs:{prop:"classificationCode",label:"分类代码",sortable:"",width:"124"}}),t._v(" "),i("el-table-column",{attrs:{prop:"procedureClassification",label:"流程类别",sortable:"",width:"124"}}),t._v(" "),i("el-table-column",{attrs:{prop:"activityName",label:"活动名称",sortable:"",width:"184"}}),t._v(" "),i("el-table-column",{attrs:{prop:"activityDetails",label:"活动详情",sortable:"",width:"295"}}),t._v(" "),i("el-table-column",{attrs:{prop:"date",label:"创建时间",sortable:"",width:"184"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"129"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{center:"",type:"text",size:"small"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{center:"",type:"text",size:"small"},on:{click:function(i){return t.rowDel(e.$index,e.row,i)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{"current-page":t.currentPage1,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),t._v(" "),i("div",{staticClass:"editorRight"},[i("div",{attrs:{width:"432px"}},[i("span",{staticClass:"tqzb",staticStyle:{"font-weight":"400","font-size":"16px",color:"#777777"}},[t._v("提前准备")]),t._v(" "),i("div",{staticClass:"fg"}),t._v(" "),i("span",{staticClass:"gzMc",staticStyle:{"font-size":"24px","font-weight":"600",color:"#006cff","margin-right":"160px"}},[t._v("耕作 灭茬")]),t._v(" "),i("span",{staticClass:"id"},[t._v("ID")]),t._v(" "),i("span",{staticClass:"idNum"},[t._v("1782368768")]),t._v(" "),i("div",{staticClass:"fg"}),t._v(" "),i("div",{staticClass:"rypz inputV"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[i("el-form-item",{attrs:{label:"人员配置"}},[i("el-input",{staticClass:"inputTkcd",attrs:{placeholder:"操作机等地员"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1)],1)],1),t._v(" "),i("div",{staticClass:"njpz inputV"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[i("el-form-item",{attrs:{label:"农机配置"}},[i("el-select",{staticClass:"inputTkcd",attrs:{placeholder:"整地机"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[i("el-option",{attrs:{label:"整地机",value:"shanghai"}}),t._v(" "),i("el-option",{attrs:{label:"无",value:"beijing"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"cgq inputV"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[i("el-form-item",{attrs:{label:"传感器"}},[i("el-select",{staticClass:"inputTkcd inputCgq",attrs:{placeholder:"无"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[i("el-option",{attrs:{label:"无",value:"beijing"}}),t._v(" "),i("el-option",{attrs:{label:"传感器",value:"shanghai"}})],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"yjhs inputV"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[i("el-form-item",{attrs:{label:"预计耗时"}},[i("el-input",{staticClass:"inputTkcd",attrs:{placeholder:"10：00：00"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1)],1)],1),t._v(" "),i("div",{staticClass:"cbhf inputV"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[i("el-form-item",{attrs:{label:"成本花费"}},[i("el-input",{staticClass:"inputTkcd",attrs:{placeholder:"￥ 3000"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1)],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("保存活动")]),t._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("删除活动")])],1)])])])},staticRenderFns:[]};var s=i("VU/8")(a,l,!1,function(t){i("OwlW")},"data-v-57b4117e",null);e.default=s.exports},OwlW:function(t,e){}});
//# sourceMappingURL=15.f6f55d61dd683e5284d2.js.map