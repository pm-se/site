package br.com.pmse.repository;

import br.com.pmse.entidade.Veiculo_Apreendido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VeiculoApreendidoRepository extends JpaRepository<Veiculo_Apreendido, Integer> {

    public List<Veiculo_Apreendido> findByRestricaoIsTrue();
}
