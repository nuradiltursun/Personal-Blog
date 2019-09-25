
// 用来views里posts文件夹里posts.ejs文件

    // 用来处理时间
    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份 
            "d+": this.getDate(), //日 
            "h+": this.getHours(), //小时 
            "m+": this.getMinutes(), //分 
            "s+": this.getSeconds() //秒 
        };
        if (/(y+)/.test(fmt)) { //根据y的长度来截取年
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length ==
                1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
        return fmt;
    }
    // 调用： 
    //  var time1 = new Date(olddate.innerText).Format("yyyy-MM-dd");
    // //  console.log(time1);
    // newdate.innerHTML=time1;
    var olddate = document.querySelectorAll('.olddate');
    for (let i = 0; i < olddate.length; i++) {
        var time = new Date(document.querySelectorAll('.olddate')[i].innerText).Format("yyyy-MM-dd");
        
        document.querySelectorAll('.newdate')[i].innerHTML = time;
    }
   


