import { Test, TestingModule } from '@nestjs/testing';
import { DoctorProfileUpdateController } from './doctor-profile-update.controller';

describe('DoctorProfileUpdateController', () => {
  let controller: DoctorProfileUpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorProfileUpdateController],
    }).compile();

    controller = module.get<DoctorProfileUpdateController>(DoctorProfileUpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
