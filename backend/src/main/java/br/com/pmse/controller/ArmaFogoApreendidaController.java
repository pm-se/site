package br.com.pmse.controller;

import br.com.pmse.entidade.ArmaFogoApreendida;
import br.com.pmse.repository.ArmaFogoApreendidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/armas_apreendidas")
@CrossOrigin("*")
public class ArmaFogoApreendidaController {

    @Autowired
    private ArmaFogoApreendidaRepository armaFogoApreendidaRepository;

    @GetMapping
    public List<ArmaFogoApreendida> listar() {
        List<ArmaFogoApreendida> arma_fogo_apreendidas = armaFogoApreendidaRepository.findAll();
        return arma_fogo_apreendidas;
    }

}
