package br.com.pmse.entidade;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.ForeignKey;

@Entity
public class ROP_Envolvido implements Serializable {

    private static final long serialVersionUID = 1L;

    // **************************** CHAVE COMPOSTA **************************
    @EmbeddedId
    private ROP_EnvolvidoPK id;

    @ManyToOne(fetch=FetchType.LAZY)
    @ForeignKey(name="FK_Individuo_ROP_Envolvido")
    @JoinColumn(name="fk_envolvido", nullable=false, insertable=false, updatable=false)
    private Individuo envolvido;

    @ManyToOne(fetch=FetchType.LAZY)
    @ForeignKey(name="FK_ROP_ROP_Envolvido")
    @JoinColumn(name="fk_rop", nullable=false, insertable=false, updatable=false)
    private ROP rop;

    // **************************** RELACIONAMENTOS *************************
    @ManyToOne
    @ForeignKey(name="FK_Tipo_ROP_Envolvido_tipoEnvolvido")
    @JoinColumn(name="fk_tipoEnvolvido", nullable=false)
    private Tipo tipoEnvolvido;

    @ManyToOne
    @ForeignKey(name="FK_Tipo_ROP_Envolvido_tipoDetencao")
    @JoinColumn(name="fk_tipoDetencao")
    private Tipo tipoDetencao;

    // **************************** CONTRUTORES *****************************
    public ROP_Envolvido() {}

    public ROP_Envolvido(ROP_EnvolvidoPK id, Tipo tipoEnvolvido) {
        this.setId(id);
        this.setTipoEnvolvido(tipoEnvolvido);
    }

    public ROP_Envolvido(ROP rop, Individuo envolvido, Tipo tipoEnvolvido) {
        this.setId(new ROP_EnvolvidoPK(envolvido, rop));
        this.setTipoEnvolvido(tipoEnvolvido);
    }

    public ROP_Envolvido(ROP rop, Individuo envolvido, Tipo tipoEnvolvido,
                         Tipo tipoDetencao) {
        this.setRop(rop);
        this.setEnvolvido(envolvido);
        this.setTipoEnvolvido(tipoEnvolvido);
        this.setTipoDetencao(tipoDetencao);
    }

    // **************************** HASH e EQUALS ***************************
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result
                + ((envolvido == null) ? 0 : envolvido.hashCode());
        result = prime * result
                + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((rop == null) ? 0 : rop.hashCode());
        result = prime * result
                + ((tipoEnvolvido == null) ? 0 : tipoEnvolvido.hashCode());
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
        ROP_Envolvido other = (ROP_Envolvido) obj;
        if (envolvido == null) {
            if (other.envolvido != null)
                return false;
        } else if (!envolvido.equals(other.envolvido))
            return false;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (rop == null) {
            if (other.rop != null)
                return false;
        } else if (!rop.equals(other.rop))
            return false;
        if (tipoEnvolvido == null) {
            if (other.tipoEnvolvido != null)
                return false;
        } else if (!tipoEnvolvido.equals(other.tipoEnvolvido))
            return false;
        return true;
    }

    // **************************** GETS e SETs *****************************
    public Individuo getEnvolvido() {
        return envolvido;
    }

    public void setEnvolvido(Individuo envolvido) {
        this.envolvido = envolvido;
    }

    public ROP getRop() {
        return rop;
    }

    public void setRop(ROP rop) {
        this.rop = rop;
    }

    public Tipo getTipoEnvolvido() {
        return tipoEnvolvido;
    }

    public void setTipoEnvolvido(Tipo tipoEnvolvido) {
        this.tipoEnvolvido = tipoEnvolvido;
    }

    public Tipo getTipoDetencao() {
        return tipoDetencao;
    }

    public void setTipoDetencao(Tipo tipoDetencao) {
        this.tipoDetencao = tipoDetencao;
    }

    public ROP_EnvolvidoPK getId() {
        return id;
    }

    public void setId(ROP_EnvolvidoPK id) {
        this.id = id;
    }

}