import { useEffect, useMemo, useState } from 'react'
import { cards as ALL } from './cards.js'

const CATS = ['Všetko', ...Array.from(new Set(ALL.map((c) => c.cat)))]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const eqSet = (a, b) => a.length === b.length && a.every((x) => b.includes(x))

export default function App() {
  const [cat, setCat] = useState('Všetko')
  const [order, setOrder] = useState(() => ALL.map((_, i) => i))
  const [pos, setPos] = useState(0)
  const [selected, setSelected] = useState([]) // vybrané možnosti aktuálnej karty
  const [checked, setChecked] = useState(false) // už vyhodnotené?
  const [score, setScore] = useState({ ok: 0, bad: 0 })

  const deck = useMemo(
    () => order.filter((i) => cat === 'Všetko' || ALL[i].cat === cat),
    [order, cat],
  )

  useEffect(() => { setPos(0) }, [cat])
  useEffect(() => { setSelected([]); setChecked(false) }, [pos, cat, order])

  const curIdx = deck[pos]
  const card = curIdx != null ? ALL[curIdx] : null
  const isCorrect = card && checked && eqSet(selected, card.correct)

  const toggle = (i) => {
    if (checked || !card) return
    if (card.multi) {
      setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]))
    } else {
      setSelected([i])
    }
  }

  const check = () => {
    if (!card || selected.length === 0) return
    const ok = eqSet(selected, card.correct)
    setChecked(true)
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), bad: s.bad + (ok ? 0 : 1) }))
  }

  const go = (d) => {
    if (deck.length === 0) return
    setPos((p) => (p + d + deck.length) % deck.length)
  }

  // stav konkrétnej možnosti pre farbenie
  const optState = (i) => {
    if (!checked) return selected.includes(i) ? 'sel' : ''
    if (card.correct.includes(i)) return 'right'
    if (selected.includes(i)) return 'wrong'
    return ''
  }

  return (
    <div className="wrap">
      <header>
        <h1>Kvízové kartičky</h1>
        <p className="sub">Bezpečnosť · siete · biometria · kryptografia — {ALL.length} otázok</p>
      </header>

      <div className="cats">
        {CATS.map((c) => (
          <button key={c} className={'chip' + (c === cat ? ' active' : '')} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>

      <div className="topbar">
        <button className="btn ghost" onClick={() => { setOrder(shuffle(order)); setPos(0) }}>🔀 Zamiešať</button>
        <span className="score">✓ {score.ok} &nbsp; ✗ {score.bad}</span>
        <button className="btn ghost" onClick={() => setScore({ ok: 0, bad: 0 })}>♻︎ Reset skóre</button>
      </div>

      {card ? (
        <>
          <div className="counter">
            {pos + 1} / {deck.length}
            <span className="cat-tag">{card.cat}</span>
            {card.multi && <span className="multi-tag">viac správnych</span>}
          </div>

          <div className="question">{card.q}</div>

          <div className="options">
            {card.options.map((opt, i) => (
              <button key={i} className={'opt ' + optState(i)} onClick={() => toggle(i)} disabled={checked}>
                <span className="mark">{checked && card.correct.includes(i) ? '✓' : checked && selected.includes(i) ? '✗' : selected.includes(i) ? '●' : ''}</span>
                {opt}
              </button>
            ))}
          </div>

          {checked && (
            <div className={'verdict ' + (isCorrect ? 'ok' : 'no')}>
              {isCorrect ? 'Správne! 🎉' : 'Nesprávne. Správna odpoveď je vyznačená zelenou.'}
            </div>
          )}

          <div className="actions">
            <button className="btn nav" onClick={() => go(-1)}>← Späť</button>
            {!checked ? (
              <button className="btn primary" onClick={check} disabled={selected.length === 0}>Vyhodnotiť</button>
            ) : (
              <button className="btn primary" onClick={() => go(1)}>Ďalej →</button>
            )}
            <button className="btn nav" onClick={() => go(1)}>Preskočiť →</button>
          </div>
        </>
      ) : (
        <div className="empty">Žiadne otázky v tejto kategórii.</div>
      )}
    </div>
  )
}
