package br.com.pmse.controller;

import br.com.pmse.entidade.VeiculoApreendido;
import br.com.pmse.repository.VeiculoApreendidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/veiculos_apreendidos")

public class VeiculoApreendidoController {

    @Autowired
    private VeiculoApreendidoRepository veiculoApreendidoRepository;

    @GetMapping
    public List<VeiculoApreendido> lista() {
        return veiculoApreendidoRepository.findAll();
    }
}
