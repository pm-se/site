package br.com.pmse.entidade;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.ForeignKey;

@Entity
public class Individuo_Endereco implements Serializable, Comparable<Individuo_Endereco> {

    private static final long serialVersionUID = 9011054475962015860L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @Column(name="nm_logradouro", length=150, nullable=false)
    private String logradouro;

    @Column(name="nm_numero", length=150, nullable=false)
    private String numero;

    @Column(name="nm_complemento", length=150)
    private String complemento;

    @Column(name="nm_bairro", length=150, nullable=false)
    private String bairro;

    @Column(name="nm_cep", length=150, nullable=false)
    private String cep;

    // **************************** RELACIONAMENTOS *************************
    @ManyToOne
    @ForeignKey(name="FK_Cidade_Endereco_Individuo")
    @JoinColumn(name="fk_cidade", nullable=false)
    private Cidade cidade;

    @OneToMany(mappedBy= "endereco")
    private List<Individuo> individuos;

    // **************************** HASH E EQUALS *************************

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
        Individuo_Endereco other = (Individuo_Endereco) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

    @Override
    public int compareTo(Individuo_Endereco o) {

        return this.id.compareTo(o.getId());
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public Cidade getCidade() {
        return cidade;
    }

    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }

    public List<Individuo> getIndividuos() {
        return individuos;
    }

    public void setIndividuos(List<Individuo> individuos) {
        this.individuos = individuos;
    }
}
