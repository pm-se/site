package br.com.pmse.entidade;

import org.hibernate.annotations.ForeignKey;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
public class Droga_Apreendida implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch=FetchType.LAZY)
    @ForeignKey(name="FK_Objeto_Droga")
    @JoinColumn(name="fk_tipo", nullable=false)
    private Tipo tipoDroga;

    @Column(name = "nu_gramas", nullable = false)
    private BigDecimal gramas;

    @ManyToOne
    @JoinColumn(name="fk_rop", nullable=false)
    private ROP rop;

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Droga_Apreendida other = (Droga_Apreendida) obj;
        if (id == null) {
            return other.id == null;
        } else return id.equals(other.id);
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Tipo getTipoDroga() {
        return tipoDroga;
    }

    public void setTipoDroga(Tipo tipoDroga) {
        this.tipoDroga = tipoDroga;
    }

    public BigDecimal getGramas() {
        return gramas;
    }

    public void setGramas(BigDecimal gramas) {
        this.gramas = gramas;
    }

    public ROP getRop() {
        return rop;
    }

    public void setRop(ROP rop) {
        this.rop = rop;
    }
}
