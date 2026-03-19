# Exercício 7/7 — Divisão de tarefas da equipe

## Ordem de execução

```
Kelvin  → Vou publicar e aí é com vcs.
Iany    → git pull → aplica parteIany.md → push
Gabriel → git pull → aplica parteGabriel.md → push
Ryan    → git pull → aplica parteRyan.md → push
```

> Sempre executar `git pull` antes de começar pra pegar a versão mais recente guys!

---

## O que cada um precisa fazer

| Arquivo | Responsável | Tarefas |
|---------|-------------|---------|
| [parteIany.md](parteIany.md) | Iany | `Header.jsx` com NavLink · `PaginaInicio.jsx` com resumo por tipo · `PaginaNaoEncontrada.jsx` |
| [parteGabriel.md](parteGabriel.md) | Gabriel | `HabitCard.jsx` com ícone/tipo/cor/link detalhes · `PaginaDetalhes.jsx` com logs |
| [parteRyan.md](parteRyan.md) | Ryan | `HabitList.jsx` com tipo/cor/navigate · `PaginaHabitos.jsx` · `App.css` completo com grid |

Na minha cabeça eu to arrasando kkkk
---

## Rotas da aplicação (já configuradas por este que vós fala ok?)

| URL | Página | Quem implementou a página |
|-----|--------|--------------------------|
| `/` | `PaginaInicio` | Iany |
| `/habitos` | `PaginaHabitos` | Ryan |
| `/habito/:id` | `PaginaDetalhes` | Gabriel |
| `*` (qualquer outra) | `PaginaNaoEncontrada` | Iany |

---

## Funcionalidades novas nesta versão pra pisar na cabeça da concorrência!!!

- Cor personalizada por hábito (color picker no formulário, borda colorida no card).
- Tipo do hábito: **manter** ou **parar** — com ícone diferente em cada card daqueles que subi ontem na aula.
- Grade responsiva: até 3 cards por linha.
- Registro diário de progresso (`registrarDia`) e logs de texto por hábito.
- Ícones: `src/assets/habitos.png` e `src/assets/mau-habito.png`.

- E eh isto, abraços e até mais tarde!