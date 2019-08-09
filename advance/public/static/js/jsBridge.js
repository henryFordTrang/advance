((W, $, B) => {
    if (typeof W.trang != "undefined") {
        return;
    }

    function trang() {

    }
    /**
     * 打开条形码
     *
     * @param tips 打开条形码时的提示信息
     * @param callBack 条形码识别后的回调方法
     */
    trang.prototype.vithang = function (tips, callBack) {
        var cmd = "CLIENT_BARCODE_SCANNER";

        B.unbind(cmd);

        callBack && B.bind(cmd, callBack);

        B.postNotification(cmd, {
            manualInputTitle: tips || ""
        });
    }

    trang.prototype.tour = function () {
        var opt = {
            "type": 2, //1:个人小花，2：专题小花
            "petalInfo": {
                "count": {
                    "praiseCount": 190, //点赞量
                    "readCount": 23655, //阅读量
                    "subCount": 3100, //订阅量
                    "topicCount": 153 //评论量
                },
                "title": "xxx专题"
            }
        };
        B.postNotification('CLIENT_SHOW_PETAL', opt);
    }

    trang.prototype.imgObs = function () {
        var op = {
            "showIndex": 0,
            "imageUrls": [{
                "imageUrl": "http://p.ananas.chaoxing.com/star3/origin/56f22bd4e4b0578413c5d02e.jpg?rw=640&rh=182"
            }]
        };
        B.postNotification('CLIENT_PREVIEW_IMAGES', op);
    }
    try{
        B.bind('CLIENT_BARCODE_SCANNER', function(object){
            alert("msg="+object.message);
        });  
    }catch(e){}

    trang.prototype.scan=function(){
        B.postNotification('CLIENT_BARCODE_SCANNER', {}) ;
    }

    trang.prototype.noNavi=function(option){
        var cmd = "CLIENT_TOOLBAR_TYPE";
        B.postNotification(cmd, option);
    }

    trang.prototype.aliPay=function(){
        var url='alipays://platformapi/startapp?saId=10000007&clientVersion=3.7.0.0718&qrcode=';
        var subUrl=encodeURIComponent(location.href);
        url+=subUrl;

        return url;
        //window.location.href='https://sj.qq.com/myapp/detail.htm?apkName=com.eg.android.AlipayGphone';
    }

    trang.prototype.innerOpen=function(url){
        jsBridge.postNotification("CLIENT_OPEN_URL", {
            title: "",
            loadType: "2",
            webUrl: url,
            toolbarType: "2"
          });
    }

    W["trang"] = new trang();
})(window, jQuery, jsBridge)