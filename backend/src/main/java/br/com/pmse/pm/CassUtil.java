package br.com.pmse.pm;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class CassUtil {

    public static String removerMascara(String valor) {
        valor = valor.replaceAll("\\.", "");
        valor = valor.replaceAll("\\/", "");
        valor = valor.replaceAll("\\-", "");
        valor = valor.replaceAll("\\(", "");
        valor = valor.replaceAll("\\)", "");

        return valor;
    }

    public static String mascarar(String valor, String mascara) {
        StringBuilder dado = new StringBuilder();
        // remove caracteres não numéricos
        for (int i = 0; i < valor.length(); i++) {
            char c = valor.charAt(i);
            if (Character.isDigit(c)) {
                dado.append(c);
            }
        }

        int indMascara = mascara.length();
        int indCampo = dado.length();

        for (; indCampo > 0 && indMascara > 0; ) {
            if (mascara.charAt(--indMascara) == '#')
                indCampo--;
        }
        int indMascara2 = indMascara;
        StringBuilder saida = new StringBuilder();
        for (; indMascara2 < mascara.length(); indMascara2++)
            saida.append((mascara.charAt(indMascara2) == '#') ? dado.charAt(indCampo++) : mascara.charAt(indMascara2));

        return saida.toString();
    }


    public static String getCPFFormatado(String cpf) {
        return cpf == null || cpf.isEmpty() ? "" : mascarar(cpf, "###.###.###-##");
    }

    public static String getDataFormatada(Calendar data) {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        return data == null ? "" : sdf.format(data.getTime());
    }

    public static String getDataHoraFormatada(Calendar data) {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm");

        return data == null ? "" : sdf.format(data.getTime());
    }

    public static Calendar converterDataHoraStringParaCalendar(String dataHora) {
        if (dataHora == null || dataHora.isEmpty())
            return null;

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm");
        if (dataHora.contains("-")) {
            dataHora = dataHora.replace("T", " ");
            sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        }
        Calendar dh = Calendar.getInstance();
        try {
            dh.setTime(sdf.parse(dataHora));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return dh;
    }

    public static Calendar converterDataStringParaCalendar(String data) {
        if (data == null || data.isEmpty())
            return null;

        SimpleDateFormat sdf;

        if (data.contains("-")) {
            sdf = new SimpleDateFormat("yyyy-MM-dd");
        } else {
            sdf = new SimpleDateFormat("dd/MM/yyyy");
        }

        Calendar dt = Calendar.getInstance();
        try {
            dt.setTime(sdf.parse(data));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return dt;
    }

}
