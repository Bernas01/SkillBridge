
import React, { useEffect, useState } from 'react'
import profilesData from './data/profiles.json'

function ProfileCard({p, onOpen}){
  return (
    <article className="card" onClick={()=>onOpen(p)} style={{cursor:'pointer'}}>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <img src={p.foto} alt={p.nome} style={{width:64,height:64,borderRadius:999}}/>
        <div>
          <h3 style={{margin:0}}>{p.nome}</h3>
          <p style={{margin:0,color:'#64748b'}}>{p.cargo} • {p.localizacao}</p>
          <div style={{marginTop:8}}>
            {p.habilidadesTecnicas.slice(0,3).map(s=> <span key={s} className="badge">{s}</span>)}
          </div>
        </div>
      </div>
    </article>
  )
}

function Modal({p, onClose, onRecommend, onMessage}){
  if(!p) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e=>e.stopPropagation()}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h2>{p.nome} — {p.cargo}</h2>
          <button className="btn" onClick={onClose}>Fechar</button>
        </div>
        <p style={{color:'#64748b'}}>{p.resumo}</p>
        <hr/>
        <h4>Formação</h4>
        <ul>{p.formacao.map((f,idx)=>(<li key={idx}>{f.curso} — {f.instituicao} ({f.ano})</li>))}</ul>
        <h4>Experiências</h4>
        <ul>{p.experiencias.map((e,idx)=>(<li key={idx}>{e.cargo} em {e.empresa} ({e.inicio} — {e.fim}) — {e.descricao}</li>))}</ul>
        <h4>Habilidades Técnicas</h4>
        <div>{p.habilidadesTecnicas.map((s,idx)=>(<span key={idx} className="badge">{s}</span>))}</div>
        <h4>Soft Skills & Hobbies</h4>
        <div>{p.softSkills.map((s,idx)=>(<span key={idx} className="badge">{s}</span>))} • {p.areaInteresses.join(', ')}</div>
        <div style={{marginTop:12,display:'flex',gap:8}}>
          <button className="btn btn-primary" onClick={()=>onRecommend(p.id)}>Recomendar profissional</button>
          <button className="btn" onClick={()=>onMessage(p.id)}>Enviar mensagem</button>
        </div>
      </div>
    </div>
  )
}

export default function App(){
  const [profiles, setProfiles] = useState([])
  const [query, setQuery] = useState('')
  const [area, setArea] = useState('Todos')
  const [city, setCity] = useState('Todos')
  const [selected, setSelected] = useState(null)
  const [dark, setDark] = useState(false)

  useEffect(()=>{
    setProfiles(profilesData)
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefers)
    document.documentElement.classList.toggle('dark', prefers)
  },[])

  const areas = ['Todos', ...Array.from(new Set(profiles.map(p=>p.area)))]
  const cities = ['Todos', ...Array.from(new Set(profiles.map(p=>p.localizacao)))]

  const filtered = profiles.filter(p=>{
    const q = (p.nome + ' ' + p.cargo + ' ' + p.habilidadesTecnicas.join(' ')).toLowerCase()
    return q.includes(query.toLowerCase()) && (area==='Todos' || p.area===area) && (city==='Todos' || p.localizacao===city)
  })

  function handleRecommend(id){
    alert('Recomendação enviada para o perfil #' + id + ' (simulação)')
  }
  function handleMessage(id){
    const msg = prompt('Escreva a mensagem para o usuário (simulação):')
    if(msg) alert('Mensagem enviada: ' + msg)
  }

  return (
    <div className={dark? 'dark':''}>
      <div className="container">
        <header className="header">
          <div>
            <h1>SkillBridge — Rede Profissional (Demo)</h1>
            <p style={{margin:0,color:'#64748b'}}>Conectando pessoas, competências e propósito</p>
          </div>
          <div className="filters">
            <input className="search" placeholder="Buscar por nome, cargo ou skill" value={query} onChange={e=>setQuery(e.target.value)}/>
            <select value={area} onChange={e=>setArea(e.target.value)} style={{padding:8,borderRadius:8}}>
              {areas.map(a=> <option key={a} value={a}>{a}</option>)}
            </select>
            <select value={city} onChange={e=>setCity(e.target.value)} style={{padding:8,borderRadius:8}}>
              {cities.map(c=> <option key={c} value={c}>{c}</option>)}
            </select>
            <button className="btn" onClick={()=>{setDark(d=>!d);document.documentElement.classList.toggle('dark')}}>{dark? 'Light':'Dark'}</button>
          </div>
        </header>

        <main>
          <section className="grid">
            {filtered.map(p=> <ProfileCard key={p.id} p={p} onOpen={setSelected}/>)}
          </section>
        </main>

        <Modal p={selected} onClose={()=>setSelected(null)} onRecommend={handleRecommend} onMessage={handleMessage}/>
      </div>
    </div>
  )
}
