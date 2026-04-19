import { useState } from "react";

// Contadoras activas actualmente (Yolenny salió en marzo, Milka ahora es freelance con 1 cliente)
const CONTADORAS_ACTIVAS = ["Taina", "Beliani", "Yessica", "Karina", "Victoria"];
// Karina Sánchez = Gerente de Impuestos, maneja 3 clientes por el tipo de cuenta
// Milka = freelance, solo maneja Mab Arquitectura

const MONTHLY_DATA = {
  enero: {
    totalClientes: 28,
    nuevos: ["La Fragaria", "Polux"],
    churn: ["Bonan", "Grupo Lisman", "Nomad"],
    notas: "Domingo Lizardi entró pero sigue sin contar como cliente nuevo (pendiente implementación). Yolenny y Milka aún activas.",
    asignaciones: {
      Yolenny: ["Mv Creative", "PSC", "MSH", "La Fragaria", "Suplident", "La Charpente", "SAV", "Mj Inversiones"],
      Milka: ["Blackbox", "Impact", "Sosa Arquitectura", "Mab Arquitectura"],
      Taina: ["Iris Laura", "Maria Raquel", "Unfold"],
      Beliani: [],
      Yessica: ["Tricargo", "Audiobap", "RB Raquel Bencosme", "Enlaces", "Kalma"],
      Karina: ["CLC", "Vitalie", "Fleximoney"],
      Victoria: ["Gestaf", "Grupisa", "Kaizen"],
    },
  },
  febrero: {
    totalClientes: 27,
    nuevos: ["Dr. Maurice Morel", "Louis Maurice Morel"],
    churn: [],
    notas: "Yolenny y Milka aún activas.",
    asignaciones: {
      Yolenny: ["Mv Creative", "PSC", "MSH", "La Fragaria", "Suplident", "La Charpente", "SAV", "Mj Inversiones"],
      Milka: ["Blackbox", "Impact", "Sosa Arquitectura", "Mab Arquitectura"],
      Taina: ["Iris Laura", "Maria Raquel", "Unfold"],
      Beliani: [],
      Yessica: ["Tricargo", "Audiobap", "RB Raquel Bencosme", "Enlaces", "Kalma"],
      Karina: ["CLC", "Vitalie", "Fleximoney"],
      Victoria: ["Gestaf", "Grupisa", "Kaizen", "Dr. Maurice Morel", "Louis Maurice Morel"],
    },
  },
  marzo: {
    totalClientes: 29,
    nuevos: ["Oleica", "Tic Tag"],
    churn: ["Tricargo", "Audiobap"],
    notas: "Último mes de Yolenny y Milka a tiempo completo. Tricargo y Audiobap salieron. Oleica y Tic Tag entraron.",
    asignaciones: {
      Yolenny: ["Mv Creative", "PSC", "MSH", "La Fragaria", "Suplident", "La Charpente", "SAV", "Mj Inversiones"],
      Milka: ["Blackbox", "Impact", "Sosa Arquitectura", "Mab Arquitectura"],
      Taina: ["Iris Laura", "Maria Raquel", "Unfold"],
      Beliani: ["Oleica"],
      Yessica: ["Tic Tag", "RB Raquel Bencosme", "Enlaces", "Kalma"],
      Karina: ["CLC", "Vitalie", "Fleximoney"],
      Victoria: ["Gestaf", "Grupisa", "Kaizen", "Polux", "Dr. Maurice Morel", "Louis Maurice Morel"],
    },
  },
  abril: {
    totalClientes: 29,
    nuevos: ["Dior Legal", "Igsan"],
    churn: [],
    notas: "Rebalance: Yolenny salió, Milka pasa a freelance (solo Mab). Clientes redistribuidos. Dior Legal, Igsan y Domingo Lizardi pendientes de asignación.",
    asignaciones: {
      Taina: ["Blackbox", "Impact", "PSC", "MSH", "La Fragaria"],
      Beliani: ["Mv Creative", "Iris Laura", "Maria Raquel", "Oleica", "Sosa Arquitectura", "Suplident", "La Charpente", "Unfold"],
      Yessica: ["Tic Tag", "RB Raquel Bencosme", "SAV", "Enlaces", "Kalma", "Mj Inversiones"],
      Karina: ["CLC", "Vitalie", "Fleximoney"],
      Victoria: ["Gestaf", "Grupisa", "Kaizen", "Polux", "Dr. Maurice Morel", "Louis Maurice Morel"],
      "Milka (freelance)": ["Mab Arquitectura"],
      "Sin asignar": ["Dior Legal", "Igsan", "Domingo Lizardi"],
    },
  },
  mayo: {
    totalClientes: null,
    nuevos: [],
    churn: [],
    notas: "",
    asignaciones: {},
  },
  junio: { totalClientes: null, nuevos: [], churn: [], notas: "", asignaciones: {} },
  julio: { totalClientes: null, nuevos: [], churn: [], notas: "", asignaciones: {} },
  agosto: { totalClientes: null, nuevos: [], churn: [], notas: "", asignaciones: {} },
  septiembre: { totalClientes: null, nuevos: [], churn: [], notas: "", asignaciones: {} },
  octubre: { totalClientes: null, nuevos: [], churn: [], notas: "", asignaciones: {} },
  noviembre: { totalClientes: null, nuevos: [], churn: [], notas: "", asignaciones: {} },
  diciembre: { totalClientes: null, nuevos: [], churn: [], notas: "", asignaciones: {} },
};

const MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const MESES_LABEL = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

const COLORS = {
  Taina: "#3b82f6",
  Beliani: "#8b5cf6",
  Yessica: "#f59e0b",
  Karina: "#10b981",
  Victoria: "#ec4899",
  Yolenny: "#f97316",
  Milka: "#6366f1",
  "Milka (freelance)": "#6366f1",
  "Sin asignar": "#9ca3af",
};

function StatCard({ label, value, sub, color }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
      <p className={`text-3xl font-bold mt-1 ${color || "text-gray-900"}`}>{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

function Badge({ text, type }) {
  const styles = {
    new: "bg-emerald-50 text-emerald-700 border-emerald-200",
    churn: "bg-red-50 text-red-700 border-red-200",
    neutral: "bg-gray-50 text-gray-600 border-gray-200",
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium border ${styles[type] || styles.neutral}`}>
      {text}
    </span>
  );
}

function LoadBar({ name, count, max }) {
  const pct = max > 0 ? (count / max) * 100 : 0;
  const bg = COLORS[name] || "#94a3b8";
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span className="text-sm font-medium w-20 text-gray-700">{name}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
        <div className="h-full rounded-full flex items-center px-2 transition-all duration-300" style={{ width: `${Math.max(pct, 8)}%`, backgroundColor: bg }}>
          <span className="text-xs font-bold text-white">{count}</span>
        </div>
      </div>
    </div>
  );
}

export default function ControlClientes() {
  const [mesActivo, setMesActivo] = useState("abril");

  const data = MONTHLY_DATA[mesActivo];
  const asig = data.asignaciones || {};

  const totalNuevosAnio = MESES.reduce((sum, m) => sum + MONTHLY_DATA[m].nuevos.length, 0);
  const totalChurnAnio = MESES.reduce((sum, m) => sum + MONTHLY_DATA[m].churn.length, 0);

  const maxCarga = Math.max(...Object.values(asig).map((c) => c.length), 1);
  const clientesAsignados = Object.entries(asig).sort((a, b) => b[1].length - a[1].length);

  const mesesConDatos = MESES.filter((m) => MONTHLY_DATA[m].totalClientes !== null);
  const ultimoMesConDatos = mesesConDatos[mesesConDatos.length - 1];
  const clientesActual = MONTHLY_DATA[ultimoMesConDatos]?.totalClientes || "—";

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Control de Clientes y Carga</h1>
          <p className="text-sm text-gray-500 mt-1">Account One — 2026</p>
        </div>

        {/* Resumen anual */}
        <div className="grid grid-cols-2 gap-3 mb-6" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          <StatCard label="Clientes actuales" value={clientesActual} />
          <StatCard label="Nuevos en 2026" value={totalNuevosAnio} color="text-emerald-600" />
          <StatCard label="Churn en 2026" value={totalChurnAnio} color="text-red-500" />
          <StatCard label="Contadoras activas" value={CONTADORAS_ACTIVAS.length} sub="+ Milka (freelance)" />
        </div>

        {/* Tabs de meses */}
        <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
          {MESES.map((m, i) => {
            const tieneData = MONTHLY_DATA[m].totalClientes !== null;
            return (
              <button
                key={m}
                onClick={() => tieneData && setMesActivo(m)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  mesActivo === m
                    ? "bg-blue-600 text-white shadow-sm"
                    : tieneData
                    ? "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    : "bg-gray-100 text-gray-300 cursor-not-allowed"
                }`}
              >
                {MESES_LABEL[i]}
              </button>
            );
          })}
        </div>

        {/* Contenido del mes */}
        {data.totalClientes !== null ? (
          <div className="space-y-4">
            {/* Stats del mes */}
            <div className="grid grid-cols-3 gap-3">
              <StatCard label={`Total ${MESES_LABEL[MESES.indexOf(mesActivo)]}`} value={data.totalClientes} />
              <StatCard label="Entraron" value={data.nuevos.length} color="text-emerald-600" sub={data.nuevos.length > 0 ? data.nuevos.join(", ") : "—"} />
              <StatCard label="Salieron" value={data.churn.length} color="text-red-500" sub={data.churn.length > 0 ? data.churn.join(", ") : "—"} />
            </div>

            {/* Notas */}
            {data.notas && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-amber-800">{data.notas}</p>
              </div>
            )}

            {/* Carga por contadora */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Carga por contadora</h3>
              <div className="space-y-1">
                {clientesAsignados.map(([nombre, clientes]) => (
                  <LoadBar key={nombre} name={nombre} count={clientes.length} max={maxCarga} />
                ))}
              </div>
            </div>

            {/* Detalle de clientes por contadora */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Clientes por contadora</h3>
              <div className="space-y-4">
                {clientesAsignados.map(([nombre, clientes]) => (
                  <div key={nombre}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[nombre] || "#94a3b8" }} />
                      <span className="text-sm font-medium text-gray-700">{nombre}</span>
                      <span className="text-xs text-gray-400">({clientes.length})</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 ml-5">
                      {clientes.map((c) => {
                        const esNuevo = data.nuevos.includes(c);
                        return <Badge key={c} text={c} type={esNuevo ? "new" : "neutral"} />;
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini timeline */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Evolución de clientes</h3>
              <div className="flex items-end gap-2 h-32">
                {mesesConDatos.map((m, i) => {
                  const val = MONTHLY_DATA[m].totalClientes;
                  const maxVal = Math.max(...mesesConDatos.map((x) => MONTHLY_DATA[x].totalClientes));
                  const minVal = Math.min(...mesesConDatos.map((x) => MONTHLY_DATA[x].totalClientes));
                  const range = maxVal - minVal || 1;
                  const heightPct = 40 + ((val - minVal) / range) * 60;
                  const isActive = m === mesActivo;
                  return (
                    <div key={m} className="flex-1 flex flex-col items-center gap-1 cursor-pointer" onClick={() => setMesActivo(m)}>
                      <span className={`text-xs font-bold ${isActive ? "text-blue-600" : "text-gray-500"}`}>{val}</span>
                      <div
                        className={`w-full rounded-t-md transition-all ${isActive ? "bg-blue-500" : "bg-blue-200"}`}
                        style={{ height: `${heightPct}%` }}
                      />
                      <span className={`text-xs ${isActive ? "text-blue-600 font-medium" : "text-gray-400"}`}>
                        {MESES_LABEL[MESES.indexOf(m)]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100 text-center">
            <p className="text-gray-400 text-sm">Sin datos para este mes todavía.</p>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-xs text-gray-300 mt-6">
          Última actualización: 16 abril 2026 — Dile a Claude qué cambiar
        </p>
      </div>
    </div>
  );
}
