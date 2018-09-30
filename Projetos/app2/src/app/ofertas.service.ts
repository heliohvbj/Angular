import {Oferta} from './shared/oferta.model'

export class OfertaServices
{
    public ofertas: Oferta[] = 
    [
        {
            id: 1,
            categoria: "Restaurante",
            titulo: "Super Burger!!",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "Restaurante",
            titulo: "Cozinha Mexicana!",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "Diversao",
            titulo: "Estância das águas!!!",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]
    public getOfertas() : Array<Oferta>
    {       
        return this.ofertas;
    }

    public getOfertasSincrono(): Promise<Oferta[]>
    {
        return new Promise((resolve, reject)=>
        {
            console.log('criação da promise');
            let success = this.ProcessSyncGet();
            if(success)
                resolve(this.ofertas);
            else
                reject({codigo_erro:404, mensagem_erro: "Servidor não encontrado."});
        })
    }

    public getOfertasAssincrono(): Promise<Oferta[]>
    {
        return new Promise((resolve, reject)=>
        {
            console.log('criação da promise');
            let success = this.ProcessSyncGet();
            if(success)
                setTimeout(()=> resolve(this.ofertas),5000);
            else
                reject({codigo_erro:404, mensagem_erro: "Servidor não encontrado."});
        })
        .then((ofertas :Oferta[]) => 
        {
            console.log("Pode fazer operações do primeiro then")
            return ofertas
        }) 
        .then((ofertas :Oferta[]) => 
        {
            console.log("Pode fazer operações do segundo then")
            return ofertas
        })
    }

    public getOfertasAssincronoComAssincrono(): Promise<Oferta[]>
    {
        return new Promise((resolve, reject)=>
        {
            console.log('criação da promise');
            let success = this.ProcessSyncGet();
            if(success)
                setTimeout(()=> resolve(this.ofertas),5000);
            else
                reject({codigo_erro:404, mensagem_erro: "Servidor não encontrado."});
        })
        .then((ofertas1 :Oferta[]) => 
        {
            console.log("Pode fazer operações do primeiro then")
            return ofertas1
        }) 
        .then((ofertas2 :Oferta[]) => 
        {
            console.log("Pode fazer operações do segundo then")
            return new Promise((resolve2, reject2) =>
            {
                setTimeout(()=> resolve2(ofertas2), 3000)
            })
        })
        .then((ofertas3 :Oferta[]) =>
        {
            console.log("Pode fazer operações do terceiro then assíncrono")
            return ofertas3
        })
    }

    private ProcessSyncGet() : boolean{
        return true
    }
}