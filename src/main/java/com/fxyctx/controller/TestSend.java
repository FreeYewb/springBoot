package com.fxyctx.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.config.RequestConfig;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/testSend")
public class TestSend {

    //接口地址
    private String url = "http://testsd.sunlin1.com:888/api/order";
    //商户号
    private String p1_merchant = "2019031314016";
    //订单号  自动生成
    private String p2_order = "";
    //回调地址
    private String p4_returnurl = "www.baidu.com";
    //异步通知地址
    private String p5_noticeurl = "http://localhost:8080/demo_war/testSend/notice";
    //终端账号
    private String p6_custom = "123";
    //签名类型（MD5）
    private String p7_signtype = "MD5";
    //支付场景编码
    private String p11_payscene = "PC";
    //****非必填***
    //展示方式编码
    private String p12_showtype = "";
    //卡类或银行编码
    private String p13_bankcardcode = "";
    //备注
    private String p14_remark = "";
    //扩展参数
    private String p15_extend = "";
    //密钥
    private String key = "797AA822E5C4AB3C5D416A573FBCE0DD";



    @RequestMapping("index")
    public String index() {
        return "index";
    }
    //发送KV值
    @RequestMapping("sendKV")
    public void sendKV(String p3_money, String p10_paytype, HttpServletResponse response){
        if(StringUtils.isBlank(p3_money)){
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json; charset=utf-8");
            PrintWriter out = null;
            try {
                out = response.getWriter();
                out.append("金额不能为空");
                out.flush();
                out.close();

            } catch (IOException e) {
                // 异常处理
            } finally {
                if (out != null) {
                    out.close();
                }
            }
            return ;
        }
        BigDecimal money = new BigDecimal(p3_money).multiply(new BigDecimal("100"));
        SimpleDateFormat simpleDateFormate = new SimpleDateFormat("yyyyMMddHHmmssSSS");
        p2_order = simpleDateFormate.format(new Date()) + Utlis.genRandomNum(5);
        Map<String, String> hashMap = new HashMap<>();
        String p8_sign=(Utlis.MD5Encode("p1_merchant="+p1_merchant+
                "&p2_order="+p2_order + "&p3_money="+money.toString()+
                "&p4_returnurl="+p4_returnurl + "&p5_noticeurl="+p5_noticeurl+
                "&p6_custom="+p6_custom + "&key="+key,null)).toUpperCase();
        hashMap.put("p1_merchant",p1_merchant);
        hashMap.put("p2_order",p2_order);
        hashMap.put("p3_money",money.toString());
        hashMap.put("p4_returnurl",p4_returnurl);
        hashMap.put("p5_noticeurl",p5_noticeurl);
        hashMap.put("p6_custom",p6_custom);
        hashMap.put("p7_signtype",p7_signtype);
        hashMap.put("p8_sign",p8_sign);
        hashMap.put("p10_paytype",p10_paytype);
        hashMap.put("p11_payscene",p11_payscene);

        hashMap.put("p12_showtype",p12_showtype);
        hashMap.put("p13_bankcardcode",p13_bankcardcode);
        hashMap.put("p14_remark",p14_remark);
        hashMap.put("p15_extend",p15_extend);
        //设置超时时间
        RequestConfig requestConfig =RequestConfig.custom()
                .setConnectTimeout(65000).setConnectionRequestTimeout(15000)
                .setSocketTimeout(65000).build();
        String doPost = Utlis.doPost(url, hashMap, null, requestConfig);
        if(doPost.contains("Flag")){
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json; charset=utf-8");
            PrintWriter out = null;
            try {
                out = response.getWriter();
                out.append(doPost);
                out.flush();
                out.close();

            } catch (IOException e) {
                // e.printStackTrace();
            } finally {
                if (out != null) {
                    out.close();
                }
            }
            return ;
        }else{
            response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
            try {
                Map<String,String> header=new ObjectMapper().readValue(doPost, Map.class);
                for (Map.Entry<String, String> entry :header.entrySet()) {
                    response.setHeader(entry.getKey(), entry.getValue());
                }
                // 重定向到上家url
                response.sendRedirect(header.get("Location"));
                return ;
            } catch (IOException e) {

            }
        }
        return ;
    }
    //发送json
    @RequestMapping("sendJson")
    public void sendJson(String p3_money, String p10_paytype, HttpServletResponse response){
        if(StringUtils.isBlank(p3_money)){
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json; charset=utf-8");
            PrintWriter out = null;
            try {
                out = response.getWriter();
                out.append("金额不能为空");
                out.flush();
                out.close();

            } catch (IOException e) {
                // 异常处理
            } finally {
                if (out != null) {
                    out.close();
                }
            }
            return ;
        }
        BigDecimal money = new BigDecimal(p3_money).multiply(new BigDecimal("100"));
        SimpleDateFormat simpleDateFormate = new SimpleDateFormat("yyyyMMddHHmmssSSS");
        p2_order = simpleDateFormate.format(new Date()) + Utlis.genRandomNum(5);
        Map<String, String> hashMap = new HashMap<>();
        String p8_sign=(Utlis.MD5Encode("p1_merchant="+p1_merchant+
                "&p2_order="+p2_order + "&p3_money="+money.toString()+
                "&p4_returnurl="+p4_returnurl + "&p5_noticeurl="+p5_noticeurl+
                "&p6_custom="+p6_custom + "&key="+key,null)).toUpperCase();
        hashMap.put("p1_merchant",p1_merchant);
        hashMap.put("p2_order",p2_order);
        hashMap.put("p3_money",money.toString());
        hashMap.put("p4_returnurl",p4_returnurl);
        hashMap.put("p5_noticeurl",p5_noticeurl);
        hashMap.put("p6_custom",p6_custom);
        hashMap.put("p7_signtype",p7_signtype);
        hashMap.put("p8_sign",p8_sign);
        hashMap.put("p10_paytype",p10_paytype);
        hashMap.put("p11_payscene",p11_payscene);

        hashMap.put("p12_showtype",p12_showtype);
        hashMap.put("p13_bankcardcode",p13_bankcardcode);
        hashMap.put("p14_remark",p14_remark);
        hashMap.put("p15_extend",p15_extend);
        //将参数转成json字符串
        String json = "";
        try{
            json = new ObjectMapper().writeValueAsString(hashMap);

        }catch(Exception e){
            //异常处理
        }
        //设置超时时间
        RequestConfig requestConfig =RequestConfig.custom()
                .setConnectTimeout(65000).setConnectionRequestTimeout(15000)
                .setSocketTimeout(65000).build();
        String doPost = Utlis.doPostJson(url, json, requestConfig);
        //结果处理
        if(doPost.contains("Flag")){
            //返回错误信息
            response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json; charset=utf-8");
            PrintWriter out = null;
            try {
                out = response.getWriter();
                out.append(doPost);
                out.flush();
                out.close();

            } catch (IOException e) {
                // 异常处理
            } finally {
                if (out != null) {
                    out.close();
                }
            }
            return ;
        }else{
            //重定向
            response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
            try {
                Map<String,String> header=new ObjectMapper().readValue(doPost, Map.class);
                for (Map.Entry<String, String> entry :header.entrySet()) {
                    response.setHeader(entry.getKey(), entry.getValue());
                }
                // 重定向到上家url
                response.sendRedirect(header.get("Location"));
                return ;
            } catch (IOException e) {

            }
        }
        return ;
    }

