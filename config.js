/**
 * Configuração — Monteiro Lobato Futsal (site dedicado).
 *
 * GOOGLE_SCRIPT_URL é a mesma implantação do ndf-futsal (mesma planilha).
 * Não altere a URL /exec sem atualizar também o projeto ndf-futsal.
 */
window.NDF_CONFIG = {
  // Mesma URL /exec do ndf-futsal → mesma planilha Google Sheets
  GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzC7UYY24Q6Bjm-y5nrBw7BnzvSuRytuoi46MNKRf60Q1pAjRBJYx5m8TOYooMBlFvaHw/exec",

  // Fallback (não usado se a unidade tiver `planos` próprio)
  PLANOS: [],

  PAYMENT_LINKS: {
    "1x": "#",
    "5x": "#",
    "8x": "#",
    "10x": "#",
    "11x": "#",
    mensal: "#",
  },

  UNIDADES: {
    "monteiro-lobato": {
      id: "monteiro-lobato",
      nome: "Monteiro Lobato Futsal",
      aba: "Monteiro Lobato Futsal",
      slogan: "Esporte e educação no mesmo ritmo",
      local: "Escola Monteiro Lobato",
      diasLabel: "Terça e Quinta",
      planos: [
        { id: "1x", label: "Parcela Única de R$ 1.550,00", parcelas: 1, valorParcela: 1550, valorTotal: 1550, tipo: "anual" },
        { id: "5x", label: "5 Parcelas de R$ 320,00", parcelas: 5, valorParcela: 320, valorTotal: 1600, tipo: "anual" },
        { id: "8x", label: "8 Parcelas de R$ 200,00", parcelas: 8, valorParcela: 200, valorTotal: 1600, tipo: "anual" },
        { id: "10x", label: "10 Parcelas de R$ 160,00", parcelas: 10, valorParcela: 160, valorTotal: 1600, tipo: "anual" },
        { id: "11x", label: "11 Parcelas de R$ 150,00", parcelas: 11, valorParcela: 150, valorTotal: 1650, tipo: "anual" },
        { id: "mensal", label: "Parcela de R$ 195,00", parcelas: 1, valorParcela: 195, valorTotal: 195, tipo: "mensal" },
      ],
      paymentLinks: {
        "1x": "COLE_AQUI_LINK_AVISTA",
        "5x": "COLE_AQUI_LINK_5X",
        "8x": "COLE_AQUI_LINK_8X",
        "10x": "COLE_AQUI_LINK_10X",
        "11x": "COLE_AQUI_LINK_11X",
      },
      paymentLinksIdeia: {
        mensal: "COLE_AQUI_LINK_MENSAL",
      },
      horarios: [
        {
          id: "ml-t3-1730-2019-2017",
          dias: "Terça e Quinta",
          horario: "17:30 às 18:30",
          turma: "Nascidos 2019, 2018 e 2017",
          local: "Escola Monteiro Lobato",
          label: "17:30 às 18:30 — Nascidos 2019, 2018 e 2017",
        },
        {
          id: "ml-t3-1830-2016-2014",
          dias: "Terça e Quinta",
          horario: "18:30 às 19:30",
          turma: "Nascidos 2016, 2015 e 2014",
          local: "Escola Monteiro Lobato",
          label: "18:30 às 19:30 — Nascidos 2016, 2015 e 2014",
        },
        {
          id: "ml-t3-1930-2013-2011",
          dias: "Terça e Quinta",
          horario: "19:30 às 20:30",
          turma: "Nascidos 2013, 2012 e 2011",
          local: "Escola Monteiro Lobato",
          label: "19:30 às 20:30 — Nascidos 2013, 2012 e 2011",
        },
      ],
    },
  },
};
