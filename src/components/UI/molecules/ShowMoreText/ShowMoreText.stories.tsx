import { Meta, StoryObj } from '@storybook/react'
import { ShowMoreText } from './ShowMoreText.component'

const meta: Meta<typeof ShowMoreText> = {
  title: 'Molecules/Show More Text',
  component: ShowMoreText,
  args: {
    text: 'Este libro podría haber sido escrito por una inteligencia artificial, y no solamente por un humano en un documento de Word. Aunque, en parte, así fue. Con inteligencia artificial podemos escribir ensayos, incluso libros, y también, entre muchas posibilidades, predecir cuántos pacientes llegarán a un hospital con gripe dentro de quince días, o detectar automáticamente una operación fraudulenta con una tarjeta de crédito. ¿Cuáles son los límites de esta tecnología? ¿Cuáles son sus riesgos? ¿Cuál es la mejor manera de aprovecharla? ¿Cómo desarrollar inteligencia artificial responsablemente? En ¿Cómo piensan las máquinas?, Fredi Vivas te invita a sumarte a un viaje fascinante, una aventura literaria que transita entre la realidad y la ficción para demostrarnos que, independientemente del área o disciplina, la inteligencia artificial está revolucionando la vida humana mucho más de lo que creemos o soñamos. Y como no podía ser de otra forma, este es un libro interactivo, que incorpora tecnología en sus páginas, y que propone al lector una experiencia multiplataforma. Apto para cualquiera que tenga como objetivo entender el mundo que se viene y estar a la vanguardia de la revolución tecnológica, ¿Cómo piensan las máquinas? no requiere conocimientos técnicos previos y apuesta por la curiosidad y el interés por el futuro.'
  }
}
export default meta

type Story = StoryObj<typeof ShowMoreText>

export const Default: Story = {}
