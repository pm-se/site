package br.com.pmse.repository;

import br.com.pmse.entidade.Noticia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticiaRepository extends JpaRepository<Noticia, Integer> {
}
