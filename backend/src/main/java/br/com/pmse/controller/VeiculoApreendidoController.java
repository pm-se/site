package br.com.pmse.controller;

import br.com.pmse.entidade.Veiculo_Apreendido;
import br.com.pmse.repository.VeiculoApreendidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/veiculos")
@CrossOrigin("*")

public class VeiculoApreendidoController {

    @Autowired
    private VeiculoApreendidoRepository veiculoApreendidoRepository;

//    @GetMapping
//    public List<Veiculo_Apreendido> lista() {
//        List<Veiculo_Apreendido> veiculosApreendidos = veiculoApreendidoRepository.findByRestricaoIsTrue();
//        return veiculosApreendidos;
//    }

    @GetMapping
    public int conta() {
        int veiculosApreendidos = veiculoApreendidoRepository.findByRestricaoIsTrue().size();
        return veiculosApreendidos;
    }

}
