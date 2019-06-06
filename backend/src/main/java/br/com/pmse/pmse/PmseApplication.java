package br.com.pmse.pmse;

import br.com.pmse.pmse.entidade.Pessoa;
import br.com.pmse.pmse.servico.PessoaServico;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackageClasses = {Pessoa.class})
@ComponentScan(basePackages = {"br.com.pmse.pmse.controller"})
@EnableJpaRepositories(basePackageClasses = {PessoaServico.class})
public class PmseApplication {

	public static void main(String[] args) {
		SpringApplication.run(PmseApplication.class, args);
	}

}
