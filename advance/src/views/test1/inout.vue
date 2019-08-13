<template>
  <external>
    <iosPad v-if="ifIphone==1"></iosPad>
    <van-nav-bar
      title="测试"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <scroller>
      <van-button type="info" @click="upload">危险按钮</van-button>
      <div class="ref" ref="reftest"></div>


      <van-uploader accept="video/*">
        <van-button icon="photo" type="primary">上传图片</van-button>
      </van-uploader>

      <van-uploader :after-read="afterRead" />

      <a href="javascript:;" class="ui-upload">
        <input type="file" id="vdata" accept="video/*" v-on:change="uploadFile($event)"/>upload
      </a>

    </scroller>
  </external>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      vdata:'',
    };
  },
  watch:{
    vdata(nv,ov){
      console.log(nv,ov)
    }
  },
  computed:mapGetters(['ifIphone']),
  methods: {
    uploadFile(e){
      var cst=document.getElementById('vdata')
      var reader = new FileReader();    
      reader.readAsDataURL(cst.files[0]);
      reader.onloadend = function (e) {
                   // 图片base64
                   console.log(e.target.result);
                };  
      
    },
    afterRead(file){
      console.log(file)
    },
    upload(){
      var param = {  "show":1,"tools":[{ "name":"cx_image","info":{"camera":3}},{ "name":"cx_camera","info":{"camera":3}},{ "name":"cx_video","info":{"camera":3}}]    };
      jsBridge.postNotification('CLIENT_SELECT_OPTION_BAR',param);	
      jsBridge.bind('CLIENT_CHOOSE_IMAGE_RESULT',function(object){
        console.log(object)
      })
    },
    toAnima() {
      var _this=this;
      try {
        jsBridge.postNotification('CLIENT_CHOOSE_IMAGE',{'camare':'2'})
        jsBridge.bind('CLIENT_CHOOSE_IMAGE_RESULT', function(object){
          console.log(object)
        })
      } catch (error) {
        console.log(error)
      }
      
      return;
      this.$router.replace("/animaTo");
    },
    onClickLeft(){
      trang.exit()
    },
    onClickRight(){

    },
  }
};
</script>
<style scoped>
.ref{
  height:100px;
  width:100px;
  background-color:yellowgreen;
}
.ui-upload {
      font-size: 14px;
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      position: relative;
      cursor: pointer;
      color: #fff;
      background: #00abff;
      border-radius: 3px;
      overflow: hidden;
      display: inline-block;
      text-decoration: none;
    }
    
    .ui-upload input {
      position: absolute;
      font-size: 100px;
      right: 0;
      top: 0;
      opacity: 0;
      filter: alpha(opacity=0);
      cursor: pointer
    }
</style>


