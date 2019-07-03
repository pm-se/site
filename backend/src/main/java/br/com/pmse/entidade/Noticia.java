package br.com.pmse.entidade;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Calendar;

@Entity
public class Noticia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "dt_criacao")
    private Calendar dataCriacao;
    @Column(name = "dt_publicacao")
    private Calendar dataPublicacao;
    @Column(name = "nm_titulo")
    private String titulo;
    @Type(type = "text")
    @Column(name = "conteudo")
    private String conteudo;
    @Column(name = "bl_destaque", columnDefinition = "tinyint default 0")
    private boolean destaque;

    @ManyToOne
    @JoinColumn(name = "fk_categoria")
    private Tipo categoria;
    @ManyToOne
    @JoinColumn(name = "fk_autor")
    private Pessoa autor;
    @ManyToOne
    @JoinColumn(name = "fk_status")
    private Status status;

    public Noticia() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Tipo getCategoria() {
        return categoria;
    }

    public void setCategoria(Tipo categoria) {
        this.categoria = categoria;
    }

    public Calendar getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(Calendar dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public Pessoa getAutor() {
        return autor;
    }

    public void setAutor(Pessoa autor) {
        this.autor = autor;
    }

    public boolean isDestaque() {
        return destaque;
    }

    public void setDestaque(boolean destaque) {
        this.destaque = destaque;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Calendar getDataPublicacao() {
        return dataPublicacao;
    }

    public void setDataPublicacao(Calendar dataPublicacao) {
        this.dataPublicacao = dataPublicacao;
    }
}
