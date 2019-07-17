package com.fxyctx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.ImportResource;

/**
 * Created with IntelliJ IDEA
 * Created By yewenbo
 * Date: 2019/7/2
 * Time: 14:42
 */
/**
 * @Target({ElementType.TYPE})
 * @Retention(RetentionPolicy.RUNTIME)
 * @Documented
 * @Inherited
 * @SpringBootConfiguration  spring boot 配置类
 * @EnableAutoConfiguration  开启自动配置功能，
 *  1.@AutoConfigurationPackage  自动配置包，将主配置类（@SpringBootApplication标注的类）的所在包及下面所有子包里面的所有组件扫描到Spring容器
 *  2.@Import(EnableAutoConfigurationImportSelector.class)  给容器中导入组件
 */

/**
 * @SpringBootApplication来标注一个主程序类。说明这是个spring Boot应用
 */
//@ImportResource(locations = {"classpath:beans.xml"})
@SpringBootApplication
public class SpringFxyctxApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringFxyctxApplication.class, args);
    }

}
