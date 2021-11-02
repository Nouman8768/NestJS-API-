import { Test, TestingModule } from '@nestjs/testing';
import { MybooksController } from './mybooks.controller';

describe('MybooksController', () => {
  let controller: MybooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MybooksController],
    }).compile();

    controller = module.get<MybooksController>(MybooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
