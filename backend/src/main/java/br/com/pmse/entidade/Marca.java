package br.com.pmse.entidade;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Marca implements Serializable, Comparable <Marca> {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nm_nome", length = 100, nullable = false, unique = true)
    private String nome;

    // **************************** RELACIONAMENTOS *************************
    @OneToMany(mappedBy="marca", fetch=FetchType.LAZY)
    private Set<Modelo> marca;

    // **************************** CONTRUTORES *****************************
    public Marca() {}

    public Marca(String nome) {
        this.setNome(nome);
    }

    // **************************** HASH e EQUALS ***************************
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result
                + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result
                + ((getNome() == null) ? 0 : getNome().hashCode());
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
        Marca other = (Marca) obj;
        if (getId() == null) {
            if (other.getId() != null)
                return false;
        } else if (!getId().equals(other.getId()))
            return false;
        if (getNome() == null) {
            if (other.getNome() != null)
                return false;
        } else if (!getNome().equals(other.getNome()))
            return false;
        return true;
    }

    public int compareTo(Marca o) {
        return this.nome.compareTo(o.getNome());
    }

    @Override
    public String toString() {
        return this.nome;
    }

    // **************************** GETS e SETs *****************************
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Set<Modelo> getMarca() {
        return marca;
    }

    public void setMarca(Set<Modelo> marca) {
        this.marca = marca;
    }

}
