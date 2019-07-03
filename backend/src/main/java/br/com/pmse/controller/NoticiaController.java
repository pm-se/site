package br.com.pmse.controller;

import br.com.pmse.entidade.Noticia;
import br.com.pmse.repository.NoticiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class NoticiaController {

    @Autowired
    private NoticiaRepository noticiaRepository;

    @GetMapping("/listarTodas")
    public List<Noticia> listar() {
        List<Noticia> listaNoticias = noticiaRepository.findAll();
        return listaNoticias;
    }

    @GetMapping("noticia/{id}")
    public Noticia findById(@PathVariable(name = "id") Integer id) {
        return noticiaRepository.findById(id).get();
    }
}
