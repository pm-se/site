package br.com.pmse.entidade;


import br.com.pmse.pm.CassUtil;
import org.hibernate.annotations.ForeignKey;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Calendar;
import java.util.Set;

@Entity
public class Individuo implements Serializable, Comparable<Individuo> {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @Column(name="nm_nome", length=250, nullable=false)
    private String nome;

    @Column(name = "dt_nascimento", columnDefinition="date")
    private Calendar dataNascimento;

    @Column(name="nm_cpf", length=15)
    private String cpf;

    @Column(name="nm_rg", length=25)
    private String rg;

    @Column(name="nm_pai", length=100)
    private String pai;

    @Column(name="nm_profissao", length=100)
    private String profissao;

    @Column(name="nm_telefone", length=25)
    private String telefone;

    @Column(name="nm_mae", length=100)
    private String mae;

    @Column(name="bl_ferido", columnDefinition="tinyint")
    private Boolean ferido;

    @Column(name="nm_nacionalidade", length=100)
    private String nacionalidade;

    @Column(name="nm_apelido", length=250)
    private String apelido;

    // ****************************** RELACIONAMENTO ***************************
    @ManyToMany
    @JoinTable(name="ROP_Envolvido",
            joinColumns={@JoinColumn(name="fk_envolvido")},
            inverseJoinColumns={@JoinColumn(name="fk_rop")})
    private Set<ROP> rops;

    @ManyToOne
    @ForeignKey(name="FK_Sexo_Individuo")
    @JoinColumn(name="fk_sexo", nullable=false)
    private Sexo sexo;

    @ManyToOne
    @ForeignKey(name="FK_Endereco_Individuo")
    @JoinColumn(name="fk_endereco")
    private Individuo_Endereco endereco;

    // ****************************** CONSTRUTORES *****************************
    public Individuo() {}

    public Individuo(Sexo sexo, String nome) {
        this.setSexo(sexo);
        this.setNome(nome);
    }

    public Individuo(Sexo sexo, String nome, Calendar dataNascimento, String cpf,
                     String rg, String pai, String mae) {
        this.setSexo(sexo);
        this.setNome(nome);
        //this.setEndereco(enderecoIndividuo);
        this.setDataNascimento(dataNascimento);
        this.setCpf(cpf);
        this.setRg(rg);
        this.setPai(pai);
        this.setMae(mae);
    }

    // ****************************** HASH e EQUALS ****************************
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((cpf == null) ? 0 : cpf.hashCode());
        result = prime * result
                + ((dataNascimento == null) ? 0 : dataNascimento.hashCode());
        result = prime * result
                + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((mae == null) ? 0 : mae.hashCode());
        result = prime * result + ((nome == null) ? 0 : nome.hashCode());
        result = prime * result + ((pai == null) ? 0 : pai.hashCode());
        result = prime * result + ((rg == null) ? 0 : rg.hashCode());
        result = prime * result + ((rops == null) ? 0 : rops.hashCode());
        result = prime * result + ((sexo == null) ? 0 : sexo.hashCode());
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
        Individuo other = (Individuo) obj;
        if (cpf == null) {
            if (other.cpf != null)
                return false;
        } else if (!cpf.equals(other.cpf))
            return false;
        if (dataNascimento == null) {
            if (other.dataNascimento != null)
                return false;
        } else if (!dataNascimento.equals(other.dataNascimento))
            return false;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (mae == null) {
            if (other.mae != null)
                return false;
        } else if (!mae.equals(other.mae))
            return false;
        if (nome == null) {
            if (other.nome != null)
                return false;
        } else if (!nome.equals(other.nome))
            return false;
        if (pai == null) {
            if (other.pai != null)
                return false;
        } else if (!pai.equals(other.pai))
            return false;
        if (rg == null) {
            if (other.rg != null)
                return false;
        } else if (!rg.equals(other.rg))
            return false;
        if (rops == null) {
            if (other.rops != null)
                return false;
        } else if (!rops.equals(other.rops))
            return false;
        if (sexo == null) {
            if (other.sexo != null)
                return false;
        } else if (!sexo.equals(other.sexo))
            return false;
        return true;
    }

    // ****************************** GETs e SETs ******************************
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Calendar getDataNascimento() {
        return dataNascimento;
    }

    public String getDataNascimentoFormatada() {
        return CassUtil.getDataFormatada(dataNascimento);
    }

    public void setDataNascimento(Calendar dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = CassUtil.converterDataStringParaCalendar(dataNascimento);
    }

    public String getCpf() {
        return cpf;
    }

    public String getCpfFormatado() {
        return CassUtil.getCPFFormatado(cpf);
    }

    public void setCpf(String cpf) {
        this.cpf = CassUtil.removerMascara(cpf);
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getPai() {
        return pai;
    }

    public void setPai(String pai) {
        this.pai = pai;
    }

    public String getMae() {
        return mae;
    }

    public void setMae(String mae) {
        this.mae = mae;
    }

    public Sexo getSexo() {
        return sexo;
    }

    public void setSexo(Sexo sexo) {
        this.sexo = sexo;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public Boolean getFerido() {
        return ferido;
    }

    public void setFerido(Boolean ferido) {
        this.ferido = ferido;
    }

    public int compareTo(Individuo o) {
        // TODO Auto-generated method stub
        return 0;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public Individuo_Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Individuo_Endereco endereco) {
        this.endereco = endereco;
    }

}
