import { Test, TestingModule } from '@nestjs/testing';
import { DoctorProfileUpdateService } from './doctor-profile-update.service';

describe('DoctorProfileUpdateService', () => {
  let service: DoctorProfileUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DoctorProfileUpdateService],
    }).compile();

    service = module.get<DoctorProfileUpdateService>(DoctorProfileUpdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
