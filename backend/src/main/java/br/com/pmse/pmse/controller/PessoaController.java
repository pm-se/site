package br.com.pmse.pmse.controller;

import br.com.pmse.pmse.entidade.Pessoa;
import br.com.pmse.pmse.servico.PessoaServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PessoaController {
    @Autowired
    private PessoaServico pessoaServico;

    @GetMapping("/api/pessoas/{termo}")
    public List<Pessoa> pessoas(@PathVariable("termo") String termo) {
        return pessoaServico.findByNomeIsContaining(termo);
    }
}
