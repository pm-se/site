package br.com.pmse.entidade;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.ForeignKey;

@Entity
public class Veiculo_Apreendido implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @Column(name="nm_chassi", length=50)
    private String chassi;

    @Column(name="nm_placa", length=7)
    private String placa;

    @Column(name="bl_restricao", columnDefinition = "tinyint default 0")
    private Boolean restricao;

    // **************************** RELACIONAMENTOS *************************
    @ManyToMany(mappedBy="veiculosApreendidos")
    @JsonIgnore
    private Set<ROP> rops;

    @ManyToOne
    @ForeignKey(name="FK_Modelo_Veiculo_Apreendido")
    @JoinColumn(name="fk_modelo", nullable=false)
    @JsonIgnore
    private Modelo modelo;

//    @ManyToOne
//    @ForeignKey(name="FK_Especie_Veiculo_Veiculo_Apreendido")
//    @JoinColumn(name="fk_especieVeiculo", nullable=false)
//    private Especie_Veiculo especieVeiculo;

    @ManyToOne
    @ForeignKey(name="FK_Tipo_Veiculo_Apreendido")
    @JoinColumn(name="fk_tipoVeiculo", nullable=false)
    @JsonIgnore
    private Tipo tipoVeiculo;

    @ManyToOne
    @ForeignKey(name="FK_Cor_Veiculo_Apreendido")
    @JoinColumn(name="fk_cor", nullable=false)
    @JsonIgnore
    private Cor cor;

    // **************************** CONTRUTORES *****************************
    public Veiculo_Apreendido() {}

//    public Veiculo_Apreendido(Modelo modelo, Especie_Veiculo especieVeiculo,
//                              Tipo tipoVeiculo, Cor cor) {
//        this.setModelo(modelo);
//        this.setEspecieVeiculo(especieVeiculo);
//        this.setTipoVeiculo(tipoVeiculo);
//        this.setCor(cor);
//    }
//
//    public Veiculo_Apreendido(Modelo modelo, Especie_Veiculo especieVeiculo,
//                              Tipo tipoVeiculo, Cor cor, String chassi, String placa){
//        this.setModelo(modelo);
//        this.setEspecieVeiculo(especieVeiculo);
//        this.setTipoVeiculo(tipoVeiculo);
//        this.setCor(cor);
//        this.setChassi(chassi);
//        this.setPlaca(placa);
//    }

    // **************************** HASH e EQUALS ***************************
//    @Override
//    public int hashCode() {
//        final int prime = 31;
//        int result = 1;
//        result = prime * result + ((cor == null) ? 0 : cor.hashCode());
//        result = prime * result
//                + ((especieVeiculo == null) ? 0 : especieVeiculo.hashCode());
//        result = prime
//                * result
//                + ((id == null) ? 0 : id
//                .hashCode());
//        result = prime * result + ((modelo == null) ? 0 : modelo.hashCode());
//        result = prime * result
//                + ((tipoVeiculo == null) ? 0 : tipoVeiculo.hashCode());
//        return result;
//    }

//    @Override
//    public boolean equals(Object obj) {
//        if (this == obj)
//            return true;
//        if (obj == null)
//            return false;
//        if (getClass() != obj.getClass())
//            return false;
//        Veiculo_Apreendido other = (Veiculo_Apreendido) obj;
//        if (cor == null) {
//            if (other.cor != null)
//                return false;
//        } else if (!cor.equals(other.cor))
//            return false;
//        if (especieVeiculo == null) {
//            if (other.especieVeiculo != null)
//                return false;
//        } else if (!especieVeiculo.equals(other.especieVeiculo))
//            return false;
//        if (id == null) {
//            if (other.id != null)
//                return false;
//        } else if (!id.equals(other.id))
//            return false;
//        if (modelo == null) {
//            if (other.modelo != null)
//                return false;
//        } else if (!modelo.equals(other.modelo))
//            return false;
//        if (tipoVeiculo == null) {
//            return other.tipoVeiculo == null;
//        } else return tipoVeiculo.equals(other.tipoVeiculo);
//    }

    // **************************** GETS e SETs *****************************
    public String getChassi() {
        return chassi;
    }

    public void setChassi(String chassi) {
        this.chassi = chassi;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public Set<ROP> getRops() {
        return rops;
    }

    public void setRops(Set<ROP> rops) {
        this.rops = rops;
    }

    public Modelo getModelo() {
        return modelo;
    }

    public void setModelo(Modelo modelo) {
        this.modelo = modelo;
    }

//    public Especie_Veiculo getEspecieVeiculo() {
//        return especieVeiculo;
//    }
//
//    public void setEspecieVeiculo(Especie_Veiculo especieVeiculo) {
//        this.especieVeiculo = especieVeiculo;
//    }

    public Cor getCor() {
        return cor;
    }

    public void setCor(Cor cor) {
        this.cor = cor;
    }

    public Tipo getTipoVeiculo() {
        return tipoVeiculo;
    }

    public void setTipoVeiculo(Tipo tipoVeiculo) {
        this.tipoVeiculo = tipoVeiculo;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Boolean getRestricao() {
        return restricao;
    }

    public void setRestricao(Boolean restricao) {
        this.restricao = restricao;
    }
}
