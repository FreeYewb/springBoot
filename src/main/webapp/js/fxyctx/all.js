 var result=[
  {
    "index": "1555评论的数据",
    "commentList": [
      {
        "img":"../../images/fxyctx/1.jpg",
        "text":"很不错的平台,下分没有任何要求",
        "passTime":"5分钟前",
        "num":"9562",
        "name":"平安一生"
      },
      {
        "img":"../../images/fxyctx/2.jpg",
        "text":"投注号码无限制,9码都能投确实很牛逼！刷水就够了",
        "passTime":"10分钟前",
        "num":"5621",
        "name":"幸福美满"
      },
      {
        "img":"../../images/fxyctx/3.jpg",
        "text":"红包太给力了,抢不停！支持你们",
        "passTime":"20分钟前",
        "num":"3215",
        "name":"成都奔驰姐"

      },
      {
        "img":"../../images/fxyctx/4.jpg",
        "text":"准不准我不管，我都自己玩就冲着你们诚信，我认准你们",
        "passTime":"30分钟前",
        "num":"2521",
        "name":"大王叫我来巡山"
      },
      {
        "img":"../../images/fxyctx/5.jpg",
        "text":"小强8码计划简直出神入化",
        "passTime":"1小时前",
        "num":"1239",
        "name":"木木"
      },
      {
        "img":"../../images/fxyctx/6.jpg",
        "text":"陈小亮老师推荐的很不错",
        "passTime":"2小时前",
        "num":"998",
        "name":"知足常乐"
      },
      {
        "img":"../../images/fxyctx/7.jpg",
        "text":"哈哈哈,上期参考公众号里面的号码买中了",
        "passTime":"3小时前",
        "num":"850",
        "name":"天涯回首"
      }
    ]
  },
  {
    "index": "1福彩3D的数据",
    "historyZj3":"85%",
    "wxText":"添加获取"
  },
  {
    "index": "3双色球杀号数据，历史命中率，正确率",
    "dataListRed":[
      "03","07","08","13","20","23","24","28","28","32"

    ],
    "dataListBlue":[
      "03","02","07","09","10"

    ],
    "historyZjS":"86%",
    "accuracy":"097"
  },
  {
    "index": "4大乐透杀号数据，历史命中率,正确率",
    "dataListRed":[
      "01","07","10","12","15","17","28","25","26","29"

    ],
    "dataListBlue":[
      "01","03","06","09","12"

    ],
    "historyZjD":"89%",
    "accuracy":"094"
  }

]






