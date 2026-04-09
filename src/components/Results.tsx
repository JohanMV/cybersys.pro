import StatsCount from '@/components/ui/statscount'

const stats = [
  { value: 50, suffix: '+', label: 'Proyectos terminados' },
  { value: 200, suffix: '+', label: 'Usuarios satisfechos' },
  { value: 24, prefix: '<', suffix: 'h', label: 'Tiempo de respuesta' },
]

export default function Results() {
  return (
    <section id="resultados">
      <StatsCount
        stats={stats}
        title="SEGURIDAD Y TECNOLOGÍA,"
        highlightedTitlePart="HECHAS A TU MEDIDA"
        showDividers={true}
        className=""
      />
    </section>
  )
}
