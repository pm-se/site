package br.com.pmse.entidade;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class ROP_EnvolvidoPK implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer fk_envolvido;
    private Integer fk_rop;

    // **************************** CONTRUTORES *****************************
    public ROP_EnvolvidoPK() {}

    public ROP_EnvolvidoPK(Integer idEnvolvido, Integer idROP) {
        this.setFk_envolvido(idEnvolvido);
        this.setFk_rop(idROP);
    }

    public ROP_EnvolvidoPK(Individuo envolvido, ROP rop) {
        this.setFk_envolvido(envolvido.getId());
        this.setFk_rop(rop.getId());
    }

    // **************************** HASH e EQUALS ***************************
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result
                + ((fk_envolvido == null) ? 0 : fk_envolvido.hashCode());
        result = prime * result + ((fk_rop == null) ? 0 : fk_rop.hashCode());
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
        ROP_EnvolvidoPK other = (ROP_EnvolvidoPK) obj;
        if (fk_envolvido == null) {
            if (other.fk_envolvido != null)
                return false;
        } else if (!fk_envolvido.equals(other.fk_envolvido))
            return false;
        if (fk_rop == null) {
            if (other.fk_rop != null)
                return false;
        } else if (!fk_rop.equals(other.fk_rop))
            return false;
        return true;
    }

    // **************************** GETS e SETs *****************************
    public Integer getFk_envolvido() {
        return fk_envolvido;
    }

    public void setFk_envolvido(Integer fk_envolvido) {
        this.fk_envolvido = fk_envolvido;
    }

    public Integer getFk_rop() {
        return fk_rop;
    }

    public void setFk_rop(Integer fk_rop) {
        this.fk_rop = fk_rop;
    }

}
