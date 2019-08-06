package br.com.pmse.entidade;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name="armas_apreendidas")
public class ArmaFogoApreendida implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private Long id;

    @Column(name="Quantidade")
    private Integer quantidade;

    @Column(name="Tipo")
    private String tipo;

    public ArmaFogoApreendida() {
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}