    /**
     *
     *  接收通知
     *
     */
    @RequestMapping("notice")
    @ResponseBody
    public String notice(HttpServletRequest request){
        String postData = Utlis.getPostData(request);
        Map<String,String> map = new HashMap<>();
        if (StringUtils.isNotBlank(postData)) {
            // 按kv接收
            String[] strSplit = postData.split("&");
            for (String str : strSplit) {
                if (str.contains("=")) {
                    // 取得参数名及对应的值
                    map.put(str.split("=")[0],str.split("=")[1]);
                }
            }
        }

        String md5 = Utlis.MD5Encode("p1_usercode="+map.get("p1_usercode")+"&p2_order="+
                map.get("p2_order")+"&p3_ordermoney="+map.get("p3_ordermoney")+"&p4_status="+
                map.get("p4_status")+"&p5_tradeorder="+map.get("p5_tradeorder")+"&p6_paymethod="+
                map.get("p6_paymethod")+"&p7_transamount="+map.get("p7_transamount")+"&key="+ key,null).toUpperCase();
        //验签
        if(!md5.equals(map.get("p10_sign"))){
            return "验签失败";
        }
        //处理业务逻辑

        return "SUCCESS";
    }
    @RequestMapping("success")
    public String success(){

        return "success";
    }


}
