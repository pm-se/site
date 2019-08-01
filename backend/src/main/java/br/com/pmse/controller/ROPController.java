package br.com.pmse.controller;

import br.com.pmse.entidade.ROP;
import br.com.pmse.repository.ROPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rops")
@CrossOrigin("*")
public class ROPController {

    @Autowired
    private ROPRepository ropRepository;

    @GetMapping
    public List<ROP> lista(){
        List<ROP> rops = ropRepository.findAll();
        return rops;
    }

}