$(function () {
        initPage()
       
        innerPageContainer = new Vue({
            el: "#app",
            data: {
                commentList: [],
                listNext: [],
                fcsdItem: [],
                fcsdItemOne: '',
                dataListSSQ:{
                    "dataOpen":"",
                    "computingProbability":"",
                    "dataOpenO":[],
                    "dataOpenB":[],
                    "redNewData":[],
                    "blueNewData":[],
                },
                dataListDLT:{
                    "dataOpen":"",
                    "computingProbability":"",
                    "dataOpenO":[],
                    "dataOpenB":[],
                    "redNewData":[],
                    "blueNewData":[],
                },
                historyZj: '',
                historyZjD: '',
                historyZjS:'',
                historyZj3: '',
                 wxText:'',
                historyZjHead: "",
                accuracy: '',
                accuracyD: '',
                // dataListRed:[11,06,07,13,16,22,23,30,27,34],
                // dataListBlue:[01,06,07,09,12],
                // dataListRedD:[02,04,07,43,16,22,23,30,27,34],
                // dataListBlueD:[02,06,05,09,12],
                dataListRed:'',
                dataListBlue:'',
                dataListRedD:'',
                dataListBlueD:'',
                qishuSsq: '',
                qishuDlt: ''
            },
        })
   initJson()

    })

    //福彩3D
    function initPage() {
        var url = "/lottery/fcsd/get_history?limit=3";
        var method = 'GET';
        var shareData = ""
        successCallBack = function (response) {

            if (response.meta.code == 5003) {
                alert("服务器升级中，请稍后重试")

            }

            console.log(response, 2222222222222)

            console.log(response.response.list, 2222222222222)


            console.log(filterNoCheck(response.response.list), '0787676')


            innerPageContainer.fcsdItem = filterNoCheck(response.response.list);
            var fcsdItemOne = response.response.list[0].lottery_no;

            // var aaa = parseInt(fcsdItemOnes) + 1
            innerPageContainer.fcsdItemOne = fcsdItemOne
            console.log(innerPageContainer.fcsdItem, 'ioooo');

        }
        doHttpAjax(url, method, shareData, successCallBack);
    }


    function filterNoCheck(data) {
        for (var i = 0; i < data.length; i++) {
            var items = data[i]
            var twoData = getRandomArrayElements(items.lottery_res, 2);
            console.log(twoData)
            if (i == 0) {
                data[i].sccondData = twoData.sort();
            } else if (i == 1) {
                data[i].sccondData = array_diff(twoData).sort();
            } else if (i == 2) {
                data[i].sccondData = twoData.sort();
            }else if (i == 3) {
                data[i].sccondData = twoData.sort();
            }

        }
        return data;


    }
    function getRandomArrayElements(arr, count) {
        console.log(arr)
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }
    function returnTwoData(arr, twoData) {
        var flag = false;
        for (var i = 0; i < twoData.length; i++) {
            if (arr == twoData[i]) {
                flag = true;
            }
        }
        return flag;

    }
    function array_diff(twoData) {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var newData = new Array();
        var datanew = new Array();
        for (var i = 0; i < arr.length; i++) {
            var tt = returnTwoData(arr[i], twoData)
            if (tt) {
            } else {
                newData.push(arr[i])
            }
        }
        var t = getRandomArrayElements(newData, 1).join();
        datanew.push(t)
        var g = getRandomArrayElements(twoData, 1).join();
        datanew.push(g)
        return datanew;
    }
    function filterInitJson(data) {
        var newJson = new Array();
        for (var i = 0; i < data.length; i++) {
            console.log(data[i])
            var ele = data[i].split(',');
            newJson.push(ele)
        }
        return newJson
    }

    function initJson() {
        console.log(123456789)
      
       innerPageContainer.commentList = result[0].commentList
                innerPageContainer.listNext = result[1].listNext;
                innerPageContainer.dataListRed=result[2].dataListRed
                innerPageContainer.dataListBlue=result[2].dataListBlue
                innerPageContainer.dataListRedD=result[3].dataListRed
                innerPageContainer.dataListBlueD=result[3].dataListBlue
                innerPageContainer.historyZj = result[2].historyZj;
                innerPageContainer.accuracy = result[2].accuracy;
                innerPageContainer.historyZjD = result[3].historyZjD;
                innerPageContainer.historyZjS = result[2].historyZjS;
                innerPageContainer.accuracyD = result[3].accuracy;

                innerPageContainer.historyZjHead = result[2].historyZjHead
                innerPageContainer.historyZj3 = result[1].historyZj3
                innerPageContainer.wxText = result[1].wxText


                console.log(innerPageContainer.historyZj3, 'historyZj3')


               
                initGetresults()
      
    }


    //双色球
    function initGetresults() {
        var url = "/lottery/get_results";
        var method = 'GET';

        successCallBack = function (response) {
            console.log(response,123)
            if (response.meta.code == 5003) {
                alert("服务器升级中，请稍后重试")

            }
            var Tdata=response.response.list;
            for(var i=0;i<Tdata.length;i++){
                if(Tdata[i].lottery_id=='ssq'){
                    ssqFn(Tdata[i]);
                }else if(Tdata[i].lottery_id=='dlt'){
                    dltFn(Tdata[i])
                }
            }
            console.log(response.response, 'shuang')

        };
        doHttpAjax(url, method, "", successCallBack);

    }
    function ssqFn(data){
        var dataOpen=data.lottery_res;
        innerPageContainer.dataListSSQ.dataOpen=data;
        var dataOpenO=dataOpen.slice(0,9);//获取中奖前五个
        innerPageContainer.dataListSSQ.dataOpenO=dataOpenO;
        var dataOpenB=dataOpen.slice(6,7);//获取中奖后两个
        innerPageContainer.dataListSSQ.dataOpenB=dataOpenB;
        var redNewData=new Array();
        var dataListRed=innerPageContainer.dataListRed;
        for(var i=0;i<dataListRed.length;i++){
            depart={};
            depart.value=dataListRed[i];
            depart.check=filterData(dataOpenO,dataListRed[i])
            redNewData.push(depart)
        }
        console.log(redNewData,22223333)
        innerPageContainer.dataListSSQ.redNewData=redNewData;
        var blueNewData=new Array();
        var dataListBlue=innerPageContainer.dataListBlue;
        for(var i=0;i<dataListBlue.length;i++){
            depart={};
            depart.value=dataListBlue[i];
            depart.check=filterData(dataOpenB,dataListBlue[i])
            blueNewData.push(depart)
        }
        console.log(blueNewData,3333322222)
        innerPageContainer.dataListSSQ.blueNewData=blueNewData;
        innerPageContainer.dataListSSQ.computingProbability=computingProbability(blueNewData,redNewData);
        console.log(blueNewData)
    }
    function filterData(data,val){
        var flag=false;
        for(var i=0;i<data.length;i++){
            if(data[i]==val){
                flag=true;
            }
        }
        return flag

    }
    function computingProbability(data1,data2){
        var newData=data1.concat(data2);
        var L=newData.length;
        var S=0;
        for(var i=0;i<newData.length;i++){
            if(newData[i].check){
                S++
            }
        }
        var t=(L-S)/L;
        var T=t.toFixed(2)*100;
        console.log(T)
        return T+"%";


    }

    function dltFn(data){
        var dataOpen=data.lottery_res;
        console.log(data,666666)
        innerPageContainer.dataListDLT.dataOpen=data;
        var dataOpenO=dataOpen.slice(0,5);//获取中奖前五个
        innerPageContainer.dataListDLT.dataOpenO=dataOpenO;
        var dataOpenB=dataOpen.slice(5,7);//获取中奖后两个
        innerPageContainer.dataListDLT.dataOpenB=dataOpenB;
        var redNewData=new Array();
        var dataListRedD=innerPageContainer.dataListRedD;
        console.log(dataListRedD,777777777777)
        for(var i=0;i<dataListRedD.length;i++){
            depart={};
            depart.value=dataListRedD[i];
            depart.check=filterData(dataOpenO,dataListRedD[i])
            redNewData.push(depart)
        }
        console.log(redNewData,666666)
        innerPageContainer.dataListDLT.redNewData=redNewData;
        var blueNewData=new Array();
        var dataListBlueD=innerPageContainer.dataListBlueD;
        for(var i=0;i<dataListBlueD.length;i++){
            depart={};
            depart.value=dataListBlueD[i];
            depart.check=filterData(dataOpenB,dataListBlueD[i])
            blueNewData.push(depart)
        }
        innerPageContainer.dataListDLT.blueNewData=blueNewData;
        innerPageContainer.dataListDLT.computingProbability=computingProbability(blueNewData,redNewData);
        console.log(blueNewData,5555555)
    }
    function returnData(data, yData, XData, historyZj, type) {
        data.lottery_no = data.lottery_no
        element = {};
        element.dataOpen = data;
        element.historyZj = historyZj;
        var dataOpen = data.lottery_res;
        if (type == 'dlt') {
            var dataOpenO = dataOpen.slice(0, 9);//获取中奖前5个
            var dataOpenB = dataOpen.slice(5, 7);//获取中奖后2个
        } else {
            var dataOpenO = dataOpen.slice(0, 9);//获取中奖前6个
            var dataOpenB = dataOpen.slice(6, 7);//获取中奖后1个
        }

        element.dataOpenO = dataOpenO;

        element.dataOpenB = dataOpenB;
        var redNewData = new Array();
        var dataListRed = yData;
        for (var i = 0; i < dataListRed.length; i++) {
            depart = {};
            depart.value = dataListRed[i];
            depart.check = filterData(dataOpenO, dataListRed[i])
            redNewData.push(depart)
        }
        element.redNewData = redNewData;
        var blueNewData = new Array();
        var dataListBlue = XData;
        for (var i = 0; i < dataListBlue.length; i++) {
            depart = {};
            depart.value = dataListBlue[i];
            depart.check = filterData(dataOpenB, dataListBlue[i])
            blueNewData.push(depart)
        }
        element.blueNewData = blueNewData;
        element.computingProbability = computingProbability(blueNewData, redNewData);
        console.log(element, 123456000000)
        return element;
    }
    function filterData(data, val) {
        var flag = false;
        for (var i = 0; i < data.length; i++) {
            if (data[i] == val) {
                flag = true;
            }
        }
        return flag

    }
    function computingProbability(data1, data2) {
        var newData = data1.concat(data2);
        var L = newData.length;
        var S = 0;
        for (var i = 0; i < newData.length; i++) {
            if (newData[i].check) {
                S++
            }
        }
        var t = (L - S) / L;
        var T = t.toFixed(2) * 100;
        console.log(T)
        return T + "%";


    }



















    //复制微信
    $(document).ready(function () {
        var targetText = $("#target").text();
        var clipboard = new Clipboard('#copy_btn');
        clipboard.on('success', function (e) {
            console.info('Action:', e.action);
            console.info('Text:', e.text);
            console.info('Trigger:', e.trigger);
            // alert("复制成功，请到微信添加朋友！");
            window.location.href='./wxNumber.html?wx='+stxlwx
            e.clearSelection();
        });

    });






