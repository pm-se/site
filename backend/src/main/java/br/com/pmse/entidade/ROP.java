package br.com.pmse.entidade;

import br.com.pmse.pm.CassUtil;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Calendar;
import java.util.List;
import java.util.Set;

@Entity
public class ROP implements Serializable, Comparable<ROP> {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dh_criacao", nullable = false, columnDefinition="datetime")
    private Calendar dataHoraCriacao;

    @Column(name="numero", length=10, nullable=false)
    private String numero;

    @Column(name="nm_numeroCiosp", length=150)
    private String numeroCiosp;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dh_fato", nullable = false)
    private Calendar dataHoraFato;

    @Type(type = "text")
    @Column(name = "tx_historico")
    private String historico;

    @Column(name="nm_logradouro", length=150)
    private String logradouro;

    @Column(name="nm_bairro", length=100)
    private String bairro;

    @Column(name="nm_destinatario", length=100)
    private String destinatario;

    @Column(name="nm_logradouroNumero", length=5)
    private String logradouroNumero;

    @Column(name="nm_prontoReferencia", length=100)
    private String pontoReferencia;

    @Column(name="nm_maike", length=10)
    private String maike;

    @Column(name="fl_finalizar", length=2)
    private String finalizar;

    @Column(name="nm_agendamento", length=10, nullable=true)
    private String horaAgendamento;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dh_agendamento", nullable=true)
    private Calendar dataAgendamento;

    @Column(name="nu_latitude", precision = 10, scale = 7, nullable=true)
    private BigDecimal latitude;

    @Column(name="nu_longitude", precision = 10, scale = 7, nullable=true)
    private BigDecimal longitude;

    @Column(name="fl_cancelar", length=2)
    private String cancelar;

    @Column(name="nm_horafato", length=10)
    private String horaFato;

    @Column(name="bl_isEleicao", nullable=false, columnDefinition="tinyint default 0")
    private boolean isEleicao;

    @Column(name="nm_razaoSocial", length=255)
    private String razaoSocial;

    @Column(name="nm_nomeFantasia", length=255)
    private String nomeFantasia;

    @Column(name="nm_enderecoEmpresa", length=255)
    private String enderecoEmpresa;

    @Column(name="nm_telefoneEmpresa")
    private String telefoneEmpresa;

    @Column(name="nu_valorApreendido", precision = 10, scale = 2, nullable = true)
    private BigDecimal valorApreendido;

    // ****************************** RELACIONAMENTO ***************************
    @ManyToMany(mappedBy="rops", fetch=FetchType.LAZY)
    @JsonIgnore
    private Set<Arma_Fogo_Apreendida> armasFogoApreendidas;


    @ManyToMany(mappedBy="rops", fetch=FetchType.LAZY)
    @JsonIgnore
    private Set<Individuo> envolvidos;

    @ManyToMany(fetch=FetchType.LAZY)
    @ForeignKey(name="FK_ROP_ROP_Veiculo_Apreendido",
            inverseName="FK_Veiculo_Apreendido_ROP_Veiculo_Apreendido")
    @JoinTable(name="ROP_Veiculo_Apreendido",
            joinColumns={@JoinColumn(name="fk_rop")},
            inverseJoinColumns={@JoinColumn(name="fk_veiculoApreendido")})
//    @JsonIgnore
    private Set<Veiculo_Apreendido> veiculosApreendidos;



    @ManyToOne(fetch=FetchType.LAZY)
    @ForeignKey(name="FK_Natureza_Ocorrencia_ROP")
    @JoinColumn(name="fk_naturezaOcorrencia", nullable=false)
    @JsonIgnore
    private Natureza_Ocorrencia naturezaOcorrencia;

    @ManyToOne(fetch=FetchType.LAZY)
    @ForeignKey(name="FK_Cidade_ROP")
    @JoinColumn(name="fk_cidade", nullable=false)
    @JsonIgnore
    private Cidade cidade;


    @ManyToOne(fetch=FetchType.LAZY)
    @ForeignKey(name="FK_Subtipo_ROP")
    @JoinColumn(name="fk_subtipo", nullable=true)
    @JsonIgnore
    private Subtipo_Ocorrencia subtipoOcorrencia;

    @OneToMany(mappedBy = "rop")
    @JsonIgnore
    private List<Droga_Apreendida> drogaApreendida;

    // ****************************** CONSTRUTORES *****************************
    public ROP() {}


