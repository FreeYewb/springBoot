package com.fxyctx.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


//@ResponseBody//这个类的所以方法返回的数据直接写给浏览器，(如果是对象转为json数据)
//@Controller
@RestController//这个注解同时拥有@Controller @ResponseBody俩个注解功能
public class HelloController {
    //@ResponseBody//写给游览器
    @RequestMapping("/hello")//处理hello请求
    public  String hello(){
        return "======../webapp/static/fxyctx/fxyctx.html";
    }
}
