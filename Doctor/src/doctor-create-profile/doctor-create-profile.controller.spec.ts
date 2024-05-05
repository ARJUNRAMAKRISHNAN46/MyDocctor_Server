import { Test, TestingModule } from '@nestjs/testing';
import { DoctorCreateProfileController } from './doctor-create-profile.controller';

describe('DoctorCreateProfileController', () => {
  let controller: DoctorCreateProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorCreateProfileController],
    }).compile();

    controller = module.get<DoctorCreateProfileController>(DoctorCreateProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
