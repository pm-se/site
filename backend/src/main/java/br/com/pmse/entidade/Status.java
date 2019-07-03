package br.com.pmse.entidade;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.ForeignKey;

@Entity
public class Status implements Serializable, Comparable<Status> {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="nm_nome", length=50, nullable=false)
    private String nome;

    // **************************** RELACIONAMENTOS *************************
    @JsonIgnore
    @ManyToOne(fetch=FetchType.LAZY)
    @ForeignKey(name="FK_Objeto_Status")
    @JoinColumn(name="fk_objeto", nullable = false)
    private Objeto objeto;

    // **************************** CONTRUTORES *****************************
    public Status() {}

    public Status(Objeto objeto, String nome) {
        this.setObjeto(objeto);
        this.setNome(nome);
    }

    // ****************** HASH, EQUALS, COMPARETO, TOSTRING *****************
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result
                + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((nome == null) ? 0 : nome.hashCode());
        result = prime * result + ((objeto == null) ? 0 : objeto.hashCode());
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
        Status other = (Status) obj;
        if (id == null) {
            if (other.id!= null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (nome == null) {
            if (other.nome != null)
                return false;
        } else if (!nome.equals(other.nome))
            return false;
        if (objeto == null) {
            if (other.objeto != null)
                return false;
        } else if (!objeto.equals(other.objeto))
            return false;
        return true;
    }

    public int compareTo(Status o) {
        int compare = objeto.compareTo(o.getObjeto());
        return compare != 0 ? compare : nome.compareTo(o.getNome());
    }

    @Override
    public String toString() {
        return nome;
    }

    public String toStringCompleto() {
        return objeto.getNome()+"|"+nome;
    }

    // **************************** GETS e SETs *****************************
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
        this.nome = nome == null ? null : nome.trim();
    }

    public Objeto getObjeto() {
        return objeto;
    }

    public void setObjeto(Objeto objeto) {
        this.objeto = objeto;
    }

}
