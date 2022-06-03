import Tema from "./Tema"

interface Postagem{
    id: number
    titulo: string
    texto: string
    data: string
    tema?: Tema | null
}

export default Postagem

/**
 * Postagem{
 *  titulo: "hksaSa"
 *  tema:{ também é um objeto}}
 * 
 * então é um objeto dentro de um objeto
 */