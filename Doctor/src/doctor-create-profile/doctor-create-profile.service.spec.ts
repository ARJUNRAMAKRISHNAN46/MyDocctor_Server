import { Test, TestingModule } from '@nestjs/testing';
import { DoctorCreateProfileService } from './doctor-create-profile.service';

describe('DoctorCreateProfileService', () => {
  let service: DoctorCreateProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorCreateProfileService],
    }).compile();

    service = module.get<DoctorCreateProfileService>(DoctorCreateProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
