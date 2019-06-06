package br.com.pmse.pmse.servico;

import br.com.pmse.pmse.entidade.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PessoaServico extends JpaRepository<Pessoa, Integer> {
    List<Pessoa> findByNomeIsContaining(String term);
}
