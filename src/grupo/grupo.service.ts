import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { Grupo } from './entities/grupo.entity';

@Injectable()
export class GrupoService {
  constructor(
    @InjectRepository(Grupo)
    private repositorioGrupo: Repository<Grupo>
  ){}


  /*buscaGrupo() :Promise<Produto[]> {
    return this.repositorioProduto.find({
      select: {

        idProduto: false,
        codigoEan: false,
        descricaoProduto: false,
        //grupo: true,
        quantidade: false,
        preco: false
        
      },
    });
  }*/



  create(createGrupoDto: CreateGrupoDto) {

    const Grup = new Grupo;

    Grup.descricaoGrupo = createGrupoDto.descricaoGrupo;

    return this.repositorioGrupo.save(Grup);
  }

  findAll() {
    return this.repositorioGrupo.findOne;
  }

  findOne(id: number) {
    return `This action returns a #${id} grupo`;
  }

  update(idGrupo: number, updateGrupoDto: UpdateGrupoDto) {
    return `This action updates a #${idGrupo} grupo`;
  }

  remove(id: number) {
    return `This action removes a #${id} grupo`;
  }
}
