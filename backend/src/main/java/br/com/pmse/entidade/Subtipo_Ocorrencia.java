package br.com.pmse.entidade;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.ForeignKey;

@Entity
public class Subtipo_Ocorrencia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="nm_nome", length=100)
    private String nome;

    // ****************************** RELACIONAMENTO ***************************

    @ManyToOne
    @ForeignKey(name="FK_Natureza_Subtipo_Ocorrencia")
    @JoinColumn(name="fk_natureza", nullable=false)
    private Natureza_Ocorrencia naturezaOcorrencia;

    @OneToMany(mappedBy="subtipoOcorrencia", fetch=FetchType.LAZY)
    private List<ROP> rops;


    // ****************************** HASH E EQUALS ***************************

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Subtipo_Ocorrencia other = (Subtipo_Ocorrencia) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }


    // ****************************** GETS E SETS ***************************


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Natureza_Ocorrencia getNaturezaOcorrencia() {
        return naturezaOcorrencia;
    }

    public void setNaturezaOcorrencia(Natureza_Ocorrencia naturezaOcorrencia) {
        this.naturezaOcorrencia = naturezaOcorrencia;
    }

    public List<ROP> getRops() {
        return rops;
    }

    public void setRops(List<ROP> rops) {
        this.rops = rops;
    }

}
