package br.com.pmse.entidade;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "view_veiculos_apreendidos")
public class VeiculoApreendido {

    private static final long serialVersionUID = 1L;

    @Id
    private Long id;

    @Column(name = "Quantidade")
    private Integer quantidade;

    @Column(name = "Tipo")
    private String tipo;

    public VeiculoApreendido() {
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getId() {
        return id;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public String getTipo() {
        return tipo;
    }

}
