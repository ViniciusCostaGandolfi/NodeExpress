import autores from "../models/Autor.js";

class AutorController {

    static verAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        });
    }

    static verAutorPorId = (req, res) => {
        const id = req.param.id;

        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({menssage: ` ${err.message} - Id do autor não encontrado.`});
            } else {
                res.status(200).send(autores);
            }
        });
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                res.status(500).send({menssage: `${err.menssage} - Falha ao cadastrar autor!.`});
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    }

    static atualizarAutor = (req, res) => {
        const id = req.param.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err)=> {
            if (err) {
                res.status(500).send({message: `${err.menssage} - Falha ao atualizar o autor!`});
            } else {
                res.status(201).send({message: `Autor atualizado com sucesso!`});
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.param.id;

        autores.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `${err.menssage} - Erro ao excluir o autor!`});
            } else {
                res.status(201).send({message: `O autor foi adicionado com sucesso!`});
            }

        })
    }


}

export default AutorController;