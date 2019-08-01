package br.com.pmse.entidade;

import org.hibernate.annotations.ForeignKey;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class Arma_Fogo_Apreendida implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="nm_numeroSerie", length=50)
    private String numeroSerie;

    @Column(name="in_municoes")
    private Integer municoes;

    // **************************** RELACIONAMENTOS *************************
    @ManyToMany
    @ForeignKey(name="FK_Arma_Fogo_Apreendida_ROP_Arma_Fogo_Apreendida",
            inverseName="FK_ROP_ROP_Arma_Fogo_Apreendida")
    @JoinTable(name="ROP_Arma_Fogo_Apreendida",
            joinColumns={@JoinColumn(name="fk_armaFogoApreendida")},
            inverseJoinColumns={@JoinColumn(name="fk_rop")})
    private Set<ROP> rops;

    @ManyToOne
    @ForeignKey(name="FK_Objeto_Arma_Fogo_Apreendida")
    @JoinColumn(name="fk_tipoArma", nullable=false)
    private Tipo tipoArma;

    @ManyToOne
    @ForeignKey(name="FK_Objeto_Arma_Fogo_Apreendida_calibre")
    @JoinColumn(name="fk_calibre")
    private Tipo calibre;

    // **************************** CONTRUTORES *****************************
    public Arma_Fogo_Apreendida() {}

    public Arma_Fogo_Apreendida(Tipo tipoArma) {
        this.setTipoArma(tipoArma);
    }

    public Arma_Fogo_Apreendida(Tipo tipoArma, Tipo calibre, String numeroSerie,
                                Integer municoes) {
        this.setTipoArma(tipoArma);
        this.setCalibre(calibre);
        this.setNumeroSerie(numeroSerie);
        this.setMunicoes(municoes);
    }

    // **************************** HASH e EQUALS ***************************
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime
                * result
                + ((id == null) ? 0 : id
                .hashCode());
        result = prime * result
                + ((tipoArma == null) ? 0 : tipoArma.hashCode());
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
        Arma_Fogo_Apreendida other = (Arma_Fogo_Apreendida) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (tipoArma == null) {
            if (other.tipoArma != null)
                return false;
        } else if (!tipoArma.equals(other.tipoArma))
            return false;
        return true;
    }

    // **************************** GETS e SETs *****************************
    public String getNumeroSerie() {
        return numeroSerie;
    }

    public void setNumeroSerie(String numeroSerie) {
        this.numeroSerie = numeroSerie;
    }

    public Integer getMunicoes() {
        return municoes;
    }

    public void setMunicoes(Integer municoes) {
        this.municoes = municoes;
    }

    public void setMunicoes(String municoes) {
        this.municoes = Integer.valueOf(municoes);
    }

    public Set<ROP> getRops() {
        return rops;
    }

    public void setRops(Set<ROP> rops) {
        this.rops = rops;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Tipo getTipoArma() {
        return tipoArma;
    }

    public void setTipoArma(Tipo tipoArma) {
        this.tipoArma = tipoArma;
    }

    public Tipo getCalibre() {
        return calibre;
    }

    public void setCalibre(Tipo calibre) {
        this.calibre = calibre;
    }

}