    // ****************************** HASH e EQUALS ****************************

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
        ROP other = (ROP) obj;
        if (id == null) {
            return other.id == null;
        } else return id.equals(other.id);
    }

    // ****************************** GETs e SETs ******************************
    public String getNumero() {
        return numero;
    }


    public void setNumero(String numero) {
        this.numero = numero;
    }

    public Calendar getDataHoraCriacao() {
        return dataHoraCriacao;
    }

    public String getDataHoraCriacaoFormatada() {
        return CassUtil.getDataHoraFormatada(dataHoraCriacao);
    }

    public void setDataHoraCriacao(Calendar dataHoraCriacao) {
        this.dataHoraCriacao = dataHoraCriacao;
    }

    public void setDataHoraCriacao(String dataHoraCriacao) {
        this.dataHoraCriacao = CassUtil.converterDataHoraStringParaCalendar(dataHoraCriacao);
    }

    public Calendar getDataHoraFato() {
        return dataHoraFato;
    }

    public void setDataHoraFato(Calendar dataHoraFato) {
        this.dataHoraFato = dataHoraFato;
    }

    public String getDataHoraFatoFormatada() {
        return CassUtil.getDataHoraFormatada(dataHoraFato);
    }

    public void setDataHoraFato(String dataHoraFato) {
        this.dataHoraFato = CassUtil.converterDataHoraStringParaCalendar(dataHoraFato);
    }

    public String getHistorico() {
        return historico;
    }

    public void setHistorico(String historico) {
        this.historico = historico;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getLogradouroNumero() {
        return logradouroNumero;
    }

    public void setLogradouroNumero(String logradouroNumero) {
        this.logradouroNumero = logradouroNumero;
    }

    public String getPontoReferencia() {
        return pontoReferencia;
    }

    public void setPontoReferencia(String pontoReferencia) {
        this.pontoReferencia = pontoReferencia;
    }

    public String getMaike() {
        return maike;
    }

    public void setMaike(String maike) {
        this.maike = maike;
    }

    public Set<Arma_Fogo_Apreendida> getArmasFogoApreendidas() {
        return armasFogoApreendidas;
    }

    public void setArmasFogoApreendidas(Set<Arma_Fogo_Apreendida> armasFogoApreendidas) {
        this.armasFogoApreendidas = armasFogoApreendidas;
    }

    public Cidade getCidade() {
        return cidade;
    }

    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }

    public Natureza_Ocorrencia getNaturezaOcorrencia() {
        return naturezaOcorrencia;
    }

    public void setNaturezaOcorrencia(Natureza_Ocorrencia naturezaOcorrencia) {
        this.naturezaOcorrencia = naturezaOcorrencia;
    }

    public Set<Veiculo_Apreendido> getVeiculosApreendidos() {
        return veiculosApreendidos;
    }

    public void setVeiculosApreendidos(Set<Veiculo_Apreendido> veiculosApreendidos) {
        this.veiculosApreendidos = veiculosApreendidos;
    }

    public Set<Individuo> getEnvolvidos() {
        return envolvidos;
    }

    public void setEnvolvidos(Set<Individuo> envolvidos) {
        this.envolvidos = envolvidos;
    }

    public String getDestinatario() {
        return destinatario;
    }

    public void setDestinatario(String destinatario) {
        this.destinatario = destinatario;
    }

    public String getFinalizar() {
        return finalizar;
    }

    public void setFinalizar(String finalizar) {
        this.finalizar = finalizar;
    }

    public String getHoraAgendamento() {
        return horaAgendamento;
    }

    public void setHoraAgendamento(String horaAgendamento) {
        this.horaAgendamento = horaAgendamento;
    }

    public Calendar getDataAgendamento() {
        return dataAgendamento;
    }

    public void setDataAgendamento(Calendar dataAgendamento) {
        this.dataAgendamento = dataAgendamento;
    }

    public void setDataAgendamento(String dataAgendamento) {
        this.dataAgendamento = CassUtil.converterDataStringParaCalendar(dataAgendamento);
    }

    public String getCancelar() {
        return cancelar;
    }

    public void setCancelar(String cancelar) {
        this.cancelar = cancelar;
    }

    public String getHoraFato() {
        return horaFato;
    }

    public void setHoraFato(String horaFato) {
        this.horaFato = horaFato;
    }

    public boolean getIsEleicao() {
        return isEleicao;
    }

    public void setIsEleicao(boolean isEleicao) {
        this.isEleicao = isEleicao;
    }

    public String getNumeroCiosp() {
        return numeroCiosp;
    }

    public void setNumeroCiosp(String numeroCiosp) {
        this.numeroCiosp = numeroCiosp;
    }

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public String getNomeFantasia() {
        return nomeFantasia;
    }

    public void setNomeFantasia(String nomeFantasia) {
        this.nomeFantasia = nomeFantasia;
    }

    public String getEnderecoEmpresa() {
        return enderecoEmpresa;
    }

    public void setEnderecoEmpresa(String enderecoEmpresa) {
        this.enderecoEmpresa = enderecoEmpresa;
    }

    public String getTelefoneEmpresa() {
        return telefoneEmpresa;
    }

    public void setTelefoneEmpresa(String telefoneEmpresa) {
        this.telefoneEmpresa = telefoneEmpresa;
    }

    public int compareTo(ROP o) {
        return this.id.compareTo(o.getId());
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public BigDecimal getLatitude() {
        return latitude;
    }

    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
    }

    public BigDecimal getLongitude() {
        return longitude;
    }

    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }

    public Subtipo_Ocorrencia getSubtipoOcorrencia() {
        return subtipoOcorrencia;
    }

    public void setSubtipoOcorrencia(Subtipo_Ocorrencia subtipoOcorrencia) {
        this.subtipoOcorrencia = subtipoOcorrencia;
    }

    public BigDecimal getValorApreendido() {
        return valorApreendido;
    }

    public void setValorApreendido(BigDecimal valorApreendido) {
        this.valorApreendido = valorApreendido;
    }

    public List<Droga_Apreendida> getDrogaApreendida() {
        return drogaApreendida;
    }

    public void setDrogaApreendida(List<Droga_Apreendida> drogaApreendida) {
        this.drogaApreendida = drogaApreendida;
    }
}
