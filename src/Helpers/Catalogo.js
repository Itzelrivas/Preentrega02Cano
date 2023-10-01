export const productos = [
    {
        producto: 'Vestido de rayas azul con blanco',
        marca: 'Tommy Hilfiger',
        precio: 600,
        codigo: 1,
        imagen: 'https://static.dafiti.com.co/p/tommy-hilfiger-9146-6336921-1-zoom.jpg'
    },
    {
        producto: 'Vestido de blanco con rosa y corte v',
        marca: 'Tommy Hilfiger',
        precio: 650,
        codigo: 2,
        imagen: 'https://static.dafiti.com.br/p/Tommy-Hilfiger-Vestido-Polo-Tommy-Hilfiger-Curto-Listrado-Vermelho-5303-7567135-1-zoom.jpg'
    },
    {
        producto: 'Vestido azul',
        marca: 'Guess',
        precio: 545,
        codigo: 3,
        imagen: 'https://static.dafiti.com.co/p/tommy-hilfiger-7931-809309-1-zoom.jpg'
    },
    {
        producto: 'Vestido negro con patrones',
        marca: 'Michael Kors',
        precio: 970,
        codigo: 4,
        imagen: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201908/16/00151164201975____1__516x640.jpg'
    },
    {
        producto: 'Vestido negro Guess',
        marca: 'Guess',
        precio: 800,
        codigo: 5,
        imagen: 'https://static.dafiti.com.br/p/Tommy-Hilfiger-Vestido-Tommy-Hilfiger-Jillian-Envelope-Dress-Preto-3583-8998182-4-zoom.jpg'
    }
]

export function getProductoByCod (codigo){
    return productos.find((producto) => producto.codigo == codigo)
}
