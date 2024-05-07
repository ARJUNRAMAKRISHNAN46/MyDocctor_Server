import { Doctor } from './doctor.entity';

describe('DoctorEntity', () => {
  it('should be defined', () => {
    const mockDoctor = jest.fn();
    expect(mockDoctor).toBeDefined();
  });
});
