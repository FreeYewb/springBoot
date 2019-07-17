package com.fxyctx;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * 单元测试
 * 可以在
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringFxyctxApplicationTests {


    @Autowired
    ApplicationContext ioc;

    @Test
    public void testHelloService(){
        boolean b = ioc.containsBean("helloService");
        System.out.println(b);
    }
    @Test
    public void contextLoads() {
        System.out.println();
    }

}
