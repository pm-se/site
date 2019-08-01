package br.com.pmse.entidade;

import br.com.pmse.pm.CassUtil;
import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.Index;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.util.List;

@Entity
@ForeignKey(name="FK_Pessoa_Policial_id")
public class Policial extends Pessoa {

    private static final long serialVersionUID = 1L;

    @Column(name="nm_matricula", length=12, nullable=false, unique=true)
    private String matricula;

    @Index(name="nm_nomeGuerra")
    @Column(name="nm_nomeGuerra", length=25, nullable=false)
    private String nomeGuerra;

    @Index(name="nm_rgFuncional")
    @Column(name="nm_rgFuncional", length=25, nullable=false)
    private String rgFuncional;

    @Column(name="in_conceitoPontuacao", nullable=false, columnDefinition="int default 0")
    private Integer conceitoPontuacao;

    @Column(name="in_antiguidade", nullable=false, columnDefinition="int default 9999")
    private Integer antiguidade;

    @Column(name="in_antiguidadeQuadro", nullable=false, columnDefinition="int default 9999")
    private Integer antiguidadeQuadro;

    @Index(name="nm_inatividadeBgo")
    @Column(name="nm_inatividadeBgo", length=3)
    private String inatividadeBgo;

    @Index(name="in_inatividadeBgoAno")
    @Column(name="in_inatividadeBgoAno")
    private Integer inatividadeBgoAno;

    @Index(name="nm_inatividadePortaria")
    @Column(name="nm_inatividadePortaria", length=5)
    private String inatividadePortaria;

    @Index(name="in_inatividadePortariaAno")
    @Column(name="in_inatividadePortariaAno")
    private Integer inatividadePortariaAno;

    @Column(name="tx_inatividadeObservacao", columnDefinition="longtext")
    private String inatividadeObservacao;

    @Column(name="nm_numeroPapel")
    private String numeroPapel;

    // **************************** RELACIONAMENTOS *************************


    // **************************** CONTRUTORES *****************************
    public Policial() {}



    // ****************** HASH, EQUALS, COMPARETO, TOSTRING *****************
    @Override
    public int hashCode() {
        return super.hashCode();
    }


    // **************************** GETs e SETs *****************************
    public String getMatricula() {
        return matricula;
    }

    public String getMatriculaFormatada() {
        return matricula == null ? null : matricula.length() < 12 ? CassUtil.mascarar(matricula, "######-##") : CassUtil.mascarar(matricula, "##########-##");
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula == null || matricula.isEmpty() ? null : CassUtil.removerMascara(matricula);
    }

    public String getNomeGuerra() {
        return nomeGuerra;
    }

    public void setNomeGuerra(String nomeGuerra) {
        this.nomeGuerra = nomeGuerra == null || nomeGuerra.isEmpty() ? null : nomeGuerra.trim();
    }

    public String getRgFuncional() {
        return rgFuncional;
    }

    public void setRgFuncional(String rgFuncional) {
        this.rgFuncional = rgFuncional == null || rgFuncional.isEmpty() ? null : rgFuncional.trim();
    }

    public Integer getConceitoPontuacao() {
        return conceitoPontuacao;
    }

    public void setConceitoPontuacao(Integer conceitoPontuacao) {
        this.conceitoPontuacao = conceitoPontuacao;
    }

    public void setConceitoPontuacao(String conceitoPontuacao) {
        this.conceitoPontuacao = conceitoPontuacao == null || conceitoPontuacao.isEmpty() ? null : Integer.valueOf(conceitoPontuacao);
    }

    public Integer getAntiguidade() {
        return antiguidade;
    }

    public void setAntiguidade(Integer antiguidade) {
        this.antiguidade = antiguidade;
    }

    public void setAntiguidade(String antiguidade) {
        this.antiguidade = antiguidade == null || antiguidade.isEmpty() ? null : Integer.valueOf(antiguidade);
    }

    public Integer getAntiguidadeQuadro() {
        return antiguidadeQuadro;
    }

    public void setAntiguidadeQuadro(Integer antiguidadeQuadro) {
        this.antiguidadeQuadro = antiguidadeQuadro;
    }

    public void setAntiguidadeQuadro(String antiguidadeQuadro) {
        this.antiguidadeQuadro = antiguidadeQuadro == null || antiguidadeQuadro.isEmpty() ? null : Integer.valueOf(antiguidadeQuadro);
    }

    public String getInatividadeBgo() {
        return inatividadeBgo;
    }

    public void setInatividadeBgo(String inatividadeBgo) {
        this.inatividadeBgo = inatividadeBgo;
    }

    public Integer getInatividadeBgoAno() {
        return inatividadeBgoAno;
    }

    public void setInatividadeBgoAno(Integer inatividadeBgoAno) {
        this.inatividadeBgoAno = inatividadeBgoAno;
    }

    public String getInatividadePortaria() {
        return inatividadePortaria;
    }

    public void setInatividadePortaria(String inatividadePortaria) {
        this.inatividadePortaria = inatividadePortaria;
    }

    public Integer getInatividadePortariaAno() {
        return inatividadePortariaAno;
    }

    public void setInatividadePortariaAno(Integer inatividadePortariaAno) {
        this.inatividadePortariaAno = inatividadePortariaAno;
    }

    public String getInatividadeObservacao() {
        return inatividadeObservacao;
    }

    public void setInatividadeObservacao(String inatividadeObservacao) {
        this.inatividadeObservacao = inatividadeObservacao;
    }

    public String getNumeroPapel() {
        return numeroPapel;
    }

    public void setNumeroPapel(String numeroPapel) {
        this.numeroPapel = numeroPapel;
    }
}

