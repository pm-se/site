package br.com.pmse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EntityScan(basePackages = {"br.com.pmse.entidade"})
@ComponentScan(basePackages = {"br.com.pmse.controller"})
public class PmseApplication {

    public static void main(String[] args) {
        SpringApplication.run(PmseApplication.class, args);
    }

}
